"use client"
import { TaskType } from "@/config/appConstants";
import FlowInterface from "@/interface/Flow.interface"
import { CreateFlowNode } from "@/lib/flow/CreateFlowNode";
import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react"
import '@xyflow/react/dist/style.css';
import NodeComponent from "./nodes/NodeComponent";

const nodeTypes ={
    Node: NodeComponent
}
const snapGrid: [number, number] = [12, 12]
const fitViewOptions ={padding:5}
const FlowEditor = ({ flow }: { flow: FlowInterface }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState([
        CreateFlowNode(TaskType.LAUNCH_BROWSER)
    ])
    const [edges, setEdges, onEdgesChange] = useEdgesState([])



    return (
        <main className="h-screen w-full">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                snapGrid={snapGrid}
                snapToGrid={true}
                fitView
                fitViewOptions={fitViewOptions}
            >
                <Controls position="bottom-left" className="bg-background"/>
                <Background
                    gap={24}
                    color="#808080"
                    variant={BackgroundVariant.Dots}
                />
            </ReactFlow>
        </main>
    )
}
export default FlowEditor