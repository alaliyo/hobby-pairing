import { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function Gathering() {
    const { loggedIn } = useOutletContext();
    const navigate = useNavigate();
    const { gatheringId } = useParams();
    console.log(gatheringId);

    useEffect(() => {
        if (!loggedIn) {
            alert('로그인 후 사용해주세요');
            navigate('/login')
        }
    },[loggedIn, navigate])

    return(
        <div>
            <h1>GatheringDetail</h1>
        </div>
    );
}

export default Gathering;