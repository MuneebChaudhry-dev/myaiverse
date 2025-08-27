import { z } from 'zod';

// Search form schema
export const searchSchema = z.object({
  query: z
    .string()
    .min(1, 'Search query is required')
    .max(500, 'Query too long'),
  category: z.enum(['image', 'chat', 'video', 'agents']),
  tools: z.array(z.string()).optional(),
});

// Model selection schema
export const modelSelectionSchema = z.object({
  modelId: z.string().min(1, 'Model selection is required'),
  parameters: z
    .object({
      temperature: z.number().min(0).max(2).default(0.7),
      maxTokens: z.number().min(1).max(4000).default(1000),
      topP: z.number().min(0).max(1).default(1),
    })
    .optional(),
});

// User preferences schema
export const userPreferencesSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']).default('dark'),
  defaultModel: z.string().optional(),
  savedPrompts: z.array(z.string()).default([]),
  autoSave: z.boolean().default(true),
});

export type SearchFormData = z.infer<typeof searchSchema>;
export type ModelSelectionData = z.infer<typeof modelSelectionSchema>;
export type UserPreferencesData = z.infer<typeof userPreferencesSchema>;
