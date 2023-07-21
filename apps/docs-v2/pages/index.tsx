import {Divider} from '@comfortdelgro/react-compass'
import Head from 'components/common/Head'
import MarkdownLinks from 'components/common/MarkdownLinks'
import Banner from 'components/home/Banner'
import Introduction from 'components/home/Introduction'
import Hero from '../components/home/Hero'
import ReactCompass from '../components/home/ReactCompass'
import AppFooter from '../components/layouts/AppFooter'

export default function Home() {
  return (
    <>
      <Head
        title='Compass Design: The React component library you always wanted'
        description='Compass Design: The React component library you always wanted'
      ></Head>
      <main id='main-content'>
        <MarkdownLinks />
        <Banner />
        <Hero />
        <Introduction />
        <ReactCompass />
        <Divider />
      </main>
      <AppFooter />
    </>
  )
}