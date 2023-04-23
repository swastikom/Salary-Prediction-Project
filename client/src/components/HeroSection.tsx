import React from 'react'
import Image from 'next/image'
import blueImage from '@/images/blueImage.png'
import darkImage from '@/images/darkImage.png'

const styles = {
    wrapper: 'bg-green-600 h-[40vh]',
    bg: 'mt-20 bg-blue-600',
    container: 'px-64 w-screen flex flex-row bg-blue-600 relative',
    img: '-z-10 transform translate-y-1/4 w-full h-full object-cover',
    left: 'z-20 w-[100rem] transform -translate-y-[9.50%] translate skew-y-3',
    leftBottom: 'bottom-0 left-0 h-12 w-full bg-blue-600',
    right: 'z-30 pl-16 flex flex-col justify-center text-center pl-6 italic',
    head: 'p-2 text-8xl font-bold text-white font-cursive',
    head1: 'p-2 text-6xl font-bold text-white ',
    line3: 'p-2 flex flex-row justify-center align-left items-end',
    head2: 'text-6xl font-bold text-white flex flex-row justify-center items-center',
    head3: 'pl-4 text-6xl text-white',
    box:'h-40 w-full bg-blue-600 transform skew-y-3 overflow -translate-y-[75%] overflow',
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
