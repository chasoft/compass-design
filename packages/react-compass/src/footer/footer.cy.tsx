import {faCamera, faGlobe} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../button'
import Icon from '../icon'
import Link from '../link'
import {Row} from '../utils'
import Footer from './footer'
import FooterHeader from './footer-header'
import FooterInfo from './footer-info'
import FooterInfoDownload from './footer-info-download'
import FooterInfoSocial from './footer-info-social'
import FooterNavigation from './footer-nav'
import FooterPolicy from './footer-policy'

const navLinks = [
  {
    title: 'About us',
    children: [
      {link: '*', name: 'Profile'},
      {link: '*', name: 'Milestones'},
      {link: '*', name: 'Sustainability'},
      {link: '*', name: 'ConfortUnited'},
      {link: '*', name: 'Careers'},
    ],
  },
  {
    title: 'Promotions',
    children: [
      {link: '*', name: 'Latest Promotions'},
      {link: '*', name: 'Latest Promotions'},
      {link: '*', name: 'Latest Promotions'},
    ],
  },
  {
    title: 'Drive with us',
    children: [
      {link: '*', name: 'Register As A Cabby'},
      {link: '*', name: 'Cabby Portal'},
      {link: '*', name: 'Useful Links'},
    ],
  },
  {
    title: 'News & Media',
    children: [
      {link: '*', name: 'Register As A Cabby'},
      {link: '*', name: 'Cabby Portal'},
    ],
  },
  {
    title: 'Ride with us',
    children: [
      {link: '*', name: 'App Features'},
      {link: '*', name: 'ComfortPoints'},
      {link: '*', name: 'Fares'},
      {link: '*', name: 'Cabcharge'},
      {link: '*', name: 'Seating Capacity'},
      {link: '*', name: 'Cabcharge'},
    ],
  },
  {
    title: 'Train with us',
    children: [
      {link: '*', name: 'Apply Now'},
      {link: '*', name: 'TDVL / PDVL Courses'},
      {link: '*', name: 'Taxi Refresher Course'},
    ],
  },
]

describe('footer.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })
  it('C01: Should render children', () => {
    const footer = (
      <Footer
        css={{
          '& a': {
            color: '$gray70',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '400',
          },
        }}
      >
        <FooterHeader
          className='top-items'
          css={{
            '& .logo': {
              fontSize: '60px',
              color: '$cdgBlue',
              margin: 0,
            },
          }}
        >
          <h1 className='logo'>zig</h1>
          <p>
            <Icon icon={faGlobe} style={{marginRight: '8px'}}></Icon>
            English
          </p>
        </FooterHeader>
        <FooterNavigation
          className='center-items'
          gridNumber={navLinks.length}
          css={{
            '& .footer-nav-title': {
              fontSize: '16px',
              fontWeight: 500,
              margin: 0,
            },
          }}
        >
          {navLinks.map((navItem) => {
            return (
              <div>
                <h3 className='footer-nav-title' style={{fontWeight: 'bold'}}>
                  {navItem.title}
                </h3>
                {navItem.children.map((child) => {
                  return <Link href={child.link}>{child.name}</Link>
                })}
              </div>
            )
          })}
        </FooterNavigation>
        <FooterInfo
          css={{
            '& span': {fontSize: '14px', fontWeight: 600, lineHeight: '21px'},
          }}
        >
          <div>
            <FooterInfoSocial>
              <Icon icon={faCamera} />
              <Icon icon={faCamera} />
              <Icon icon={faCamera} />
            </FooterInfoSocial>
            <span>383 Sin Ming Dr</span>
            <br />
            <span>Singapore 575717</span>
          </div>
          <FooterInfoDownload>
            <Button css={{width: '136px', background: 'black'}}>
              {' '}
              Appstore
            </Button>
            <Button css={{width: '136px', background: 'black'}}>
              {' '}
              Google Play
            </Button>
          </FooterInfoDownload>
        </FooterInfo>
        <FooterPolicy>
          <p style={{margin: 0, lineHeight: '21px'}}>
            2022 ComfortDelGroTaxi. All rights reserved
          </p>
          <Row css={{width: 'fit-content', gap: '16px', flexWrap: 'wrap'}}>
            <Link href='#'>Privacy</Link>
            <Link href='#'>Accessibility</Link>
            <Link href='#'>Terms</Link>
          </Row>
        </FooterPolicy>
      </Footer>
    )

    cy.mount(footer)

    cy.get('.c-jjAuuv-dDGdgw-color-white').should('be.visible')
    // cy.get('p').should('have.text', lorem)
  })
})
