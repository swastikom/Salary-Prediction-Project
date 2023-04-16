import { useState } from 'react';
import Head from 'next/head';
import { BeatLoader } from 'react-spinners';

const styles = {
    container: 'flex flex-col justify-center items-center h-screen',
    form: 'w-full h-full p-8 bg-white shadow-lg rounded-lg',
    input: 'w-full mb-4 p-2 bg-purple-300 border-gray-300 rounded-md',
    label: 'text-lg text-blue-600 font-medium mb-2',
    buttonsub: 'w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md',
    button: 'w-1/2 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md',
    resultbox: 'm-8 flex flex-col items-center justify-center',
    result: 'm-8 text-3xl font-bold',
    loading: 'mt-8 text-xl font-bold flex flex-col items-center justify-center',
    loadingColor: '#3B82F6',
};

const Form = () => {
    const [location, setLocation] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [experience, setExperience] = useState('');
    const [degree, setDegree] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const data = {
            location,
            jobrole: jobRole,
            experience: Number(experience),
            degree,
        };

        setLoading(true);

        const response = await fetch('https://salaryprediction1141.ethan-x11.repl.co/predict', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
        });

        setLoading(false);

        const { predicted_salary, status } = await response.json();
        if (status === 'ok')
            setResult(`Predicted Salary: ${predicted_salary}`);
        else
            setResult('Something went wrong');
    };

    return (
        <>
            <Head>
                <title>Salary Prediction Form</title>
                <meta name="description" content="Form to predict salary" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                {!loading && !result && (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label htmlFor="location" className={styles.label}>
                            Location
                        </label>
                        <select
                            id="location"
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                            className={styles.input}
                        >
                            <option value="">--Select Location--</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Pune">Pune</option>
                        </select>

                        <label htmlFor="jobRole" className={styles.label}>
                            Job Role
                        </label>
                        <select
                            id="jobRole"
                            value={jobRole}
                            onChange={(event) => setJobRole(event.target.value)}
                            className={styles.input}
                        >
                            <option value="">--Select Job Role--</option>
                            <option value="Data Analyst">Data Analyst</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="Java Engineer">Java Engineer</option>
                        </select>

                        <label htmlFor="experience" className={styles.label}>
                            Experience (Years)
                        </label>
                        <input
                            id="experience"
                            type="number"
                            value={experience}
                            onChange={(event) => setExperience(event.target.value)}
                            className={styles.input}
                        />

                        <label htmlFor="degree" className={styles.label}>
                            Degree
                        </label>
                        <select
                            id="degree"
                            value={degree}
                            onChange={(event) => setDegree(event.target.value)}
                            className={styles.input}
                        >
                            <option value="">--Select Degree--</option>
                            <option value="Bachelor's">Bachelor's</option>
                            <option value="Master's">Master's</option>
                            <option value="PhD">PhD</option>
                        </select>
                        <button type="submit" className={styles.buttonsub}>Submit</button>
                    </form>
                )}
                {loading && (
                    <div className={styles.loading}>
                        <BeatLoader color={styles.loadingColor} />
                        <p>Loading...</p>
                    </div>
                )}
                {result && (
                    <div className={styles.resultbox}>
                        <p className={styles.result}>{result}</p>
                        <button onClick={() => setResult('')} className={styles.button}>Recalculate</button>
                    </div>
                )}
            </div>
        </>
    );

};

export default Form;
