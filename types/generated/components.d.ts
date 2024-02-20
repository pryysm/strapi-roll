import type { Schema, Attribute } from '@strapi/strapi';

export interface PricingPricingFaqItem extends Schema.Component {
  collectionName: 'components_pricing_pricing_faq_items';
  info: {
    displayName: 'Pricing FAQ Item';
  };
  attributes: {
    answer: Attribute.Blocks & Attribute.Required;
    question: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pricing.pricing-faq-item': PricingPricingFaqItem;
    }
  }
}
