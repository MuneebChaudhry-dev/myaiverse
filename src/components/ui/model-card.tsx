import { useState } from 'react';
import { Card, CardContent } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { Dialog, DialogContent, DialogTrigger } from './dialog';
import { ModelConfigForm } from './model-config-form';
import { Settings } from 'lucide-react';
import type { ModelSelectionData } from '@/lib/schemas';

interface ModelCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  gradient: string;
  onSelect?: (data: ModelSelectionData) => void;
}

export function ModelCard({
  title,
  description,
  icon,
  badge,
  gradient,
  onSelect,
}: ModelCardProps) {
  const [showConfig, setShowConfig] = useState(false);

  const handleQuickSelect = () => {
    onSelect?.({
      modelId: title.toLowerCase().replace(/\s+/g, '-'),
      parameters: {
        temperature: 0.7,
        maxTokens: 1000,
        topP: 1,
      },
    });
  };

  const handleConfigSubmit = (data: ModelSelectionData) => {
    onSelect?.(data);
    setShowConfig(false);
  };

  return (
    <Card className='group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl glass-effect border-0 overflow-hidden'>
      <CardContent className='p-0'>
        <div className='flex items-start space-x-0'>
          <div className={`p-6 ${gradient} flex-shrink-0`}>
            <div className='w-12 h-12 flex items-center justify-center'>
              {icon}
            </div>
          </div>
          <div className='flex-1 p-4 min-w-0'>
            <div className='flex items-start justify-between mb-2'>
              <h3 className='font-semibold text-sm text-foreground group-hover:text-primary transition-colors'>
                {title}
              </h3>
              {badge && (
                <Badge
                  variant='secondary'
                  className='text-xs ml-2 bg-primary/10 text-primary border-0'
                >
                  {badge}
                </Badge>
              )}
            </div>
            <p className='text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4'>
              {description}
            </p>

            <div className='flex gap-2'>
              <Button
                size='sm'
                onClick={handleQuickSelect}
                className='flex-1 h-8 text-xs'
              >
                Quick Start
              </Button>

              <Dialog open={showConfig} onOpenChange={setShowConfig}>
                <DialogTrigger asChild>
                  <Button size='sm' variant='outline' className='h-8 px-3'>
                    <Settings className='h-3 w-3' />
                  </Button>
                </DialogTrigger>
                <DialogContent className='p-0 border-0 bg-transparent shadow-none'>
                  <ModelConfigForm
                    modelId={title}
                    onSubmit={handleConfigSubmit}
                    onCancel={() => setShowConfig(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
