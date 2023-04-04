import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { Button, Form, InputGroup } from 'react-bootstrap';

function GatheringWriting() {
    const [postTitle, setPostTitle] = useState(''); // 게시물 제목
    const [postContent, setPostContent] = useState('');  // 게시물 내용
    const [postImg, setPostImg] = useState(''); // 게시물 이미지
    const [postFirstDate, setPostFirstDate] = useState(''); // 모임 시작 날짜
    const [postLastDate, setPostLastDate] = useState(''); // 모임 마지막 날짜
    const [postMemberNum, setPostMemberNum] = useState(''); // 모임 참여 인원
    const { loggedIn } = useOutletContext(); // 로그인 확인 여부
    const navigate = useNavigate(); //{id} 가져옴

    useEffect(() => { // 로그인 확인 여부
        if (!loggedIn) {
            alert('로그인 후 사용 가능합니다.');
            navigate('/login')
        }
    },[loggedIn, navigate])

    const dateChange = (e) => { // 게시물 date 받기
        const {
            target: { name, value },
        } = e;
        
        if (name === "title") {
            setPostTitle(value);
        } else if (name === 'content') {
            setPostContent(value);
        } else if (name === "img") {
            setPostImg(value);
        } else if (name === "first-date") {
            setPostFirstDate(value);
        } else if (name === "last-date") {
            setPostLastDate(value);
        } else if (name === "member-num") {
            setPostMemberNum(value);
        }
    };
    
    return(
        <WritingBox>
            <h3>모임 작성하기</h3>
            <hr />
            <WritingForm>
                <span>제목</span>
                <Form.Control name="title" type="text" placeholder="제목을 입력해 주세요." value={postTitle} onChange={dateChange} maxlength='20' />
                <br />
                <span>내용</span>
                <br />
                <Form.Control as="textarea" name="content" value={postContent} onChange={dateChange} />
                <br />
                <span>이미지</span>
                <br />
                <Form.Control type="file" name="img" value={postImg} onChange={dateChange} />
                <br />
                <span>모임 시간</span>
                <InputGroup className="mb-3">
                    <InputGroup.Text>기간 입력</InputGroup.Text>
                    <Form.Control name="first-date" type="datetime-local" value={postFirstDate} onChange={dateChange} />
                    <Form.Control name="last-date" type="datetime-local" value={postLastDate} onChange={dateChange} />
                </InputGroup>
                <span>모임 수</span>
                <Form.Control name="member-num" type="number" min="1" max="100" maxlength="3" placeholder="1~100" value={postMemberNum} onChange={dateChange} />
                <br />
                <Button variant="outline-secondary" type="submit" >완료</Button>
            </WritingForm>
        </WritingBox>
    );
}

export default GatheringWriting;

const WritingBox = styled.div`
    width: 800px;
    height: 700px;
    margin: 10px auto;
    padding: 20px;
    border-radius: 20px;
    background-color: #f1f1f1;
    h3 {
        font-weight: 900;
    }
    span {
        font-size: 20px;
        font-weight: 900;
    }
    form div span {
        font-size: 15px;
        font-weight: 500;
    }
    textarea {
        resize: none;
        padding-top: none;
        height: 140px;
    }
    @media screen and (max-width: 1250px) {
        width: 85%;
    }
    @media screen and (max-width: 978px) {
        width: 90%;
    }
    @media screen and (max-width: 768px) {
        width: 95%; 
    }
    @media screen and (max-width: 600px) {
        width: 100%;  
    }
`;

const WritingForm = styled.form`
    button {
        float: right;
    }
`;