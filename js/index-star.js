// createStar();

// function createStar() {
  for (let i = 0; i <= 40; i++) {
    let star = this.newStar();
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.width = "7.5px";
    star.style.height = "7.5px";
    document.body.appendChild(star);
  }
// }

function newStar() {
  let d = document.createElement('div');
  d.innerHTML = '<div class="star">';
  return d.firstChild;
}
