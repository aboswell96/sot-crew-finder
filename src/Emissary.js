import React from 'react';
import ReactDOM from 'react-dom';

class Emissary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img class="emissary" src={this.props.emissary_img}></img>
                <div class="emissary" >
                    <h5>{this.props.emissary_name}</h5>
                    <p class="emissary-list">{this.props.emissary_desc}</p>
                </div>
            </div>
        );
    }
}

export default Emissary;