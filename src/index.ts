import 'reset-css';
import './ImageTransition/distortion.scss';

import distortionList from './ImageTransition/distortionList';
import channel from './ImageTransition/channel';
import mosaic from './ImageTransition/mosaic';
import wave from './ImageTransition/wave';
import distSlider from './ImageTransition/distSlider';

window.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(distSlider());
  // distortionList(true);
});
