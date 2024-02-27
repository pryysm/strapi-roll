import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonSocial extends Schema.Component {
  collectionName: 'components_common_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

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
      'common.social': CommonSocial;
      'pricing.pricing-faq-item': PricingPricingFaqItem;
    }
  }
}
