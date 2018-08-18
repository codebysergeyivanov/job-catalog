import React from 'react';
import { Link } from 'react-router-dom';

function Info(props) {
    const job = props.location.state.job;
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{ marginTop: "1em" }}>
                    <Link type="button" className="btn btn-secondary" to="/">Back</Link>
                    <hr className="my-4" />
                </div>
                <div className="col-lg-6">
                    <h1>{job.title}</h1>
                    <img src={job.company_logo} alt="company_logo" width="300" />
                    <div style={{ marginTop: "1em" }} dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></div>
                    <hr className="my-4" />
                </div>
                <div className="row">
                    <div className="col-lg-12" dangerouslySetInnerHTML={{ __html: job.description }}>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Info;
