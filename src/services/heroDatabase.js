export const fetchHeros = () => {
    return fetch(`${process.env.URL}/`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json());
};