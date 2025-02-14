import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {Row} from '../utils/components'
import Avatar from './index'

const images = [
  'https://i.pravatar.cc/150?img=32',
  'https://i.pravatar.cc/150?img=31',
  'https://i.pravatar.cc/150?u=a048581f4e29026701d',
  'https://i.pravatar.cc/150?img=60',
  'https://i.pravatar.cc/150?u=a042581f4e29026704d',
] as const

export const Individual = () => (
  <>
    <h3>1. Image Avatar</h3>

    <Row>
      <Avatar label='Albert Einstein' image={images[0]} size='lg' />
      <Avatar label='Albert Einstein' image={images[1]} size='md' />
      <Avatar label='Albert Einstein' image={images[2]} size='sm' />
      <Avatar label='Albert Einstein' image={images[3]} size='xs' />
      <Avatar label='Albert Einstein' image={images[4]} size='xxs' />
    </Row>

    <h3>2. Letter Avatar</h3>

    <Row>
      <Avatar label='Albert Einstein' size='lg' />
      <Avatar label='Albert Einstein' size='md' />
      <Avatar label='Albert Einstein' size='sm' />
      <Avatar label='Albert Einstein' size='xs' />
      <Avatar label='Albert Einstein' size='xxs' />
    </Row>

    <h3>3. Icon Avatar</h3>

    <Row>
      <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='lg' />
      <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='md' />
      <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='sm' />
      <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='xs' />
      <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='xxs' />
    </Row>
  </>
)

export const Grouped = () => (
  <>
    <h3>1. Extra Extra Small</h3>
    <Avatar.Group display={5} size='xxs' disabledAnimation>
      <Avatar label='Leonhard Euler' image={images[0]} size='xxs' />
      <Avatar label='Isaac Newton' image={images[1]} size='xxs' />
      <Avatar label='Alan Turing' image={images[2]} size='xxs' />
      <Avatar label='David Hilbert' image={images[3]} size='xxs' />
      <Avatar label='Edwin Hubble' image={images[4]} size='xxs' />
      <Avatar label='Ada Lovelace' image={images[0]} size='xxs' />
      <Avatar label='Max Planck' image={images[1]} size='xxs' />
    </Avatar.Group>
    <h3>2. Extra Small</h3>
    <Avatar.Group display={5} size='xs' disabledAnimation>
      <Avatar label='Leonhard Euler' image={images[0]} size='xs' />
      <Avatar label='Isaac Newton' image={images[1]} size='xs' />
      <Avatar label='Alan Turing' image={images[2]} size='xs' />
      <Avatar label='David Hilbert' image={images[3]} size='xs' />
      <Avatar label='Edwin Hubble' image={images[4]} size='xs' />
      <Avatar label='Ada Lovelace' image={images[0]} size='xs' />
      <Avatar label='Max Planck' image={images[1]} size='xs' />
    </Avatar.Group>
    <h3>3. Small</h3>
    <Avatar.Group display={5} size='sm' disabledAnimation>
      <Avatar label='Leonhard Euler' image={images[0]} size='sm' />
      <Avatar label='Isaac Newton' image={images[1]} size='sm' />
      <Avatar label='Alan Turing' image={images[2]} size='sm' />
      <Avatar label='David Hilbert' image={images[3]} size='sm' />
      <Avatar label='Edwin Hubble' image={images[4]} size='sm' />
      <Avatar label='Ada Lovelace' image={images[0]} size='sm' />
      <Avatar label='Max Planck' image={images[1]} size='sm' />
    </Avatar.Group>
    <h3>4. Medium</h3>
    <Avatar.Group display={5} size='md' disabledAnimation>
      <Avatar label='Leonhard Euler' image={images[0]} size='md' />
      <Avatar label='Isaac Newton' image={images[1]} size='md' />
      <Avatar label='Alan Turing' image={images[2]} size='md' />
      <Avatar label='David Hilbert' image={images[3]} size='md' />
      <Avatar label='Edwin Hubble' image={images[4]} size='md' />
      <Avatar label='Ada Lovelace' image={images[0]} size='md' />
      <Avatar label='Max Planck' image={images[1]} size='md' />
    </Avatar.Group>
    <h3>5. Large</h3>
    <Avatar.Group display={5} size='lg' disabledAnimation>
      <Avatar label='Leonhard Euler' image={images[0]} size='lg' />
      <Avatar label='Isaac Newton' image={images[1]} size='lg' />
      <Avatar label='Alan Turing' image={images[2]} size='lg' />
      <Avatar label='David Hilbert' image={images[3]} size='lg' />
      <Avatar label='Edwin Hubble' image={images[4]} size='lg' />
      <Avatar label='Ada Lovelace' image={images[0]} size='lg' />
      <Avatar label='Max Planck' image={images[1]} size='lg' />
    </Avatar.Group>
  </>
)
