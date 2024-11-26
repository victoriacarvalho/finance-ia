import { z } from "zod";

// Expressão regular para garantir que o mês esteja no formato "MM" (01 a 12)
const monthRegex = /^(0[1-9]|1[0-2])$/;

export const generateAiReportSchema = z.object({
  month: z.string().refine((value) => monthRegex.test(value), {
    message: "O mês deve estar no formato MM (01 a 12)",
  }),
});

export type GenerateAiReportSchema = z.infer<typeof generateAiReportSchema>;

