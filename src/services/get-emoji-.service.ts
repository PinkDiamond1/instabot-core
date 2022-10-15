import { EmojiService } from 'emoji-library';
import { Logger } from '../utils/Logger';

export class EmojiServiceImpl extends EmojiService {
  public async execute(rand: number): Promise<string> {
    const logger = new Logger(EmojiServiceImpl.name);
    const random = rand || 0;
    const emojiList = this.getEmojiListByKeyword('love');
    logger.info(`get emoji by random ${random}`);
    const emoji = emojiList[random];
    logger.info(`get emoji ${emoji.symbol}`);
    return emoji.symbol;
  }
}
export default new EmojiServiceImpl();
