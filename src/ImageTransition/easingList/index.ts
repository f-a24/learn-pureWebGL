import easing from './easing';

const easingList = (auto: boolean) => {
  document.body.appendChild(distortionHeader(auto));
  const distortionArea = document.createElement('div');
  distortionArea.style.display = 'flex';
  distortionArea.style.alignItems = 'center';
  distortionArea.style.justifyContent = 'space-evenly';
  distortionArea.style.padding = '1rem';
  distortionArea.style.flexWrap = 'wrap';
  for (let i = 1; i <= 16; i++) {
    distortionArea.appendChild(easing(`${i}`, auto));
  }
  document.body.appendChild(distortionArea);
};

const distortionHeader = (auto: boolean) => {
  const titleBlock = document.createElement('div');
  titleBlock.style.padding = '1rem 1rem 0';
  titleBlock.style.display = 'flex';
  titleBlock.style.alignItems = 'center';
  const title = document.createElement('h1');
  title.style.display = 'inline-block';
  title.style.marginRight = '1rem';
  title.textContent = 'Distortion Sample Page';
  titleBlock.appendChild(title);
  const inputAuto = document.createElement('input');
  inputAuto.type = 'checkbox';
  inputAuto.id = 'autoCheck';
  inputAuto.checked = auto;
  inputAuto.addEventListener('change', (e) => {
    document.body.innerHTML = '';
    easingList((e.target as HTMLInputElement).checked);
  });
  const inputAutoLabel = document.createElement('label');
  inputAutoLabel.htmlFor = 'autoCheck';
  inputAutoLabel.textContent = 'Auto';
  titleBlock.appendChild(inputAuto);
  titleBlock.appendChild(inputAutoLabel);
  return titleBlock;
};

export default easingList;
