"use client"

import { TaskParameters } from "@/interface/Task.interface"
import StringParameter from "./parameters/StringParameter"
import { useReactFlow } from "@xyflow/react"
import { AppNode } from "@/interface/AppNode.interface"
import { useCallback } from "react"

const NodeParamField = ({ param, nodeId }: { param: TaskParameters; nodeId: string }) => {
    const { updateNodeData, getNode } = useReactFlow()
    const node = getNode(nodeId) as AppNode;
    const value = node?.data?.inputs?.[param.name]

    const updateNodeParamValue = useCallback((newValue: string) => {
        updateNodeData(nodeId, {
            inputs: {
                ...node.data.inputs,
                [param.name]: newValue
            }
        })
    }, [updateNodeData, nodeId, node?.data.inputs, param.name])

    switch (param.type) {
        case "STRING":
            return <StringParameter param={param}
                value={value}
                updateNodeParamValue={updateNodeParamValue}
            />
        default:
            return (
                <div className="w-full">
                    <p className="text-sm font-muted-foreground">Not implemented</p>
                </div>

            )
    }
}
export default NodeParamField