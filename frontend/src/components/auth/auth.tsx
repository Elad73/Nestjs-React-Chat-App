import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";

interface AuthProps {   
    submitLabel: string;
    onSubmit: (email: string, password: string) => Promise<void>;
    children: React.ReactNode;
}

const Auth = ({ submitLabel, onSubmit, children }: AuthProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    }

    
    return (
        <Stack
            component="form"
            onSubmit={handleSubmit}
            spacing={2}
            sx={{
            height: '100vh',
            maxWidth: {
                xs: '70%',
                md: '30%',
            },
            margin: '0 auto',
            justifyContent: 'center',
        }}>
            <TextField
                type="Email"
                label="Email"
                variant="outlined"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <TextField  
                type="Password"
                label="Password"
                variant="outlined"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button
                variant="contained"
                type="submit"
                onClick={() => onSubmit(email, password)}>{submitLabel}
            </Button>
            {children}
        </Stack>
    )
}

export default Auth;