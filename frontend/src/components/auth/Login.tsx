import Auth from "./Auth";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const Login = () => {
    return (
        <>
            <Auth submitLabel="Login" onSubmit={async () => { }} >
                <Link to="/signup">
                    <MuiLink>Don't have an account? Sign up</MuiLink>
                </Link>
            </Auth>
        </>
    )
}

export default Login;