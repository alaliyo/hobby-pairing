import { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { GatheringsList } from '../DB';

function Talent() {
    const { loggedIn } = useOutletContext();
    const navigate = useNavigate();
    const { talentsId } = useParams();
    console.log(GatheringsList[talentsId]);

    useEffect(() => {
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