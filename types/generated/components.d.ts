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

export interface IntegrationFeaturedIntegrationCard extends Schema.Component {
  collectionName: 'components_integration_featured_integration_cards';
  info: {
    displayName: 'Featured Integration Card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    items: Attribute.Component<'integration.featured-integration', true> &
      Attribute.Required;
  };
}

export interface IntegrationFeaturedIntegration extends Schema.Component {
  collectionName: 'components_integration_featured_integrations';
  info: {
    displayName: 'Featured Integration Item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    builtBy: Attribute.String & Attribute.Required;
    learnMoreUrl: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    thumbnail: Attribute.Media & Attribute.Required;
    website: Attribute.String & Attribute.Required;
    categories: Attribute.String & Attribute.Required;
    docs: Attribute.String & Attribute.Required;
    body: Attribute.Blocks & Attribute.Required;
    images: Attribute.Media & Attribute.Required;
    contact: Attribute.String & Attribute.Required;
  };
}

export interface IntegrationIntegrationItem extends Schema.Component {
  collectionName: 'components_integration_integration_items';
  info: {
    displayName: 'Integration Item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    primaryBadgeTitle: Attribute.String;
    primaryBadgeLogo: Attribute.Media;
    secondaryBadgeTitle: Attribute.String;
  };
}

export interface IntegrationIntegration extends Schema.Component {
  collectionName: 'components_integration_integrations';
  info: {
    displayName: 'Integration';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'integration.integration-item', true> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    menuIcon: Attribute.Media & Attribute.Required;
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
      'integration.featured-integration-card': IntegrationFeaturedIntegrationCard;
      'integration.featured-integration': IntegrationFeaturedIntegration;
      'integration.integration-item': IntegrationIntegrationItem;
      'integration.integration': IntegrationIntegration;
      'pricing.pricing-faq-item': PricingPricingFaqItem;
    }
  }
}
