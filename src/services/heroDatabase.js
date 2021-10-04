export const fetchHeros = () => {
    return fetch(`${process.env.URL}/`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json());
};

export const fetchHeroById = (id) => {
    return fetch(`${process.env.URL}/${id}`, { method: 'GET' })
        .then((res) => res.json());
};

export const postHero = (newHero) => {
    return fetch(`${process.env.URL}/}`, {
        method: 'POST',
        body: JSON.stringify(newHero),
        headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
    }).then((res) => res.json());
};

export const updateHero = (id, newHero) => {
    return fetch(`${process.env.URL}/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(newHero),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json());
};

export const deleteHeroById = (id) => {
    return fetch(`${process.env.URL}/${id}`, { method: 'DELETE' })
    .then((res) => res.json());
};