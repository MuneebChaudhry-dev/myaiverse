'use client';
import { useState } from 'react';
import { Model } from '@/types/models';
import { ModelCard } from './model-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ModelsGridProps {
  models: Model[];
  title?: string;
}

export function ModelsGrid({ models, title }: ModelsGridProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModels = models.filter(
    (model) =>
      model.model_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div>
      {title && <h2 className='text-2xl font-bold mb-4'>{title}</h2>}
      <div className='relative mb-6'>
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4' />
        <Input
          placeholder='Search models...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='pl-10'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredModels.map((model) => (
          <ModelCard key={model.model_name} model={model} />
        ))}
      </div>
    </div>
  );
}
