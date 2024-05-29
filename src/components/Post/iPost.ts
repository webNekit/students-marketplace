export interface iPost {
    title: string;
    slug: { current: string };
    text: string;
    publishedAt: string
    tags: Array<Tag>;
    _id: string;
}

export interface Tag {
    name: string;
    slug: { current: string };
    _id: string;
}