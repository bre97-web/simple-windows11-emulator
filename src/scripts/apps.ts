import Settings from '@/components/exe/settings/Settings.vue'
import Manager from '@/components/exe/manager/Manager.vue'
import Notepad from '@/components/exe/notepad/Notepad.vue'
import Camera from '@/components/exe/camera/Camera.vue'
import { useProcessStore } from '@/store/ProcessStore'

export type WindowAppDescription = {
    label: string
    icon: string
    slot: any
    title: string
}

const useApp = (label: string, icon: string, slot: any, title: string): WindowAppDescription => ({
    label,
    icon,
    slot,
    title
})

const appsList = [
    useApp('Settings', 'settings', Settings, 'Settings Demo'),
    useApp('Task Manager', 'man', Manager, 'Task Manager Demo'),
    useApp('NotePad', 'note', Notepad, 'Notepad Demo'),
    useApp('Camera', 'camera', Camera, 'Camera Demo'),
]

export function getAppList() {
    return appsList
}

export function createNewWindow(slot: any, title: string, icon = 'bug_report') {
    const process = useProcessStore()
    const window = process.createNewProcess({
        title,
        icon
    }, slot)
    window.mount()
}