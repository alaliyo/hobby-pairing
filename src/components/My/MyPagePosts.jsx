import { Outlet } from "react-router-dom";
import styled from "styled-components";

function MyPosts() {
    return(
        <MyPostBox>
            <Outlet />
        </MyPostBox>
    );
}

export default MyPosts;

const MyPostBox = styled.div`
    margin-left: 10px;
    border-radius: 10px;
    width: 63vw;
    background-color: #f8f8f8;
    padding: 15px;
    @media screen and (max-width: 978px) {
        margin-right: 2vw;
        width: 80vw;
    }
    @media screen and (max-width: 768px) {
        margin-right: 2vw;
        width: 90vw;
    }
    @media screen and (max-width: 600px) {
        margin-right: 2vw;
        width: 90vw;
    }
`;