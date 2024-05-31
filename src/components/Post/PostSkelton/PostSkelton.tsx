import { Skeleton } from "@/components/ui/skeleton"

export function PostSkelton() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                return (
                    <div key={index} className="w-full p-3 border rounded-md">
                        <Skeleton className="w-full h-56 rounded-md" />
                        <div className="w-full pt-4 space-y-4">
                            <Skeleton className="w-full md:w-4/12 h-4 rounded-md" />
                            <Skeleton className="w-full h-4 rounded-md" />
                            <Skeleton className="w-full md:w-6/12 h-4 rounded-md" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}