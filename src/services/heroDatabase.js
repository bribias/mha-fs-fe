export const fetchHeros = () => {
    return fetch('http://localhost:7890/api/v1/heroes', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json());
};

export const fetchHeroById = (id) => {
    return fetch(`http://localhost:7890/api/v1/heroes/${id}`, {
      method: 'GET',
    }).then((res) => res.json());
};

export const postHero = (newHero) => {
    return fetch('http://localhost:7890/api/v1/heroes', {
      method: 'POST',
      body: JSON.stringify(newHero),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
};

export const updateHero = (id, newHero) => {
    return fetch(`http://localhost:7890/api/v1/heroes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newHero),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
};

export const deleteHeroById = (id) => {
    return fetch(`http://localhost:7890/api/v1/heroes/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
};