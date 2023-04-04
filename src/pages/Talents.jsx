import { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useOutletContext, Link } from "react-router-dom";
import Cards from '../components/Talents/Cards';

function Talents() {
    const { loggedIn } = useOutletContext(); // 로그인 체크
    const [valueSearch, setValueSearch] = useState(''); // 검색 값

    const onSearch = (e) => { // 검색 값 클라이언트에게 받기
        setValueSearch(e.target.value)
    }

    const searchCilck = () => { // 검색 값으로 함수 실행
        console.log(valueSearch)
    }

    return(
        <div>
            <GatheringsBody>
                <InputBox>
                    <InputGroup>
                        <Form.Control name="text" type="text" onChange={onSearch} placeholder="내용을 입력해주세요" maxLength='20' />
                        <Button size='sm' variant="outline-secondary" id="button-addon2" onClick={searchCilck}>
                            검색
                        </Button>
                    </InputGroup>
                </InputBox>
                
                <ButtonBox>
                    {loggedIn && (
                        <Link to={'writing'}>
                            <Button variant="outline-secondary">글쓰기</Button>
                        </Link>
                    )}
                </ButtonBox>
                <Cards />
            </GatheringsBody>
        </div>
    );
}

export default Talents;

const GatheringsBody = styled.div`
    width: 100%;
`;

const InputBox = styled.div`
    width: 400px;
    margin: 10px auto;
    button {
        width: 50px;
        font-weight: 900;
        font-size: 16px;
    }
`;

const ButtonBox = styled.div`
    height: 40px;
    display: flex;
    justify-content: flex-end;
`;