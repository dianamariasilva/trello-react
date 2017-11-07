import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { NavLink } from 'react-router-dom';
// import { addDishes, moveSlides } from './actions'
import './App.css';

const Boards = () => {
    return(
        <header class="main-header" data-reactid=".0.0.0">
            <div id="boards_div" data-reactid=".0.0.0.0">
                <ul data-reactid=".0.0.0.0.0">
                    <li data-reactid=".0.0.0.0.0.0">
                            <i class="fa fa-columns" data-reactid=".0.0.0.0.0.0.0.0"></i>
                            <span data-reactid=".0.0.0.0.0.0.0.1"> Boards</span>
                    </li>
                </ul>
            </div>
                <span class="logo" data-reactid=".0.0.0.1.0"></span>
            <div class="right" data-reactid=".0.0.0.2">
                <ul data-reactid=".0.0.0.2.0">
                    <li data-reactid=".0.0.0.2.0.0">
                        <a class="current-user" data-reactid=".0.0.0.2.0.0.0">
                            <img alt="Gravatar for john@phoenix-trello.com" src="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=50" height="50" width="50" class="react-gravatar react-gravatar" data-reactid=".0.0.0.2.0.0.0.0"/>
                            <span data-reactid=".0.0.0.2.0.0.0.1"> </span>
                            <span data-reactid=".0.0.0.2.0.0.0.2">John Doe</span>
                        </a>
                    </li>
                    <li data-reactid=".0.0.0.2.0.1">
                        <a href="#" data-reactid=".0.0.0.2.0.1.0">
                            <i class="fa fa-sign-out" data-reactid=".0.0.0.2.0.1.0.0"></i>
                            <span data-reactid=".0.0.0.2.0.1.0.1"> Sign out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
)
} 
export default Boards;
