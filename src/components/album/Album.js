import React from 'react';

const Album = ({album}) => {
    return (
        <h3>
           {album.id} - {album.title}
        </h3>
    );
};

export {Album};