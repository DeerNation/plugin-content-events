/**
 * create Notification from event.
 *
 * @author Tobias Bräutigam <tbraeutigam@gmail.com>
 * @since 2018
 */
const createNotification = (message) => {
  console.log(message)
  let res = {
    phrase: 'New event in %s',
    content: message.start + ' ' + message.name,
    image: null
  }
  return res
}

module.exports = createNotification
