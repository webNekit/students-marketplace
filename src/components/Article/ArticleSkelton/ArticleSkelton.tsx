import { Skeleton } from "@/components/ui/skeleton";

export function ArticleSkelton(){
    return(
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[1,2,3,4,5,6].map((item, index) => {
                return(
                    <Skeleton key={index} className="w-full h-[384px] rounded-md">
                        <div className="w-full h-full flex p-4">
                            <div className="w-full mt-auto rounded-md bg-white/40">
                                <Skeleton className="w-full h-4" />
                            </div>
                        </div>
                    </Skeleton>
                );
            })}
        </div>
    );
}