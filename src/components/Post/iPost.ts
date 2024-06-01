export interface iPost {
    _id: string;
    title: string;
    slug: { current: string };
    text: string;
    publishedAt: string;
    tags: Array<Tag>;
    specifics: Array<Specifics>;
    contents: Array<Contents>;
    previewLink: string;
    downloadLink: string;
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

export interface Specifics {
    _key: string;
    title: string;
}

export interface Contents {
    _key: string;
    text: string;
}