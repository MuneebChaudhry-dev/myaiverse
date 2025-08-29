'use client';
import { useState, useRef } from 'react';
import { useForm } from '@tanstack/react-form';
import { Send, Paperclip, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChatTextAreaProps {
  onSubmit: (message: string, files?: FileList) => void;
  placeholder?: string;
  className?: string;
}

export function ChatTextArea({
  onSubmit,
  placeholder = 'Select a model and start writing, coding, or exploring...',
  className,
}: ChatTextAreaProps) {
  const [files, setFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const form = useForm({
    defaultValues: {
      message: '',
    },
    onSubmit: async ({ value }) => {
      if (value.message.trim()) {
        onSubmit(value.message, files || undefined);
        form.reset();
        setFiles(null);
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
        }
      }
    },
  });

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      form.handleSubmit();
    }
  };

  const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    field: any
  ) => {
    field.handleChange(e.target.value);
    // Auto-resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  return (
    <div
      className={cn(
        'w-full bg-background border border-border rounded-lg p-3 focus-within:ring-2 focus-within:ring-ring/20 transition-all',
        className
      )}
    >
      {/* File attachments display */}
      {files && files.length > 0 && (
        <div className='mb-3 flex flex-wrap gap-2'>
          {Array.from(files).map((file, index) => (
            <div
              key={index}
              className='bg-muted px-2 py-1 rounded text-sm text-muted-foreground'
            >
              {file.name}
            </div>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className='flex items-end gap-2'
      >
        {/* Left side controls */}
        <div className='flex items-center gap-1'>
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='h-8 w-8'
            onClick={() => fileInputRef.current?.click()}
          >
            <Paperclip className='h-4 w-4' />
          </Button>
          <Button type='button' variant='ghost' size='icon' className='h-8 w-8'>
            <Plus className='h-4 w-4' />
          </Button>
        </div>

        {/* Textarea using TanStack Form */}
        <form.Field name='message'>
          {(field) => (
            <textarea
              ref={textareaRef}
              value={field.state.value}
              onChange={(e) => handleTextareaChange(e, field)}
              onBlur={field.handleBlur}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              className='flex-1 resize-none bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground min-h-[20px] max-h-32'
              rows={1}
            />
          )}
        </form.Field>

        {/* Send button */}
        <Button
          type='submit'
          disabled={!form.state.canSubmit || !form.state.values.message?.trim()}
          size='icon'
          className='h-8 w-8'
        >
          <Send className='h-4 w-4' />
        </Button>
      </form>

      <input
        ref={fileInputRef}
        type='file'
        multiple
        className='hidden'
        onChange={handleFileSelect}
      />
    </div>
  );
}
