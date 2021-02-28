import React from 'react';
import { Tooltip, IconButton }from '@material-ui/core';

export default function UserButton ({ children, onClick, tipTitle, btnClassName, tipClassName }) {
    return (
        <Tooltip title={tipTitle} className={tipClassName}>
            <IconButton onClick={onClick} className={btnClassName}>
                {children}
            </IconButton>
        </Tooltip>
    )
}
