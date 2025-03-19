import { TaskType } from '@/config/appConstants';
import { AppNode } from '@/interface/AppNode.interface';
export const CreateFlowNode = (
    nodeType: TaskType,
    position?: { x: number, y: number },

): AppNode => {
    return {
        id: crypto.randomUUID(),
        data:{
            type: nodeType,
            inputs:{}
        },
        position: position ?? { x: 0, y: 0 },
    };
}