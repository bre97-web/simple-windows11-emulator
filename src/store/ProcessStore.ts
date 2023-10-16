import { useProcessState } from "@/hooks/useProcessState";
import { Process, useWindow } from "@/hooks/useWindow";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProcessStore = defineStore('process_store', {
    state: () => ({
        processes: [],
    }),
    getters: {
        getAllProcesses: (state): Process[] => state.processes,
        getAllProcessByRunningInBackground: (state): Process[] => state.processes.filter(e => e.getProcessStateInstance().process.runningInBackground),
        getAllProcessByMinimize: (state): Process[] => (state.processes as Process[]).filter(e => e.getProcessStateInstance().accessibility.minimize),
        getProcessByProcessId: (state) => (id: number): Process => state.processes.filter(e => id === e.getProcessStateInstance().process.processId)[0],
    },
    actions: {
        createNewProcess({title , icon = 'bug_report'}: {
            title: string,
            icon?: string
        }, slot: any) {
            const processState = ref(useProcessState(
                {
                    info: {
                        title: title,
                        icon: icon,
                    },
                },
            ))

            const updateWidthAndHeight = () => {
                const windowRef: HTMLElement = process.instance._container.children.item(0) as HTMLElement
                if(windowRef.style.width.includes('%') || windowRef.style.height.includes('%')) {
                    return 
                }
                processState.value.window.size.width = parseInt(windowRef.style.width)
                processState.value.window.size.height = parseInt(windowRef.style.height)
            }

            const process = useWindow(() => processState.value, {
                onClose: async () => {
                    const addHiddenClass = () => new Promise<void>(resolve => {
                        process.instance._container.children.item(0).classList.remove('open-window')
                        process.instance._container.children.item(0).classList.add('hidden-window')
                        setTimeout(() => {
                            resolve()
                        }, 150)
                    })
                    await addHiddenClass()
                    this.killProcessByProcessId(processState.value.process.processId)
                    process.unmount()
                },
                onMaximize: () => {                 
                    processState.value.accessibility.maximize = !processState.value.accessibility.maximize                    
                },
                onChangeWindowSize: () => updateWidthAndHeight(),
                onMinimize: () => {
                    updateWidthAndHeight()
                    processState.value.accessibility.minimize = true
                },
                onFocus: () => {
                    processState.value.accessibility.focus = true
                },
                onUnfocus: () => {
                    updateWidthAndHeight()
                    processState.value.accessibility.focus = false
                },
                onActive: () => {
                    processState.value.accessibility.active = true
                },
                onInactive: () => {
                    processState.value.accessibility.active = false
                },
                onFullscreen: () => {
                    processState.value.accessibility.maximize = true
                    processState.value.accessibility.fullscreen = true
                },
                onUnFullscreen: () => {
                    processState.value.accessibility.maximize = false
                    processState.value.accessibility.fullscreen = false
                },
                onGragwindow: (e: MouseEvent) => {
                    if(processState.value.accessibility.maximize) return false

                    const windowRef: HTMLElement = process.instance._container.children.item(0) as HTMLElement
                    
                    // 计算鼠标距离弹出框内的位置
                    const position = {
                        x: e.clientX - windowRef.offsetLeft,
                        y: e.clientY - windowRef.offsetTop
                    }
                    
                    document.onmousemove = (e: MouseEvent) => {
                        const currentDisPostion = {
                            x: 0,
                            y: 0
                        }
        
                        // 弹出框dialog距离窗口左上角的水平和纵向距离
                        currentDisPostion.x = e.clientX - position.x
                        currentDisPostion.y = e.clientY - position.y
        
                        // if (currentDisPostion.x < 0) {
                        //     currentDisPostion.x = 0
                        // } else if (currentDisPostion.x > document.documentElement.clientWidth - windowRef.offsetWidth) {
                        //     currentDisPostion.x = document.documentElement.clientWidth - windowRef.offsetWidth
                        // }
        
                        // if(currentDialogDisY < 0) {
                        //   currentDialogDisY = 0
                        // } else if (currentDialogDisY > document.documentElement.clientHeight - windowRef.offsetHeight) {
                        //   currentDialogDisY = document.documentElement.clientHeight - windowRef.offsetHeight
                        // }
        
                        processState.value.window.position.x = currentDisPostion.x
                        processState.value.window.position.y = currentDisPostion.y
        
                    }
        
                    document.onmouseup = () => {
                        document.onmousemove = null
                        document.onmouseup = null
                    }
        
                    return false
                }
            }, slot)
            

            
            this.processes.push(process)
            return process
        },
        killAllProcesses() {
            (this.processes as Process[]).map(e => e.instance.unmount())
            this.processes = []
        },
        cleanFocus() {
            this.processes = this.processes.map(e => {
                e.getProcessStateInstance().accessibility.focus = false
                return e
            })
        },
        cleanActive() {
            this.processes = this.processes.map(e => {
                e.getProcessStateInstance().accessibility.active = false
                return e
            })
        },
        swapZIndex(x: number, y: number) {
            if(x === y) return
            if(this.processes.length <= 1) return 
            const target = {
                x: (this.processes as Process[]).filter(e => e.getProcessStateInstance().window.info.activeZIndex === x)[0],
                y: (this.processes as Process[]).filter(e => e.getProcessStateInstance().window.info.activeZIndex === y)[0]
            }
            target.x.getProcessStateInstance().window.info.activeZIndex = y
            target.y.getProcessStateInstance().window.info.activeZIndex = x
        },
        setTopZIndex(target: Process) {
            if(this.processes.length <= 1) return
            const arr = Object.assign([], this.processes)
            const sorted = (arr as Process[]).sort((x, y) => y.getProcessStateInstance().window.info.activeZIndex - x.getProcessStateInstance().window.info.activeZIndex)

            const x = sorted.filter(e => e === target)[0]
            const y = sorted[0]
            const temp = x.getProcessStateInstance().window.info.activeZIndex
            x.getProcessStateInstance().window.info.activeZIndex = y.getProcessStateInstance().window.info.activeZIndex
            y.getProcessStateInstance().window.info.activeZIndex = temp
            
        },
        killProcessByProcessId(processId: number) {
            if(this.processes.length === 0) return 
            const target = (this.processes as Process[]).filter(e => processId === e.getProcessStateInstance().process.processId)[0]
            target.instance.unmount()
            this.processes.splice(this.processes.indexOf(target), 1)
        },
        setRunningInBackground(target: Process, value: boolean) {
            target.getProcessStateInstance().process.runningInBackground = value
        },
        setMinimize(target: Process, value: boolean) {
            target.getProcessStateInstance().accessibility.minimize = value
        },
        setAllProcessMinimize() {
            (this.processes as Process[]).map(e => e.getProcessStateInstance().accessibility.minimize = true)
        }
    }
})
