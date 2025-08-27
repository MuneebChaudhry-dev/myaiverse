import { FieldApi } from '@tanstack/react-form';
import { ZodError } from 'zod';

// Validation function for TanStack Form with Zod
export function zodValidator<TData>(schema: any) {
  return (value: TData) => {
    try {
      schema.parse(value);
      return undefined;
    } catch (error) {
      if (error instanceof ZodError) {
        return error?.errors[0]?.message || 'Invalid value';
      }
      return 'Validation error';
    }
  };
}

// Field error display component
export function FieldInfo({ field }: { field: FieldApi<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className='text-destructive text-sm mt-1 block'>
          {field.state.meta.errors.join(', ')}
        </em>
      ) : null}
    </>
  );
}
