import { Model, Category, PricingPlan } from '@/types/models';

// Helper function to get local image path
const getLocalImagePath = (imageUrl: string): string => {
  // Extract filename from the URL and map to local path
  const filename = imageUrl.split('/').pop();

  // Map the image URLs to your local files
  const imageMap: Record<string, string> = {
    '4111.png': '/tools-icons/openai.png',
    '4336.png': '/tools-icons/anthropic.png',
    '4110.png': '/tools-icons/googleai.svg',
    '4222.png': '/tools-icons/grok.png',
    '4225.png': '/tools-icons/deepseek.png',
    '4229.png': '/tools-icons/alibaba.png',
    '4331.png': '/tools-icons/meta.png',
    '4330.png': '/tools-icons/mistral.png',
    '4367.png': '/tools-icons/microsoft.png',
    '4334.png': '/tools-icons/moonshot.png',
    '4332.png': '/tools-icons/minimax.png',
    '6010.png': '/tools-icons/tiktok.png',
    '4228.png': '/tools-icons/runway.png',
    '4221.png': '/tools-icons/luma.png',
    '4119.png': '/tools-icons/ideogram.png',
    '4116.png': '/tools-icons/perplexity.png',
    // Add more mappings as needed
  };

  return imageMap[filename || ''] || '/tools-icons/openai.png'; // Default fallback
};

