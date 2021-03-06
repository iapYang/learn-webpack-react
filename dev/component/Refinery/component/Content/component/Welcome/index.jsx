import React from 'react';
import classNames from 'classNames';

class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            'next-disabled': false,
        };
    }
    handleNextClick() {
        this.props.onNextClick.call(this, this.props.index, this.state);
    }
    render () {
        return (
            <div className='welcome frame'>
                <div className='wrapper'>
                    <div className='logo'>
                        <img src='./image/logo.png' />
                    </div>
                    <div className='title'>
                        <img src='./image/entrance.gif' />
                    </div>
                    <div className='desc'>
                        <span>
                            THE PERFECT PRESENT IS RIGHT THIS WAY
                        </span>
                    </div>
                    <div
                        className='btn-start'
                        onClick={this.handleNextClick.bind(this)}
                        >
                        <span className='text'>begin</span>
                        <span className='symbol'>l</span>
                    </div>
                    <div className='check-out'>
                        <a
                            href='http://www.refinery29.com/best-gifts'
                            target='_blank'
                            >
                            OR GO STRAIGHT TO GIFT GUIDES
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
