import React, { Component } from 'react';
import './style.css';

export default class ContentComponent extends Component {

    state = {
        showStreaming: false,
        showSetting: false,
    }

    render() {
        const { showStreaming, showSetting } = this.state;

        return (
            <div className="App">
                {
                    !showStreaming &&
                    <div className="showVideo" onClick={this.showVideo}>Show Video</div>
                }
                {
                    showStreaming &&
                    <div>
                        <div className="header fas fa-cog" onClick={this.showSetting} title="Settings">
                            {
                                showSetting &&
                                <div className="setting-content">
                                    <div className="setting-close fas fa-times" onClick={(e) => this.hideSetting(e)} title="Close Settings"></div>
                                </div>
                            }
                        </div>
                        <div className="footer fas fa-phone" onClick={this.hideVideo} title="Close Video"></div>
                        <iframe className="frame" src="https://www.youtube.com/embed/YTJg8q9Q940" title="Video Stream"></iframe>
                    </div>
                }
            </div>
        )
    }

    showVideo = () => {
        this.setState({ showStreaming: true });
    }

    hideVideo = () => {
        this.setState({ showStreaming: false });
    }

    showSetting = () => {
        this.setState({ showSetting: true });
    }

    hideSetting = e => {
        e.stopPropagation();
        this.setState({ showSetting: false });
    }
}
