import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./DesignXr-1.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                DESIGN.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
             <div>
  <p className="max-w-md font-normal text-gray-600 text-base">
    Experience the limitless possibilities of our cutting-edge 3D customization tool to craft a truly one-of-a-kind and prestigious shirt. Explore the depths of your creativity and establish a personal style that sets you apart from the crowd.
  </p>
  <p className="max-w-md font-normal text-gray-600 text-base" style={{marginTop:'12px'}}>
    By <b>Nakarda Richards</b>
  </p>
</div>


              <CustomButton 
                type="filled"
                title="Get Started"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />


<a href="https://github.com/NakardaRichards/DesignXr" target="_blank" rel="noopener noreferrer">
  <CustomButton 
    type="filled"
    title="GitHub"
    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
  />
</a>

            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home