"use server";

import { auth } from '@clerk/nextjs/server';
import { createFlowSchema, createFlowSchemaType } from './../schema/flow';
import { PrismaClient } from '@prisma/client';
import { flowStatus } from '@/config/appConstants';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export async function createFlow(form: createFlowSchemaType) {
    
    const {success, data} = createFlowSchema.safeParse(form);

    if (!success) {
        throw new Error("Invalid form data");
    }

    const { userId } = await auth();
    if (!userId) {
        throw new Error("Unauthenticated");
    }

    const result = await prisma.workflow.create({
        data: {
            userId,
            ...data,
            status: flowStatus.DRAFT,
            definition: "TODO", // Update as needed.
        },
    });

    if(!result) {
        throw new Error("Failed to create flow");
    }

    redirect('/flows/edit/' + result.id);

    return result;
}