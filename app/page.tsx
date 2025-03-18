import { EmblaOptionsType } from 'embla-carousel';
import Navbar from '@/app/navbar';
import HeroContent from '@/app/components/HeroContent/HeroContent';
import WelcomeCarousel from '@/app/components/WelcomeCarousel/WelcomeCarousel'
import QuickGrid from '@/app/components/QuickGrid/QuickGrid';
import Footer from '@/app/components/Footer/Footer';
import Contact from '@/app/components/Contact/Contact';
import AboutTeam from '@/app/components/About/AboutTeam';
import AboutEnterprise from '@/app/components/About/AboutEnterprise';
import BlogPosts from '@/app/components/BlogPosts/BlogPosts';

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

const Home = () => {
  const navLinks = [
    { label: 'Home', targetId: 'carousel' },
    { label: 'Blog', targetId: 'blog' },
    { label: 'Acerca', targetId: 'acerca' },
    { label: 'A Equipa', targetId: 'acercaEquipa' },
  ];

  return (
    <>
      <div className='header__wrapper'>
        <HeroContent onBlog={false} />
        <Navbar links={navLinks} onBlog={false} />
      </div>
      <WelcomeCarousel options={OPTIONS} />
      <QuickGrid />
      <BlogPosts />
      <AboutEnterprise />
      <AboutTeam />
      <Contact />
      <Footer links={navLinks} onBlog={false} />
    </>
  );
}


export default Home