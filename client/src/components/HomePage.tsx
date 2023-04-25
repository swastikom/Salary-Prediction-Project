import React from 'react';
import Form from '@/components/Form';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Footer from '@/components/Footer';

const styles = {
    container: 'absolute bg-blue-100 overflow-hidden',
    heroSection: '-z-10 w-screen',
    formSection: 'z-50 w-screen',
    aboutSection: 'z-0 w-screen bg-white',
};

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heroSection}>
                <HeroSection />
            </div>
            <div className={styles.formSection}>
                <Form />    
            </div>
            <div className={styles.aboutSection}>
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
