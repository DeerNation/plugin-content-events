/**
 * create Notification from event.
 *
 * @author Tobias Bräutigam <tbraeutigam@gmail.com>
 * @since 2018
 */
let logger

const createNotification = (message, registry) => {
  if (!logger) {
    logger = registry.resolve('logger')(__filename)
  }
  logger.debug('create event notification from: ', JSON.stringify(message))
  let res = {
    phrase: 'New event in %s',
    content: message.start + ' ' + message.name,
    image: null
  }
  return res
}

module.exports = createNotification
