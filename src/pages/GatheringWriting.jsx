import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

function GatheringWriting() {
    const { loggedIn } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            alert('로그인 후 사용 가능합니다.');
            navigate('/login')
        }
    },[loggedIn, navigate])
    
    return(
        <WritingBox>
            <h3>모임 작성하기</h3>
        </WritingBox>
    );
}

export default GatheringWriting;

const WritingBox = styled.div`
    width: 80%;
    height: 70vw;
    margin: 10px auto;
    padding: 20px;
    border-radius: 20px;
    background-color: #f1f1f1;
    h3 {
        font-weight: 900;
    }
`;