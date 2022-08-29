#!/usr/bin/env node
import { commentService } from '../../lib'
import dotenv from 'dotenv';

dotenv.config();

commentService({
        link: process.env.IG_LINK,
        author: process.env.PHRASE_AUTHOR,
        loginInstagram: process.env.IG_USERNAME,
        passwordInstagram: process.env.IG_PASSWORD,
})