import { EmblaOptionsType } from 'embla-carousel'
import HeroContent from '@/app/components/HeroContent/HeroContent';
import Navbar from '@/app/navbar';
import WelcomeCarousel from '@/app/components/WelcomeCarousel/WelcomeCarousel'
import QuickGrid from '@/app/components/QuickGrid/QuickGrid';
import Footer from '@/app/components/Footer/Footer';
import Contact from '@/app/components/Contact/Contact';
import AboutTeam from '@/app/components/About/AboutTeam';
import AboutEnterprise from '@/app/components/About/AboutEnterprise';
import BlogPosts from '@/app/components/BlogPosts/BlogPosts'


const LOGO = "/cmadvocatus/app/favicon.ico";
const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const COLAB_COUNT = 5;
const COLABS = Array.from(Array(COLAB_COUNT).keys());
const TEL = 'xxx xxx xxx';
const EMAIL = 'xxx-xxx@xxx.xx';
const MOR = 'NºXX Praça da República Apartado 244, 3810-156 Aveiro';

const Home = () => {
  const navLinks = [
    { label: 'Home', targetId: 'carousel' },
    { label: 'Blog', targetId: 'blog' },
    { label: 'Acerca', targetId: 'about' },
    { label: 'A Equipa', targetId: 'aboutTeam' },
  ];

  return (
    <>
      <div className='header__wrapper'>
        <HeroContent tel={TEL} email={EMAIL} />
        <Navbar logo={LOGO} links={navLinks} />
      </div>
      <WelcomeCarousel slides={SLIDES} options={OPTIONS} />
      <QuickGrid />
      <BlogPosts />
      <AboutEnterprise />
      <AboutTeam colab={COLABS} />
      <Contact />
      <Footer tel={TEL} email={EMAIL} morada={MOR} />
    </>
  );
}


export default Home