import React, { Fragment } from 'react';

export default (props) => {
    return(
        <Fragment>
            <div className="post">
                <div className="img-thumb-post">
                    <img src="https://placeimg.com/200/150/tech" alt="dummy"/>
                </div>
                <div className="content">
                    <p className="title">{props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    <button className="btn-update" onClick={() => props.update(props.data)}>Update</button>
                    <button className="btn-remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                </div>
            </div>
        </Fragment>
    );
}
