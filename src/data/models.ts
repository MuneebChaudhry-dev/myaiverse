import { Model, Category, PricingPlan } from '@/types/models';

// This will contain the full model data from your JSON
export const allModels: Model[] = [
  // Add all models from your JSON here
];

export const categories = {
  byTask: [
    { id: 'chat', name: 'Chat', models: [] },
    { id: 'image', name: 'Image Generation', models: [] },
    { id: 'video', name: 'Video Generation', models: [] },
    { id: 'agents', name: 'AI Agents', models: [] },
    { id: 'reasoning', name: 'Reasoning Models', models: [] },
    { id: 'code', name: 'Code Programming', models: [] },
  ],
  byProvider: [
    { id: 'openai', name: 'OpenAI', models: [] },
    { id: 'anthropic', name: 'Anthropic', models: [] },
    { id: 'google', name: 'Google', models: [] },
    { id: 'meta', name: 'Meta', models: [] },
    { id: 'alibaba', name: 'Alibaba', models: [] },
    { id: 'xai', name: 'xAI', models: [] },
    { id: 'deepseek', name: 'DeepSeek', models: [] },
    { id: 'mistral', name: 'Mistral', models: [] },
  ],
};

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: { monthly: 11.9, annual: 5.8 },
    credits: 144000,
    features: ['Core models', 'Essential access'],
    models: ['GPT-4o mini', 'Claude 3.5 Haiku', 'Gemini 2.5 Flash'],
  },
  {
    name: 'Pro',
    price: { monthly: 19.9, annual: 10.8 },
    credits: 240000,
    features: ['All models', 'Perfect for daily use'],
    models: ['GPT-5', 'Claude Opus 4.1', 'OpenAI o3', 'Sora Image'],
    highlighted: true,
  },
  {
    name: 'Unlimited',
    price: { monthly: 49.9, annual: 25.0 },
    credits: 624000,
    features: ['Unlimited access', 'Maximum power'],
    models: ['All models', 'Google Veo 3', 'Veo3-i2v'],
  },
];
