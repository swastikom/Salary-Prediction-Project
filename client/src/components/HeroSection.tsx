import React from 'react'
import Image from 'next/image'
import blueImage from '@/images/blueImage.png'
import darkImage from '@/images/darkImage.png'

const styles = {
    container: 'flex flex-col justify-between items-top bg-blue-600 overflow-hidden',
    bg: 'bg-blue-600',
    img:'',
    left: 'w-1/2',
    right: 'w-1/2',

}

const HeroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image src={blueImage} className={styles.img} width={300} alt="blue" />
            </div>
            <div className={styles.right}></div>
        </div>
    )
}

export default HeroSection