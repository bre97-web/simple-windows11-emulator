import { useWindow } from "@/hooks/useWindow";
import { defineStore } from "pinia";
import { App } from "vue";

export type Process = {

    /**
     * Mount process and render a window
     */
    mount: () => void

    /**
     * Kill the process and close the window
     */
    unmount: () => void

    instance: App<Element>
}

export type WindowState = {

    /**
     * ?
     */
    focus: boolean

    /**
     * It is active while mousedown
     */
    active: boolean

    /**
     * Window maximize
     */
    maximize: boolean

    runningInBackground: boolean

    position: {
        x: number
        y: number
    }

    /**
     * z-index
     */
    activeZIndex: number

    /**
     * Unique process id
     */
    processId: number

}

export const useProcessStore = defineStore('process_store', {
    state: () => ({
        processes: [],
        processId: 0
    }),
    getters: {
        getAllProcesses: (state): Process[] => state.processes,
        getAllProcessByRunningInBackground: (state): Process[] => state.processes.filter(e => e.instance._component.props['windowState']['value']['runningInBackground']),
        getProcessByProcessId: (state) => (id: number): Process => state.processes.filter(e => id === e.instance._component.props['windowState']['value']['processId'])[0],
    },
    actions: {
        createNewProcess(props: {}, slot: any) {
            let process = useWindow(props, slot)
            process.instance._component.props['windowState']['value']['activeZIndex'] = this.processId
            process.instance._component.props['windowState']['value']['processId'] = this.processId++
            this.processes.push(process)
            return process
        },
        setProcesses(e: Process[]) {
            this.processes = e
        },
        cleanFocus() {
            this.processes = this.processes.map(e => {
                e.instance._component.props['windowState']['value']['focus'] = false
                return e
            })
        },
        cleanActive() {
            this.processes = this.processes.map(e => {
                e.instance._component.props['windowState']['value']['active'] = false
                return e
            })
        },
        swapZIndex(x: number, y: number) {
            this.processes[this.processes.indexOf(this.processes.filter(e => e.instance._component.props['windowState']['value']['activeZIndex'] === x)[0])].instance._component.props['windowState']['value']['activeZIndex'] = y
            this.processes[this.processes.indexOf(this.processes.filter(e => e.instance._component.props['windowState']['value']['activeZIndex'] === y)[0])].instance._component.props['windowState']['value']['activeZIndex'] = x
        },
        killProcess(e: Process) {
            e.unmount()
            this.processes.splice(this.processes.indexOf(e), 1)
        },
        setRunningInBackground(target: Process, value: boolean) {
            target.instance._component.props['windowState']['value']['runningInBackground'] = value
        },

    }
})
