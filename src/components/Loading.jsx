import React from 'react';
import Loader from 'react-loader-spinner';
import '../styles/Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <Loader
                type="Bars"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    )
}

export default Loading;
