#!/usr/bin/env node
import 'dotenv/config'
import { CommentService } from '../../lib/index.js'

commentService = new CommentService({
        loginInstagram: process.env.IG_USERNAME,
        passwordInstagram: process.env.IG_PASSWORD,
        puppeteer_options: {
                headless: true,
        },
})
commentService.execute({
        link: process.env.IG_LINK,
        author: process.env.PHRASE_AUTHOR,
})