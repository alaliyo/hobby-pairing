import { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, InputGroup } from 'react-bootstrap';

function Gatherings() {
    const [valueSearch, setValueSearch] = useState('');

    const onSearch = (e) => {
        setValueSearch(e.target.value)
    }

    const searchCilck = () => {
        console.log(valueSearch)
    }
    
    return(
        <GatheringsBody>
            <InputGroup>
                <Form.Control name="text" type="text" onChange={onSearch} placeholder="검색 할 내용을 입력해주세요" maxLength='20' />
                <Button size='sm' variant="outline-secondary" id="button-addon2" onClick={searchCilck}>
                    검색
                </Button>
            </InputGroup>
        </GatheringsBody>
    );
}

export default Gatherings;

const GatheringsBody = styled.div`
    div {
        width: 400px;
        margin: 10px auto;
        button {
            width: 50px;
            font-weight: 900;
            font-size: 16px;
        }
    }
`;