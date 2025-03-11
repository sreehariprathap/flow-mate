import DarkToggle from "./DarkToggle";

interface SimpleAppHeaderProps {
    title: string;
    subtitle: string;
}


const SimpleAppHeader = ({ title, subtitle }: SimpleAppHeaderProps) => {
    return (
        <div className="shadow-md px-3 py-1 w-full rounded-xl flex justify-between items-center">
            <div className="h1 text-xl font-semibold  flex flex-col gap-1">
                {title}
                <span className="text-sm font-thin text-slate-800 dark:text-neutral-300">
                    {subtitle}
                </span>
            </div>
            <div>
             <DarkToggle />
            </div>

        </div>
    )
}

export default SimpleAppHeader