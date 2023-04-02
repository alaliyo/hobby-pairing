import { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useOutletContext, Link } from "react-router-dom";
import GatheringsTable from '../components/Gatherings/GatheringsTable';

function Gatherings() {
    const { loggedIn } = useOutletContext();
    const [valueSearch, setValueSearch] = useState('');

    const onSearch = (e) => {
        setValueSearch(e.target.value)
    }

    const searchCilck = () => {
        console.log(valueSearch)
    }
    
    return(
        <GatheringsBody>
            <InputBox>
                <InputGroup>
                    <Form.Control name="text" type="text" onChange={onSearch} placeholder="검색 할 내용을 입력해주세요" maxLength='20' />
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

            <GatheringsTable />
        </GatheringsBody>
    );
}

export default Gatherings;

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
    height: 45px;
    display: flex;
    justify-content: flex-end;
`;