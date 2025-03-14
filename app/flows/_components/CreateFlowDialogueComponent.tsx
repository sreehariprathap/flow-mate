'use client'
import React, { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import CustomDialogHeader from "@/components/CustomDialogHeader"
import { Cable } from "lucide-react"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createFlowSchema, createFlowSchemaType } from "@/schema/flow"
import { Textarea } from "@/components/ui/textarea"
import { useMutation } from "@tanstack/react-query"
import { createFlow } from "@/api/createFlow"

const CreateFlowDialogueComponent = ({
    triggerText,
}: {
    triggerText?: string
}) => {
    const [open, setOpen] = useState(false)

    const { mutate, isPending } = useMutation({
        mutationFn: createFlow,
        onSuccess: () => {
            // Further success logic here...
        },
        onError: (error) => {
            console.error("Error creating flow:", error)
        },
    })

    const form = useForm<createFlowSchemaType>({
        resolver: zodResolver(createFlowSchema),
        defaultValues: {},
        mode: "onBlur",
    })

    const onSubmit = (data: createFlowSchemaType) => {
        console.log("Submitted data:", data)
        // Further submit logic here...
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>{triggerText ?? "Create flow"}</Button>
            </DialogTrigger>
            <DialogContent>
                <CustomDialogHeader
                    title="Create a new flow"
                    subTitle="Start creating your flow"
                    icon={Cable}
                    iconClassName="w-12 h-12"
                    titleClassName="text-xl font-bold"
                    subtitleClassName="text-sm text-muted-foreground"
                />
                <div className="p-2">
                    <Form {...form}>
                        <form
                            className="space-y-8 w-full"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Name <p className="text-xs text-primary">(required)</p>
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Choose a descriptive and unique name
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Description
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea className="resize-none" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            write a short description about the flow
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">Submit</Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CreateFlowDialogueComponent