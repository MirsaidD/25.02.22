
//article1
let details = document.querySelectorAll('details');
details.forEach((details) => {
  details.addEventListener('toggle', function (e) {
    let article = document.querySelector(`${e.target.id}`);
    article.style.display = 'none';
    article.style.float = 'left';

  });
});