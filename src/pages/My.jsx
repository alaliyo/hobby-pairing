import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import MyNav from "../components/My/MyNav";
import MyPosts from "../components/My/MyPagePosts";

function My() {
    const { loggedIn } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
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