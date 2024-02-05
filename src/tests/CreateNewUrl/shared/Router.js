import {useEffect, useState} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Template1 from '../Pages/Template1';
import {useQuery} from 'react-query';
import axios from 'axios';
import Template2 from '../Pages/Template2';
import Template3 from '../Pages/Template3';
import Main from '../Pages/Main';

const Router = () => {
  const {data, isLoading, isError} = useQuery(['createNewUrl'], async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/createNewUrl`,
    );
    // const response = await axios.get(`http://goal`);
    // const response = await axios.get(`http://goal`);
    // const response = await axios.get(`3.34.69.115/goal`);
    console.log(response);
    return response.data;
  });

  console.log(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {data &&
          data.map((v, i) => {
            return (
              <Route
                key={i}
                path={'/'.concat('', v.url)}
                element={
                  // 조건문
                  v.template === 1 ? (
                    <Template1 />
                  ) : v.template === 2 ? (
                    <Template2 />
                  ) : v.template === 3 ? (
                    <Template3 />
                  ) : (
                    <></>
                  )
                }
              />
            );
          })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
