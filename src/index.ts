import 'reset-css';
import sample from './sample';
import texture from './sample/texture';
import distortionList from './ImageTransition/distortionList';
import glitch from './ImageTransition/glitch';
import channel from './ImageTransition/channel';
import mosaic from './ImageTransition/mosaic';
import wave from './ImageTransition/wave';
import distortionSlider from './ImageTransition/distortionSlider';
import zoomBlur from './ImageTransition/zoomBlur';
import shader1 from './ShaderSandbox/1';
import shader2 from './ShaderSandbox/2';
import shader3 from './ShaderSandbox/3';
import shader4 from './ShaderSandbox/4';

window.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(glitch());
  // distortionList(true);
});
