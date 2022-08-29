import puppeteer from 'puppeteer';

export interface InstabotConfigInterface {
  loginInstagram: string;
  passwordInstagram: string;
}
export interface CommentArgsInterface {
  link: string;
  author: string;
  page?: puppeteer.Page;
}
export interface CommonArgsInterface {
  page: puppeteer.Page;
  args: CommentArgsInterface;
}
