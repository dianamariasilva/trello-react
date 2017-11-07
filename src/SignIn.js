import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { NavLink } from 'react-router-dom';
// import { addDishes, moveSlides } from './actions'
import './App.css';

const SignIn = () => {
    return(
<div>
            <main id="main_container" role="main">
                <div data-reactid=".0">
                    <div
                        className="view-container sessions new"
                        data-reactid=".0.0">
                        <main data-reactid=".0.0.0">
                            <header data-reactid=".0.0.0.0">
                                <div className="logo" data-reactid=".0.0.0.0.0" />
                            </header>
                            <form id="sign_in_form" data-reactid=".0.0.0.1">
                                <div className="field" data-reactid=".0.0.0.1.1">
                                    <input
                                        type="Email"
                                        id="user_email"
                                        placeholder="Email"
                                        required
                                        defaultValue="john@phoenix-trello.com"
                                        data-reactid=".0.0.0.1.1.0" />
                                </div>
                                <div className="field" data-reactid=".0.0.0.1.2">
                                    <input
                                        type="password"
                                        id="user_password"
                                        placeholder="Password"
                                        required
                                        defaultValue={12345678}
                                        data-reactid=".0.0.0.1.2.0" />
                                </div>
                                <button type="submit" data-reactid=".0.0.0.1.3">
                                    Sign in
</button>
                            </form>
                            <a href="/SignUp" data-reactid=".0.0.0.2">
                                Create new account
</a>
                        </main>
                    </div>
                </div>
            </main>
            <footer id="main_footer">
                <small>
                    <a href="https://trello.com/" target="_blank">Trello</a> tribute for educational purposes
            crafted with ♥ for <a href="https://diacode.com/">Diacode</a>
                    by <a href="https://twitter.com/bigardone">@bigardone</a>
                </small>
            </footer>
            <iframe
                id="sumome-jquery-iframe"
                title="Sumo Hidden Content"
                style={{ display: 'none' }} />
            <a
                href="javascript:void(0);"
                title="Sumo"
                style={{ backgroundColor: 'rgb(0, 115, 183)', borderRadius: '3px 0px 0px 3px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 10px', position: 'fixed', zIndex: 2147483647, padding: 0, width: 44, height: 40, textIndent: '-10000px', opacity: 1, display: 'block !important', top: 40, right: '-40px' }}>
                <span style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden', marginLeft: 4, marginRight: 0, borderRadius: '3px 0px 0px 3px' }}>Sumo</span>
                <span style={{ display: 'block', width: 40, height: 40, background: 'url("data:image/png', marginLeft: 4, borderRadius: '3px 0px 0px 3px', marginRight: 0 }} />
            </a>
        </div>
)
} 


export default SignIn;