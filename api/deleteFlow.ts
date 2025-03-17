"use server";

import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export async function deleteFlow(id: string) {
    const { userId } = await auth();
    if (!userId) {
        throw new Error("Unauthenticated");
    }

    const flow = await prisma.workflow.findUnique({
        where: { id },
    });
    if (!flow) {
        throw new Error("Flow not found");
    }
    if (flow.userId !== userId) {
        throw new Error("Not authorized to delete this flow");
    }

    const result = await prisma.workflow.delete({
        where: { id },
    });

    redirect('/flows');
    
    return result;
}
