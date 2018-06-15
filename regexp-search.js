'use strict';

const regExpSearch = () => {

  var regExpQuery = prompt('Поиск по регулярному выражению', '');
  if (!regExpQuery) return;

  const regExp = new RegExp(`(${regExpQuery})`, 'ig'),
        textContent = document.body.textContent + '';

  const search = () => {
    const result = regExp.test(textContent);
    if (!result) {
      alert('Конец');
      return;
    }
    const capture = RegExp.$1;
    window.find(capture);
    setTimeout(() => {
      if (capture && confirm(capture + '\nИскать дальше?')) {
        search();
      } else {
        alert('Конец');
      }
    });
  }
  search();
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', event => {
    if (
      event.ctrlKey &&
      event.shiftKey &&
      event.keyCode === 0x46
    ) {
      event.preventDefault();
      event.stopPropagation();
      regExpSearch();
      return false;
    }
  });
});
