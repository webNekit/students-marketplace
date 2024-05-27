interface iProductProps {
    name: string;
    category?: string;
    image?: string;
}

export function ProductCard({ name, category, image } : iProductProps) {
    return (
        <div className="">
            {name}
        </div>
    );
}