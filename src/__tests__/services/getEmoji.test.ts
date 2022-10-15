import { EmojiServiceImpl } from '../../index';

describe('getEmoji', () => {
  let emojiServiceImpl: EmojiServiceImpl;

  beforeAll(() => {
    emojiServiceImpl = new EmojiServiceImpl();
  });
  test('should return an emoji', async () => {
    const emoji = await emojiServiceImpl.execute(0);
    expect(emoji).toBeDefined();
  });
});
