import React from 'react'

const styles = {
  wrapper: "pt-20 rounded-t-full text-white bg-blue-600 w-full flex items-center px-32 justify-between pb-20",
  main: "text-6xl font-bold italic pl-5 pr-3 pt-9 pb-5 ml-10 ",
  text: "text-xl pl-3 pt-9 pr-9 pb-5 ml-20 mr-20",
};

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        ABOUT
      </div>
      <div className={styles.text}>
        With Wage Wise
        predict the salary you
        deserve. Fill out the
        above form and our AI
        model will tell your
        deserved wage !
      </div>
    </div>
  )
}

export default About