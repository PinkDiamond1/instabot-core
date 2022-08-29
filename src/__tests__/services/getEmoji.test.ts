import { getEmoji } from '../../index';

describe('getEmoji', () => {
  test('should return an emoji', async () => {
    const emoji = await getEmoji(0);
    expect(emoji).toBeDefined();
  }, 5000);
});
