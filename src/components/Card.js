import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div className="card" style={{ marginBottom: "2em" }}>
            <div className="card-body">
                <h3 className="card-header">{props.job.title}</h3>
                <h6 className="card-title">{props.job.company}</h6>
                <p className="card-subtitle mb-2 text-muted">{props.job.location}</p>
                <p className="card-text">{props.job.created_at}</p>
                <Link className="card-link" to={{ pathname: '/info', state: { job: props.job } }}>More info</Link>
            </div>
        </div>
    );
}

export default Card;
