import { useWindow } from "@/hooks/useWindow";
import { defineStore } from "pinia";
import { App } from "vue";

export type Process = {
    mount: () => void
    unmount: () => void
    instance: App<Element>
}

export const useProcessStore = defineStore('process_store', {
    state: () => ({
        processes: [],
        processId: 0
    }),
    getters: {
        // @ts-ignore
        getAllProcesses: (state): Process[] => state.processes,
        getProcessByProcessId: (state) => (id: number): Process => state.processes.filter(e => id === e.instance._component.props['windowState']['value']['processId'])[0]
    },
    actions: {
        createNewProcess(props: {}, slot: any) {
            let process = useWindow(props, slot)
            process.instance._component.props['windowState']['value']['activeZIndex'] = this.processId
            process.instance._component.props['windowState']['value']['processId'] = this.processId ++
            // @ts-ignore
            this.processes.push(process)
            return process
        },
        setProcesses(e: Process[]) {
            // @ts-ignore
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
            const a = this.processes.filter(e => e.instance._component.props['windowState']['value']['activeZIndex'] === x )[0]
            const b = this.processes.filter(e => e.instance._component.props['windowState']['value']['activeZIndex'] === y )[0]

            this.processes[this.processes.indexOf(a)].instance._component.props['windowState']['value']['activeZIndex'] = y
            this.processes[this.processes.indexOf(b)].instance._component.props['windowState']['value']['activeZIndex'] = x
        },
        killProcess(e: Process) {
            e.unmount()
            this.processes.splice(this.processes.indexOf(e), 1)
        },

    }
})
