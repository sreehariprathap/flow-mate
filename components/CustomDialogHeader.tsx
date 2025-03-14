"use client";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

interface Props {
    title?: string;
    subTitle?: string;
    icon?: LucideIcon;
    iconClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

function CustomDialogHeader({
    title,
    subTitle,
    icon: Icon,
    iconClassName,
    titleClassName,
    subtitleClassName,
}: Props) {
    return (
        <DialogHeader className="py-6">
            <DialogTitle asChild>
                <div className="flex flex-col items-center gap-2 mb-2">
                    {Icon && <Icon className={`stroke-primary ${iconClassName}`} />}
                    {title && <h1 className={titleClassName}>{title}</h1>}
                    {subTitle && <h2 className={subtitleClassName}>{subTitle}</h2>}
                </div>
            </DialogTitle>
        </DialogHeader>
    );
}

export default CustomDialogHeader;