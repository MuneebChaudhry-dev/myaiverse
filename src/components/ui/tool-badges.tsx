import { Badge } from './badge';

interface ToolBadgesProps {
  tools: string[];
  onToolClick?: (tool: string) => void;
}

export function ToolBadges({ tools, onToolClick }: ToolBadgesProps) {
  return (
    <div className='flex flex-wrap gap-2 mt-6 justify-center'>
      {tools.map((tool) => (
        <Badge
          key={tool}
          variant='outline'
          className='cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200 glass-effect border-0 px-3 py-1'
          onClick={() => onToolClick?.(tool)}
        >
          {tool}
        </Badge>
      ))}
    </div>
  );
}
