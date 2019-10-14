import { storiesOf } from '@storybook/html';
import channel from '../src/ImageTransition/channel';
import distortionList from '../src/ImageTransition/distortionList';
import distSlider from '../src/ImageTransition/distSlider';
import mosaic from '../src/ImageTransition/mosaic';
import wave from '../src/ImageTransition/wave';

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
