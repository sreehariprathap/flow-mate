import { TaskParameterType, TaskType } from "@/config/appConstants";
import { GlobeIcon, LucideProps } from "lucide-react";

export const LaunchBrowserTask = {
    type: TaskType.LAUNCH_BROWSER,
    label: 'Launch Browser',
    icon: (props: LucideProps) => <GlobeIcon {...props} />,
    isEntryPoint: true,
    inputs: [{
        name: "Website URL",
        type: TaskParameterType.STRING,
        helpertext: "e.g. https://www.google.com",
        required: true,
        hideHandler: false
    }]
}