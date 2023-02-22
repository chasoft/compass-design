import * as React from 'react'
const BSFlag: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='flag-icons-bs'
    viewBox='0 0 640 480'
    width='1em'
    height='1em'
  >
    <defs>
      <clipPath id='a'>
        <path fillOpacity={0.7} d='M-12 0h640v480H-12z' />
      </clipPath>
    </defs>
    <g fillRule='evenodd' clipPath='url(#a)' transform='translate(12)'>
      <path fill='#fff' d='M968.5 480h-979V1.8h979z' />
      <path fill='#ffe900' d='M968.5 344.5h-979V143.3h979z' />
      <path fill='#08ced6' d='M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z' />
      <path d='M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2-10.9 0z' />
    </g>
  </svg>
)
export default BSFlag
