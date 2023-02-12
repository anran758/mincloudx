import { DEFAULT_CONFIG } from './index';

export interface LocalRcConfig {
  tokens?: string;
  client_id?: string;
}

export type Config = typeof DEFAULT_CONFIG & LocalRcConfig;
