import BaaSModule from './baas';

declare global {
  // iceberg Node.js SDK
  declare const BaaS: typeof BaaSModule;
}
