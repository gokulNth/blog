export function cssScroll() {
  window.onscroll = function () {
    myFunction();
  };
  let navbar = document.getElementById('navbar');
  let cover = document.getElementById('coverImg');
  let headTxt = document.getElementById('headTxt');
  let sticky = navbar.offsetTop;

  function myFunction() {
    cover.style.backgroundPositionY = '-' + 1.2 * window.pageYOffset + 'px';
    headTxt.style.transform = 'translateY(-' + 1.4 * window.pageYOffset + 'px)';
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
}
