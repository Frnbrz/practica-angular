// Define the BlogCategory interface
export interface BlogCategory {
  id: number
  name: string
}

export interface BlogPost {
  title: string
  text: string
  imageUrl: string
  category: BlogCategory
  publicationDate: Date
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Introduction to Angular',
    text: 'Learn the basics of Angular and how to get started with this powerful framework.',
    imageUrl: 'https://example.com/images/angular-intro.jpg',
    category: { id: 1, name: 'Programming' },
    publicationDate: new Date('2023-01-15'),
  },
  {
    title: 'Top 10 JavaScript Tips',
    text: 'Discover the top 10 tips to improve your JavaScript coding skills.',
    imageUrl: 'https://example.com/images/js-tips.jpg',
    category: { id: 2, name: 'JavaScript' },
    publicationDate: new Date('2023-02-10'),
  },
  {
    title: 'Understanding TypeScript',
    text: 'A comprehensive guide to understanding and using TypeScript in your projects.',
    imageUrl: 'https://example.com/images/typescript-guide.jpg',
    category: { id: 1, name: 'Programming' },
    publicationDate: new Date('2023-03-05'),
  },
]
