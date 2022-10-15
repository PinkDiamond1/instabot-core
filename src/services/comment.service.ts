import Instabot from '../core/Instabot';
import { Logger } from '../utils/Logger';

import { ModeEnum } from '../shared/enums/Instabot.enum';
import type { TCommentServiceArgs, TCommentServiceExecuteArgs } from '../shared/types/comment.type';

export class CommentService {
  private logger: Logger = new Logger(CommentService.name);

  public constructor(private commentArgs: TCommentServiceArgs) {
    this.logger.info(`Starting...`);
  }

  public async execute(args: TCommentServiceExecuteArgs): Promise<void> {
    const { loginInstagram, passwordInstagram } = this.commentArgs;
    const { link, author } = args;
    const instabot = new Instabot({ ...this.commentArgs, loginInstagram, passwordInstagram });
    instabot.setMode = ModeEnum.DEFAULT;
    try {
      await instabot.comment({ link, author: author || 'Jesus' });
    } catch (error) {
      this.logger.error(JSON.stringify(error));
    }
  }
}
