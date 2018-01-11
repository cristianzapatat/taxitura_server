module.exports = {
  port: process.env.PORT || 3002,
  portQueue: process.env.PORT_QUEUE || 61613,
  hostQueue: process.env.HOST_QUEUE || 'localhost',
  sendMessageQueue: process.env.SEND_MESSAGE_QUEUE || 'send_message',
  sendMessageQueueError: process.env.SEND_MESSAGE_QUEUE_ERROR || 'send_message_error',
  numberTryQueue: process.env.NUMBER_TRY_QUEUE || 3
}
