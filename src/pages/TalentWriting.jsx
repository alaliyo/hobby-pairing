import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { Button, Form } from 'react-bootstrap';

function TalentWriting() {
    const [postTitle, setPostTitle] = useState(''); // 게시물 제목
    const [postContent, setPostContent] = useState('');  // 게시물 내용
    const [postImg, setPostImg] = useState(''); // 게시물 이미지
    const { loggedIn } = useOutletContext(); // 로그인 확인 여부
    const navigate = useNavigate(); //{id} 가져옴

    useEffect(() => {
        if (!loggedIn) {
            alert('로그인 후 사용해주세요');
            navigate('/login')
        }
    },[loggedIn, navigate]);

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
        }
    };

    return(
        <WritingBox>
            <h3>재능 작성하기</h3>
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
                <Button variant="outline-secondary" type="submit" >완료</Button>
            </WritingForm>
        </WritingBox>
    );
}

export default TalentWriting;

const WritingBox = styled.div`
    width: 800px;
    height: 522px;
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
        width: 90%;
    }
    @media screen and (max-width: 978px) {
        width: 100%;
    }
`;

const WritingForm = styled.form`
    button {
        float: right;
    }
`;