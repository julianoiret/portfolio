const readMoreButton = document.querySelectorAll('.read-more-button');
const closeButton = document.querySelectorAll('.close-button');

readMoreButton.forEach(element => {
  element.addEventListener('click', event => {
    const sideACard = event.currentTarget.parentElement;
    sideACard.classList.add('hidden');
    const sideBCard = event.currentTarget.parentElement.nextElementSibling;
    sideBCard.classList.remove('hidden');
     console.log("Hide side 1 card and show side 2 card");
  })
});

closeButton.forEach(element => {
  element.addEventListener('click', event => {
    const sideACard = event.currentTarget.parentElement;
    console.log("Hide side 2 card and show side 1 card");
    sideACard.classList.add('hidden');
    const sideBCard = event.currentTarget.parentElement.previousElementSibling;
    sideBCard.classList.remove('hidden');
    console.log("Hide side 2 card and show side 1 card");
  })
});
