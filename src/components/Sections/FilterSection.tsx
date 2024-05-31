"use client";
import React, { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { MoveVertical } from "lucide-react";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";

interface iFilterProps {
    children: React.ReactNode;
    onSortChange: (sort: string) => void;
}

export function FilterSection({ children, onSortChange } : iFilterProps) {
    const router = useRouter();
    const selectVariant = ["asc", "desc"];
    const [selectedSort, setSelectedSort] = useState(selectVariant[1]);

    useEffect(() => {
        router.push(
            `?sort=${selectedSort}`, {
                scroll: false
            });
    }, [selectedSort, router, onSortChange]);

    const handleSortChange = (sort: string) => {
        setSelectedSort(sort);
    };

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
                            <DropdownMenuItem onClick={() => handleSortChange("desc")}>от новых к старым</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSortChange("asc")}>от старых к новым</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </section>
    );
}