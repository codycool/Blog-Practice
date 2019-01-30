import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Layout} from 'antd';
import {
    Switch,
    Route
} from 'react-router-dom'
import { actions as authActions } from '../../reducers/auth';
import Menu from '../../components/Menu/Menu';
import ArticleDetial from '../Article/ArticleDetial';
import ManageArticle from '../Article/ManageArticle';
import NewArticle from '../Article/NewArticle';
import SignInForm from '../LandingPart/SignInForm';

const {Header,Footer,Content} = Layout;
const { signInRequest } = authActions

class Front extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100vh'}}>
                 <Layout style={{ width: '100%', height: '100%'}}>
                     <Header style={{ width: '100%', height: '10%'}}>
                        <Menu/>
                     </Header>
                     <Content style={{ width: '100%', height: '80%',display: 'flex', alignItems: 'center',justifyContent: "center"}}>
                        
                        <Switch>
                                <Route exact path={url} component={Home}/>
                                <Route path={`/detail/:id`} component={Detail}/>
                                <Route path={`/:tag`} component={Home}/>
                                <Route component={NotFound}/>
                        </Switch>
                        
                     </Content>
                     <Footer style={{ width: '100%', height: '10%'}}>
                        Footer
                     </Footer>

                </Layout>
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInRequest: bindActionCreators(signInRequest,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(Front)
