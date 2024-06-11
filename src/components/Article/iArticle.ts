    export interface iArticle {
        _id: string;
        _createdAt: string;
        title?: string;
        text?: string;
        contents: Array<Contents>;
        categorySlug?: { 
            current: string 
        };
        categoryName?: string;
        image?: {
            asset: {
                _id?: string;
                url?: string
            }
        }
    }

export interface Contents {
    _key: string;
    text?: string;
    title?: string;
    image?: {
        asset: {
            url?: string;
        }
    }
}