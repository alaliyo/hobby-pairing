import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button, Form, Stack, Alert, InputGroup } from 'react-bootstrap';

function LogIn() {
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [account, setAccount] = useState(false);
    const [errors, setErrors] = useState("")

    const { loggedIn } = useOutletContext();
    const navigate = useNavigate();

    const onChange = (e) => {
        const {
            target: { name, value },
        } = e;
        
        if (name === "email") {
            setEmail(value);
        } else if (name === 'nickname') {
            setNickname(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "password2") {
            setPassword2(value);
        }
    };

    const onSubmit = () => {
        setErrors('massge');
        loggedIn && navigate('/')
    };

    const toggleAccount = () => setAccount(prev => !prev);

    useEffect(() => {
        if (loggedIn) {
            alert('이미 로그인 되어 있습니다.');
            navigate('/')
        }
    },[loggedIn, navigate])

    return(
        <div>
        <LogInBox>
            <Form gap={3} onSubmit={onSubmit}>
                <LoginTitle>{account ? "회원가입" : "로그인"}</LoginTitle>
                <br />
                <Form.Label>아이디</Form.Label>
                <InputGroup>
                    <Form.Control name="email" type="email" placeholder="아이디를 입력해주세요." required value={email} onChange={onChange} maxLength='30' />
                    {account && <Button size='sm' variant="outline-secondary" id="button-addon2">
                        중복확인
                    </Button>}
                </InputGroup>
                {account && <Explanation>이메일 형태, 숫자, 영어 30자 이하만 가능합니다. </Explanation>}
                <br />
                {account && (
                    <>
                    <Form.Label>닉네임</Form.Label>
                    <InputGroup >
                        <Form.Control name="nickname" type="text" placeholder="닉네임을 입력해주세요." required value={nickname} onChange={onChange} maxLength='20' />
                        <Button size='sm' variant="outline-secondary" id="button-addon2">
                        중복확인
                        </Button>
                    </InputGroup>
                    {account &&<Explanation>영어, 숫자, 한글 20자 이하만 가능합니다. </Explanation>}
                    <br />
                    </>
                )}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control name="password" type="password" placeholder="비밀번호를 입력해주세요." required value={password} onChange={onChange} maxLength='16' />
                </Form.Group>
                {account &&<Explanation>숫자, 영어 6~16자만 가능합니다. </Explanation>}
                <br />
                {account && (
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control name="password2" type="password" placeholder="다시 비밀번호를 입력해주세요." required value={password2} onChange={onChange} maxLength='16' />
                    </Form.Group>
                )}

                {errors !== '' && <Alert variant="danger">{errors}</Alert>}
                
                <Stack direction="horizontal">
                    <Button className='ms-auto' variant="light" type="submit" >
                        {account ? "가입" : "로그인"}
                    </Button>
                </Stack>
            </Form>
            <br />
            <Stack gap={1}>
                <span onClick={toggleAccount}>{account ? "로그인 페이지로" : "기존 회원이 아니라면 클릭"}</span>
            </Stack>
        </LogInBox>
    </div>
    );
}

export default LogIn;

const LoginTitle = styled.h3`
    @media screen and (max-width: 768px) {
        font-size: 18px;
        font-weight: 900;
    }
`

const LogInBox = styled.div`
    background-color: rgb(240, 240, 240);
    padding: 50px;
    width: 600px;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 20px;
    line-height: 15px;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
        padding: 35px;
    }

    @media screen and (max-width: 600px) {
        padding-left: 5%;
        padding-right: 5%;  
    }
    
    div span {
        color: #ad4fd8;
        font-weight: 900;
        cursor : pointer;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`

const Explanation = styled.p`
    font-size: 12px;
    color: rgb(255, 90, 90);
    font-weight: 900;
    margin-bottom: 3px;
`