// Интерфейс для тега
export interface iTag {
    _id: string;
    slug: {
      current: string;
    };
    name: string;
}

// Интерфейс для изображения
export interface iImage {
    asset: {
      _id: string;
      url: string;
    };
}

// Интерфейс для категории поста
export interface iCategory {
    title: string;
}

// Интерфейс для поста
export interface iPost {
    _id: string; // Убедитесь, что _id включен
    title: string;
    slug: string;
    text: string;
    image: iImage;
    publishedAt: string;
    tags: iTag[];
    categoryName: string; // Это поле получаем через алиас в запросе
}

// Интерфейс для избранного
export interface iFavorite {
    _id: string;
    _createdAt: string;
    postId: iPost;
}

// Пример данных, возвращаемых запросом
export type iFavoritesResponse = iFavorite[];
