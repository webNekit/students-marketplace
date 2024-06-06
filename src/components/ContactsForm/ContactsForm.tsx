import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function ContactsForm() {
    return (
        <>
            <div className="max-w-3xl mx-auto space-y-5">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="w-full space-y-2">
                        <Label htmlFor="email">Введите email</Label>
                        <Input id="email" type={'email'} placeholder={'user@example.com'} />
                    </div>
                    <div className="w-full space-y-2">
                        <Label htmlFor="email">Введите имя</Label>
                        <Input id="email" type={'email'} placeholder={'Андрей Ершов'} />
                    </div>
                    <div className="space-y-2 col-span-1 md:col-span-2">
                        <Label htmlFor="email">Ваше сообщение</Label>
                        <Textarea placeholder="Хочу стать автором! Что для этого нужно?" />
                    </div>
                </div>
                <Button variant={'default'} className="w-full sm:w-auto">Отправить</Button>
            </div>

        </>
    );
}