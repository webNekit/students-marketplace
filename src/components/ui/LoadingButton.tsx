"use client";
import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spinner } from "./spinner";

interface iButtonProps {
    href?: string;
    children: ReactNode;
}

export function LoadingButton({ href, children } : iButtonProps){
    const [ loading, setLoading ] = useState(false);
    const handleClick = () => {
        setLoading(true);
    }
    return(
        <Button className="w-full mt-4" variant={'default'} asChild>
            <Link onClick={handleClick} href={href as string}>
                {loading ? <Spinner /> : children}
            </Link>
        </Button> 
    );
}