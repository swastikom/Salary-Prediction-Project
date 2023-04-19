import React from 'react'
import Image from 'next/image'
import blueImage from '@/images/blueImage.png'
import darkImage from '@/images/darkImage.png'

const styles = {
    wrapper: 'bg-green-600',
    bg: 'mt-20 bg-blue-600',
    container: 'px-64 w-screen flex flex-row justify-between items-center bg-blue-600 relative',
    img: 'transform translate-y-1/4',
    left: 'w-1/2 transform translate-y-1/6',
    leftBottom: 'bottom-0 left-0 h-12 w-full bg-blue-600',
    right: 'w-1/2 flex flex-col justify-center text-center pl-6 italic',
    head: 'p-2 text-8xl font-bold text-white font-cursive',
    head1: 'p-2 text-6xl font-bold text-white ',
    line3: 'p-2 flex flex-row justify-center align-left items-end',
    head2: 'text-6xl font-bold text-white flex flex-row justify-center items-center',
    head3: 'pl-4 text-6xl text-white',
}

const HeroSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <Image src={blueImage} className={styles.img} width={600} alt="blue" />
                    </div>
                    <div className={styles.right}>
                        <h1 className={styles.head}>PREDICT</h1>
                        <h2 className={styles.head1}>your deserved</h2>
                        <div className={styles.line3}>
                            <h2 className={styles.head2}>SALARY  </h2>
                            <p className={styles.head3}>today !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
