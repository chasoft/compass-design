import BugIcon from '@comfortdelgro/compass-icons/react/bug'
import {
  CarouselSliderButton,
  CarouselSliderItem,
} from '@comfortdelgro/react-compass'

// static doesn't have it yet
import {SocicalIcon} from '@comfortdelgro/react-compass-old'

export const socials: SocicalIcon[] = [
  {
    icon: <BugIcon />,
    url: 'https://www.pinterest.com.au/',
  },
  {icon: <BugIcon />, url: 'https://www.tiktok.com/'},
  {icon: <BugIcon />, url: 'https://telegram.org/'},
]

export const slideData: CarouselSliderItem[] = [
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'Content slider is awesome',
    description: 'You can put whatever you want here',
    buttons: [
      {type: 'primary', label: 'Awesome'},
      {type: 'secondary', label: 'Take a tour'},
    ],
    mask: 0.2,
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'This slide contains buttons',
    description: 'These button can listen and handle user click event',
    alignment: 'center-end',
    buttons: [
      {type: 'primary', label: 'Awesome'},
      {type: 'secondary', label: 'Take a tour'},
    ],
    mask: 0.5,
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
    title: 'This slide has different alignment',
    description: 'You can use the document for the other alignment options',
    alignment: 'end-center',
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'Content slider is awesome',
    description: 'You can put whatever you want here',
    mask: 0.1,
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'This slide contains buttons',
    description: 'These button can listen and handle user click event',
    alignment: 'center-end',
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
    title: 'This slide has different alignment',
    description: 'You can use the document for the other alignment options',
    alignment: 'end-center',
    mask: 0.3,
  },
]

export const buttons: CarouselSliderButton[] = [
  {
    type: 'secondary',
    label: 'Button',
    callback: () => {
      alert('Button clicked')
    },
  },
  {
    type: 'primary',
    label: 'Call action',
    callback: () => {
      alert('Call action clicked')
    },
  },
]
