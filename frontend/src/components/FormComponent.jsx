import React, { useState } from 'react';
import styles from '../styles/FormComponent.module.css';
import useForm from './useForm'; // useForm カスタムフックをインポート

const FormComponent = ({ endpoint }) => {
  const { inputValue, error, isLoading, handleSubmit, handleInputChange } = useForm(endpoint);
  const [serverResponse, setServerResponse] = useState(null); // サーバーからの返り値を保持するstate

  // フォームが送信された後の処理
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await handleSubmit(event);
    if (response) {
      setServerResponse(response.data); // サーバーからのデータをstateに保存
    }
    else {
      setServerResponse("サーバーからの返信はありません。")
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <input className={styles.input} type="text" value={inputValue} onChange={handleInputChange} />
        <button className={styles.button} type="submit" disabled={isLoading}>Submit</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <h2>サーバーからの返信</h2>
      {serverResponse && <p className={styles.response}>{serverResponse.message}</p>}

    </div>
  );
}

export default FormComponent;
