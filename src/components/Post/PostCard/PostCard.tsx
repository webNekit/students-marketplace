import { iPost } from "../iPost";

interface iPostProps {
    post: iPost;
} 

export function PostCard({post} : iPostProps) {
    return (
        <>
            <h1 className="text-white text-xl">{post.title}</h1>
            <p className="text-white/50">{post.text}</p>
        </>
    );
}