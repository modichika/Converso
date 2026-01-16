"use client";

import { zodResolver} from "@hookform/resolvers/zod";
import { useForm} from "react-hook-form";
import * as z from "zod"

import { Button } from "@/components/ui/button"
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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const formSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Companion is required'}),
    subject: z
        .string()
        .min(1, { message: 'Subject is required'}),
    topic: z
        .string()
        .min(1, { message: 'Topic is required'}),
    voice: z
        .string()
        .min(1, { message: 'Voice is required'}),
    style: z
        .string()
        .min(1, { message: 'Style is required'}),
    duration: z.coerce.number()
        .min(1, { message: 'Duration is required'}),
});


const CompanionForm = () => {
        const form = useForm({
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: '',
                subject: '',
                topic: '',
                voice: '',
                style: '',
                duration: 15,
            },
        })

        function onSubmit(data: z.infer<typeof formSchema>) {
            // Do something with the form values.
            console.log(data)
        }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Companion name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the companion name - ex: Calculus King" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the subject - ex: Math" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should this companion teach?</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the topic you want to learn - ex: Derivatives" {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />


                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}


export default CompanionForm
