import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import { Marginer } from '../../components/marginer';

import Navbar from '../../components/navbar/Navbar';
import TopSection from './TopSection';
// import BookCard from '../../components/bookCard/BookCard';
import BookingSteps from './bookingSteps';
import AboutUs from './AboutUs';
import Services from './Services';
import GallerySection from './GallerySection';
import Footer from '../../components/footer/Footer';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Loader from "../../components/loader/Loader";
import "../../components/loader/loader.scss";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

function HomePage() {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loading
          ? document.querySelector("body")!.classList.add("loading")
          : document.querySelector("body")!.classList.remove("loading");
      }, [loading]);
    return (
        <AnimateSharedLayout type='crossfade'>
              <AnimatePresence>
              {!isMobile && loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
        <PageContainer>
            <Navbar />
            <TopSection />
            <Marginer direction="vertical" margin={isMobile ? "2rem" : "6rem"} />
            {/* <BookCard /> */}
            <BookingSteps />
            <Marginer direction="vertical" margin={isMobile ? "2rem" : "6rem"} />
            <AboutUs />
            <Marginer direction="vertical" margin={isMobile ? "2rem" : "6rem"} />
            <Services />
            <Marginer direction="vertical" margin={isMobile ? "2rem" : "6rem"} />
            <GallerySection />
            <Marginer direction="vertical" margin={isMobile ? "2rem" : "6rem"} />
            <Footer />
        </PageContainer>
        </>
        )}
              </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default HomePage;
