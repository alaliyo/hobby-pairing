import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GatheringsList } from '../../DB';

function MyPost() {
    const [navChack, setNavChack] = useState('모임'); // css 반응형을 위한 클릭한 값
    const [reverseList] = useState([...GatheringsList].reverse()); //게시믈 반전

    const onClick = (e) => {
        const nameText = e.target.className.split(' ')[2];
        if (nameText === "모임") {
            setNavChack('모임')
        } else if (nameText === '재능') {
            setNavChack('재능');
        }
    }
    
    return(
        <div>
            <NavBox >
                <Tab isActive={navChack === '모임'} className="모임" onClick={onClick}>모임</Tab>
                <Tab isActive={navChack === '재능'} className="재능" onClick={onClick}>재능</Tab>
            </NavBox>
            <PostGraph>
                {navChack === '모임' ? (
                    reverseList.map((obj) => (
                        obj.nickname === '김성원' && 
                        <TablePost key={obj.id}>
                            <Link to={`/gatherings/detail/${obj.id}`}>
                                <TeaxtBox>{obj.tltie}</TeaxtBox>
                                <TeaxtBox>{obj.nickname}</TeaxtBox>
                                <TeaxtBox>{obj.createdAt}</TeaxtBox>
                            </Link>
                        </TablePost>
                ))) : (
                    <div></div>
                    
                )}
            </PostGraph>
        </div>
    );
}

export default MyPost;

const NavBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-bottom: 15px;
`;

const Tab = styled.nav`
    height: 40px;
    background-color: ${p => p.isActive ? '#ad4fd8' : 'white'};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ad4fd8;
    border-radius: 10px;
    color: ${p => p.isActive ? 'white' : '#ad4fd8'};
    font-weight: 900;
    font-size: 20px;
    cursor : pointer;
    &:hover {
        background-color: #ad4fd8;
        color: white;
        border: 2px solid #ad4fd8;
        transition: .3s;
    }
`;

const PostGraph = styled.div`
    background-color: white;
    height: 610px;
    padding: 10px;
    border-radius: 10px;
`;

const TablePost = styled.div`
    color: black;
    font-weight: 900;
    height: 40px;
    padding-top: 5px;
    border-radius: 5px;
    border-bottom: 2px solid #d4d4d4;
    &:hover {
        background-color: #f0f0f0;
        transition: .3s;
    }
    a {
        display: grid;
        grid-template-columns: auto 120px 120px;
        text-decoration: none;
    }
`;

const TeaxtBox = styled.div`
    text-align: right;
    color: gray;
    &:nth-child(1) {
        color: black;
        margin-left: 10px;
        text-align: left;
    }
`;