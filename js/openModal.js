var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget

  var recipient = button.getAttribute('data-bs-title');
  var image = button.getAttribute('data-bs-img');
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyImg = exampleModal.querySelector('.modal-body img');
  var cardBodyText = document.querySelector(`.${button.id}-text`).innerHTML;
  var cardlink1 = document.querySelector(`#${button.id}-link1`).href;
  var cardlink2 = document.querySelector(`#${button.id}-link2`).href;
  var modalBodyText = exampleModal.querySelector('.modal-text');
  var modalBodyLink1 = exampleModal.querySelector('#link1');
  var modalBodyLink2 = exampleModal.querySelector('#link2');

  modalTitle.textContent =  recipient
  modalBodyImg.src = image
  modalBodyText.innerHTML = cardBodyText
  modalBodyLink1.href = cardlink1
  modalBodyLink2.href = cardlink2
})