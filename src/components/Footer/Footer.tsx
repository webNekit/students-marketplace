import Link from "next/link";
import { CategoryFooter } from "../Category/CategoryFooter/CategoryFooter";
import { Suspense } from "react";

export function Footer() {
    const date = new Date();
    const currentDate = date.getFullYear();
    return (
        <footer className="w-full py-10 border-t" id="footer">
            <div className="container mx-auto space-y-7">
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="w-full md:w-3/12 space-y-5">
                        <Link href={'/'} className="text-2xl text-gray-50 font-semibold">
                            Student<span className="text-primary">Save</span>
                        </Link>
                        <p className="text-gray-400">Наша платформа предлагает обширную коллекцию инструментов, библиотек, шаблонов и учебных материалов, чтобы помочь разработчикам всех уровней создавать высококачественные веб-приложения.</p>
                    </div>
                    <div className="w-full md:w-9/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        <div className="w-full space-y-5">
                            <h3 className="text-gray-50 text-lg font-medium">Основные разделы</h3>
                            <ul className="w-full space-y-3">
                                <li className="w-full">
                                    <Link href={'/design'} className="hover:underline">Макеты</Link>
                                </li>
                                <li className="w-full">
                                    <Link href={'/template'} className="hover:underline">Шаблоны</Link>
                                </li>
                                <li className="w-full">
                                    <Link href={'/libs'} className="hover:underline">Библиотеки</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full space-y-5">
                            <h3 className="text-gray-50 text-lg font-medium">Статьи</h3>
                            <Suspense fallback={"Загрузка..."}>
                                <CategoryFooter />
                            </Suspense>
                        </div>
                        <div className="w-full space-y-5">
                            <h3 className="text-gray-50 text-lg font-medium">Дополнительно</h3>
                            <ul className="w-full space-y-3">
                                <li className="w-full">
                                    <Link href={'/about'} className="hover:underline">О проекте</Link>
                                </li>
                                <li className="w-full">
                                    <Link href={'/authors'} className="hover:underline">Авторы</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between gap-2 flex-col md:flex-row">
                    <p className="text-sm text-gray-500">&copy; {currentDate} StudentSave</p>
                    <Link href={'https://t.me/@nekitmochalov007'} target="_blank" className="text-sm text-gray-500 hover:underline hover:text-white">Разработчик: Мочалов Никита</Link>
                </div>
            </div>
        </footer>
    );
}