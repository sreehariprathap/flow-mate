import { NodeProps } from "@xyflow/react"
import { memo } from "react"
import NodeCard from "./NodeCard"
import { AppNodeData } from "@/interface/AppNode.interface";
import NodeHeader from "./NodeHeader";


const NodeComponent = memo((props: NodeProps) => {
    const nodeData = props.data as AppNodeData
  return (
    // @ts-ignore: temporarily ignoring children type error on NodeCard
    <NodeCard nodeId={props.id} isSelected={props.selected}>
        <NodeHeader taskType={nodeData.type} />
    </NodeCard>
  );
});

NodeComponent.displayName = "NodeComponent"

export default NodeComponent