import Instabot from './Instabot';
import { Logger } from '../utils/logger';

import { ModeEnum } from './enums/Instabot.enum';

import type { TypeCommentArgs } from '../@types/core/comment.service';

export const commentService = async (args: TypeCommentArgs): Promise<void> => {
  const logger = new Logger(commentService.name);
  const { link, author, loginInstagram, passwordInstagram } = args;
  const instabot = new Instabot({ loginInstagram, passwordInstagram });
  instabot.setMode = ModeEnum.DEFAULT;

  try {
    await instabot.comment({ link, author });
  } catch (err) {
    logger.error(err);
  }
};
export default commentService;
