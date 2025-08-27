import { useForm } from '@tanstack/react-form';
import { Search, Folder } from 'lucide-react';
import { Input } from './input';
import { Button } from './button';
import { searchSchema, type SearchFormData } from '@/lib/schemas';
import { zodValidator, FieldInfo } from '@/lib/form-utils';

interface SearchInputProps {
  onSearch?: (data: SearchFormData) => void;
  defaultValues?: Partial<SearchFormData>;
}

export function SearchInput({ onSearch, defaultValues }: SearchInputProps) {
  const form = useForm({
    defaultValues: {
      query: '',
      category: 'chat' as const,
      tools: [],
      ...defaultValues,
    } as SearchFormData,
    onSubmit: async ({ value }) => {
      const result = searchSchema.safeParse(value);
      if (result.success) {
        onSearch?.(result.data);
      }
    },
  });

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      form.handleSubmit();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className='relative max-w-2xl mx-auto'
    >
      <div className='relative'>
        <form.Field
          name='query'
          validators={{
            onChange: zodValidator(searchSchema.shape.query),
          }}
        >
          {(field) => (
            <>
              <Input
                placeholder='What would you like to research today?'
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                onKeyPress={handleKeyPress}
                className='bg-card/60 backdrop-blur-sm h-14 pl-4 pr-12 text-base rounded-xl border border-border/30 placeholder:text-muted-foreground/60'
              />
              <FieldInfo field={field} />
            </>
          )}
        </form.Field>

        <Button
          type='submit'
          size='icon'
          className='absolute right-2 top-2 h-10 w-10 rounded-lg bg-muted/20 hover:bg-muted/40'
          disabled={!form.state.canSubmit}
        >
          <Search className='h-4 w-4' />
        </Button>
      </div>

      <Button
        type='button'
        variant='ghost'
        className='absolute -bottom-12 left-4 text-sm text-muted-foreground hover:text-foreground'
        onClick={() => {
          // Handle "My Prompts" functionality
          console.log('Opening saved prompts');
        }}
      >
        <Folder className='h-4 w-4 mr-2' />
        My Prompts
      </Button>
    </form>
  );
}
