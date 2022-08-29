import type { CommentArgsInterface } from '../../interfaces/comment.interface';

let loginInstagramMock = '';
let passwordInstagramMock = '';

let linkMock = '';
let authorMock = '';
let argsMock: CommentArgsInterface = {} as CommentArgsInterface;

loginInstagramMock = 'loginInstagram';
passwordInstagramMock = 'passwordInstagram';

linkMock = 'https://www.instagram.com/p/1234abc/';
authorMock = 'author';

argsMock = {
  link: linkMock,
  author: authorMock,
};
export const commentMock = {
  loginInstagramMock,
  passwordInstagramMock,
  linkMock,
  authorMock,
  argsMock,
};
export default commentMock;
