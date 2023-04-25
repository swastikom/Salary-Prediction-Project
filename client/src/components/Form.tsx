import { useState } from 'react';
import Head from 'next/head';
import { BeatLoader } from 'react-spinners';

const styles = {
  container: 'mt-96 z-50 flex flex-row justify-center items-center h-screen transform -translate-y-80',
  left: 'w-1/2 flex flex-col items-center justify-center',
  right: 'w-1/3',
  headerline: 'text-3xl font-bold text-center rounded-2xl shadow-lg bg-blue-500 text-white p-6 w-[30rem] h-full',
  form: 'w-full p-8 py-16 bg-blue-200  rounded-3xl shadow-xl',
  formhead: 'font-bold text-3xl text-center pb-8 italic text-blue-600',
  input: 'w-full mb-4 p-2 px-4 bg-white text-blue-600 rounded-md border-blue-300 placeholder-blue-400',
  label: 'text-lg text-blue-600 font-medium mb-2',
  buttonsub: 'w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md',
  button: 'w-1/2 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md',
  resultbox: 'py-16 px-8 flex flex-col justify-between rounded-3xl bg-blue-500 shadow-lg text-white py-2 h-full',
  resulthead: 'py-4 text-4xl flex justify-center font-bold underline',
  result: 'py-4 text-5xl flex justify-center font-bold text-center text-white text-right',
  loading: 'mt-8 text-xl flex flex-col items-center justify-center',
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
      location: location,
      jobrole: jobRole,
      experience: Number(experience),
      degree,
    };

    setLoading(true);
    try {
      const response = await fetch('https://salaryprediction1141.ethan-x11.repl.co/predict', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      });

      const { predicted_salary, status } = await response.json();
      if (status === 'ok')
        setResult(`₹${predicted_salary}`);
      else
        setResult('Something went wrong');

    } catch (error) {
      setResult('Server Down');
    }

    setLoading(false);


  };

  return (
    <>
      <Head>
        <title>Salary Prediction Form</title>
        <meta name="description" content="Form to predict salary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          {!loading && !result && (
            <div className={styles.headerline}>Predict Your Salary !</div>
          )}
          {loading && (
            <div className={styles.loading}>
              <BeatLoader color={styles.loadingColor} />
              <p>Loading...</p>
            </div>
          )}
          {!loading && result && (
            <div className={styles.resultbox}>
              <div className={styles.resulthead}>Your Wage</div>
              <p className={styles.result}>{result}</p>
              {/* <button onClick={() => setResult('')} className={styles.button}>Recalculate</button> */}
            </div>
          )}
        </div>
        <div className={styles.right}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.formhead}>Fill to Predict !</h1>
            {/* <label htmlFor="location" className={styles.label}>
              Location
            </label> */}
            <select
              id="location"
              value={location}
              required
              onChange={(event) => setLocation(event.target.value)}
              className={styles.input}
              placeholder="Select Job Location"
            >
              <option value="" className="text-blue-500">
                Select Job Location
              </option>
              <option value="Kolkata">Kolkata</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Pune">Pune</option>
            </select>
            {/* <label htmlFor="degree" className={styles.label}>
              Degree
            </label> */}
            <select
              id="degree"
              value={degree}
              required
              onChange={(event) => setDegree(event.target.value)}
              className={styles.input}
            >
              <option value="" className="text-blue-500">
                Select Degree
              </option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
            {/* <label htmlFor="jobRole" className={styles.label}>
              Job Role
            </label> */}
            <select
              id="jobRole"
              value={jobRole}
              required
              onChange={(event) => setJobRole(event.target.value)}
              className={styles.input}
            >
              <option value="" className="text-blue-500">
                Select Job Role
              </option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Java Engineer">Java Engineer</option>
            </select>

            {/* <label htmlFor="experience" className={styles.label}>
              Experience (Years)
            </label> */}
            <input
              id="experience"
              type="number"
              min="0"
              max="30"
              value={experience}
              required
              onChange={(event) => setExperience(event.target.value)}
              className={styles.input}
              placeholder="Experience (Years)"
            />

            <button type="submit" className={styles.buttonsub}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );

};

export default Form;
