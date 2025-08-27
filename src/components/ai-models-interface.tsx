'use client';

import { useState } from 'react';
import { SearchInput } from './ui/search-input';
import { ModelCard } from './ui/model-card';
import { CategoryNav } from '@/components/ui/category-nav';
import { ToolBadges } from '@/components/ui/tool-badges';
import type { SearchFormData, ModelSelectionData } from '@/lib/schemas';
import {
  Image,
  MessageCircle,
  Video,
  Users,
  Sparkles,
  Brain,
  Zap,
  Code,
} from 'lucide-react';

const categories = [
  { id: 'image', label: 'Image', icon: Image },
  { id: 'chat', label: 'Chat', icon: MessageCircle },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'agents', label: 'Agents', icon: Users },
];

const tools = [
  'Deep Research',
  'OpenManus',
  'AI Detector',
  'Proofreading',
  'Perplexity',
];

const models = [
  {
    id: 'gpt-5',
    title: 'GPT-5',
    description:
      "OpenAI's latest general-purpose model with very advanced reasoning capabilities and improved performance across all domains.",
    icon: <Sparkles className='h-6 w-6 text-white' />,
    gradient: 'bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500',
  },
  {
    id: 'gpt-5-mini',
    title: 'GPT-5 mini',
    description:
      "OpenAI's latest smart, cost-efficient model with optimized performance for everyday tasks and quick responses.",
    icon: <Brain className='h-6 w-6 text-white' />,
    gradient: 'bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500',
  },
  {
    id: 'claude-opus-4.1',
    title: 'Claude Opus 4.1',
    description:
      "Anthropic's latest hybrid reasoning model capable of complex analysis, creative tasks, and advanced problem solving.",
    icon: <Zap className='h-6 w-6 text-white' />,
    gradient: 'bg-gradient-to-br from-orange-400 via-red-500 to-pink-500',
  },
  {
    id: 'o3',
    title: 'o3',
    description:
      "OpenAI's newest reasoning model with coding and mathematical capabilities, designed for complex problem-solving tasks.",
    icon: <Code className='h-6 w-6 text-white' />,
    gradient: 'bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600',
  },
];

export function AiModelsInterface() {
  const [searchData, setSearchData] = useState<SearchFormData | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<SearchFormData['category']>('chat');
  const [selectedModel, setSelectedModel] = useState<ModelSelectionData | null>(
    null
  );

  const handleSearch = (data: SearchFormData) => {
    console.log('Search submitted:', data);
    setSearchData(data);
    setActiveCategory(data.category);
  };

  const handleModelSelect = (data: ModelSelectionData) => {
    console.log('Model selected:', data);
    setSelectedModel(data);
    // Here you could navigate to a chat interface or start a session
  };

  const handleToolClick = (tool: string) => {
    console.log('Tool clicked:', tool);
    // Handle tool selection
  };

  return (
    <div className='min-h-screen gradient-bg'>
      <div className='container mx-auto px-4 py-12'>
        {/* Header */}
        <div className='text-center mb-12 animate-[fade-in_0.6s_ease-out]'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight'>
            👋 Access 100+ Powerful AI Models - All in One Place ⭐
          </h1>
        </div>

        {/* Navigation */}
        <div className='animate-[fade-in_0.8s_ease-out]'>
          <CategoryNav
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={(categoryId) =>
              setActiveCategory(categoryId as SearchFormData['category'])
            }
          />
        </div>

        {/* Search Section */}
        <div className='mb-16 animate-[fade-in_1s_ease-out]'>
          <SearchInput
            onSearch={handleSearch}
            defaultValues={{
              category: activeCategory,
              query: searchData?.query || '',
            }}
          />

          <ToolBadges tools={tools} onToolClick={handleToolClick} />
        </div>

        {/* Selected Model Display */}
        {selectedModel && (
          <div className='mb-8 p-4 glass-effect rounded-xl'>
            <p className='text-sm text-muted-foreground'>
              Selected:{' '}
              <span className='font-medium text-foreground'>
                {selectedModel.modelId}
              </span>
              {selectedModel.parameters && (
                <span className='ml-2'>
                  (Temp: {selectedModel.parameters.temperature}, Max:{' '}
                  {selectedModel.parameters.maxTokens}, Top-P:{' '}
                  {selectedModel.parameters.topP})
                </span>
              )}
            </p>
          </div>
        )}

        {/* Models Grid */}
        <div className='animate-[fade-in_1.2s_ease-out]'>
          <h2 className='text-2xl font-semibold mb-8 flex items-center gap-3 text-foreground'>
            🚀 Newly Released AI Models & Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {models.map((model, index) => (
              <div
                key={model.id}
                className='animate-[slide-up_0.6s_ease-out]'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ModelCard {...model} onSelect={handleModelSelect} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
