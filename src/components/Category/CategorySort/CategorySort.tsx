"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoveVertical } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function CategorySort({ className }: { className?: string }) {
    const searchParams = useSearchParams();
    const currentSort = searchParams.get('sort') ?? 'desc';
    const currentCategory = searchParams.get("category") ?? '';
    return (
        <div className={className}>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors hover:border-primary">
                        <MoveVertical size={20} />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Сортировка</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Link href={`/articles?category=${currentCategory}&sort=desc`}>от новых к старым</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href={`/articles?category=${currentCategory}&sort=asc `}>от старых к новым</Link></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}