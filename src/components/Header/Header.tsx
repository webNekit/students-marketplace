import Link from "next/link";
import { Navbar } from "../Navbar/Navbar";
import { Button } from "../ui/button";

export function Header() {
    return (
        <header className="w-full py-4 border-b" id="header">
            <div className="container mx-auto">
                <div className="w-full grid grid-cols-12 gap-4">
                    <div className="flex justify-center md:justify-start col-span-12 md:col-span-4">
                        <Link href={'/'} className="text-2xl text-gray-50 font-semibold">
                            Student<span className="text-primary">Save</span>
                        </Link>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <Navbar />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <ul className="flex items-center justify-end gap-2 flex-col sm:flex-row">
                            <li className="inline-flex w-full sm:w-auto">
                                <Button variant={"outline"} className="w-full sm:w-auto">Войти</Button>
                            </li>
                            <li className="inline-flex w-full sm:w-auto">
                                <Button variant={"default"} className="w-full sm:w-auto">Зарегистрироваться</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}