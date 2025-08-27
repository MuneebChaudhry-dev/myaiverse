import { useForm } from '@tanstack/react-form';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Label } from './label';
import { Slider } from './slider';
import { modelSelectionSchema, type ModelSelectionData } from '@/lib/schemas';
import { zodValidator, FieldInfo } from '@/lib/form-utils';
import { z } from 'zod';

interface ModelConfigFormProps {
  modelId: string;
  onSubmit?: (data: ModelSelectionData) => void;
  onCancel?: () => void;
}

export function ModelConfigForm({
  modelId,
  onSubmit,
  onCancel,
}: ModelConfigFormProps) {
  const form = useForm({
    defaultValues: {
      modelId,
      parameters: {
        temperature: 0.7,
        maxTokens: 1000,
        topP: 1,
      },
    } as ModelSelectionData,
    onSubmit: async ({ value }) => {
      const result = modelSelectionSchema.safeParse(value);
      if (result.success) {
        onSubmit?.(result.data);
      }
    },
  });

  return (
    <Card className='glass-effect border-0 w-full max-w-md'>
      <CardHeader>
        <CardTitle className='text-lg'>Configure {modelId}</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className='space-y-6'
        >
          {/* Temperature */}
          <form.Field
            name='parameters.temperature'
            validators={{
              onChange: zodValidator(z.number().min(0).max(2)),
            }}
          >
            {(field) => (
              <div className='space-y-2'>
                <Label>Temperature: {field.state.value ?? 0.7}</Label>
                <Slider
                  value={[field.state.value ?? 0.7]}
                  onValueChange={([value]) => field.handleChange(value)}
                  max={2}
                  min={0}
                  step={0.1}
                  className='w-full'
                />
                <p className='text-xs text-muted-foreground'>
                  Controls randomness. Higher values make output more random.
                </p>
                <FieldInfo field={field} />
              </div>
            )}
          </form.Field>

          {/* Max Tokens */}
          <form.Field
            name='parameters.maxTokens'
            validators={{
              onChange: zodValidator(z.number().min(1).max(4000)),
            }}
          >
            {(field) => (
              <div className='space-y-2'>
                <Label>Max Tokens: {field.state.value ?? 1000}</Label>
                <Slider
                  value={[field.state.value ?? 1000]}
                  onValueChange={([value]) => field.handleChange(value)}
                  max={4000}
                  min={1}
                  step={50}
                  className='w-full'
                />
                <p className='text-xs text-muted-foreground'>
                  Maximum length of the generated response.
                </p>
                <FieldInfo field={field} />
              </div>
            )}
          </form.Field>

          {/* Top P */}
          <form.Field
            name='parameters.topP'
            validators={{
              onChange: zodValidator(z.number().min(0).max(1)),
            }}
          >
            {(field) => (
              <div className='space-y-2'>
                <Label>Top P: {field.state.value ?? 1}</Label>
                <Slider
                  value={[field.state.value ?? 1]}
                  onValueChange={([value]) => field.handleChange(value)}
                  max={1}
                  min={0}
                  step={0.05}
                  className='w-full'
                />
                <p className='text-xs text-muted-foreground'>
                  Controls diversity via nucleus sampling.
                </p>
                <FieldInfo field={field} />
              </div>
            )}
          </form.Field>

          <div className='flex gap-3 pt-4'>
            <Button
              type='submit'
              className='flex-1'
              disabled={!form.state.canSubmit}
            >
              Apply Settings
            </Button>
            <Button
              type='button'
              variant='outline'
              onClick={onCancel}
              className='flex-1'
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
