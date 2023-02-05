import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import Copyright from '../../components/pure/Copyright';

const Dashboardpage = () => {

    const history = useNavigate();

    const logout = () => {
        history.push('/login');
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default Dashboardpage;
