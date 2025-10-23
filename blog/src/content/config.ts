import { defineCollection, z } from "astro:content";

// blogの型定義
// const blogCollection = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     date: z.date(),
//     description: z.string(),
//     tags: z.array(z.string()).optional(),
//   }),
// });

// export const collections = {
//   blog: blogCollection,
// };
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};