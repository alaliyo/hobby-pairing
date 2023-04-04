import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { UserList } from '../../DB';

function ProfilePasswordChack({ passwordChack, chackDate }) {
    const [show, setShow] = useState(false); // 수정 창 띄우기
    const [passwordText, setPasswordText] = useState(''); // 비밀번호 받기

    const handleClose = () => setShow(false); // 비밀번호 체크 창 띄우기
    const handleShow = () => setShow(true); // 비밀번호 체크 창 숨기기

    const onChange = (e) => { // 비밀번호 받기
        setPasswordText(e.target.value);
    };

    const handleOk = () => { // 비밀번호 비교하기
        if (passwordText === UserList.password) {
            handleClose();
            chackDate(!passwordChack);
        }
    };
  
    return (
      <>
        <Button size='sm' variant="outline-danger" onClick={handleShow}>
            프로필 수정
        </Button>
  
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>비밀번호를 입력해 주세요</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label htmlFor="inputPassword5">비밀번호 인증</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={onChange}
                    value={passwordText}
                />
                <Form.Text id="passwordHelpBlock" muted>
                    비밀번호를 입력해 주세요
                </Form.Text>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    닫기
                </Button>
                <Button variant="primary" onClick={handleOk}>확인</Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ProfilePasswordChack;