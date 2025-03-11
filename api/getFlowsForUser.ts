"use server"
import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function getFlowsForUser() {
    const {userId} = await auth()
    if(!userId) {
        throw new Error("User not authenticated")
    }

    // Fetch flows for the user
    return prisma.workflow.findMany({
        where: {
            userId
        },
        orderBy: {
            createdAt: 'asc'
        }
    })
}
