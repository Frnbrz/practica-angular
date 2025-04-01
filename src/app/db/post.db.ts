import { Post } from '../interfaces/post.interface'

export const posts: Post[] = [
  {
    id: 1,
    title: 'Introduction to Angular',
    text: 'Learn the basics of Angular and how to get started with this powerful framework. Angular is a platform for building mobile and desktop web applications. It provides a way to structure your application and build reusable components. This guide will walk you through the essential concepts and help you set up your first Angular project.',
    imageUrl:
      'https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm1jq1pmo3inn73mw30bj.png',
    category: { id: 1, name: 'Angular' },
    publicationDate: '2023-01-15',
  },
  {
    id: 2,
    title: 'Top 10 JavaScript Tips',
    text: 'Discover the top 10 tips to improve your JavaScript coding skills. JavaScript is a versatile language, and mastering it requires understanding its quirks and best practices. This article covers tips such as avoiding global variables, using strict mode, leveraging modern ES6+ features, and optimizing performance for better user experiences.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8qk3Qv5XsskZW6BMI1aeivnzCt0G5fWxQ&s',
    category: { id: 2, name: 'JavaScript' },
    publicationDate: '2023-02-10',
  },
  {
    id: 3,
    title: 'Understanding TypeScript',
    text: 'A comprehensive guide to understanding and using TypeScript in your projects. TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors during development. This guide explains the benefits of TypeScript, how to set it up, and how to use advanced features like generics, decorators, and type inference.',
    imageUrl: 'https://img-c.udemycdn.com/course/750x422/947098_02ec_2.jpg',
    category: { id: 4, name: 'TypeScript' },
    publicationDate: '2023-03-05',
  },
  {
    id: 4,
    title: 'Building Responsive Websites',
    text: 'Learn how to create responsive websites using modern CSS techniques. Responsive design ensures that your website looks great on all devices, from desktops to smartphones. This article covers CSS Grid, Flexbox, media queries, and other techniques to build layouts that adapt seamlessly to different screen sizes.',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:2000/1*qF8LfAwUhl57g9T0BVvVdg.jpeg',
    category: { id: 3, name: 'CSS' },
    publicationDate: '2023-04-12',
  },
  {
    id: 5,
    title: 'Advanced TypeScript Patterns',
    text: 'Explore advanced patterns and techniques in TypeScript for scalable applications. This article dives into advanced concepts like utility types, conditional types, mapped types, and how to use them to create robust and maintainable codebases. Learn how to leverage TypeScript to its full potential in large-scale projects.',
    imageUrl:
      'https://repository-images.githubusercontent.com/545397149/91a3b1e0-a4ec-478e-9342-825eb69faea4',
    category: { id: 4, name: 'TypeScript' },
    publicationDate: '2023-05-20',
  },
  {
    id: 6,
    title: 'JavaScript Frameworks Comparison',
    text: 'A detailed comparison of popular JavaScript frameworks like React, Angular, and Vue. Each framework has its strengths and weaknesses, and this article provides an in-depth analysis of their features, performance, community support, and use cases to help you choose the right one for your project.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbS60LCmeVWQaKUM-qDtyUE8zwvtQKTZ0dZA&s',
    category: { id: 2, name: 'JavaScript' },
    publicationDate: '2023-06-15',
  },
  {
    id: 7,
    title: 'Mastering CSS Animations',
    text: 'CSS animations can bring life to your web applications. This guide covers everything from basic transitions to complex keyframe animations. Learn how to create smooth, performant animations that enhance user experience without compromising performance.',
    imageUrl: 'https://i.ytimg.com/vi/2D32OZ7S3ls/maxresdefault.jpg',
    category: { id: 3, name: 'CSS' },
    publicationDate: '2023-07-10',
  },
  {
    id: 8,
    title: 'Node.js Performance Optimization',
    text: 'Node.js is a powerful runtime for building server-side applications. This article explores techniques to optimize Node.js performance, including event loop management, asynchronous programming, and memory profiling. Learn how to build fast and efficient Node.js applications.',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:758/1*Rm5MQnXBIIWvu3V-wlEHCA.png',
    category: { id: 5, name: 'Node.js' },
    publicationDate: '2023-08-01',
  },
  {
    id: 9,
    title: 'Introduction to WebAssembly',
    text: 'WebAssembly (Wasm) is a binary instruction format that allows high-performance applications to run on the web. This article introduces WebAssembly, its use cases, and how to integrate it into your web projects. Learn how to unlock new possibilities with WebAssembly.',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1016/1*fXdFlcYYGAPJtviyingAdA.png',
    category: { id: 6, name: 'WebAssembly' },
    publicationDate: '2023-09-15',
  },
  {
    id: 10,
    title: 'Getting Started with GraphQL',
    text: 'GraphQL is a query language for APIs that provides a more efficient and flexible alternative to REST. This guide explains the basics of GraphQL, how to set up a GraphQL server, and how to query data using GraphQL. Learn how to build modern APIs with GraphQL.',
    imageUrl: 'https://graphql.org/img/logo.svg',
    category: { id: 7, name: 'GraphQL' },
    publicationDate: '2023-10-05',
  },
  {
    id: 11,
    title: 'Introduction to Docker',
    text: 'Learn how to containerize your applications using Docker. This guide covers the basics of Docker, creating Dockerfiles, and managing containers.',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1400/1*y6CvfE6WUgoIdT8Mp0Ev_g.png',
    category: { id: 8, name: 'Docker' },
    publicationDate: '2023-10-15',
  },
  {
    id: 12,
    title: 'Kubernetes for Beginners',
    text: 'An introduction to Kubernetes, the popular container orchestration platform. Learn how to deploy, scale, and manage containerized applications.',
    imageUrl:
      'https://i.ytimg.com/vi/TRebQVK_eo8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDEq-su1H_mwHpiwUJ84USsRZ1dYw',
    category: { id: 8, name: 'Docker' },
    publicationDate: '2023-10-20',
  },
  {
    id: 13,
    title: 'Introduction to Angular',
    text: 'Learn the basics of Angular and how to get started with this powerful framework. Angular is a platform for building mobile and desktop web applications. It provides a way to structure your application and build reusable components. This guide will walk you through the essential concepts and help you set up your first Angular project.',
    imageUrl:
      'https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm1jq1pmo3inn73mw30bj.png',
    category: { id: 1, name: 'Angular' },
    publicationDate: '2023-01-15',
  },
  {
    id: 14,
    title: 'Top 10 JavaScript Tips',
    text: 'Discover the top 10 tips to improve your JavaScript coding skills. JavaScript is a versatile language, and mastering it requires understanding its quirks and best practices. This article covers tips such as avoiding global variables, using strict mode, leveraging modern ES6+ features, and optimizing performance for better user experiences.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8qk3Qv5XsskZW6BMI1aeivnzCt0G5fWxQ&s',
    category: { id: 2, name: 'JavaScript' },
    publicationDate: '2023-02-10',
  },
  {
    id: 15,
    title: 'Understanding TypeScript',
    text: 'A comprehensive guide to understanding and using TypeScript in your projects. TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors during development. This guide explains the benefits of TypeScript, how to set it up, and how to use advanced features like generics, decorators, and type inference.',
    imageUrl: 'https://img-c.udemycdn.com/course/750x422/947098_02ec_2.jpg',
    category: { id: 4, name: 'TypeScript' },
    publicationDate: '2023-03-05',
  },
  {
    id: 16,
    title: 'Building Responsive Websites',
    text: 'Learn how to create responsive websites using modern CSS techniques. Responsive design ensures that your website looks great on all devices, from desktops to smartphones. This article covers CSS Grid, Flexbox, media queries, and other techniques to build layouts that adapt seamlessly to different screen sizes.',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:2000/1*qF8LfAwUhl57g9T0BVvVdg.jpeg',
    category: { id: 3, name: 'CSS' },
    publicationDate: '2023-04-12',
  },
  {
    id: 17,
    title: 'Advanced TypeScript Patterns',
    text: 'Explore advanced patterns and techniques in TypeScript for scalable applications. This article dives into advanced concepts like utility types, conditional types, mapped types, and how to use them to create robust and maintainable codebases. Learn how to leverage TypeScript to its full potential in large-scale projects.',
    imageUrl:
      'https://repository-images.githubusercontent.com/545397149/91a3b1e0-a4ec-478e-9342-825eb69faea4',
    category: { id: 4, name: 'TypeScript' },
    publicationDate: '2023-05-20',
  },
  {
    id: 18,
    title: 'JavaScript Frameworks Comparison',
    text: 'A detailed comparison of popular JavaScript frameworks like React, Angular, and Vue. Each framework has its strengths and weaknesses, and this article provides an in-depth analysis of their features, performance, community support, and use cases to help you choose the right one for your project.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbS60LCmeVWQaKUM-qDtyUE8zwvtQKTZ0dZA&s',
    category: { id: 2, name: 'JavaScript' },
    publicationDate: '2023-06-15',
  },
  {
    id: 19,
    title: 'Mastering CSS Animations',
    text: 'CSS animations can bring life to your web applications. This guide covers everything from basic transitions to complex keyframe animations. Learn how to create smooth, performant animations that enhance user experience without compromising performance.',
    imageUrl: 'https://i.ytimg.com/vi/2D32OZ7S3ls/maxresdefault.jpg',
    category: { id: 3, name: 'CSS' },
    publicationDate: '2023-07-10',
  },
  {
    id: 20,
    title: 'Node.js Performance Optimization',
    text: 'Node.js is a powerful runtime for building server-side applications. This article explores techniques to optimize Node.js performance, including event loop management, asynchronous programming, and memory profiling. Learn how to build fast and efficient Node.js applications.',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:758/1*Rm5MQnXBIIWvu3V-wlEHCA.png',
    category: { id: 5, name: 'Node.js' },
    publicationDate: '2023-08-01',
  },
  {
    id: 21,
    title: 'Introduction to WebAssembly',
    text: 'WebAssembly (Wasm) is a binary instruction format that allows high-performance applications to run on the web. This article introduces WebAssembly, its use cases, and how to integrate it into your web projects. Learn how to unlock new possibilities with WebAssembly.',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1016/1*fXdFlcYYGAPJtviyingAdA.png',
    category: { id: 6, name: 'WebAssembly' },
    publicationDate: '2023-09-15',
  },
  {
    id: 22,
    title: 'Getting Started with GraphQL',
    text: 'GraphQL is a query language for APIs that provides a more efficient and flexible alternative to REST. This guide explains the basics of GraphQL, how to set up a GraphQL server, and how to query data using GraphQL. Learn how to build modern APIs with GraphQL.',
    imageUrl: 'https://graphql.org/img/logo.svg',
    category: { id: 7, name: 'GraphQL' },
    publicationDate: '2023-10-05',
  },
  {
    id: 23,
    title: 'Introduction to Docker',
    text: 'Learn how to containerize your applications using Docker. This guide covers the basics of Docker, creating Dockerfiles, and managing containers.',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1400/1*y6CvfE6WUgoIdT8Mp0Ev_g.png',
    category: { id: 8, name: 'Docker' },
    publicationDate: '2023-10-15',
  },
  {
    id: 24,
    title: 'Kubernetes for Beginners',
    text: 'An introduction to Kubernetes, the popular container orchestration platform. Learn how to deploy, scale, and manage containerized applications.',
    imageUrl:
      'https://i.ytimg.com/vi/TRebQVK_eo8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDEq-su1H_mwHpiwUJ84USsRZ1dYw',
    category: { id: 8, name: 'Docker' },
    publicationDate: '2023-10-20',
  },
]
