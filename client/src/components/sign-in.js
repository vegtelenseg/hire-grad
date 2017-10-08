import React, { Component } from 'react';
import SignInImage from '../../res/images/signup.png';
import Nav from './nav';
export default class SignIn extends Component {
  render() {
    const bg = {
      backgroundImage: "url( " + SignInImage + ")"
    }
    return (
      <div>
        <Nav navStyle={"sign-up-nav-background-color"}/>
        <div className="login-wrapper columns hero-banner-fit">
          <div className="column is-8 is-hidden-mobile hero-banner">
            <section className="hero is-fullheight" style={bg}>
              <div className="hero-body">
                <div className="container section">
                  <div className="has-text-right remove-back-color">
                    <h1 className="title is-1" id="hero-text">Sign in</h1> <br/>
                    <p className="title is-3">And thanks for being part of this growing family :)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="column is-4">
            <section className="hero is-fullheight">
              <div className="hero-body">
                <div className="container">
                  <div className="columns">
                    <div className="column is-8 is-offset-2">
                      <h1 className="avatar has-text-centered section">
                        <img src="https://placehold.it/128x128"/>
                      </h1>
                      <div className="login-form">
                        <p className="control has-icon has-icon-right">
                          <input className="input email-input" type="text" placeholder="bnew@example.org"/>
                          <span className="icon user">
                            <i className="fa fa-user"></i>
                          </span>
                        </p>
                        <p className="control has-icon has-icon-right">
                          <input className="input password-input" type="password" placeholder="●●●●●●●"/>
                          <span className="icon user">
                            <i className="fa fa-lock"></i>
                          </span>
                        </p>
                        <p className="control login">
                          <button className="button is-success is-outlined is-large is-fullwidth">Sign In</button>
                        </p>
                      </div>
                      <div className="section forgot-password">
                        <p className="has-text-centered">
                          <a href="#">Forgot password?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}