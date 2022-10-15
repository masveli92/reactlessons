import React from 'react';
import {Comments} from "../components";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Comments/>
        </div>
    );
};

export {CommentsPage};