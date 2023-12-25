import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "موضوع مسئله الزامی است!").max(255),
  description: z.string().min(1, "توضیحات مسئله الزامی است!"),
});
