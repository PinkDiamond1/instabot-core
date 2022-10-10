#!/usr/bin/env node
require("dotenv/config");
const { commentService } = require("./lib/index.js");
const { IG_LINK, PHRASE_AUTHOR, IG_USERNAME, IG_PASSWORD } = process.env;

(async () => {
    await commentService({
        link: IG_LINK,
        author: PHRASE_AUTHOR,
        loginInstagram: IG_USERNAME,
        passwordInstagram: IG_PASSWORD,
    });
})();