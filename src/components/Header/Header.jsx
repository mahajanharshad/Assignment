import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }

    loginForm = () => {
        this.setState({
            showMenu: true
        })
    }

    loginClose = () => {
        this.setState({
            showMenu: false
        })
    }

    render() {
        console.log(this.props.Header);
        const { showMenu } = this.state
        return (
            <div className="header">
                {this.props.Header.isHomePage && <div className="container">
                    <div className="navbar">
                        <a className="cursor" onClick={this.loginForm}><i className="fas fa-bars"></i></a>
                    </div>
                    <div className="logo">
                        <h1>cxLoyalty</h1>
                    </div>
                    <div className="clear"></div>
                    {showMenu ? <div className="menuBar"><h3>Menu</h3> <span onClick={this.loginClose}><i class="fa fa-times" aria-hidden="true"></i></span></div> : null}
                </div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
  });
  
export default connect(mapStateToProps, null)(Header);
