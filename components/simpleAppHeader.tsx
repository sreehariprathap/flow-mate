"use client"
import React from "react";
import CreateFlowDialogueComponent from "@/app/(dashboard)/flows/_components/CreateFlowDialogueComponent";
import DarkToggle from "./DarkToggle";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { PageAction, SimpleAppHeaderProps } from "@/interface/Navigation.interface";
import { Button } from "./ui/button";
import { ChevronLeft, SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";


const RenderPageAction: React.FC<{ action?: PageAction }> = ({ action }) => {
    if (!action) return null;

    switch (action.type) {
        case "CREATE-FLOW":
            return <CreateFlowDialogueComponent />;
        case "EDIT":
            return <div>Edit Action Component</div>;
        case "SAVE-FLOW":
            return <Button className="flex gap-2 items-center"> <SaveIcon />Save</Button>;
        default:
            return null;
    }
};

const SimpleAppHeader: React.FC<SimpleAppHeaderProps> = ({
    title,
    subtitle,
    pageAction,
    isBackButton,
    isLanding
}) => {
    const router = useRouter();
    const { theme } = useTheme()
    console.log(theme)
    return (
        <header className="shadow-md px-3 py-1 w-full rounded-xl flex justify-between items-center bg-background ">
            <div className="flex gap-6 items-center">
                {isBackButton && (
                    <ChevronLeft size={32} onClick={() => router.back()} />
                )}
                {isLanding && <Image src={theme === "light" ? "/app-logo-2.png" : "/app-logo-3.png"} width={55} height={200} alt={"logo"}  />}
                <div className="text-xl font-semibold flex flex-col gap-1">
                    {title && (
                        <>
                            <span>{title}</span>
                            <span className="text-sm font-normal text-slate-800 dark:text-neutral-300">
                                {subtitle}
                            </span>
                        </>
                    )}
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <RenderPageAction action={pageAction} />
                <DarkToggle />
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
    );
}

export default SimpleAppHeader;