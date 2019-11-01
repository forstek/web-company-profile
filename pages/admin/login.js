import React, { Component } from "react"
// import initialize from 'utils/initialize'
import Router from 'next/router';
import Head from 'next/head'
import { connect } from 'react-redux'
import { login } from 'store/actions/AuthActions'

import Logo from 'components/Company/Logo'
import "styles/Login.css"
import "styles/Index.css"
import "styles/Color.css"

class Login extends Component {

    state = {
        email : null,
        password : null
    }

    // static getInitialProps(ctx) {
    //     initialize(ctx);
    // }

    handleInputChange = event => {
        this.setState({[event.target.id]:event.target.value})
    }

    handleFormSubmit = event => {
        event.preventDefault()
        const param = {...this.state}
        this.props.login(param)
    }

    // componentDidMount() {
    //     const { isLoggedIn } = this.props.auth
    //     if ( isLoggedIn ) Router.push("/admin/dashboard")
    // }

    render() {

        return (
            <div className="login">
                <Head>
                    <title>Login | Forstek co.</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                </Head>
                <Logo />
                <div className="card">
                    <div className="card-header text-center">
                        Login to start admin session
                    </div>
                    <div className="card-body">
                        <form className="login-form" onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="Enter email" 
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Password" 
                                    onChange={this.handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary d-block mx-auto">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { 
        auth : state.authentification,
        config : state.config
     }
}

const mapDispatchToProps = dispatch => {
    return {
        login : creds => dispatch(login(creds))
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;