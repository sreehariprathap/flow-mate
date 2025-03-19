"Use Client";
import FlowInterface from "@/interface/Flow.interface";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";

const Editor = ({flow}:{flow:FlowInterface}) => {
  return (
    <ReactFlowProvider>
        <div className="h-full w-full overflow-hidden flex flex-col">
            <section className="flex h-full overflow-auto">
                <FlowEditor flow={flow} />
            </section>
        </div>
    </ReactFlowProvider>
  )
}
export default Editor