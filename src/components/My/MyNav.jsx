import { Link } from 'react-router-dom';
import styled from 'styled-components';


function MyNav() {
    return(
        <NavBox>
            <Link to={"profile"}>나의 <br />프로필</Link>
            <Link to={"gatherings"}>신청한<br />모임</Link>
            <Link to={"talents"}>싱청한<br />재능</Link>
            <Link to={"myposts"}>나의<br />게시물</Link>
        </NavBox>
    );
}

export default MyNav;

const NavBox = styled.nav`
    width: 80px;
    height: 400px;
    display: flex;
    flex-direction: column;
    a {
        font-size: 20px;
        color: #c681ff;
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
            color: #e3a8ff;
            text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
            transition: .3s;
            box-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
        }
    }
`