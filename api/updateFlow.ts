import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

"use server";


const prisma = new PrismaClient();

export async function updateFlow(id: string, data: { name?: string; description?: string }) {
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
        throw new Error("Not authorized to update this flow");
    }

    const updatedFlow = await prisma.workflow.update({
        where: { id },
        data,
    });

    redirect('/flows');
    
    return updatedFlow;
}