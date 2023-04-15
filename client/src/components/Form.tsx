import { useState } from 'react';
import Head from 'next/head';

const styles = {
  container: 'flex flex-col justify-center items-center h-screen',
  form: 'w-1/2 p-8 bg-white shadow-lg rounded-lg',
  input: 'w-full mb-4 p-2 border-gray-300 rounded-md',
  label: 'text-lg font-medium mb-2',
  button: 'w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md',
  result: 'mt-8 text-xl font-bold',
};

const Form = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [experience, setExperience] = useState('');
  const [degree, setDegree] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const data = {
      location,
      jobrole: jobRole,
      experience: Number(experience),
      degree,
    };

    const response = await fetch('https://salaryprediction1141.ethan-x11.repl.co/predict', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const { predicted_salary } = await response.json();
    setResult(`Predicted Salary: ${predicted_salary}`);
  };

  return (
    <>
      <Head>
        <title>Salary Prediction Form</title>
        <meta name="description" content="Form to predict salary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="location" className={styles.label}>Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className={styles.input}
          />

          <label htmlFor="jobRole" className={styles.label}>Job Role</label>
          <input
            id="jobRole"
            type="text"
            value={jobRole}
            onChange={(event) => setJobRole(event.target.value)}
            className={styles.input}
          />

          <label htmlFor="experience" className={styles.label}>Experience (Years)</label>
          <input
            id="experience"
            type="number"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
            className={styles.input}
          />

          <label htmlFor="degree" className={styles.label}>Degree</label>
          <input
            id="degree"
            type="text"
            value={degree}
            onChange={(event) => setDegree(event.target.value)}
            className={styles.input}
          />

          <button type="submit" className={styles.button}>Submit</button>
        </form>
        {result && <p className={styles.result}>{result}</p>}
      </div>
    </>
  );
};

export default Form;
