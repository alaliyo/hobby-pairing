// import { Button } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import BlankProfile from '../../img/BlankProfile.png';
import { UserList } from '../../UserDB';
import ProfilePasswordChack from './ProfilePasswordChack';
import { Form, Button } from 'react-bootstrap';


function MyProfile() {
    const [passwordChack, setPasswordChack] = useState(false);
    const [imagePatch, setImagePatch] = useState('');
    const [introductionPatch, setIntroductionPatch] = useState(UserList.introduction);
    
    const chackDate = (e) => {
        setPasswordChack(e);
    }

    const patchDataChange = (e) => {
        const {
            target: { name, value },
        } = e;
        if (name === "img") {
            setImagePatch(value);
        } else if (name === "introduction") {
            setIntroductionPatch(value);
        } 
    };

    const patchDate = () => {
        const result = window.confirm('수정하시겠습니다?');
        if (result) {
            console.log(imagePatch, introductionPatch)
            setPasswordChack(e => !e)
        }
    }
    
    return(
        <ProfileBox>
            {passwordChack ? (
                <Button size='sm' variant="outline-danger" onClick={patchDate}>
                    수정 완료
                </Button>
            ) : (
                <ProfilePasswordChack passwordChack={passwordChack} chackDate={chackDate} />
            )}
            <span>닉네임 : {UserList.nickname}</span>
            <br />
            <br />
            <span>소개 : </span>
            <br />
            {passwordChack ? (<>
                <textarea cols="30" rows="10" name="introduction" value={introductionPatch} onChange={patchDataChange} />
            </>) : (
                <span>{UserList.introduction}</span>
            )}
            <br />
            <br />
            <span>프로필 : </span>
            {passwordChack && <Form.Control type="file" name="img" onChange={patchDataChange} />}
            <br />
            {passwordChack ? null : 
                <ProfileImg src={UserList.image !== null ? UserList.image : BlankProfile} alt='' />
            }
        </ProfileBox>
    );
}

export default MyProfile;

const ProfileBox = styled.div`
    button {
        float: right;
        font-weight: 900;
    }
    span {
        font-weight: 900;
        font-size: 20px;
    }
`

const ProfileImg = styled.img`
    height: 300px;
    width: 300px;
`;