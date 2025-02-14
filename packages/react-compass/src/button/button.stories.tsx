import {
  faBars,
  faBell,
  faChevronDown,
  faClose,
  faExclamationTriangle,
  faMapMarkerAlt,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Icon} from '../icon'
import Typography from '../typography'
import {Column, Row} from '../utils/components'
import Button from './index'

export const Variations: React.FC = () => (
  <Column>
    <h3>1. Variants</h3>
    <Row>
      <Button css={{width: '250px'}} onClick={(e) => console.log('click', e)}>
        Primary
      </Button>
      <Button variant='primary' onPress={() => console.log('pressed')}>
        Primary
      </Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='danger'>Danger</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button isDisabled>Disabled</Button>
    </Row>

    <Typography.Header variant='header5' css={{marginTop: '$4'}}>
      Disabled state
    </Typography.Header>
    <Row>
      <Button variant='primary' isDisabled>
        Primary
      </Button>
      <Button variant='secondary' isDisabled>
        Secondary
      </Button>
      <Button variant='danger' isDisabled>
        Danger
      </Button>
      <Button variant='ghost' isDisabled>
        Ghost
      </Button>
    </Row>
    <h3>2. Sizes</h3>
    <Row>
      <Button size='lg'>Large</Button>
      <Button size='md'>Medium (Default)</Button>
      <Button size='sm'>Small</Button>

      <div style={{width: '300px', flexShrink: 0}}>
        <Button size='md' fullWidth>
          Medium (Block)
        </Button>
      </div>
    </Row>
    <h3>3. Ripple effect when being clicked</h3>
    <Row>
      <Button
        ripple
        type='submit'
        variant='primary'
        onClick={() => console.log('clicked')}
        onPress={() => console.log('pressed')}
      >
        Primary
      </Button>
      <Button ripple variant='secondary'>
        Secondary
      </Button>
      <Button ripple variant='danger'>
        Danger
      </Button>
      <Button ripple variant='ghost'>
        Ghost
      </Button>
    </Row>
    <h3>4. Left Icons</h3>
    <Row>
      <Button variant='primary' leftIcon={<Icon icon={faChevronDown} />}>
        Primary
      </Button>
      <Button variant='secondary' leftIcon={<Icon icon={faChevronDown} />}>
        Secondary
      </Button>
      <Button variant='danger' leftIcon={<Icon icon={faChevronDown} />}>
        Danger
      </Button>
      <Button variant='ghost' leftIcon={<Icon icon={faChevronDown} />}>
        Ghost
      </Button>
      <Button isDisabled leftIcon={<Icon icon={faChevronDown} />}>
        Disabled
      </Button>
    </Row>
    <h3>5. Right Icons</h3>
    <Row>
      <Button variant='primary' rightIcon={<Icon icon={faChevronDown} />}>
        Primary
      </Button>
      <Button variant='secondary' rightIcon={<Icon icon={faChevronDown} />}>
        Secondary
      </Button>
      <Button variant='danger' rightIcon={<Icon icon={faChevronDown} />}>
        Danger
      </Button>
      <Button variant='ghost' rightIcon={<Icon icon={faChevronDown} />}>
        Ghost
      </Button>
      <Button isDisabled rightIcon={<Icon icon={faChevronDown} />}>
        Disabled
      </Button>
    </Row>
    <h3>6. both Left & Right Icons</h3>
    <Row>
      <Button
        variant='primary'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
        css={{width: '350px'}}
      >
        Primary
      </Button>
      <Button
        variant='secondary'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Secondary
      </Button>
      <Button
        variant='danger'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Danger
      </Button>
      <Button
        variant='ghost'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Ghost
      </Button>
      <Button
        isDisabled
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Disabled
      </Button>
    </Row>
    <h3>7. With only Icons</h3>
    <Row>
      <Button variant='primary'>
        <Icon icon={faBars} />
      </Button>
      <Button variant='secondary'>
        <Icon icon={faClose} />
      </Button>
      <Button variant='danger'>
        <Icon icon={faExclamationTriangle} />
      </Button>
      <Button variant='ghost'>
        <Icon icon={faBell} />
      </Button>
      <Button isDisabled>
        <Icon icon={faUserEdit} />
      </Button>
    </Row>
    <h3>8. Loading</h3>
    <Row>
      <Button
        loading
        variant='primary'
        onClick={() => console.log('click loading')}
      >
        Primary
      </Button>
      <Button loading variant='secondary'>
        Secondary
      </Button>
      <Button loading variant='danger'>
        Danger
      </Button>
      <Button loading variant='ghost'>
        Ghost
      </Button>
      <Button loading isDisabled>
        Disabled
      </Button>
    </Row>
    <h3>9. Act as a link</h3>
    <Row>
      <Button href='/#page' variant='primary'>
        Primary
      </Button>
      <Button href='https://google.com' hrefExternal variant='secondary'>
        Google
      </Button>
      <Button href='/#page' variant='danger' hrefTarget='_blank'>
        Danger
      </Button>
      <Button href='/#page' variant='ghost'>
        Ghost
      </Button>
    </Row>
    <h3>10. H5</h3>
    <Row>
      <Button variant='primary' h5 onPress={() => console.log('pressed')}>
        Primary
      </Button>
      <Button variant='secondary' h5>
        Secondary
      </Button>
      <Button variant='danger' h5>
        Danger
      </Button>
      <Button isDisabled h5>
        Disabled
      </Button>
    </Row>
    <h3>Square button</h3>
    <Row>
      <Button
        variant='primary'
        onPress={() => console.log('pressed')}
        isSquare={true}
      >
        Primary
      </Button>
      <Button variant='secondary' isSquare={true}>
        Secondary
      </Button>
      <Button variant='danger' isSquare={true}>
        Danger
      </Button>
      <Button isDisabled isSquare={true}>
        Disabled
      </Button>
    </Row>
    <Row>
      <Button variant='primary' isSquare={true}>
        <Icon icon={faBars} />
      </Button>
      <Button variant='secondary' isSquare={true}>
        <Icon icon={faClose} />
      </Button>
      <Button variant='danger' isSquare={true}>
        <Icon icon={faExclamationTriangle} />
      </Button>
      <Button variant='ghost' isSquare={true}>
        <Icon icon={faBell} />
      </Button>
      <Button isDisabled isSquare={true}>
        <Icon icon={faUserEdit} />
      </Button>
    </Row>
  </Column>
)
