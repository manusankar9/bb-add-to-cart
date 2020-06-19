import fetchData from './../shared/fetchData'

export const getAllData = async ()=>{
    const fetchedData = await fetchData('addItems');

    return fetchedData.json();
}