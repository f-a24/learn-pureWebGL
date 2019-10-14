import 'reset-css';
import sample from './sample';
import distortionList from './ImageTransition/distortionList';
import channel from './ImageTransition/channel';
import mosaic from './ImageTransition/mosaic';
import wave from './ImageTransition/wave';
import distortionSlider from './ImageTransition/distortionSlider';
import shader1 from './ShaderSandbox/1';
import shader2 from './ShaderSandbox/2';

window.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(shader2());
  // distortionList(true);
});
