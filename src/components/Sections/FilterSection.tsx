"use client";
import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { MoveVertical } from "lucide-react";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
export function FilterSection() {
    const sortParams = ["asc", "desc"];
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const sort = searchParams.get("sort");
    return (
        <section className="w-full py-7">
            <div className="container mx-auto">
                <div className="w-full pb-4 flex items-center justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors hover:border-primary">
                                <MoveVertical size={20} />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Сортировка</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {/* <DropdownMenuItem><Link href={pathName + "?sort=" + sortParams[1]}>от новых к старым</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href={pathName + "?sort=" + sortParams[0]}>от старых к новым</Link></DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </section>
    );
}