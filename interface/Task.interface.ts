import { TaskParameterType } from "@/config/appConstants";

export interface TaskParameters {
    name: string;
    type: TaskParameterType;
    helpertext?: string;
    required?: boolean;
    hideHandler?: boolean;
    value?:string;
    [key: string]: any;
}