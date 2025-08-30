import { PricingPlan } from '@/types/models';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PricingCardsProps {
  plans: PricingPlan[];
  billingPeriod: 'monthly' | 'annual';
}

export function PricingCards({ plans, billingPeriod }: PricingCardsProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={plan.highlighted ? 'border-primary shadow-lg' : ''}
        >
          <CardHeader>
            <div className='flex items-center justify-between'>
              <h3 className='text-2xl font-bold'>{plan.name}</h3>
              {plan.highlighted && <Badge variant='default'>Popular</Badge>}
            </div>
            <div className='mt-4'>
              <span className='text-3xl font-bold'>
                $
                {billingPeriod === 'annual'
                  ? plan.price.annual
                  : plan.price.monthly}
              </span>
              <span className='text-muted-foreground'>/month</span>
            </div>
            {billingPeriod === 'annual' && (
              <p className='text-sm text-green-600'>
                Save $
                {((plan.price.monthly - plan.price.annual) * 12).toFixed(0)}
                /year
              </p>
            )}
            <p className='text-sm text-muted-foreground mt-2'>
              {plan.credits.toLocaleString()} Credits/year
            </p>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2'>
              {plan.features.map((feature) => (
                <li key={feature} className='flex items-center gap-2'>
                  <Check className='w-4 h-4 text-primary' />
                  <span className='text-sm'>{feature}</span>
                </li>
              ))}
            </ul>
            <div className='mt-4'>
              <p className='text-sm font-semibold mb-2'>Included Models:</p>
              <div className='flex flex-wrap gap-1'>
                {plan.models.slice(0, 3).map((model) => (
                  <Badge key={model} variant='outline' className='text-xs'>
                    {model}
                  </Badge>
                ))}
                {plan.models.length > 3 && (
                  <Badge variant='outline' className='text-xs'>
                    +{plan.models.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className='w-full'
              variant={plan.highlighted ? 'default' : 'outline'}
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
