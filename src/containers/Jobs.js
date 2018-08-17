import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';

class Jobs extends Component {
    render() {
        const jobs = this.props.data ? this.props.data : [];
        return (
            <div className="container" style={{ marginTop: '2em' }}>
                <div className="row">
                    {this.props.loading && 
                        <div className="col alert alert-success text-center" role="alert">Searching</div>
                    }
                    {this.props.error && 
                        <div className="col alert alert-danger text-center" role="alert">An error has occurred</div>
                    }
                    {this.props.notFound && 
                        <div className="col alert alert-dark text-center" role="alert">Nothing found</div>
                    }
                </div>
                <div className="row">
                    {jobs.map((job) =>
                        <div key={job.id} className="col-md-6 col-lg-4">
                            <Card job={job} />
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, null)(Jobs);