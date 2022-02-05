const typeOfStorage = {
    local: 'localStorage',
    session: 'sessionStorage'
};

class Storage {
    key;
    value;
    currentStorage;

    constructor(options, typeOfStorage = 'localStorage') {
        this.key = options.key;
        this.value = options.value;
        this.currentStorage = typeOfStorage === 'localStorage' ? localStorage : sessionStorage;
    } 

    get() {
      return this.currentStorage.getItem(this.key);
    }  

    set() {
        this.currentStorage.setItem(this.key, this.value);
    }

    clear() {
        this.currentStorage.removeItem(this.key);
    }
    isEmpty(){
        return !this.currentStorage.getItem(this.key);
    }
}

const names = new Storage({key:'name', value:12}, typeOfStorage.local);
