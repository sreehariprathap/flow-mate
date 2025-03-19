"use client"

import { useReactFlow } from "@xyflow/react"
import React from "react"

const NodeCard = ({ children, nodeId, isSelected }: { children: React.ReactNode, nodeId: string, isSelected: boolean }) => {
    const { getNode, setCenter } = useReactFlow()
    return (
        <div
            onDoubleClick={() => {
                const node = getNode(nodeId);
                if (!node) return;
                const { position, measured } = node;
                if (!position || !measured) return;
                const { width, height } = measured;
                const x = position.x;
                const y = position.y;
                if (x === undefined || y === undefined) return;
                setCenter(x, y, {
                    zoom: 1,
                    duration: 500,
                });
            }}
            className={`w-[32rem] max-w-xl min-w-lg rounded-md shadow-md p-2 hover:shadow-xl 
        transition-all ease-linear flex flex-col gap-2 bg-background cursor-pointer ${isSelected ? 'border-2 border-primary' : 'border border-transparent'}`}
        >
            {children}
        </div>
    )
}
export default NodeCard