import { flowStatus } from "@/config/appConstants";
import { z } from "zod";

export const createFlowSchema = z.object({
    name: z.string().max(50),
    description: z.string().max(80).optional(),
    status: z.nativeEnum(flowStatus).default(flowStatus.DRAFT),
});

export type createFlowSchemaType = z.infer<typeof createFlowSchema>;