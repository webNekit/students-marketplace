import Link from "next/link";

const Links = [
    { label: 'Макеты', href: 'design' },
    { label: 'Шаблоны', href: 'template' },
    { label: 'Библиотеки', href: 'libs' },
];

export function Navbar() {
    return (
        <nav className="w-full">
            <menu className="w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-5">
                <li className="inline-flex">
                    <Link href={"/"} className="p-2 text-gray-400 transition-colors rounded-md hover:text-white hover:bg-white/5">Главная</Link>
                </li>
                {Links.map((link, index) => {
                    return (
                        <li key={index} className="inline-flex">
                            <Link href={link.href} className="p-2 text-gray-400 transition-colors rounded-md hover:text-white hover:bg-white/5">{link.label}</Link>
                        </li>
                    );
                })}
            </menu>
        </nav>
    );
}