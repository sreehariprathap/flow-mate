import { NodeProps } from "@xyflow/react"
// Import memo from React to optimize functional components by memoizing them
import { memo } from "react"
import NodeCard from "./NodeCard"
import { AppNodeData } from "@/interface/AppNode.interface";
import NodeHeader from "./NodeHeader";
import { TaskRegistry } from "@/lib/flow/task/registry";
import NodeInput from "./NodeInput";
import NodeInputs from "./NodeInputs";

// Create a memoized NodeComponent that only re-renders when its props change
const NodeComponent = memo((props: NodeProps) => {
  // Cast props.data to AppNodeData for proper type-checking and easier access
  const nodeData = props.data as AppNodeData

  // Dynamically get the task function/definition from TaskRegistry based on nodeData type
  const task = TaskRegistry[nodeData.type]

  return (
    // Wrap the content in NodeCard. The @ts-ignore comment temporarily suppresses the children type error.
    // It indicates an intentional override during type checking.
    // @ts-ignore: temporarily ignoring children type error on NodeCard
    <NodeCard nodeId={props.id} isSelected={props.selected}>
      {/* Render the NodeHeader component passing the nodeData type as a prop */}
      <NodeHeader taskType={nodeData.type} />
      <NodeInputs>
        {/* Map over the task inputs and render the appropriate input component */
        task.inputs.map((input, index) => (
          <NodeInput
            nodeId={props.id}
            key={index}
            input={input}
          />
        ))}
      </NodeInputs>
    </NodeCard>
  );
});

// Assign a display name to the component for improved debugging experience in React DevTools
NodeComponent.displayName = "NodeComponent"

// Export the memoized NodeComponent as the default export
export default NodeComponent