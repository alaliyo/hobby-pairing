import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';


function MyNav() {
    //const { userId } = useParams();
    const state = useLocation();
    const [urlLast, seturlLast] = useState('');

    useEffect(() => {
        seturlLast(state.pathname.split('/')[3]);
    },[state]);

    return(
        <NavBox>
            <Tab isActive={urlLast === 'profile'}>
                <Link  to={"profile"}>나의 <br />프로필</Link>
            </Tab>
        
            <Tab isActive={urlLast === 'gatherings'}>
                <Link  to={"gatherings"}>신청한<br />모임</Link>
            </Tab>

            <Tab isActive={urlLast === 'talents'}>
                <Link  to={"talents"}>신청한<br />재능</Link>
            </Tab>

            <Tab isActive={urlLast === 'myposts'}>
                <Link  to={"myposts"}>나의<br />게시물</Link>
            </Tab>
        </NavBox>
    );
}

export default MyNav;

const NavBox = styled.nav`
    width: 80px;
    height: 400px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 600px) {
        margin-left: 2vw;
    }
`

const Tab = styled.div`
    a {
        font-size: 20px;
        color: ${(p) => p.isActive ? 'white' : '#c681ff'};
        background-color: ${(p) => p.isActive ? '#e3a8ff' : 'white'};
        text-shadow: ${(p) => p.isActive && '-2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000'};
        box-shadow: ${(p) => p.isActive && '-2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000'};
        border: 2px solid #c681ff;
        padding-top: 12px;
        text-align: center;
        height: 90px;
        display: block;
        font-weight: 900;
        text-decoration: none;
        margin-bottom: 5px;
        border-radius: 10px;
        &:hover {
            color: white;
            background-color: #e3a8ff;
            text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
            transition: .3s;
            box-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
        }
    }
`