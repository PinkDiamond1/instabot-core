export * from './core';
export * from './services';
export * from './shared/helpers';

import * as core from './core';
import * as services from './services';
import * as utils from './shared/helpers';

export const instabot = {
  ...core,
  ...services,
  ...utils,
};
export default instabot;
