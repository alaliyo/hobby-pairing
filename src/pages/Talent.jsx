import { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { GatheringsList } from '../DB';

function Talent() {
    const { loggedIn } = useOutletContext(); // 로그인 확인
    const navigate = useNavigate();
    const { talentsId } = useParams(); // post id 값
    console.log(GatheringsList[talentsId]);

    useEffect(() => { // 로그인 안 되어 있으면 로그인 페이지로
        if (!loggedIn) {
            alert('로그인 후 사용해주세요');
            navigate('/login')
        }
    },[loggedIn, navigate])

    return(
        <div>
            <h1>Talent</h1>
        </div>
    );
}

export default Talent;