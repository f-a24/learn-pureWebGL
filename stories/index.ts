import { storiesOf } from '@storybook/html';
import channel from '../src/ImageTransition/channel';
import distortionList from '../src/ImageTransition/distortionList';
import distSlider from '../src/ImageTransition/distortionSlider';
import glitch from '../src/ImageTransition/glitch';
import mosaic from '../src/ImageTransition/mosaic';
import wave from '../src/ImageTransition/wave';
import zoomBlur from '../src/ImageTransition/zoomBlur';
import shader1 from '../src/ShaderSandbox/1';
import shader2 from '../src/ShaderSandbox/2';
import shader3 from '../src/ShaderSandbox/3';
import shader4 from '../src/ShaderSandbox/4';
import sample from '../src/sample';
import texture from '../src/sample/texture';

storiesOf('ImageTransition', module)
  .add('channel', () => {
    document.body.innerHTML = '';
    document.body.appendChild(channel());
    return '';
  })
  .add('distortion-list : image', () => {
    document.body.innerHTML = '';
    distortionList(true);
    return '';
  })
  .add('distortion', () => {
    document.body.innerHTML = '';
    document.body.appendChild(distSlider());
    return '';
  })
  .add('glitch', () => {
    document.body.innerHTML = '';
    document.body.appendChild(glitch());
    return '';
  })
  .add('mosaic', () => {
    document.body.innerHTML = '';
    document.body.appendChild(mosaic());
    return '';
  })
  .add('wave', () => {
    document.body.innerHTML = '';
    document.body.appendChild(wave());
    return '';
  })
  .add('zoomBlur', () => {
    document.body.innerHTML = '';
    document.body.appendChild(zoomBlur());
    return '';
  });

storiesOf('ShaderSandbox', module)
  .add('1', () => {
    document.body.innerHTML = '';
    document.body.appendChild(shader1());
    return '';
  })
  .add('2', () => {
    document.body.innerHTML = '';
    document.body.appendChild(shader2());
    return '';
  })
  .add('3', () => {
    document.body.innerHTML = '';
    document.body.appendChild(shader3());
    return '';
  })
  .add('4', () => {
    document.body.innerHTML = '';
    document.body.appendChild(shader4());
    return '';
  });

storiesOf('WebGL Sample', module)
  .add('sample', () => {
    document.body.innerHTML = '';
    document.body.appendChild(sample());
    return '';
  })
  .add('texture', () => {
    document.body.innerHTML = '';
    document.body.appendChild(texture());
    return '';
  });
