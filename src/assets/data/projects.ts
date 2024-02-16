import { StaticImageData } from 'next/image';
import { chowheaven, fusionHub, headphonesSite, munchspot } from '../projects';

type Projects = {
  name: string;
  url: string;
  img: StaticImageData;
}[];

export const projects: Projects = [
  {
    name: 'Phone Fusion Hub',
    url: 'https://phonefusion.netlify.app/',
    img: fusionHub,
  },
  {
    name: 'MunchSpot',
    url: 'https://munchspot.netlify.app/',
    img: munchspot,
  },
  {
    name: 'Chow Haven',
    url: 'https://chowhaven.netlify.app/',
    img: chowheaven,
  },
  {
    name: 'Headphone Showcasing site',
    url: 'https://headset3.netlify.app/',
    img: headphonesSite,
  },
];
