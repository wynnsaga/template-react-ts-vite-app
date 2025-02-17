export interface PostMetadata {
    title: string;
    notice?: string;
    image: string;
    date: Date;
    categories: string[];
    tags: string[];
    draft?: boolean;
    pin?: boolean;
}

export interface PostHeading {
    level: number;
    text: string;
}

export interface Post {
    slug: string;
    path: string;
    metadata: PostMetadata;
    headings: PostHeading[];
    body: string;
}
