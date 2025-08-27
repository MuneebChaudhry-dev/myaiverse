import { Button } from './button';
import { LucideIcon } from 'lucide-react';

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryNav({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryNavProps) {
  return (
    <div className='flex justify-center mb-8'>
      <div className='flex items-center gap-1 p-1 bg-card/60 backdrop-blur-sm rounded-xl border border-border/30'>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'ghost'}
            className={`gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'hover:bg-muted/20'
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            <category.icon className='h-4 w-4' />
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
