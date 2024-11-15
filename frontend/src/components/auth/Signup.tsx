import Auth from "./Auth";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const Signup = () => {
    return (
        <>
            <Auth submitLabel="Signup" onSubmit={async () => { }} >
                <Link to="/login">
                    <MuiLink>Already have an account? Login</MuiLink>
                </Link>
            </Auth>
        </>
    )
}

export default Signup;