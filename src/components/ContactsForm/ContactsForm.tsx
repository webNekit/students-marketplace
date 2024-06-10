"use client";
import React, { useState } from 'react';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from 'sonner';

export function ContactsForm() {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                }),
            });

            if (!res.ok) {
                throw new Error('Ошибка отправки сообщения');
            }else{
                toast("Сообщение успешно отправлено!")
            }
            setName('');
            setEmail('');
            setMessage('');

            // Optional: Add success handling logic here

        } catch (error) {
            console.error('Ошибка отправки сообщения:', error);
            // Optional: Add error handling logic here
        } finally {
            setIsSubmitting(false); // Установить состояние отправки в false после завершения
        }
    }
    return (
        <div className="max-w-3xl mx-auto space-y-5">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="w-full space-y-2">
                        <Label htmlFor="email">Введите email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="user@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-full space-y-2">
                        <Label htmlFor="name">Введите имя</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Андрей Ершов"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2 col-span-1 md:col-span-2">
                        <Label htmlFor="message">Ваше сообщение</Label>
                        <Textarea
                            id="message"
                            placeholder="Хочу стать автором! Что для этого нужно?"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <Button type="submit" variant="default" className="w-full sm:w-auto">
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </Button>
            </form>
        </div>
    );
}
