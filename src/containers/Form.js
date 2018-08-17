import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as formActions from '../actions/formActions';
import { bindActionCreators } from 'redux'

class Form extends Component {
    state = {
        description: '',
        location: ''
    }
    handleChange(e) {
        if (e.target.matches('#discription')) {
            this.setState({
                description: e.target.value
            })
        } else {
            this.setState({
                location: e.target.value
            })
        }
    }
    render() {
        const { fetchData } = this.props.formActions;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <label htmlFor="description"> Job Description </label>
                        <input type="text" id="discription"
                            className="form-control"
                            placeholder="Filter by title, benefites, companies, expertise"
                            value={this.state.description}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="col-lg-5">
                        <label htmlFor="location">Location</label>
                        <input type="text"
                            id="location"
                            className="form-control"
                            placeholder="Filter by cite, state or country"
                            value={this.state.location}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <button type="button"
                        style={{ marginTop: '2em' }}
                        className="btn btn-primary col-lg-2"
                        onClick={() => fetchData(`description=${this.state.description}&location=${this.state.location}`)}>
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        formActions: bindActionCreators(formActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Form);