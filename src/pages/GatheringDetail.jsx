import { useState, useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Spinner, Button, Form, InputGroup, CloseButton } from 'react-bootstrap';
import { GatheringsList } from '../DB';
import styled from "styled-components";

function GatheringDetail() {
    const { loggedIn } = useOutletContext();
    const navigate = useNavigate();
    const { gatheringId } = useParams();
    const [loading, setLoading] = useState(false);
    const [dateObj, setDateObj] = useState({});
    const [checkCommentGrant, setCheckCommentGrant] = useState(false);
    const [participationCheck, setParticipationCheck] = useState(false);
    const [memNum, setMemNum] = useState(0);
    const [comment, setComment] = useState('');

    const participationClick = () => {
        setMemNum(e => participationCheck ? e -= 1 : e += 1);
        setParticipationCheck(e => !e);
    }

    const commentclick = () => {
        console.log(comment);
    }

    const commentChange = (e) => {
        setComment(e.target.value)
    }

    useEffect(() => {
        if (!loggedIn) {
            alert('로그인 후 사용해주세요');
            navigate('/login');
        }
    },[loggedIn, navigate])

    useEffect(() => {
        setDateObj(GatheringsList[gatheringId]);
        setLoading(true);
    }, [gatheringId]);

    useEffect(() => {
        if (dateObj.comment) {
          setCheckCommentGrant(dateObj.comment.map((obj) =>
            obj.nickname.includes("김성원")
          )[dateObj.comment.length - 1]);
        }
      }, [dateObj.comment]);

    useEffect(() => {
        if (dateObj && dateObj.members) {
            setMemNum(dateObj.members.length)
        }
    }, [dateObj])

    return(
        <DetailBox>
            {loading ? (<>
                <TitleBox>제목: {dateObj.tltie}</TitleBox>
                <PostInformationBox>
                    <div>작성자: {dateObj.nickname}</div>
                    <div>작성일: {dateObj.createdAt}</div>
                </PostInformationBox>
                <PostImg 
                    src={dateObj.image}
                    alt=""
                />
                <ContentBox>{dateObj.content}</ContentBox>
                <Recruitment>
                    <Members>모임 수: {memNum} / {dateObj.memberNum}</Members>
                    <Button variant="outline-secondary" onClick={participationClick}>
                        {participationCheck ? '취소' : '참여' }
                    </Button>
                </Recruitment>
                {checkCommentGrant && 
                    <CommentsBox>
                    댓글
                    <InputGroup>
                        <Form.Control name="text" type="text" onChange={commentChange} value={comment} placeholder="내용을 입력해주세요" maxLength='50' />
                        <Button size='sm' variant="outline-secondary" id="button-addon2" onClick={commentclick}>
                            댓글 달기
                        </Button>
                    </InputGroup>
                    {dateObj.comment.map(obj => (
                        <CommnetBox key={obj.comenetid}>
                            <Information>
                                <div>{obj.nickname}</div>
                                <div>{obj.createdAt}</div>
                            </Information>
                            <Commnet>
                                <div>{obj.content}</div>
                                {obj.nickname === '김성원' && 
                                <div>
                                    <Button variant="outline-secondary" size='sm'>수정</Button>
                                    <CloseButton />
                                </div>}
                            </Commnet>
                        </CommnetBox>
                    ))}
                </CommentsBox>
                }

            </>) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            
        </DetailBox>
    );
}

export default GatheringDetail;

const DetailBox = styled.div`
    width: 750px;
    margin: 20px auto;
    @media screen and (max-width: 850px) {
        width: 100%;
    }
`;

const TitleBox = styled.div`
    font-size: 25px;
    font-weight: 900;
`;

const PostInformationBox = styled.div`
    display: flex;
    justify-content: flex-end;
    text-align: right;
    font-size: 16px;
    font-weight: 900;
    color: #4b4b4b;
    div {
        margin-right: 20px;
    }
`;

const PostImg = styled.img`
    margin-top: 20px;
    width: 100%;
    height: 500px;
    @media screen and (max-width: 850px) {
        width: 100%;
        height: auto;
    }
`

const ContentBox = styled.div`
    margin-top: 10px;
    font-size: 20px;
`;

const Recruitment = styled.div`
    display: flex;
    justify-content: right;
`;

const Members = styled.div`
    font-size: 18px;
    font-weight: 900;
    margin-right: 20px;
`

const CommentsBox = styled.div`
    font-size: 17px;
    font-weight: 900;
`;

const CommnetBox = styled.div`
    font-weight: 500;
    margin: 10px 20px;
`;

const Commnet = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        margin-right: 5px;
    }
`;

const Information = styled.div`
    display: flex;
    div {
        margin-right: 10px;
        font-size: 14px;
        font-weight: 900;
        color: #464646;
    }
`;