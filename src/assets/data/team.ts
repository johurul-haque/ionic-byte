import { StaticImageData } from 'next/image';
import { adi, ehsan, zunayed } from '../images/people';

type Team = {
  name: string;
  role: string;
  img: StaticImageData;
}[];

export const teamMembers: Team = [
  {
    name: 'Marzuk Adi',
    role: 'Founder',
    img: adi,
  },
  {
    name: 'Md Zunayed Howlader',
    role: 'Co - Founder',
    img: zunayed,
  },
  {
    name: 'Ehsan Saikat',
    role: 'Vice President',
    img: ehsan,
  },
];
