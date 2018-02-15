import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import mobx, {observable, action, computed} from 'mobx';
import DevTools from 'mobx-react-devtools'

// mobx.useStrict(true);

class App {
    @observable start = Date.now();
    @observable current = Date.now();

    @computed get elapsedTime() {
        return (this.current - this.start) + "milliseconds"
    }

    @action resetTimer = () => {
        const time = Date.now();
        this.start = time;
        this.current = time;
//         console.log(mobx.isObservableObject(this));
//         console.log(mobx.toJS(this));
    } 

//    @action tick = () => {
//        this.current = Date.now()
//        console.log(this.start, this.current, this.elapsedTime);
//    }
}

@observer
class TimerView extends React.Component {
    onReset = () => {
        this.props.appState.resetTimer();
    }

    render() {
        return (
            <React.Fragment>
                <DevTools />
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.elapsedTime}
                </button>
            </React.Fragment>
        );
    }
};

const target = document.getElementById('app');
const appState = new App();

setInterval(() => { appState.current = Date.now() }, 1000);
// setInterval(appState.tick, 1000);

ReactDOM.render(<TimerView appState={appState} />, target);
