import { motion} from 'framer-motion';

import {styles} from '../styles'
import flower from '../assets/flower.png';
import smiley from '../assets/smiley.png';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <img src={flower} alt='Rhea Kapadia Flower' className="w-[20%] h-[30%] mt-8 object-contain"></img>
      
      <div className={`${styles.paddingX} absolute
      inset-0 top-[35%] max-w-7xl mx-auto flex 
      flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#231ff8]'/>
          <div className='w-1 sm:h-80 h-40 blue-purple-gradient'/>
        </div>
        <div>
          <h1 className={` text-black lg:text-[60px] sm:text-[40px] xs:text-[60px] text-[40px] lg:leading-[50px] mt-2`}>Hi, I'm </h1>
          <h1 className={`${styles.heroHeadText}`}>Rhea Kapadia</h1>
        <p className={`${styles.heroSubText} mt-2 text-black`}>
          I develop 3D visuals, user <br className='sm:block hidden'/> interfaces, and web applications.
        </p>
        </div>
        <img src={smiley} alt='Rhea Kapadia Smiley' className="w-[30%] h-[35%] object-contain"></img>
      </div>
      <img src={smiley} alt='Rhea Kapadia Smiley Face' className="w-[22%] h-[22%] mt-[25%] ml-60 object-contain"></img>
      <img src={flower} alt='Rhea Kapadia Flower' className="w-[22%] h-[22%] -mt-[15rem] ml-[58rem] object-contain"></img>
      </section>
  )
}

export default Hero