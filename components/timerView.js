import React from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class TimerView extends React.Component {
    onReset = () => {
        this.props.appState.resetTimer();
    }

    render() {
        return (
            <React.Fragment>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <DevTools position={{top: 20}} highlightTimeout={5000}/>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.elapsedTime}
                </button>
            </React.Fragment>
        );
    }
};

