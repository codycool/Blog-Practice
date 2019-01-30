import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import Front from './containers/FrontPage/Front';
import Loading from './components/Share/Loading/Loading';
import Popup from './components/Share/Popup/Popup';

class App extends Component {

  renderPopup = () => {
    const { isPopup, popupMsg } = this.props
    return (
      <Popup
        isPopup={isPopup}
        popupMsg={popupMsg}
      />
    )
  }
  
  render() {
    const { isFetching, isPopup} = this.props
    return (
          <div className="App">
            <Front/>   
            {isFetching ? <Loading/> : null}
            {isPopup ? this.renderPopup() : null}
          </div>
      
    )
  }
}

const mapStateToProps = (state) => {
    const { isFetching, isPopup, popupMsg} = state.combine   
    return {
      isFetching,
      isPopup,
      popupMsg,
    }
}

export default connect(mapStateToProps,null)(App)


