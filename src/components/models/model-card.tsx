import { Model } from '@/types/models';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface ModelCardProps {
  model: Model;
  onSelect?: (model: Model) => void;
}

export function ModelCard({ model, onSelect }: ModelCardProps) {
  return (
    <Card
      className='p-4 hover:shadow-lg transition-all cursor-pointer'
      onClick={() => onSelect?.(model)}
    >
      <div className='flex items-start gap-4'>
        <div className='relative w-12 h-12 flex-shrink-0'>
          <Image
            src={model.image_url}
            alt={model.model_name}
            fill
            className='rounded-lg object-cover'
          />
        </div>
        <div className='flex-1'>
          <div className='flex items-center gap-2 mb-1'>
            <h3 className='font-semibold'>{model.model_name}</h3>
            {model.status && (
              <Badge variant={model.status === 'NEW' ? 'default' : 'secondary'}>
                {model.status}
              </Badge>
            )}
          </div>
          <p className='text-sm text-muted-foreground mb-2'>
            {model.developer}
          </p>
          <p className='text-sm mb-3'>{model.description}</p>
          <div className='flex flex-wrap gap-1'>
            {model.tags.map((tag) => (
              <Badge key={tag} variant='outline' className='text-xs'>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
