import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <p> posted by user: {post.userId} </p>
            <p> {post.id} -- {post.title}</p>
            <p> {post.body}</p>

        </div>
    );
};

export {Post};