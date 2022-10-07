import React from 'react';

const User = ({user}) => {
    return (
        <div>
            {user.id} {user.name} {user.surname}
        </div>
    );
};
export {User};