export function getIntState(key, defaultValue){
    if(sessionStorage.getItem(key) == null){
        return defaultValue;
    }
    else{
        return parseInt(sessionStorage.getItem(key));
    }
}

export function getStringState(key, defaultValue){
    if(sessionStorage.getItem(key) == null){
        return defaultValue;
    }
    else{
        return sessionStorage.getItem(key);
    }
}

export function getArrayState(key, defaultValue){
    if(sessionStorage.getItem(key) == null){
        return defaultValue;
    }
    else{
        return JSON.parse(sessionStorage.getItem(key));
    }
}

export function getObjectState(key, defaultValue){
    if(sessionStorage.getItem(key) == null){
        return defaultValue;
    }
    else{
        return JSON.parse(sessionStorage.getItem(key));
    }
}

export function getBooleanState(key, defaultValue){
    if(sessionStorage.getItem(key) == null){
        return defaultValue;
    }
    else{
        return Boolean(sessionStorage.getItem(key));
    }
}

export function updateIntState(key, preValue, newValue, setMethod){
    const newState = preValue + newValue;
    setMethod(newValue);
    updateStorage(key, newState);
}

export function updateStringState(key, newValue, setMethod){
    setMethod(newValue);
    updateStorage(key, newValue);
}

export function updateArrayState(key, newValue, setMethod){
    setMethod(newValue);
    updateStorage(key, JSON.stringify(newValue));
}

export function updateObjectState(key, newValue, setMethod){
    setMethod(newValue);
    updateStorage(key, JSON.stringify(newValue));
}

export function updateBooleanState(key, newValue, setMethod){
    setMethod(newValue);
    updateStorage(key, newValue);
}

function updateStorage(key, currentValue){
    sessionStorage.setItem(`${key}`, `${currentValue}`)
}