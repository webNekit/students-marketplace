import { client } from "../../../../sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    const { userId, postId, categoryId } = data;
  
    if (!userId || !postId || !categoryId) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
  
    try {
      const newFavorite = await client.create({
        _type: "favorites",
        userId,
        categoryId: {
          _type: "reference",
          _ref: categoryId,
        },
        postId: {
          _type: "reference",
          _ref: postId,
        },
      });
  
      return NextResponse.json(
        { message: "Favorite added successfully", favorite: newFavorite },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to add favorite", error },
        { status: 500 }
      );
    }
  }