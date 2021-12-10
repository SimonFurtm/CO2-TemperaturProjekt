import React, { useEffect } from "react";

const PageNotFound = () => {
    useEffect (() => {
            document.title = 'Error 404';
        }
    );

    return (
        <div>
            <h1>Error 404</h1>
            <p>This Page was not found.</p>
            <p>Oops! Looks like you followed a bad link.</p>
        </div>
    )
}

export default PageNotFound;