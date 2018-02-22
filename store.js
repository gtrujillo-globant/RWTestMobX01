import mobx, {observable, action, computed} from 'mobx';

export default class Store {
    @observable start = Date.now();
    @observable current = Date.now();

    @computed get elapsedTime() {
        return (this.current - this.start) + "milliseconds"
    }

    @action resetTimer = () => {
        const time = Date.now();
        this.start = time;
        this.current = time;
    }
}

