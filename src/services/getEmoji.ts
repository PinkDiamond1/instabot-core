import { Logger } from '../utils/logger';
import { EmojiService } from 'emoji-library';

const emojiService = new EmojiService();

export async function getEmoji(rand: number): Promise<string> {
  const logger = new Logger(getEmoji.name);
  const random = rand || 0;
  const emojiList = emojiService.getEmojiListByKeyword('love');
  logger.info(`get emoji by random ${random}`);
  const emoji = emojiList[random];
  logger.info(`get emoji ${emoji.symbol}`);
  return emoji.symbol;
}

export default getEmoji;
