const alertPlaceholder = document.getElementById('my_custom_alerts')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible my_alerts_message d-flex justify-content-between align-items-center" role="alert">`,
    `<i class="bi bi-check-square"></i><p class="m-0">${message}</p>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('live_alerts_message')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message! working is successfully', 'success')
  })
};

const alertPlaceholder1 = document.getElementById('my_custom_alerts1')
const appendAlert1 = (message, type) => {
  const wrapper1 = document.createElement('div')
  wrapper1.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible my_alerts_message" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder1.append(wrapper1)
}
const alertTrigger1 = document.getElementById('live1_alerts_message')
if (alertTrigger1) {
  alertTrigger1.addEventListener('click', () => {
    appendAlert1('<div class="alert" role="alert"><h4 class="alert-heading">Well done!</h4><p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p><hr><p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p></div>', 'success')
  })
}
//slider
// const myCarouselElement = document.querySelector('#my_carousel_1')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })