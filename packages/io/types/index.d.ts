import { BaaS as BaaSModule } from '@mincloudx/types';

declare global {
  // eslint-disable-next-line no-var
  var BaaS: typeof BaaSModule;
  // var BaaS: any;
}

// eslint-disable-next-line no-var
declare var BaaS: any;

export {};
