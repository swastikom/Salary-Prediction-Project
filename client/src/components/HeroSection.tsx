import React from 'react'
import Image from 'next/image'
import blueImage from '@/images/blueImage.png'
import darkImage from '@/images/darkImage.png'

const styles = {
    wrapper: 'bg-green-500 ',
    bg: 'bg-blue-500 -z-10',
    container: 'px-72 w-screen flex md:flex-row flex-col justify-between bg-blue-500 relative',
    img: 'translate-y-[29.5%] w-full h-full object-cover',
    left: 'z-10 pr-12 w-[100rem] translate md:skew-y-3',
    leftBottom: 'bottom-0 left-0 h-12 w-full bg-blue-500',
    right: 'z-30 mt-56 flex flex-col justify-center text-center pl-6 italic',
    head: 'p-2 text-8xl font-bold text-white font-cursive',
    head1: 'p-2 text-6xl font-bold text-white ',
    line3: 'p-2 flex flex-row justify-center align-left items-end',
    head2: 'text-6xl font-bold text-white flex flex-row justify-center items-center',
    head3: 'pl-4 text-6xl text-white',
    box:'-z-30 h-20 w-full bg-blue-500 skew-y-3 translate-y-[50%] overflow',
}

const HeroSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <Image src={blueImage} className={styles.img} alt="blue" />
                    </div>
                    <div className={styles.right}>
                        <h1 className={styles.head}>PREDICT</h1>
                        <h2 className={styles.head1}>your deserved</h2>
                        <div className={styles.line3}>
                            <h2 className={styles.head2}>SALARY  </h2>
                            <p className={styles.head3}>today!</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box}></div>
            </div>
        </div>
    )
}

export default HeroSection
