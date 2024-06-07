"use client";
import { useState } from 'react';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function ContactsForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setIsSuccess(false);

        try {
            const res = await fetch('/api/telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name, message }),
            });

            const data = await res.json();

            if (res.ok) {
                setIsSuccess(true);
                setEmail('');
                setName('');
                setMessage('');
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch (error) {
            setError('Failed to send message');
        } finally {
            setIsLoading(false);
        }
    };

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
                <Button type="submit" variant="default" className="w-full sm:w-auto" disabled={isLoading}>
                    {isLoading ? 'Отправка...' : 'Отправить'}
                </Button>
                {isSuccess && <p className="text-green-500">Сообщение успешно отправлено!</p>}
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
}
