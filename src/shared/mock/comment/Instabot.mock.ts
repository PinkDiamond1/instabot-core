import { Instabot } from '../../../core';
import { commentMock } from './comment.mock';
import type { CommentArgsInterface } from '../../interfaces/comment.interface';

export class InstabotMock extends Instabot {
  public comment(args: CommentArgsInterface): Promise<void> {
    void args;
    return Promise.resolve();
  }
}
export const instabotMock = new InstabotMock({
  loginInstagram: commentMock.loginInstagramMock,
  passwordInstagram: commentMock.passwordInstagramMock,
});
