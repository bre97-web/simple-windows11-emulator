import { ProcessState } from "@/hooks/useProcessState"
import { createSlice } from "@reduxjs/toolkit"
import React from "react"

/**
 * WindowWorkspaceGroupProvider.tsx
 * 
 * 此文件内部维护了一个名为processStates的数组。
 * 通过此渲染函数向外公开所有的WindowWorkspaceProvider对象的state和setState。
 * 
 * 请确保processStates内部的数据对最新，且不存在（或短时间内不存在）无效数据。
 * 为了确保processStates内部的数据是有效的，请确保：
 *     1. 当组件的state更新时，立即调用updateStateByIdFromProcessStates方法
 *     2. 当组件被卸载时，立即调用removeStateByIdFromProcessStates方法
 *     3. 当组件创建时，立即调用pushStateToProcessStates方法
 */

export type WorkspaceProcessState = {
    state: ProcessState
    setState: (value: React.SetStateAction<ProcessState>) => void
}

export const WorkspaceSlice = createSlice({
    name: 'workspace',
    initialState: {
        processStates: [] as WorkspaceProcessState[]
    },
    reducers: {
        /**
         * 推送一个目标元素到数组。若数组中存在目标元素则立即抛出异常。
         */
        pushStateToProcessStates: (s, e: {
            payload: WorkspaceProcessState
        }) => {
            for(let i = 0; i < s.processStates.length; i ++) {
                if(s.processStates[i].state.processId === e.payload.state.processId) {
                    throw new Error("The process has been pushed in processStates Check your processId of state.")
                }
            }
            s.processStates = [...s.processStates, e.payload]
        },

        /**
         * 根据id查询目标元素是否存在，仅当目标元素存在时执行setState元素更新。
         * 请通过回调函数传递state参数，这将确保更新时的参数为最新的。
         */
        updateStateByIdFromProcessStates: (s, e: {
            payload: {
                id: number,
                state: React.SetStateAction<ProcessState>
            }
        }) => {
            for(let i = 0; i < s.processStates.length; i ++) {
                if(s.processStates[i].state.processId === e.payload.id) {
                    s.processStates[i].setState(e.payload.state)
                }
            }
        },
        removeStateByIdFromProcessStates: (s, e: {
            payload: {
                id: number
            }
        }) => {
            s.processStates = s.processStates.filter(p => p.state.processId !== e.payload.id)
            console.log('remove', s.processStates)
            // for(let i = 0; i < s.processStates.length; i ++) {
            //     if(s.processStates[i].state.processId === e.payload.id) {
                    
            //         s.processStates.splice(i, 1)
            //         break
            //     }
            // }
        },
    }
})

export const {
    pushStateToProcessStates,
    updateStateByIdFromProcessStates,
    removeStateByIdFromProcessStates
} = WorkspaceSlice.actions
