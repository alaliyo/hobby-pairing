import styled from "styled-components";

function Footer () {
    return(
        <FooterBox>
            <TeaxtBox>
                <span>백엔드: 손혜은, 조은총</span>
                <br />
                <span>프론트: 김성원</span>
            </TeaxtBox>
        </FooterBox>
    );
}

export default Footer;

const FooterBox = styled.footer`
    background-color: #ebebeb;
    height: 200px;
    padding: 20px 40px;
    @media screen and (max-width: 600px) {
        padding: 20px 10px;
    }
`;

const TeaxtBox = styled.div`
`;