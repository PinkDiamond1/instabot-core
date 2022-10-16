#!/usr/bin/env node
require('dotenv/config');
const { CommentService } = require('../../lib/index.js');

(async () => {
  const { IG_LINK, PHRASE_AUTHOR, IG_USERNAME, IG_PASSWORD } = process.env;

  const commentService = new CommentService({
    loginInstagram: IG_USERNAME,
    passwordInstagram: IG_PASSWORD,
    puppeteer_options: {
      headless: true,
    },
  });
  function* commentForever() {
    yield commentService.execute({
      link: IG_LINK,
      author: PHRASE_AUTHOR,
    });
  }

  commentForever().next();
})();
