import {useEffect} from 'react';
import Router from './shared/Router';

const CreateNewUrl = () => {
  // bcrypt 테스트

  // const hashed = await bcrypt.hash(password, parseInt(config.bcrypt.saltRounds));

  useEffect(() => {}, []);

  return (
    <>
      <h1>버튼을 누르면 새로운 url생성하게 하기 </h1>

      <button>눌르면 새로운 라우터 생성함</button>
      <Router />
    </>
  );
};

export default CreateNewUrl;
