import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: 'grey',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './DesignXr-1.png',
  fullDecal: './DesignXr-1.png',
});

export default state;