import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
    render() {
        return (
            <div>
                <div 
                    style={{color: 'rgba(122,211,226)',
                    fontSize: '30px', 
                    float: 'left',
                    marginTop: '10px'}}
                >
                    VIA NAS
                </div>
                
            </div>
        );
    }
}

Menu.propTypes = {

};

export default Menu;