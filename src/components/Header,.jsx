import styled from "styled-components";
import { Link } from 'react-router-dom';
import { accent } from './../theme';

function Header({ loggedIn }) {

    return(
        <HeaderBox>
                <LinkBox>
                <Link to={'/'}>HP<span>(Hobby Pairing)</span></Link>
                <Link to={'/gatherings'}>모임</Link>
                <Link to={'/talents'}>재능</Link>
            </LinkBox>
            <LinkBox>
                {loggedIn ? (<>
                    <Link to={'/mypage'}>MyPage</Link>
                    <Link to={'/'}>Logout</Link>
                </>) : (
                    <Link to={'/login'}>Login</Link>
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
    height: 40px;
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
    a {
        font-weight: 900;
        font-size: 20px;
        color: ${accent.TXColor};
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
`;