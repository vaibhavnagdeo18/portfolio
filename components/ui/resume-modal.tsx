"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Typewriter } from "@/components/ui/typewriter-text";
import { X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                {
                    from_name: formData.fullName,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: "vaibhavnagdeo@gmail.com",
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );

            setStatus("success");
            setFormData({ fullName: "", email: "", message: "" });
            setTimeout(() => {
                setStatus("idle");
                onClose();
            }, 3000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-zinc-950 border-zinc-800 text-white p-6 rounded-2xl">
                <DialogHeader className="relative">
                    <DialogTitle className="text-center pt-4">
                        <Typewriter
                            text="Please share your details and I'll get back to you shortly."
                            speed={80}
                            loop={false}
                            className="text-[#C3E41D] text-lg font-medium"
                        />
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                        Form to request Vaibhav's resume
                    </DialogDescription>
                </DialogHeader>

                {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-10 space-y-4">
                        <div className="text-5xl">📩</div>
                        <p className="text-[#C3E41D] font-bold text-center">Resume sent to your inbox!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="text-sm font-medium text-zinc-400">
                                Full Name <span className="text-[#C3E41D]">*</span>
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                required
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#C3E41D] transition-all"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-zinc-400">
                                Email Address <span className="text-[#C3E41D]">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#C3E41D] transition-all"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-zinc-400">
                                Message (optional)
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#C3E41D] transition-all min-h-[100px] resize-none"
                                placeholder="Hi Vaibhav, I'd like to connect..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full bg-[#C3E41D] text-black font-bold py-3 rounded-md hover:bg-[#d4f21f] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {status === "sending" ? "Sending..." : "Request Resume"}
                            <Send size={16} />
                        </button>

                        {status === "error" && (
                            <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
                        )}
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
