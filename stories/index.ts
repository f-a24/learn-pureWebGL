import { storiesOf } from '@storybook/html';
import channel from '../src/ImageTransition/channel';
import distortionList from '../src/ImageTransition/distortionList';
import distSlider from '../src/ImageTransition/distortionSlider';
import mosaic from '../src/ImageTransition/mosaic';
import wave from '../src/ImageTransition/wave';
import shader1 from '../src/ShaderSandbox/1';
import shader2 from '../src/ShaderSandbox/2';
import sample from '../src/sample';

storiesOf('ImageTransition', module)
  .add('channel', () => {
    document.body.innerHTML = '';
    document.body.appendChild(channel());
    return '';
  })
  .add('distortion', () => {
    document.body.innerHTML = '';
    distortionList(true);
    return '';
  })
  .add('distSlder', () => {
    document.body.innerHTML = '';
    document.body.appendChild(distSlider());
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
  });

storiesOf('WebGL Sample', module).add('sample', () => {
  document.body.innerHTML = '';
  document.body.appendChild(sample());
  return '';
});
