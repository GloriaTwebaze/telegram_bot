
import { Telegraf } from 'telegraf'
import { configs } from '../config/config'

export const bot = new Telegraf(configs.bot_token)

bot.start((ctx) => {
  ctx.reply('Welcome to my bot!')
})

   