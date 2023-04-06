import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';


function Root() {
  const [init, setInit] = useState(false); // 로딩 후 클라이어트에게 띄우기
  const [loggedIn, setLoggedIn] = useState(false); // 로그인 체크 여부

  useEffect(() => { // 로딩 후 클라이어트에게 띄우기
    setInit(true);
  }, []);

  const onClick = () => { // 로그인 체크 여부
    setLoggedIn(!loggedIn)
  };

  return (
    <>
    <RootBox>
      {init ? (
        <>
        <Header loggedIn={loggedIn}/>
        <Outlet context={{
          loggedIn: loggedIn,
        }}/>
        </>
      ): (
        <Spinner animation="border" />
      )}
      
      <button onClick={onClick}>{loggedIn ? 'logout' : 'login'}</button>
    </RootBox>
    <Footer />
    </>
  );
}

export default Root;

const RootBox = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  @media screen and (max-width: 978px) {
    margin-left: 10%;
    margin-right: 10%;  
  }
  @media screen and (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;  
  }
  @media screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;  
  }
`;