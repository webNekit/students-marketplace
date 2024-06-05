import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === 'POST'){
        const { userId, postId, category } = req.body;
    }
};