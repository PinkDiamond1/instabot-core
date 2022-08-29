import { URL } from 'node:url';

export const INSTAGRAM_URL = new URL('https://www.instagram.com');
export const INSTAGRAM_LOGIN_URL = (next: string) => new URL(`${INSTAGRAM_URL.href}accounts/login/?next=${next}&source=post_comment_input`);