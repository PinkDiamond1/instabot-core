export * from './core';
export * from './services';
export * from './utils';

import * as core from './core';
import * as services from './services';
import * as utils from './utils';

export const instabot = {
  ...core,
  ...services,
  ...utils,
};
export default instabot;
