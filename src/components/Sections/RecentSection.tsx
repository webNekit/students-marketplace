import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface iSectionProps {
    children: React.ReactNode;
    title?: string;
    href?: string;
}

export function RecentSection({ children, title, href }: iSectionProps) {
    return (
        <section className="w-full py-5">
            <div className="container mx-auto">
                <div className="w-full flex items-end justify-between">
                    <h2 className="text-gray-50 text-xl md:text-2xl font-medium">{title}</h2>
                    <Link href={`${href}`} className="text-primary uppercase flex items-center gap-2 transition-all hover:gap-4">Все {title} <MoveRight size={18} /></Link>
                </div>
                <div className="w-full pt-7">
                    {children}
                </div>
            </div>
        </section>
    );
}