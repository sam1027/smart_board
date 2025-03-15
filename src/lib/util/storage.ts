/**
 * Localstorage 에 저장
 */
const validCheckLocalStorage = () => {
    try{
        localStorage.setItem('localStorageCheck', 'localStorageCheck');
        localStorage.removeItem('localStorageCheck');
        return true;
    }catch(e){
        return false
    }
}
class FallbackStorage {
    fallbackStorage : {
        [key: string] : string;
    } = {};

    validChk: boolean = validCheckLocalStorage();

    setItem(key: string , value: any) {
        const _str = JSON.stringify(value);
        if(this.validChk) {
            localStorage.setItem(key, _str);
            return;
        }
        this.fallbackStorage[key] = _str;
    }

    getItem(key: string) {
        let value = this.validChk ? localStorage.getItem(key) : this.fallbackStorage[key];
        try{            
            return JSON.parse(value || '');
        }catch(e){
            return null;
        }
    }

    removeItem(key: string) {
        if(this.validChk) {
            localStorage.removeItem(key);
            return;
        }
        delete this.fallbackStorage[key];
    }
}
const fallBackStorage = new FallbackStorage();


const validCheckSessionStorage = () => {
    try{
        sessionStorage.setItem('sessionStorageCheck', 'sessionStorageCheck');
        sessionStorage.removeItem('sessionStorageCheck');
        return true;
    }catch(e){
        return false
    }
}
class FallbackSessionStorage {
    fallbackStorage : {
        [key: string] : string;
    } = {};

    validChk: boolean = validCheckSessionStorage();

    setItem(key: string , value: any) {
        const _str = JSON.stringify(value);
        if(this.validChk) {
            sessionStorage.setItem(key, _str);
            return;
        }
        this.fallbackStorage[key] = _str;
    }

    getItem(key: string) {
        let value = this.validChk ? sessionStorage.getItem(key) : this.fallbackStorage[key];
        try{            
            return JSON.parse(value || '');
        }catch(e){
            return {};
        }
    }

    removeItem(key: string) {
        if(this.validChk) {
            sessionStorage.removeItem(key);
            return;
        }
        delete this.fallbackStorage[key];
    }
}
const fallBackSessionStorage = new FallbackSessionStorage();



export  {fallBackStorage,fallBackSessionStorage};