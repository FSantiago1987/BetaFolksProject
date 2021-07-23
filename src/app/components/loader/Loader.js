import React, { useEffect } from "react";
import ImageLoader from "../imageLoader/ImageLoader";
import {motion} from 'framer-motion';
import styled from "styled-components";
import { SCREENS } from "../responsive";


const containerVarients = {
  show:{
    transition:{
      staggerChildren: 0.35
    }
  }
}

const itemVariantes = {
  hidden:{
    opacity:0,
    y: 200
  },
  show: {
    opacity:1,
    y: 0,
    transition:{
      ease:[.6, .01, -.05, .95],
      duration: 1.6
    }
  },
  exit:{
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 1.8
    }
  }
}

const itemMain = {
  hidden: {opacity:0, y:200},
  show:{
    opacity:1,
    y:0,
    transition:{
      ease:[.6, .01, -.05, .95],
      duration: 1.6
    }
  },
  exit:{
    opacity: 0,
    scale:1,
    transition: {
      ease: "easeInOut",
      duration: 2.5,
      delay:1
    }
  }
}


const LoaderContainer = styled.div`

`;

const Loader = ({ setLoading }) => {
  return (
    <LoaderContainer className='loader'>
      <motion.div className='loader-inner'
        variants={containerVarients}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={()=> setLoading(false)}
      >
        <ImageBlock variants={itemVariantes} id='image-1' />
        <motion.div className='transition-image'
          variants={itemMain}
        >
          <motion.img
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            alt='random alt'
            layoutId='main-image-1'
            transition={{ ease:[.6, .01, -.05, .95], duration: 1.6}}
          />
        </motion.div>
        <ImageBlock variants={itemVariantes} id='image-3' />
        <ImageBlock variants={itemVariantes} id='image-4' />
        <ImageBlock variants={itemVariantes} id='image-5' />
      </motion.div>
    </LoaderContainer>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div className={`image-block ${id}`}
      variants={variants}
      >
      <ImageLoader
        src={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
