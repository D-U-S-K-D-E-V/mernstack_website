import axios from 'axios';

// export function getData(route){
//     const returnData = [];
//     async function callData(){
//         const res = await axios.get(route);
//         returnData[0] = (res.data[0]);
//     };
//     callData()
//     console.log(returnData);
//     return returnData;
// }

export async function GetData(route, setMethod){
    await fetch(route, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        return res.json()
    })
    .then(json => {
        return setMethod({
            data: json,
            success: true
        })
    })
    .catch(err => {
        console.log(err)
        return setMethod({
            data: "There was an error",
            success: false
        })
    })
}

export function postData(route, data){
    return axios.post({route, data})
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
        })
};