import React from 'react';
import { useGlobalStyles } from '../../Styles/globalStyles';

export const Header = () => {
    const globalClasses = useGlobalStyles();
    return (
        <div className={globalClasses.root}>
            Header
        </div>
    )
}