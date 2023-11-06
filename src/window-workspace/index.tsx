
/**
 * Available Apps
 */
import { Settings } from '@/window-workspace/components/settings/Settings'
import { Notepad } from './components/notepad/Notepad'
import { ProcessManager } from './components/manager/ProcessManager'

export const AvailableAppList = [
    {
        title: 'Settings',
        element: <Settings></Settings>,
    },
    {
        title: 'Notepad',
        element: <Notepad></Notepad>,
    },
    {
        title: 'Process Manager',
        element: <ProcessManager></ProcessManager>,
    },
]

