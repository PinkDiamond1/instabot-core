import { randomInt } from '../../utils';

describe('randomInt', () => {
  test('randomInt Works', () => {
    const int = randomInt(0, 0);
    const expectInt = 0;
    expect(int).toBe(expectInt);
  });
});
