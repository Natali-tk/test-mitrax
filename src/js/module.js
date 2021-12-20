const refs = {
  controlsBtn: document.querySelector('#tabs-1 [data-controls-btn]'),
  controls: document.querySelector('#tabs-1 [data-controls-link]'),
  modules: document.querySelector('#tabs-1 [data-modules]'),
};

refs.controlsBtn.addEventListener('click', onClickTabsBtn);
refs.controls.addEventListener('click', onClickTabsLink);

function onClickTabsBtn(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'A') return;
  const currentActiveControlItem = refs.controlsBtn.querySelector('.active');
  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('active');
    const moduleId = currentActiveControlItem.getAttribute('href').slice(1);
    const module = refs.modules.querySelector(`#${moduleId}`);
    module.classList.remove('active');
  }
  const controlItem = event.target;
  controlItem.classList.add('active');
  const moduleId = controlItem.getAttribute('href').slice(1);
  const module = refs.modules.querySelector(`#${moduleId}`);
  module.classList.add('active');
}

function onClickTabsLink(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'P' && event.target.nodeName !== 'A') return;
  const currentActiveControlItem = refs.controls.querySelector('.link-active');
  console.log(currentActiveControlItem);
  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('link-active');
    const moduleId = currentActiveControlItem.getAttribute('href').slice(1);
    const module = refs.modules.querySelector(`#${moduleId}`);
    module.classList.remove('active');
  }
  const controlItem = event.target.parentNode;
  controlItem.classList.add('link-active');
  const moduleId = controlItem.getAttribute('href').slice(1);
  const module = refs.modules.querySelector(`#${moduleId}`);
  module.classList.add('active');
}
