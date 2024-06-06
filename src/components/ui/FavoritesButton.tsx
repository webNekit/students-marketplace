"use client";
import { Button } from "./button";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface iButtonProps {
    userId?: string;
    postId?: string;
    categoryId?: string;
}

interface FormValues {
    userId: string;
    postId: string;
    categoryId: string;
}

export function FavoritesButton({ userId, postId, categoryId }: iButtonProps) {
    const { handleSubmit, formState: { isSubmitting } } = useForm();
    const onSubmit = async () => {
        const data = { userId, postId, categoryId };

        const res = await fetch("/api/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            toast("Упс... Ошибка!");
            return;
        }

        toast("Добавлено в избранное!");
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Button
                    type="submit"
                    variant="outline"
                    className="flex gap-2 items-center justify-center"
                    disabled={isSubmitting}
                >
                    <Heart size={20} />
                    {isSubmitting ? "Загрузка..." : "Добавить в избранное"}
                </Button>
            </form>
        </>
    );
}