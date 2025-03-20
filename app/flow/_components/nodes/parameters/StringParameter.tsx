import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ParamProps } from "@/interface/Paramter.interface"
import { useId, useState } from "react"

const StringParameter = ({param, value, updateNodeParamValue}: ParamProps) => {
    const [internalValue, setInternalValue] = useState(value)
    const id = useId()
    return (
        <div className="space-y-1 p-1 w-full">
            <Label htmlFor={id} className="text-xs flex">
                <span className="font-semibold">{param.name}</span>
                {param.required && <span className="text-red-400 ml-1" style={{ color: "red" }}>(required)</span>}
            </Label>
            <Input id={id} value={value} placeholder="Enter value here"
            onChange={(e)=>updateNodeParamValue(e.target.value)}
            onBlur={(e)=>updateNodeParamValue(e.target.value)}
            className="text-xs"
            />
            {param.helpertext && <p className="text-xs px-2 text-muted-foreground">{param.helpertext}</p>}
        </div>
    )
}
export default StringParameter