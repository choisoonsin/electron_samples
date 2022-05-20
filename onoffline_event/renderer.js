// html 페이지에 renderer는 보안상의 이유로 nodejs 를 사용하지 않는 것을 권장한다.
// nodeIntegration: true, 을 사용하여 node객체를 사용할 수 있으나 이런 경우 
// 악성코드가 존재하는 외부사이트에 접근하는 경우 보안문제가 발생할 수 있다.
// 참고
// https://stackoverflow.com/questions/44391448/electron-require-is-not-defined

// const { Notification } = require('electron')

// const showNotification = (status) => {
//   new Notification({
//     title: 'Network status',
//     body: status
//   }).show()
// }

const updateOnlineStatus = () => {
  const status = navigator.onLine ? 'online' : 'offline'

  document.getElementById('status').innerHTML = status
}

// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine#listening_for_changes_in_network_status
// Returns the online status of the browser.
window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()

const btnSend = document.getElementById('btnSend')
const inputMessage = document.getElementById('message')

btnSend.addEventListener('click', (_event) => {
  window.commonAPI.showNotification(inputMessage.value)
})

inputMessage.addEventListener('keydown', (_event) => {
  if( _event.key === 'Enter' ) {
    window.commonAPI.showNotification(inputMessage.value)
  }
})