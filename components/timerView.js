import React from 'react';
import {observer} from 'mobx-react';

@observer
export default class TimerView extends React.Component {
    onReset = () => {
        this.props.appState.resetTimer();
    }

    render() {
        return (
            <button onClick={this.onReset}>
                Seconds passed: {this.props.appState.elapsedTime}
            </button>
        );
    }
};

