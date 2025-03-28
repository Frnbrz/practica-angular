import { Post } from '../interfaces/post.interface'

export const posts: Post[] = [
  {
    id: 1,
    title: 'Introduction to Angular',
    text: 'Learn the basics of Angular and how to get started with this powerful framework.',
    imageUrl: 'https://example.com/images/angular-intro.jpg',
    category: 1,
    publicationDate: '2023-01-15',
  },
  {
    id: 2,
    title: 'Top 10 JavaScript Tips',
    text: 'Discover the top 10 tips to improve your JavaScript coding skills.',
    imageUrl: 'https://example.com/images/js-tips.jpg',
    category: 2,
    publicationDate: '2023-02-10',
  },
  {
    id: 3,
    title: 'Understanding TypeScript',
    text: 'A comprehensive guide to understanding and using TypeScript in your projects.',
    imageUrl: 'https://example.com/images/typescript-guide.jpg',
    category: 4,
    publicationDate: '2023-03-05',
  },
  {
    id: 4,
    title: 'Building Responsive Websites',
    text: 'Learn how to create responsive websites using modern CSS techniques.',
    imageUrl: 'https://example.com/images/responsive-websites.jpg',
    category: 3,
    publicationDate: '2023-04-12',
  },
  {
    id: 5,
    title: 'Advanced TypeScript Patterns',
    text: 'Explore advanced patterns and techniques in TypeScript for scalable applications.',
    imageUrl: 'https://example.com/images/advanced-typescript.jpg',
    category: 4,
    publicationDate: '2023-05-20',
  },
  {
    id: 6,
    title: 'JavaScript Frameworks Comparison',
    text: 'A detailed comparison of popular JavaScript frameworks like React, Angular, and Vue.',
    imageUrl: 'https://example.com/images/frameworks-comparison.jpg',
    category: 2,
    publicationDate: '2023-06-15',
  },
]
