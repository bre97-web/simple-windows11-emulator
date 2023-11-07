
/**
 * Available Apps
 */
import { Settings } from '@/window-workspace/components/settings/Settings'
import { Notepad } from './components/notepad/Notepad'
import { ProcessManager } from './components/manager/ProcessManager'
import { Camera } from './components/camera/Camera'

import {
    Settings20Regular,
    Notepad20Regular,
    ControlButton20Regular,
    Camera20Regular
} from "@fluentui/react-icons"

export const AvailableAppList = [
    {
        title: 'Settings',
        element: <Settings></Settings>,
        icon: <Settings20Regular></Settings20Regular>
    },
    {
        title: 'Notepad',
        element: <Notepad></Notepad>,
        icon: <Notepad20Regular></Notepad20Regular>
    },
    {
        title: 'Process Manager',
        element: <ProcessManager></ProcessManager>,
        icon: <ControlButton20Regular></ControlButton20Regular>
    },
    {
        title: 'Camera',
        element: <Camera></Camera>,
        icon: <Camera20Regular></Camera20Regular>
    },
]

