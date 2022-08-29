import { Instabot } from '../../';

import { InstabotMock } from '../../../src/shared/mock/comment/Instabot.mock';
import { commentMock } from '../../../src/shared/mock/comment/comment.mock';

import type { CommentArgsInterface } from '../../shared/interfaces/comment.interface';

describe('Instabot', () => {
  let instabot: Instabot;

  let loginInstagram: string;
  let passwordInstagram: string;

  let args: CommentArgsInterface;

  beforeEach(() => {
    loginInstagram = commentMock.loginInstagramMock;
    passwordInstagram = commentMock.passwordInstagramMock;

    args = commentMock.argsMock;
    instabot = new InstabotMock({
      loginInstagram: loginInstagram,
      passwordInstagram: passwordInstagram
    });
  });
  test('should comment toBeUndefined', async () => {
    const comment = await instabot.comment(args);
    expect(comment).toBeUndefined();
    expect(instabot.comment).toBeDefined();
  });
  test('should comment be a Function', async () => {
    expect(instabot.comment).toBeInstanceOf(Function);
  });
});
