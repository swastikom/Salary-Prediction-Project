
import Form from '@/components/Form';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Footer from '@/components/Footer';

const styles = {
    container: 'flex flex-col justify-between items-top bg-blue-600 overflow-hidden',
    heroSection: 'w-full',
    formSection: 'w-full',
    aboutSection: 'w-full bg-white',
    form: '',
};

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heroSection}>
                <HeroSection />
            </div>
            <div className={styles.formSection}>
                {/* <Form /> */}
            </div>
            <div className={styles.aboutSection}>
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
