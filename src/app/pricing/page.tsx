'use client';
import { useState } from 'react';
import { PricingCards } from '@/components/pricing/pricing-cards';
import { pricingPlans } from '@/data/models';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from 'lucide-react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>(
    'monthly'
  );

  return (
    <div className='container mx-auto py-8'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold mb-4'>
          The only subscription you&#39;ll ever need
        </h1>
        <p className='text-xl text-muted-foreground mb-8'>
          Access 100+ AI models for a fraction of the cost
        </p>

        <div className='flex items-center justify-center gap-4'>
          <Label htmlFor='billing'>Monthly</Label>
          <Switch
            id='billing'
            checked={billingPeriod === 'annual'}
            onCheckedChange={(checked) =>
              setBillingPeriod(checked ? 'annual' : 'monthly')
            }
          />
          <Label htmlFor='billing'>
            Annual{' '}
            <Badge className='ml-2'>
              Save up to 50%
            </Badge>
          </Label>
        </div>
      </div>

      <PricingCards plans={pricingPlans} billingPeriod={billingPeriod} />
    </div>
  );
}
