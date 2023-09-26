import { webhookCallback } from 'grammy'
import bot from '../src/main'

export default webhookCallback(bot, 'http')
