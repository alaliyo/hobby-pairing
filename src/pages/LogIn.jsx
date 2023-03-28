import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function LogIn() {
    const { loggedIn } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            alert('이미 로그인 되어 있습니다.');
            navigate('/')
        }
    },[loggedIn, navigate])

    return(
        <div>
            <h1>LogIn</h1>
        </div>
    );
}

export default LogIn;