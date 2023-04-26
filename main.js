function pop() {
  for (let b = 0; b < 50; b++) {
    const y = Math.random() * window.innerHeight;
    const x = Math.random() * window.innerWidth;
    const speed = Math.floor(Math.random() * 6 + 8) + 's';
    const colors = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const body = document.querySelector('body');
    const balloon_el = document.createElement('div');
    balloon_el.classList.add('balloon');
    balloon_el.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    balloon_el.style.animationDuration = speed;
    balloon_el.style.background = colors;
    balloon_el.addEventListener('click', () => {
      balloon_el.style.display = 'none';
      setTimeout(() => {
        balloon_el.style.display = 'block';
      }, 1000);
    });
    const triangle_el = document.createElement('div');
    triangle_el.classList.add('triangle');
    triangle_el.style.borderBottom = balloon_el.style.background + '7px solid';
    balloon_el.append(triangle_el);
    const string_el = document.createElement('div');
    string_el.classList.add('string');
    balloon_el.append(string_el);
    body.append(balloon_el);
  }
}
pop();