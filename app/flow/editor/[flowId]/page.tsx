import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

const page = async ({ params }: { params: { flowId: string } }) => {
    const flowId = params.flowId
    if (!flowId) {
        throw new Error("Flow ID is undefined");
    }
    const { userId } = await auth()
    const flow = await prisma.workflow.findUnique({
        where: { id: flowId },
    });
    if (!flow) {
        throw new Error("Flow not found");
    }
    if (flow.userId !== userId) {
        throw new Error("Not authorized to view this flow");
    }

    return (
        <pre className="h-screen">{JSON.stringify({ flowId, userId })}</pre>
    )
}
export default page