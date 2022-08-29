#!/usr/bin/env node
import * as instabot from 'instabot-core';
import dotenv from 'dotenv';

dotenv.config();
const { commentService } = instabot;

const { IG_LINK, PHRASE_AUTHOR, IG_USERNAME, IG_PASSWORD } = process.env;

async function* commentForever() {
  yield commentService({
    link: IG_LINK,
    author: PHRASE_AUTHOR,
    loginInstagram: IG_USERNAME,
    passwordInstagram: IG_PASSWORD,
  });
}

(async () => {
  await commentForever().next();
})();
