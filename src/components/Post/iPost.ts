export interface iPost {
    _id: string;
    title: string;
    slug: { current: string };
    text: string;
    publishedAt: string;
    tags: Array<Tag>;
    categoryName?: string;
    image?: {
        asset: {
            _id: string;
            url: string;
        }
    }
}

export interface Tag {
    name: string;
    slug: { current: string };
    _id: string;
}