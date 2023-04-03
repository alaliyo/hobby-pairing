import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GatheringsList } from '../../DB';
import { useState } from 'react';

function Cards() {
    const [reverseList] = useState([...GatheringsList].reverse());

    return (
        <CardsBox>
            {reverseList.map(obj => (<>
            <Link to={`detail/${obj.id}`} key={obj.id} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={obj.image} />
                    <Card.Body>
                        <Card.Title>{obj.tltie}</Card.Title>
                        <ContentBox>
                            <Card.Text>
                            {obj.content}
                            </Card.Text>
                        </ContentBox>
                        <DateBox>
                            <Card.Text>{obj.createdAt}</Card.Text>
                        </DateBox>
                        <DetailsBox>
                            <Card.Text>참여 : {`${obj.members.length}/${obj.memberNum}`}</Card.Text>
                            <Card.Text>작성자 : {obj.nickname}</Card.Text>
                        </DetailsBox>
                    </Card.Body>
                </Card>
            </Link>
            </>))}
        </CardsBox>
    );
}

export default Cards;

const CardsBox = styled.div`
    width: max-content;
    margin: 20px auto;
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 18rem);
    gap: 20px;
    a {
        text-decoration: none;
        color: black;
    }
    @media screen and (max-width: 1750px) {
        grid-template-columns: repeat(3, 18rem);
    }
    @media screen and (max-width: 1320px) {
        grid-template-columns: repeat(2, 18rem);
    }
    @media screen and (max-width: 670px) {
        grid-template-columns: repeat(1, 18rem);
    }
    div img {
        width: 100%;
        height: 180px;
    }
`;

const ContentBox = styled.div`
    height: 130px;
`;

const DateBox = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-weight: 900;
    color: #9b9b9b;
`;

const DetailsBox = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-weight: 900;
    color: #9b9b9b;
    p {
        margin: 0;
        text-align: left;
    }
`;