import { Post } from '../interfaces/post.interface'

export const posts: Post[] = [
  {
    id: 1,
    title: 'Introduction to Angular',
    text: 'Learn the basics of Angular and how to get started with this powerful framework.',
    imageUrl:
      'https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm1jq1pmo3inn73mw30bj.png',
    category: 1,
    publicationDate: '2023-01-15',
  },
  {
    id: 2,
    title: 'Top 10 JavaScript Tips',
    text: 'Discover the top 10 tips to improve your JavaScript coding skills.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8qk3Qv5XsskZW6BMI1aeivnzCt0G5fWxQ&s',
    category: 2,
    publicationDate: '2023-02-10',
  },
  {
    id: 3,
    title: 'Understanding TypeScript',
    text: 'A comprehensive guide to understanding and using TypeScript in your projects.',
    imageUrl: 'https://img-c.udemycdn.com/course/750x422/947098_02ec_2.jpg',
    category: 4,
    publicationDate: '2023-03-05',
  },
  {
    id: 4,
    title: 'Building Responsive Websites',
    text: 'Learn how to create responsive websites using modern CSS techniques.',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:2000/1*qF8LfAwUhl57g9T0BVvVdg.jpeg',
    category: 3,
    publicationDate: '2023-04-12',
  },
  {
    id: 5,
    title: 'Advanced TypeScript Patterns',
    text: 'Explore advanced patterns and techniques in TypeScript for scalable applications.',
    imageUrl: 'https://repository-images.githubusercontent.com/545397149/91a3b1e0-a4ec-478e-9342-825eb69faea4',
    category: 4,
    publicationDate: '2023-05-20',
  },
  {
    id: 6,
    title: 'JavaScript Frameworks Comparison',
    text: 'A detailed comparison of popular JavaScript frameworks like React, Angular, and Vue.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbS60LCmeVWQaKUM-qDtyUE8zwvtQKTZ0dZA&s',
    category: 2,
    publicationDate: '2023-06-15',
  },
]
