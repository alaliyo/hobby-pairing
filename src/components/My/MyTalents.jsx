import { useState } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GatheringsList } from '../../DB';

function MyTalents() {
    const [reverseList] = useState([...GatheringsList].reverse());

    return(
        <CardsBox>
            {reverseList.map(obj => (<>
                <Link key={obj.id} to={`/talents/detail/${obj.id}`} >
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={obj.image} />
                        <Card.Body>
                            <ContentBox>
                                <Card.Title>{obj.tltie}</Card.Title>
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

export default MyTalents;

const CardsBox = styled.div`
    width: max-content;
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(3, 16rem);
    gap: 20px;
    a {
        text-decoration: none;
        color: black;
    }
    @media screen and (max-width: 1350px) {
        grid-template-columns: repeat(2, 16rem);
    }
    @media screen and (max-width: 850px) {
        grid-template-columns: repeat(1, 16rem);
    }
    div img {
        width: 100%;
        height: 180px;
    }
`;

const ContentBox = styled.div`
    height: 100px;
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