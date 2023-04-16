import React from 'react';
import Form from '@/components/Form';

const styles = {
    container: 'flex flex-row justify-between items-top h-screen overflow-hidden',
    leftSection: 'w-1/2 p-8 bg-gray-100 flex flex-col justify-top items-start',
    heading: 'text-3xl font-bold mb-4',
    description: 'text-lg mb-4',
    rightSection: 'w-1/2 m-2 bg-gray-100 rounded-lg',
};

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h1 className={styles.heading}>Salary Prediction App</h1>
                <p className={styles.description}>
                    This web application uses machine learning algorithms to predict
                    salaries based on location, job role, experience, and degree.
                </p>
                <p className={styles.description}>
                    Try it out and see how much you could earn in different roles and
                    locations!
                </p>
            </div>
            <div className={styles.rightSection}>
                <Form />
            </div>
        </div>
    );
};

export default HomePage;
