import Image from "next/image";
import { CalendarDays, MoveRight } from "lucide-react";
import Link from "next/link";

export async function ArticleCard() {
    return (
        <div className="w-full h-96 md:h-[420px] relative rounded-md">
            <div className="absolute z-10 top-0 left-0 right-0 bottom-0 w-full h-full p-4 flex">
                <div className="w-full mt-auto p-4 rounded-md border bg-card">
                    <div className="flex pb-4">
                        <span className="text-white/60 text-xs flex items-end gap-1"><CalendarDays size={16}/> 12.04.2023</span>
                    </div>
                    <div className="w-full space-y-1">
                        <Link href={''} className="inline-block group">
                            <h3 className="text-white text-lg font-semibold transition-colors group-hover:text-primary"><MoveRight size={17} className="inline" /> Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
                        </Link>
                        <p className="text-gray-400 text-sm pr-0 md:pr-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eaque?</p>
                    </div>
                </div>
            </div>
            <Image fill src={'https://habrastorage.org/getpro/habr/upload_files/182/1b1/ee4/1821b1ee48dc9e6f6c15fab2de03ce85.png'} alt="Изображение" className="w-full h-full rounded-md object-cover object-center" />
        </div>
    );
}