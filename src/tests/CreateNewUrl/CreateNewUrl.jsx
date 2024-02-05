import {useEffect} from 'react';
import Router from './shared/Router';
import axios from 'axios';
import {useQuery} from 'react-query';

const CreateNewUrl = () => {
  return (
    <>
      <h1>버튼을 누르면 새로운 url생성하게 하기 </h1>

      <button>눌르면 새로운 라우터 생성함</button>
      <Router />
    </>
  );
};

export default CreateNewUrl;
