import { sleep } from '../../utils';

describe('sleep', () => {
  test('sleep Works', async () => {
    const sleepTime = sleep(1000);
    expect(sleepTime).toBeDefined();
  }, 1000);
});