import { getAllFavorites } from "@/services/FavoritesService/FavoritePost";
import { iFavoritesResponse } from "@/services/FavoritesService/iFavorites";
import { FavoriteCard } from "../FavoritesCard/FavoritesCard";


interface iUserParams {
    user: string;
}

export async function FavoritesItem({ user}: iUserParams) {
    const favorites: iFavoritesResponse = await getAllFavorites({ userId: user});
    console.log(favorites);
    return (
        <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {favorites.length > 0 ? favorites?.map((favorite) => {
                    return (    
                        <FavoriteCard key={favorite._id} post={favorite.postId} category={favorite.postId.categoryName}  />
                    );
                }) : <p className="sm:col-span-2 md:col-span-4 text-wite text-xl text-destructive">Этот раздел редактируется. Приносим свои извинения!</p>}
            </div>
        </>
    );
}