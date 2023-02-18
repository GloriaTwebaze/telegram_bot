import express from 'express'
import { bot } from './src/bot/bot'

const app = express()

app.listen(2007, ()=>{
    console.log("bot server running on port 2007")
})

async function start(){
    bot.launch().then(()=>{})
}
start()