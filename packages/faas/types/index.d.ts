import { BaaS as BaaSModule } from '@mincloudx/types';

declare global {
  // eslint-disable-next-line no-var
  var BaaS: typeof BaaSModule;
}
