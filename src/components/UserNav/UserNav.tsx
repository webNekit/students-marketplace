import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";

interface iUserProps {
    email?: string;
    name?: string;
    userImage?: string;
}

export function UserNav({ email, name, userImage } : iUserProps){
    return(
        <div className="w-full flex items-center justify-end">
            <DropdownMenu> 
                <DropdownMenuTrigger asChild>
                    <Button variant={'ghost'} className="w-10 h-10 rounded-full">
                        <Avatar>
                            <AvatarImage src={userImage} alt="Изображение профиля" />
                            <AvatarFallback>{name?.slice(0, 3)}</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2">
                    <DropdownMenuLabel>
                        <div className="w-full flex flex-col">
                            <p className="font-semibold text-white">{name}</p>
                            <p className="font-medium text-sm text-gray-500">{email}</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <Link href={'/profile'}>Мой профиль</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={'/favorites'}>Избранное</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <LogoutLink>Выйти</LogoutLink>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}