import React, {Component} from 'react';

export default class PostalCodeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postalCode: ''
        };

        this.setPostalCode = this.setPostalCode.bind(this);
        this.submit = this.submit.bind(this);
    }

    setPostalCode(event) {
        this.setState({
            postalCode: event.target.value
        });
    }

    submit() {
        this.props.handleSubmit(this.state.postalCode.replace(/ /g,''));
    }

    // This would be a great place to put some input validation logic for a pleasant UX.
    // Omitted for time.
    render() {
        return (
            <div className="PostalCodeInput">
                Enter your postal code to find your MP!
                <br/>
                <input onChange={this.setPostalCode} value={this.state.postalCode}/>
                <button onClick={this.submit}>Go</button>
            </div>
        )
    }
}