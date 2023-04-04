import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserList } from '../DB';

function Header({ loggedIn }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [pageUrlName, setPageUrlName] = useState('');

    useEffect(() => {
        setPageUrlName(location.pathname.split('/')[1])
    }, [location])

    const onLogOutClick = () => {
        alert("로그아웃 되었습니다.")
        navigate("/");
    }

    return(
        <HeaderBox>
                <LinkBox>
                <Tab isActive={pageUrlName === ''}>
                    <Link to={'/'}>HP<span>(Hobby Pairing)</span></Link>
                </Tab>
                <Tab isActive={pageUrlName === 'gatherings'}>
                    <Link to={'gatherings'}>모임</Link>
                </Tab>
                <Tab isActive={pageUrlName === 'talents'}>
                    <Link to={'talents'}>재능</Link>
                </Tab>
            </LinkBox>
            <LinkBox>
                {loggedIn ? (<>
                    <Tab isActive={pageUrlName === 'mypage'}>
                        <Link to={'mypage/0/profile'}>{UserList.nickname}</Link>
                    </Tab>
                    <Tab>
                        <Link onClick={onLogOutClick}>로그아웃</Link>
                    </Tab>
                </>) : (
                    <Tab isActive={pageUrlName === 'login'}>
                        <Link to={'login'}>로그인</Link>
                    </Tab>
                )}
            </LinkBox>
        </HeaderBox>
    );
}

export default Header;

const HeaderBox = styled.header`
    background-color: white;
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 10px 15%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 128;
    @media screen and (max-width: 978px) {
        padding-left: 10%;
        padding-right: 10%;  
    }
    @media screen and (max-width: 768px) {
        padding-left: 5%;
        padding-right: 5%;  
    }
    @media screen and (max-width: 600px) {
        padding-left: 10px;
        padding-right: 0;  
    }
`;

const LinkBox = styled.div`
        display: flex;
        align-items: center;
`;

const Tab = styled.div`
    a {
        font-weight: 900;
        font-size: 20px;
        color: ${p => p.isActive ? '#e3a8ff' : '#ad4fd8'};
        text-shadow: ${p => p.isActive && '-2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000'};
        margin-right: 20px;
        display: block;
        text-decoration: none;
        &:hover {
            color: #e3a8ff;
            text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
            transition: .3s;
        }
        span {
            font-size: 14px;
        }
    }
`