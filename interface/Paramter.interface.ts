import { TaskParameters } from "./Task.interface";

export interface ParamProps {
    param: TaskParameters
    value?: string
    updateNodeParamValue: (newValue: string) => void;
}