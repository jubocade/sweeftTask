import React from 'react';
import '../styles/User.css';

const User = ({name, lastName, prefix, title, img}) => {
    return (
        <div className="user">
            <div className="user-image">
                <img src={img} alt="user-image" />
            </div>

            <div className="user-name">
                <h3>
                    <span>{prefix} </span>
                    <span>{name} </span>
                    <span>{lastName} </span>
                </h3>
            </div>

            <div className="user-position">
                <span>{title}</span>
            </div>
        </div>
    )
}

export default React.memo(User);
