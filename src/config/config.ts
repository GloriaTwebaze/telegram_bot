import 'dotenv/config'

export const configs = {
    bot_token: process.env.BOT_TOKEN ||"",
    authorised_user: process.env.AUTHOURISED_USERS
}