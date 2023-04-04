import { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GatheringsList } from '../../DB';

function GatheringsTable() {
    const [reverseList] = useState([...GatheringsList].reverse()); //게시믈 반전

    return(
        <TableBox>
            {reverseList.map((obj, i) =>
                <Link to={`detail/${obj.id}`} key={obj.id} >
                    <TablePost>
                        <div>{i+1}.</div>
                        <div>{obj.tltie}</div>
                        <div>{obj.nickname}</div>
                        <div>{obj.createdAt}</div>
                    </TablePost>
                </Link>
            )}
        </TableBox>
    );
}

export default GatheringsTable;

const TableBox = styled.div`
    width: 100%;
    border: 2px solid gray;
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