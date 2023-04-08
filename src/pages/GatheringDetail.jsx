import { useState, useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Spinner, Button } from 'react-bootstrap';
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

    const participationClick = () => {
        setMemNum(e => participationCheck ? e -= 1 : e += 1);
        setParticipationCheck(e => !e);
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
                    <CommentBox>
                    댓글
                    {dateObj.comment.map(obj => (
                        <Commnet key={obj.comenetid}>
                            <Information>
                                <div>{obj.nickname}</div>
                                <div>{obj.createdAt}</div>
                            </Information>
                            <div>{obj.content}</div>
                        </Commnet>
                    ))}
                </CommentBox>
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

const CommentBox = styled.div`
    font-size: 17px;
    font-weight: 900;
`;

const Commnet = styled.div`
    font-weight: 500;
    margin: 10px 20px;
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