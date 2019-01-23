import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';

import {findMpByPostalCode} from "../../api/rest/representitives/representitivesApi";
import PostalCodeInput from "../PostalCodeInput/PostalCodeInput";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import Error from "../Error/Error";
import MpList from "../MpList/MpList";

const defaultState = () => ({
    loading: false,
    error: null,
    MPs: null
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = defaultState();
        this.getMPs = this.getMPs.bind(this);
    }

    getMPs(postalCode) {
        this.setState(defaultState());
        this.setState({loading: true});

        return findMpByPostalCode(postalCode).then((result) => {
            this.setState({
                MPs: result
            });
        }).catch(() => {
            this.setState({
                error: 'Error retrieving MPs for the provided postal code'
            });
        }).finally(() => {
            this.setState({
                loading: false
            });
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Tech Challenge</h1>
                </header>
                <PostalCodeInput handleSubmit={this.getMPs}/>
                <div className='resultsArea'>
                    {this.state.loading ? <LoadingIndicator/> : undefined}
                    {this.state.error ? <Error errorMessage={this.state.error}/> : undefined}
                    {this.state.MPs ? <MpList MPs={this.state.MPs} emptyListMessage='No MPs found'/> : undefined}
                </div>
            </div>
        );
    }
}

export default App;
