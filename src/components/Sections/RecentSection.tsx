import React from "react";
import Link from "next/link";

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
                    <Link href={`${href}`} className="text-primary uppercase hover:underline">Все {title}</Link>
                </div>
                <div className="w-full pt-7">
                    {children}
                </div>
            </div>
        </section>
    );
}