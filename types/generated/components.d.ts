import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutAboutPersonGroup extends Schema.Component {
  collectionName: 'components_about_about_person_groups';
  info: {
    displayName: 'About Person Group';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    persons: Attribute.Component<'about.about-person', true> &
      Attribute.Required;
  };
}

export interface AboutAboutPerson extends Schema.Component {
  collectionName: 'components_about_about_people';
  info: {
    displayName: 'About Person';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    avatar: Attribute.Media & Attribute.Required;
  };
}

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
      'about.about-person-group': AboutAboutPersonGroup;
      'about.about-person': AboutAboutPerson;
      'common.social': CommonSocial;
      'pricing.pricing-faq-item': PricingPricingFaqItem;
    }
  }
}
