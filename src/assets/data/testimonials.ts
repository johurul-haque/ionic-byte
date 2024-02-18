import { StaticImageData } from 'next/image';
import {
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
} from '../images/people';

type Testimonials = {
  name: string;
  message: string;
  img: StaticImageData;
}[];

export const testimonials: Testimonials = [
  {
    name: 'James Brown',
    message:
      'To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With IonicByte, we can produce higher quality work more quickly.',
    img: person1,
  },
  {
    name: 'Ismael Ameen',
    message:
      'IonicByte has been a great platform to stay competitive in the digital transformation of the workplace by delivering fresh, relevant, personalized on-demand projects.',
    img: person4,
  },
  {
    name: 'William Turner',
    message:
      "IonicByte transformed our online presence with their exceptional website development skills. They not only understood our vision but also added their creative touch to make our website stand out. The team's professionalism and attention to detail ensured a seamless development process from start to finish. Highly recommended!",
    img: person3,
  },
  {
    name: 'Richard Evans',
    message:
      'Working with IonicByte on our UI/UX design was an absolute pleasure. They have a keen eye for aesthetics and user experience, resulting in a design that perfectly reflects our brand identity while also being intuitive for our users. Their collaborative approach and willingness to iterate until perfection made them our go-to choice for design solutions.',
    img: person2,
  },
  {
    name: 'Daniel Carter',
    message:
      'Choosing IonicByte for our Shopify development needs was one of the best decisions we made for our e-commerce business. From customizing themes to optimizing performance, their expertise and dedication ensured that our online store not only looked great but also functioned flawlessly. Their timely communication and support throughout the project were truly commendable.',
    img: person5,
  },
  {
    name: 'Thomas',
    message:
      'IonicByte played a pivotal role in elevating my personal brand to new heights. They took the time to understand my unique story and goals, crafting a branding strategy that resonated with my audience on a deeper level. With their guidance, I was able to establish a strong online presence and differentiate myself in a crowded market. Thank you, IonicByte, for helping me stand out!',
    img: person6,
  },
];
