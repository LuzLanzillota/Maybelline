import React from 'react';
import { SyncLoader } from 'react-spinners';

function Loader() {
    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: 'white'
    };

    return (
        <div style={loaderStyle}>
            <SyncLoader
                size={15}
                margin={5}
                color='black'
                loading={true}
            />
        </div>
    );
}

export default Loader;