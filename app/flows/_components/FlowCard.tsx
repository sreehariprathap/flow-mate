import { Card, CardContent } from "@/components/ui/card";
import { flowStatus } from "@/config/appConstants";
import { Workflow } from "@prisma/client";
import {  FileTextIcon, PenIcon, PlayIcon, Trash2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { Button } from "@/components/ui/button";



const statusColors = {
    [flowStatus.DRAFT]: "bg-yellow-500 text-white",
    [flowStatus.PUBLISHED]: "bg-green-500 text-white",
}

const FlowCard = ({ flow }: { flow: Workflow }) => {
    const isDraft = flow.status === flowStatus.DRAFT;

    return (
        <Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md ease-linear transition-all dark:shadow-primary/30">
            <CardContent className="p-4 flex items-center justify-between h-[100px]">
                <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${statusColors[flow.status as keyof typeof statusColors]}`}>
                    {isDraft ? (
                        <FileTextIcon className={`h-5 w-5 text-white ${statusColors[flowStatus.DRAFT]}`} />
                    ) : (
                        <PlayIcon className={`h-5 w-5 text-white ${statusColors[flowStatus.PUBLISHED]}`} />
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <Link href={`/flows/${flow.id}`}>
                        <p className="text-lg font-bold hover:underline transition-all ease-linear">{flow.name}</p>
                    </Link>
                    <Badge variant={isDraft ? 'outline' : 'default'}>{flow.status}</Badge>
                </div>
                </div>
                <div className="flex items-center justify-start gap-2">
                    <Button variant="outline" size="sm" className="text-sm">
                        <PenIcon/>
                        Edit</Button>
                    <Button variant="destructive" size="sm" className="text-sm">
                        <Trash2Icon/>
                        Delete</Button>
                </div>
                
            </CardContent>
        </Card>
    );
};

export default FlowCard;
