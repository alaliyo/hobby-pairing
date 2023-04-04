import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import MyNav from "../components/My/MyNav";
import MyPosts from "../components/My/MyPagePosts";

function My() {
    const { loggedIn } = useOutletContext(); // 로그인 체크 여부
    const navigate = useNavigate();

    useEffect(() => { // 로그인 안 되어 있다면 로그인 페이지로
        if (!loggedIn) {
            alert('로그인 후 사용해주세요');
            navigate('/login')
        }
    },[loggedIn, navigate])

    return(
        <MyBody>
            <MyNav />
            <MyPosts />
        </MyBody>
    );
}

export default My;

const MyBody = styled.div`
    display: flex;
    height: 600px;
`;