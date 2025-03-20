"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TaskType } from "@/config/appConstants"
import { TaskRegistry } from "@/lib/flow/task/registry"
import { GripVertical } from "lucide-react"

const NodeHeader = ({taskType}:{taskType: TaskType}) => {
    const task = TaskRegistry[taskType]
  return (
    <div className="flex items-center gap-4 p-1">
        <task.icon className="w-6 h-6"/>
        <div className="flex justify-between items-center w-full gap-2">
            <p className="text-sm font-semibold">{task.label}</p>
            <div className="flex items-center gap-1">
                {task.isEntryPoint && <Badge>Entry Point</Badge>}
                <Button size="sm" variant="ghost" className="drag-handle cursor-grab">
                    <GripVertical className="w-4 h-4"/>
                </Button>
            </div>
        </div>
    </div>
  )
}
export default NodeHeader