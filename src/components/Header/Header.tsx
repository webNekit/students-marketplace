import Link from "next/link";
import { Navbar } from "../Navbar/Navbar";
import { Button } from "../ui/button";
// kinde import links
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "../UserNav/UserNav";

export async function Header() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user);
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
                        {user ? (
                            <UserNav 
                                email={user.email as string} 
                                name={user.given_name as string}
                                userImage={user.picture ?? `https://avatar.vercel.sh/rauchg/${user.given_name}`}  />
                        ) : (
                            <ul className="flex items-center justify-end gap-2 flex-col sm:flex-row">
                                <li className="inline-flex w-full sm:w-auto">
                                    <Button asChild variant={"outline"} className="w-full sm:w-auto">
                                        <LoginLink>Войти</LoginLink>
                                    </Button>
                                </li>
                                <li className="inline-flex w-full sm:w-auto">
                                    <Button asChild variant={"default"} className="w-full sm:w-auto">
                                        <RegisterLink>Зарегистрироваться</RegisterLink>
                                    </Button>
                                </li>
                            </ul> 
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}