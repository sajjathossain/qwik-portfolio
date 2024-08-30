import { z } from "zod";

const blogSchema = z.object({
  description: z.string().optional(),
  pubDate: z.date(),
  image: z.string(),
  tags: z.string().array(),
  draft: z.boolean().optional()
});

export type TBlogSchema = z.infer<typeof blogSchema>;

const documentHeadSchema = z.object({
  title: z.string(),
  meta: z.string().optional(),
  image: z.string().optional(),
  tags: z.string().array().optional(),
}).merge(blogSchema);

export type TDocumentHeadSchema = z.infer<typeof documentHeadSchema>;
