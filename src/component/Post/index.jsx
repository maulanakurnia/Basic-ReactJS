import React, { Fragment } from 'react';

export default (props) => {
    return(
        <Fragment>
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt="dummy"/>
                </div>
                <div className="content">
                    <p className="title">{props.title}</p>
                    <p className="desc">{props.desc}</p>
                </div>
            </div>
        </Fragment>
    );
}
