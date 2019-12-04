export function alert() {
  const ALERT_MSG = document.getElementById('alert-msg');

  return {
    displayAlertMsg(msg) {
      ALERT_MSG.classList.remove('alert-message--hidden');
      ALERT_MSG.querySelector('.alert-message__message').innerHTML = `
          <h3>Woops!</h3>
          <p>${msg}</p>
        `;
    },
    hideAlertMSg() {
      setTimeout(() => {
        ALERT_MSG.classList.add('alert-message--hidden');
      }, 3000);
    }
  };
}
