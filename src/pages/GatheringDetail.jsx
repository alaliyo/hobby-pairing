import { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { GatheringsList } from '../DB';

function Gathering() {
    const { loggedIn } = useOutletContext();
    const navigate = useNavigate();
    const { gatheringId } = useParams();
    console.log(GatheringsList[gatheringId]);

    useEffect(() => {
        if (!loggedIn) {
            alert('로그인 후 사용해주세요');
            navigate('/login')
        }
    },[loggedIn, navigate])

    return(
        <div>
            
        </div>
    );
}

export default Gathering;