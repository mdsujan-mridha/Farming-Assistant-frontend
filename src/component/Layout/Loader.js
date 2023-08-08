import React, { Fragment } from 'react';

const Loader = () => {
    return (
        <Fragment>
            <button className="btn btn-square">
                <span className="loading loading-spinner"></span>
            </button>
        </Fragment>
    );
};

export default Loader;