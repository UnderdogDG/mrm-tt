class State{
    constructor(){
        this.ip = '';
        this.loading = false;
        this.listIp = [];
    }

    setStringIp(str){
        this.ip = str;
        return this.updateState();
    }

    searchListIp(){
        this.ip = '';
        return this.updateState();
    }

    setListIp(list){
        this.listIp = [...list];
        return this.updateState();
    }

    updateState(){
        let state = {...this};
        Object.setPrototypeOf(state, State.prototype);
        return state;
    }
}

export default State;