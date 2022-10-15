import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
           <h3>{comment.id} - {comment.name}</h3>
           <p> {comment.body}</p>
            <button> Go to post </button>
        </div>
    );
};

export {Comment};