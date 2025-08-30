'use client';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ModelsGrid } from '@/components/models/models-grid';
import { allModels, categories } from '@/data/models';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ModelsPage() {
  const [viewType, setViewType] = useState<'task' | 'provider'>('task');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getFilteredModels = () => {
    if (selectedCategory === 'all') return allModels;

    // Filter models based on category
    return allModels.filter((model) => {
      if (viewType === 'task') {
        return model.tags.some((tag) =>
          tag.toLowerCase().includes(selectedCategory)
        );
      }
      return model.developer.toLowerCase() === selectedCategory;
    });
  };

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-4xl font-bold mb-8'>AI Models Directory</h1>

      <div className='flex gap-4 mb-6'>
        <Tabs
          value={viewType}
          onValueChange={(v) => setViewType(v as 'task' | 'provider')}
        >
          <TabsList>
            <TabsTrigger value='task'>By Task</TabsTrigger>
            <TabsTrigger value='provider'>By Provider</TabsTrigger>
          </TabsList>
        </Tabs>

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className='w-[200px]'>
            <SelectValue placeholder='Select category' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Models</SelectItem>
            {(viewType === 'task'
              ? categories.byTask
              : categories.byProvider
            ).map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <ModelsGrid models={getFilteredModels()} />
    </div>
  );
}
