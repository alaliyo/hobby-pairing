import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function GatheringWriting() {
    const { loggedIn } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            alert('로그인 후 사용 가능합니다.');
            navigate('/login')
        }
    },[loggedIn, navigate])
    
    return(
        <div>
            <h1>GatheringWriting</h1>
        </div>
    );
}

export default GatheringWriting;