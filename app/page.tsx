'use client';
import WelcomeCarousel from './components/WelcomeCarousel/WelcomeCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import HeroContent from './components/HeroContent/HeroContent';
import Navbar from './navbar';



const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Home = () => {
  const navLinks = [
    { label: 'Home', targetId: 'hero' },
    { label: 'Carousel', targetId: 'carousel' },
    { label: 'Blog', targetId: 'blog' },
  ];

  return (
    <>
      <div className='header__wrapper'>
        <HeroContent />
        <Navbar logo="/cmadvocatus/app/favicon.ico" links={navLinks} />
      </div>
      <div id=''>
        <WelcomeCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
      <p>
        TEEEEEEST
      </p>
    </>
  );
}


export default Home