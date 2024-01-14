export interface Post {
    headline: string;
    description?: string;
    author: string;
    uid: string;
    genre?: string;
    keywords?: string[];
    articleBody: string;
    sponsor?: string;
    likes: number;
    views: number;
    thumbnail?: string;
    featureThumbnail?: string;
    createdAt: Date;
  }