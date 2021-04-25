import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Emissary from './Emissary.js';

import * as constants from './constants/constants.js';

function Emissaries(props) {

    var emissariesComponents = constants.emissaries.map((emissary, index) => {
        return (
            <Emissary
                emissary_name={emissary.name}
                emissary_desc={emissary.desc}
                emissary_img={emissary.img}
            />
        );
    });

    return(<div class="emissary-list">{emissariesComponents}</div>);
}

// ========================================

ReactDOM.render(<div class="root"><Emissaries/></div>, document.getElementById("root"));