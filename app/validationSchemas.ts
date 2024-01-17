import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "موضوع مسئله الزامی است!").max(255),
  description: z.string().min(1, "توضیحات مسئله الزامی است!").max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "موضوع مسئله الزامی است!").max(255).optional(),
  description: z
    .string()
    .min(1, "توضیحات مسئله الزامی است!")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "اختصاص دادن مسئله الزامی است!")
    .max(255)
    .optional()
    .nullable(),
});
