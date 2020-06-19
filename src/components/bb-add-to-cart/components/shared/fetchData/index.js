const api = 'https://bb-add-to-cart-api.herokuapp.com';

export default (url,options = {})=>{

    const headers = {
        headers:{
            'Content-Type': 'application/json'
        },
        ...options
    }

const fetchData = fetch(`${api}/${url}`,headers).then(data=>data)

return fetchData;
};

