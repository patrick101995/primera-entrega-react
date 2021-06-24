export async function getData(){
    const response = await fetch('./api.json')
    const data = await response.json();
    return data;
}