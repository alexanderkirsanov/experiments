import ReactDOM from 'react-dom';
import React from 'react';
import dynamics from 'dynamics.js';
let Loader = class extends React.Component {
    constructor(){
        super();
    }
    _animate() {
        var el = ReactDOM.findDOMNode(this);
        dynamics.animate(el, {
            opacity: 1
        }, {
            duration: 250,
            complete: this._animateLine.bind(this)
        });
    }
    _animateLine() {
        dynamics.animate(this.refs.line, {
            strokeDasharray: "40, 117"
        }, {
            type: dynamics.easeInOut,
            duration: 400,
            friction: 700,
            complete: () => {
                dynamics.animate(this.refs.line, {
                    strokeDasharray: "120, 37"
                }, {
                    type: dynamics.easeInOut,
                    duration: 800,
                    complete: this._animateLine.bind(this)
                })
            }
        })
    }
    _rotate() {
        dynamics.animate(this.refs.background, {
            rotateZ: 180,
            rotateC: 60
        }, {
            type: dynamics.linear,
            duration: 500,
            complete: () => {
                dynamics.css(this.refs.background, { rotateZ: 0 });
                this._rotate();
            }
        })
    }
    componentDidMount() {
        this._animate();
        this._rotate();
    }

    render() {
        const spinnerStyle= {
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginLeft: '-60px',
            marginTop: '-60px',
            overflow: 'visible',
            opacity: 0
        };
        const lineStyle = {
            stroke: '#0083FF',
            strokeWidth: 10,
            strokeDasharray: [120, 37],
            strokeLinecap: 'square',
            strokeLinejoin: 'round',
            fill: 'transparent'
        };
        const arrowStyle = {
            fill: '#0083FF'
        };
        const tickStyle = {
            opacity: 0
        };
        return (
            <svg style={spinnerStyle} version="1.1" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
                <defs>
                    <clipPath id="clipPath">
                        <circle cx="60" cy="60" r="55"/>
                    </clipPath>
                </defs>
                <g ref="background" className="background">
                    <g transform="translate(120, 0) scale(-1, 1)">
                        <circle ref="line" style={lineStyle} cx="60" cy="60" r="50" clipPath="url(#clipPath)"/>
                        <g transform="translate(95, 45)">
                            <path style={arrowStyle} d="M1 16L14.2 0l13.2 15.8H1z"/>
                        </g>
                        <g transform="translate(25, 75) rotate(180)">
                            <path style={arrowStyle} d="M1 16L14.2 0l13.2 15.8H1z"/>
                        </g>
                    </g>
                </g>
                <g style={tickStyle} transform="rotate(-45, 60, 60)">
                    <path fill="white" d="M17.977 35.553L0 16.276l5.112-4.768 17.727 19.01L52.31 0l4.93 4.76L22.83 40.39l-.316-.305-.168.156-2.98-3.194-1.465-1.416.074-.077z" transform="translate(28, 40) scale(1.15)" fill-rule="evenodd"/>
                </g>
            </svg>
        );
    }
};
export default Loader;