export const allModels: Model[] = [
  // OpenAI Models
  {
    model_name: 'GPT-5',
    developer: 'OpenAI',
    description:
      "OpenAI's general-purpose model with enhanced reasoning, shorter context length, and stricter grammar checks.",
    image_url: '/tools-icons/openai-dark.svg',
    tags: ['OpenAI', 'Image and Video Recognition', 'Mathematical Logic'],
    status: 'NEW',
    category: ['chat', 'reasoning'],
    provider: 'openai',
  },
  {
    model_name: 'GPT-5 mini',
    developer: 'OpenAI',
    description:
      "OpenAI's cost-efficient GPT-5 variant that delivers high performance with lower latency and cost.",
    image_url: '/tools-icons/openai-light.svg',
    tags: ['OpenAI', 'Image and Video Recognition', 'Fast Response'],
    status: 'NEW',
    category: ['chat'],
    provider: 'openai',
  },
  {
    model_name: 'GPT-5 nano',
    developer: 'OpenAI',
    description:
      "OpenAI's ultra-light and ultra-fast model, delivers strong capabilities at minimal cost.",
    image_url: '/tools-icons/openai-light.svg',
    tags: ['OpenAI', 'Image and Video Recognition', 'Fast Response'],
    status: 'NEW',
    category: ['chat'],
    provider: 'openai',
  },
  {
    model_name: 'o3',
    developer: 'OpenAI',
    description:
      "OpenAI's reasoning model that excels in reasoning, coding, and math.",
    image_url: '/tools-icons/openai.png',
    tags: ['OpenAI', 'Reasoning Model', 'Code Programming'],
    status: 'NEW',
    category: ['reasoning', 'code'],
    provider: 'openai',
  },
  {
    model_name: 'GPT-4o',
    developer: 'OpenAI',
    description:
      'A well-rounded and classic OpenAI model with strong multimodal understanding.',
    image_url: '/tools-icons/openai.png',
    tags: ['OpenAI', 'Image and Video Recognition', 'Web Search'],
    status: null,
    category: ['chat'],
    provider: 'openai',
  },
  {
    model_name: 'GPT-4o mini',
    developer: 'OpenAI',
    description: "OpenAI's most cost-effective and fast-responding model.",
    image_url: '/tools-icons/openai.png',
    tags: ['OpenAI', 'Image and Video Recognition', 'Fast Response'],
    status: null,
    category: ['chat'],
    provider: 'openai',
  },

  // Anthropic Models
  {
    model_name: 'Claude Opus 4.1',
    developer: 'Anthropic',
    description:
      "Anthropic's latest hybrid model, supports long-running agent workflows and persistent execution of complex tasks.",
    image_url: '/tools-icons/anthropic-dark.svg',
    tags: ['Hybrid Reasoning Model', 'Anthropic', 'Mathematical Logic'],
    status: 'NEW',
    category: ['chat', 'reasoning'],
    provider: 'anthropic',
  },
  {
    model_name: 'Claude Sonnet 4',
    developer: 'Anthropic',
    description:
      "Anthropic's streamlined hybrid model, autonomously navigates codebases, balancing performance and efficiency.",
    image_url: '/tools-icons/anthropic-light.svg',
    tags: ['Hybrid Reasoning Model', 'Anthropic', 'Code Programming'],
    status: null,
    category: ['chat', 'code'],
    provider: 'anthropic',
  },
  {
    model_name: 'Claude Opus 4',
    developer: 'Anthropic',
    description:
      "Anthropic's latest hybrid model, supports long-running agent workflows and persistent execution of complex tasks.",
    image_url: '/tools-icons/anthropic.png',
    tags: ['Hybrid Reasoning Model', 'Anthropic', 'Mathematical Logic'],
    status: null,
    category: ['chat', 'reasoning'],
    provider: 'anthropic',
  },
  {
    model_name: 'Claude 3.7 Sonnet',
    developer: 'Anthropic',
    description:
      "Anthropic's hybrid model that autonomously decides when reasoning is needed, with outstanding coding abilities.",
    image_url: '/tools-icons/claude.png',
    tags: ['Hybrid Reasoning Model', 'Anthropic', 'Code Programming'],
    status: null,
    category: ['chat', 'code'],
    provider: 'anthropic',
  },
  {
    model_name: 'Claude 3.5 Haiku',
    developer: 'Anthropic',
    description:
      "Anthropic's lightweight and fast model, excels at code programming.",
    image_url: '/tools-icons/claude.png',
    tags: ['Anthropic', 'Code Programming', 'Web Search'],
    status: null,
    category: ['chat', 'code'],
    provider: 'anthropic',
  },

  // Google Models
  {
    model_name: 'Gemini 2.5 Pro',
    developer: 'Google',
    description:
      "Google's latest reasoning model, great at programming and science tasks.",
    image_url: '/tools-icons/googleai.svg',
    tags: ['Reasoning Model', 'Google', 'Code Programming'],
    status: null,
    category: ['chat', 'reasoning', 'code'],
    provider: 'google',
  },
  {
    model_name: 'Gemini 2.5 Flash',
    developer: 'Google',
    description:
      "A fast version of Google's latest reasoning model, excels at mathematics and coding with quick responses.",
    image_url: '/tools-icons/gemini.png',
    tags: ['Reasoning Model', 'Google', 'Fast Response'],
    status: null,
    category: ['chat'],
    provider: 'google',
  },
  {
    model_name: 'Veo 3',
    developer: 'Google',
    description:
      "Google's latest text-to-video model with integrated audio effects—premium quality among models.",
    image_url: '/tools-icons/googleai.svg',
    tags: ['Text-to-Video', 'Google', 'Audio Generation'],
    status: 'Unlimited only',
    category: ['video'],
    provider: 'google',
  },
  {
    model_name: 'Veo3-i2v',
    developer: 'Google',
    description:
      "Google's image-to-video model that combines sound effect generation with high-fidelity visuals.",
    image_url: '/tools-icons/googleai.svg',
    tags: ['Image-to-Video', 'Google', 'Audio Generation'],
    status: 'Unlimited only',
    category: ['video'],
    provider: 'google',
  },

  // xAI Models
  {
    model_name: 'Grok 4',
    developer: 'xAI',
    description:
      'An inference model by xAI, founded by Elon Musk, with enhanced reasoning and multimodal abilities.',
    image_url: '/tools-icons/grok.png',
    tags: ['Reasoning Model', 'xAI', 'Image and Video Recognition'],
    status: 'NEW',
    category: ['chat', 'reasoning'],
    provider: 'xai',
  },
  {
    model_name: 'Grok 3',
    developer: 'xAI',
    description:
      "A reasoning model from Elon Musk's xAI, enhanced for coding and quantitative finance.",
    image_url: '/tools-icons/grok.png',
    tags: ['Reasoning Model', 'xAI', 'Fast Response'],
    status: null,
    category: ['chat', 'reasoning'],
    provider: 'xai',
  },
  {
    model_name: 'Grok 3 mini',
    developer: 'xAI',
    description:
      "Elon Musk's xAI lightweight reasoning model, with a reduced knowledge base and more precise expression.",
    image_url: '/tools-icons/grok.png',
    tags: ['Reasoning Model', 'xAI', 'Code Programming'],
    status: null,
    category: ['chat'],
    provider: 'xai',
  },

  // DeepSeek Models
  {
    model_name: 'DeepSeek R1',
    developer: 'DeepSeek',
    description:
      "DeepSeek's classic reasoning model, excels at solving math problems and programming analysis.",
    image_url: '/tools-icons/deepseek.png',
    tags: [
      'Reasoning Model',
      'Mathematical Logic',
      'Financial Quantitative Analysis',
    ],
    status: null,
    category: ['chat', 'reasoning', 'code'],
    provider: 'deepseek',
  },
  {
    model_name: 'DeepSeek V3 0324',
    developer: 'DeepSeek',
    description:
      'A highly cost-effective, fast and affordable conversational model.',
    image_url: '/tools-icons/deepseek.png',
    tags: ['Fast Response', 'Web Search', 'Chinese Friendly'],
    status: null,
    category: ['chat'],
    provider: 'deepseek',
  },

  // Meta Models
  {
    model_name: 'Llama 4 Maverick',
    developer: 'Meta',
    description:
      "Meta's latest open-source model, enhanced with improved multimodal recognition.",
    image_url: '/tools-icons/meta.png',
    tags: [
      'Meta',
      'Financial Quantitative Analysis',
      'Image and Video Recognition',
    ],
    status: null,
    category: ['chat'],
    provider: 'meta',
  },
  {
    model_name: 'Llama 4 Scout',
    developer: 'Meta',
    description:
      "Meta's latest lightweight open-source model, focused on data integration and fact-checking.",
    image_url: '/tools-icons/meta.png',
    tags: ['Meta', 'Financial Quantitative Analysis', 'Fast Response'],
    status: null,
    category: ['chat'],
    provider: 'meta',
  },

  // Image Generation Models
  {
    model_name: 'Sora Image',
    developer: 'OpenAI',
    description:
      "OpenAI's AI image engine with strong text understanding and high-precision rendering.",
    image_url: '/tools-icons/openai.png',
    tags: ['Text-to-Image', 'Image-to-Image', 'OpenAI'],
    status: 'PRO',
    category: ['image'],
    provider: 'openai',
  },
  {
    model_name: 'GPT Image 1',
    developer: 'OpenAI',
    description:
      "OpenAI's advanced image generator, allowing continuous modifications and detail adjustments.",
    image_url: '/tools-icons/openai.png',
    tags: ['Text-to-Image', 'Image-to-Image', 'OpenAI'],
    status: 'PRO',
    category: ['image'],
    provider: 'openai',
  },
  {
    model_name: 'FLUX.1 Dev',
    developer: 'Runway',
    description:
      "The open-source version of Runway's creative text-to-image model, offering creative freedom.",
    image_url: '/tools-icons/runway.png',
    tags: ['Text-to-Image', 'Anti-NSFW'],
    status: 'PRO',
    category: ['image'],
    provider: 'runway',
  },
  {
    model_name: 'Ideogram 2.0',
    developer: 'Ideogram',
    description:
      'A text-to-image model with strong instruction comprehension, producing accurate and efficient results.',
    image_url: '/tools-icons/ideogram.png',
    tags: ['Text-to-Image', 'Text Recognition', 'Commercial Design'],
    status: 'PRO',
    category: ['image'],
    provider: 'ideogram',
  },
  {
    model_name: 'Unikorn (MJ like)',
    developer: '',
    description:
      'The most popular and classic image model, supporting multiple parameter adjustments.',
    image_url: '/tools-icons/openai.png',
    tags: ['Text-to-Image', 'Image-to-Image', 'Continuous Editing'],
    status: null,
    category: ['image'],
    provider: 'midjourney',
  },

  // Video Generation Models
  {
    model_name: 'Luma',
    developer: 'Luma',
    description:
      'A text-to-video model with precise text recognition and smooth camera movement.',
    image_url: '/tools-icons/luma.png',
    tags: ['Text-to-Video', 'Text Recognition'],
    status: 'PRO',
    category: ['video'],
    provider: 'luma',
  },
  {
    model_name: 'Runway',
    developer: 'Runway',
    description:
      'A video generation model known for excellent dynamic control and animation.',
    image_url: '/tools-icons/runway.png',
    tags: ['Image-to-Video', 'Smooth Motion'],
    status: 'PRO',
    category: ['video'],
    provider: 'runway',
  },

  // AI Agents/Tools
  {
    model_name: 'Perplexity',
    developer: '',
    description:
      'A classic AI search tool that can summarize search content and display sources.',
    image_url: '/tools-icons/perplexity.png',
    tags: ['Search Tool'],
    status: null,
    category: ['agents'],
    provider: 'perplexity',
  },
  {
    model_name: 'Deep Research',
    developer: '',
    description:
      'An advanced self-developed Agent for searching online information, reasoning, verification, and organizing multi-step research explorations.',
    image_url: '/tools-icons/openai.png',
    tags: ['Reasoning Model', 'Search Tool'],
    status: 'PRO',
    category: ['agents'],
    provider: 'custom',
  },
  {
    model_name: 'OpenManus',
    developer: '',
    description: 'A universal AI Agent that connects thought and action.',
    image_url: '/tools-icons/openai.png',
    tags: ['All-in-One Assistant'],
    status: 'PRO',
    category: ['agents'],
    provider: 'custom',
  },

  // Add more models as needed...
];

