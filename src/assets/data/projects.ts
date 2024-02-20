import { StaticImageData } from 'next/image';
import { chowheaven, fusionHub, headphonesSite, munchspot } from '../images/projects';

type Projects = {
  name: string;
  url: string;
  img: StaticImageData;
  description: string;
}[];

const description =
  'Mancoding is a biggest company in Indonesia, which provides the best services in developing websites using Shopify and Wordpress.';

export const projects: Projects = [
  {
    name: 'Phone Fusion Hub',
    url: 'https://phonefusion.netlify.app/',
    img: fusionHub,
    description,
  },
  {
    name: 'MunchSpot',
    url: 'https://munchspot.netlify.app/',
    img: munchspot,
    description,
  },
  {
    name: 'Chow Haven',
    url: 'https://chowhaven.netlify.app/',
    img: chowheaven,
    description,
  },
  {
    name: 'Headphone Showcasing site',
    url: 'https://headset3.netlify.app/',
    img: headphonesSite,
    description,
  },
];
