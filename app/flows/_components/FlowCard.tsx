'use client'
import { Card, CardContent } from "@/components/ui/card";
import { flowStatus } from "@/config/appConstants";
import { Workflow } from "@prisma/client";
import { FileTextIcon, MoreVerticalIcon, PenIcon, PlayIcon, TrashIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import TooltipWrapper from "@/components/TooltipWrapper";
import { useState } from "react";
import DeleteFlowDialogue from "./DeleteFlowDialogue";
import { deleteFlow } from "@/api/deleteFlow";

const statusColors: Record<string, string> = {
    [flowStatus.DRAFT]: "bg-yellow-500 text-white",
    [flowStatus.PUBLISHED]: "bg-green-500 text-white",
};

interface FlowCardProps {
    flow: Workflow;
}

const FlowCard: React.FC<FlowCardProps> = ({ flow }) => {
    const isDraft = flow.status === flowStatus.DRAFT;

    const handleDelete = () => {
        deleteFlow(flow.id);
    };

    return (
        <Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md ease-linear transition-all dark:shadow-primary/30">
            <CardContent className="p-4 flex items-center justify-between h-[100px]">
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${statusColors[flow.status]}`}>
                        {isDraft ? (
                            <FileTextIcon className="h-5 w-5 text-white" />
                        ) : (
                            <PlayIcon className="h-5 w-5 text-white" />
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/flows/${flow.id}`}>
                            <p className="text-lg font-bold hover:underline transition-all ease-linear">
                                {flow.name}
                            </p>
                        </Link>
                        <Badge variant={isDraft ? "outline" : "default"}>{flow.status}</Badge>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="text-sm">
                        <PenIcon />
                        Edit
                    </Button>
                    <WorkflowActions onDelete={handleDelete} />
                </div>
            </CardContent>
        </Card>
    );
};

interface WorkflowActionsProps {
    onDelete: () => void;
}

const WorkflowActions: React.FC<WorkflowActionsProps> = ({ onDelete }) => {
    const [isDialogueOpen, setDialogueOpen] = useState(false);

    const toggleDialogue = () => setDialogueOpen(prev => !prev);

    return (
        <>
            <DeleteFlowDialogue open={isDialogueOpen} setOpen={setDialogueOpen} onDelete={onDelete} />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                        <TooltipWrapper content="more actions">
                            <MoreVerticalIcon size={18} />
                        </TooltipWrapper>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="text-destructive flex items-center gap-2"
                        onSelect={toggleDialogue}
                    >
                        <TrashIcon size={16} /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default FlowCard;
