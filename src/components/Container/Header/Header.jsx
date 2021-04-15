import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header({ onLogout }) {
    return (
        <header>
            <AppBar position='static' color='transparent'>
                <Toolbar variant='dense'>
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        onClick={onLogout}
                    >
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;
