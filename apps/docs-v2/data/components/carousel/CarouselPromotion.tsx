import {CarouselSlider, CarouselSliderItem} from '@comfortdelgro/react-compass'

const slideData: CarouselSliderItem[] = [
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
const PromotionSlider = () => {
  return (
    <div
      className='content-slider-sample'
      style={{width: '100%', height: '350px'}}
    >
      <CarouselSlider.Promotion data={slideData} />
    </div>
  )
}
export default PromotionSlider
