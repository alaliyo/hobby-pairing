import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header,';
import Spinner from 'react-bootstrap/Spinner';

function Root() {
  const [init, setInit] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  const onCilck = () => {
    setLoggedIn(!loggedIn)
  };

  return (
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
      
      <button onClick={onCilck}>{loggedIn ? 'logout' : 'login'}</button>
    </RootBox>
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