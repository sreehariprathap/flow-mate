import { TaskParameters } from "@/interface/Task.interface"
import { cn } from "@/lib/utils"
import { Handle, Position } from "@xyflow/react"
import NodeParamField from "./NodeParamField"

const NodeInput = ({input, nodeId}:{input: TaskParameters, nodeId: string}) => {
  return (
    <div className="flex justify-start relative bg-secondary w-full p-3">
        <NodeParamField nodeId={nodeId} param={input} />
        {input.hideHandler &&
        (
            <Handle
              position={Position.Left}
              id={input.name}
              type="target"
              className={cn("!bg-muted-foreground !border-2 !-left-2 !w-4 !h-4")}
              />
        )
        }
    </div>
  )
}
export default NodeInput