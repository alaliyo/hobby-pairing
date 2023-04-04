import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { GatheringsList } from '../../DB';

function GatheringsTable() {
    const [reverseList] = useState([...GatheringsList].reverse()); //게시믈 반전
    const state = useLocation(); // url 가져오기
    const [urlLast, seturlLast] = useState(''); // Nav에 고정 url 값 저장 

    useEffect(() => { // profile, gatherings, talents, myposts 반응 변경
        seturlLast(state.pathname.split('/')[1]);
    },[state]);

    return(
        <TableBox isActive={urlLast === 'mypage'}>
            {reverseList.map((obj, i) => (
                urlLast === 'mypage' ? (
                    obj.nickname === '김성원' &&
                    <Link to={`/gatherings/detail/${obj.id}`} key={obj.id} >
                        <TablePost>
                            <div>{i+1}.</div>
                            <div>{obj.tltie}</div>
                            <div>{obj.nickname}</div>
                            <div>{obj.createdAt}</div>
                        </TablePost>
                    </Link>
                )
                : 
                <Link to={`detail/${obj.id}`} key={obj.id} >
                    <TablePost>
                        <div>{i+1}.</div>
                        <div>{obj.tltie}</div>
                        <div>{obj.nickname}</div>
                        <div>{obj.createdAt}</div>
                    </TablePost>
                </Link>
            ))}
        </TableBox>
    );
}

export default GatheringsTable;

const TableBox = styled.div`
    width: 100%;
    background-color: ${p => p.isActive ? 'white' : null};;
    border: ${p => p.isActive ? null : '2px solid gray'};
    border-radius: 15px;
    padding: 10px;
    height: 600px;
    a {
        text-decoration: none;
    }
`;

const TablePost = styled.div`
    color: black;
    display: grid;
    grid-template-columns: 50px auto 120px 120px;
    font-weight: 900;
    height: 40px;
    padding-top: 5px;
    border-radius: 5px;
    border-bottom: 2px solid #d4d4d4;
    &:hover {
        background-color: #f0f0f0;
        transition: .3s;
    }
    div {
        text-align: right;
        &:nth-child(1) {
            margin-right: 5px;
        }
        &:nth-child(2) {
            text-align: left;
        }
        &:nth-child(3) {
            color: gray;
        }
        &:nth-child(4) {
            color: gray;
        }
    }
`;