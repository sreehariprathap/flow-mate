"Use Client";
import FlowInterface from "@/interface/Flow.interface";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";
import SimpleAppHeader from "@/components/simpleAppHeader";

const Editor = ({ flow }: { flow: FlowInterface }) => {
  return (
    <ReactFlowProvider>
      <div className="h-full w-full overflow-hidden flex flex-col">
        <div className="fixed top-0 left-0 w-full z-10 p-5">
          <SimpleAppHeader
            title="Editor"
            subtitle="edit your flow"
            isBackButton={true}
            pageAction={{ type: "SAVE-FLOW" }} 
          />
        </div>
        <section className="flex h-full overflow-auto">
          <FlowEditor flow={flow} />
        </section>
      </div>
    </ReactFlowProvider>
  )
}
export default Editor