import React from "react";
import CreateFlowDialogueComponent from "@/app/(dashboard)/flows/_components/CreateFlowDialogueComponent";
import DarkToggle from "./DarkToggle";
import { SignedIn, UserButton } from "@clerk/nextjs";

type ActionType = "CREATE-FLOW" | "EDIT";

interface PageAction {
    type: ActionType;
    // Add more properties here if needed in the future
}

interface SimpleAppHeaderProps {
    title: string;
    subtitle: string;
    pageAction?: PageAction;
}

const RenderPageAction: React.FC<{ action?: PageAction }> = ({ action }) => {
    if (!action) return null;

    switch (action.type) {
        case "CREATE-FLOW":
            return <CreateFlowDialogueComponent />;
        case "EDIT":
            return <div>Edit Action Component</div>;
        default:
            return null;
    }
};

const SimpleAppHeader: React.FC<SimpleAppHeaderProps> = ({
    title,
    subtitle,
    pageAction,
}) => (
    <header className="shadow-md px-3 py-1 w-full rounded-xl flex justify-between items-center">
        <div className="text-xl font-semibold flex flex-col gap-1">
            {title}
            <span className="text-sm font-normal text-slate-800 dark:text-neutral-300">
                {subtitle}
            </span>
        </div>
        <div className="flex gap-2 items-center">
            <RenderPageAction action={pageAction} />
            <DarkToggle />
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </header>
);

export default SimpleAppHeader;