import { z } from "zod";

export const blogSchema = z.object({
  description: z.string().optional(),
  pubDate: z.date(),
  image: z.string(),
  tags: z.string().array(),
  draft: z.boolean().optional()
});

export type TBlogSchema = z.infer<typeof blogSchema>;

export const frontmatterSchema = z.object({
  title: z.string(),
  meta: z.string().optional(),
  image: z.string().optional(),
  pubDate: z.string().or(z.date()),
  tags: z.string().array().optional(),
})

export type TFrontmatterSchema = z.infer<typeof frontmatterSchema>;

const documentHeadSchema = frontmatterSchema.merge(blogSchema);

export type TDocumentHeadSchema = z.infer<typeof documentHeadSchema>;
