import React from 'react';
import styles from '../styles/FormComponent.module.css';
import useForm from './useForm'; // useForm カスタムフックをインポート

const FormComponent = ({ endpoint }) => {
  const { inputValue, error, isLoading, handleSubmit, handleInputChange } = useForm(endpoint);

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" value={inputValue} onChange={handleInputChange} />
        <button className={styles.button} type="submit" disabled={isLoading}>Submit</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default FormComponent;