// Categories configuration
export const categories = {
  byTask: [
    { id: 'all', name: 'All Models', models: allModels },
    {
      id: 'chat',
      name: 'Chat',
      models: allModels.filter((m) => m.category?.includes('chat')),
    },
    {
      id: 'image',
      name: 'Image Generation',
      models: allModels.filter((m) => m.category?.includes('image')),
    },
    {
      id: 'video',
      name: 'Video Generation',
      models: allModels.filter((m) => m.category?.includes('video')),
    },
    {
      id: 'agents',
      name: 'AI Agents',
      models: allModels.filter((m) => m.category?.includes('agents')),
    },
    {
      id: 'reasoning',
      name: 'Reasoning Models',
      models: allModels.filter((m) => m.category?.includes('reasoning')),
    },
    {
      id: 'code',
      name: 'Code Programming',
      models: allModels.filter((m) => m.category?.includes('code')),
    },
  ],
  byProvider: [
    { id: 'all', name: 'All Providers', models: allModels },
    {
      id: 'openai',
      name: 'OpenAI',
      models: allModels.filter((m) => m.provider === 'openai'),
    },
    {
      id: 'anthropic',
      name: 'Anthropic',
      models: allModels.filter((m) => m.provider === 'anthropic'),
    },
    {
      id: 'google',
      name: 'Google',
      models: allModels.filter((m) => m.provider === 'google'),
    },
    {
      id: 'meta',
      name: 'Meta',
      models: allModels.filter((m) => m.provider === 'meta'),
    },
    {
      id: 'xai',
      name: 'xAI',
      models: allModels.filter((m) => m.provider === 'xai'),
    },
    {
      id: 'deepseek',
      name: 'DeepSeek',
      models: allModels.filter((m) => m.provider === 'deepseek'),
    },
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
