import React, { useEffect } from 'react';
import HeroList from './HeroList';
import { Link } from 'react-router-dom';
import { useLoading, useSetLoading, useHeroes, useSetHeroes } from '../../hooks/HeroProvider';

const ListOfCharacters = () => {
    const loading = useLoading();
    const setLoading = useSetLoading();
    const heroes = useHeroes();
    const setHeroes = useSetHeroes();

    useEffect(() => {
        fetchHeros()
            .then((heroesArr) => setHeroes(heroesArr))
            .then(() => setLoading(false));
    }, []);

    if (loading) 
        return (
            <img src="https://orig00.deviantart.net/2814/f/2017/291/9/d/ezgif_com_gif_maker__2__by_mha_admin-dbr0sr3.gif" alt="loading spinner" />
        );

    return (
        <ul role="list" aria-label="hero-list">
            {heroes.map((hero) => (
                <Link key={hero.id} to={`${hero.id}`}>
                    <li key={hero.id}>
                        <HeroList image={hero.image} name={hero.name} />
                    </li>
                </Link>
            ))}
        </ul>
    );
};