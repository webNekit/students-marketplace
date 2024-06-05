import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest){
    const { isAuthenticated } = getKindeServerSession();
    if(!(await isAuthenticated())){
        return NextResponse.redirect(new URL('/', request.url));
    }
}

export const config = {
    matcher: ["/profile/:path*", "/favorites/:path*"],
}