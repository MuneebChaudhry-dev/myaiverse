export interface ModelTag {
  id: string;
  name: string;
  color?: string;
}

export interface Model {
  model_name: string;
  developer: string;
  description: string;
  image_url: string;
  tags: string[];
  status?: 'NEW' | 'PRO' | 'Unlimited only' | null;
  category?: string[];
  provider?: string;
}

export interface Category {
  category_name: string;
  models: Model[];
}

export interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  credits: number;
  features: string[];
  models: string[];
  highlighted?: boolean;
}
