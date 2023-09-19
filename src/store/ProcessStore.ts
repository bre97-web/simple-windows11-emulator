
/**
 * Ienity everyone process using unique index
 * 
 * Focus window with current index
 */

import { useWindow } from "@/hooks/useWindow";
import { defineStore } from "pinia";
import { App } from "vue";

type Process = {
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
        getAllProcesses: (state): Process[] => state.processes,
    },
    actions: {
        createNewProcess(props: {}, slot: any) {
            let process = useWindow(props, slot)
            process.instance._component.props['windowState']['value']['activeZIndex'] = this.processId ++
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
            const a = this.processes.filter(e => e.instance._component.props['windowState']['value']['activeZIndex'] === x )[0]
            const b = this.processes.filter(e => e.instance._component.props['windowState']['value']['activeZIndex'] === y )[0]

            this.processes[this.processes.indexOf(a)].instance._component.props['windowState']['value']['activeZIndex'] = y
            this.processes[this.processes.indexOf(b)].instance._component.props['windowState']['value']['activeZIndex'] = x
        }
    }
})
