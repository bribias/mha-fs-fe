import React, { useEffect } from 'react';
import { useLoading, useSetLoading, useHero, useSetHero } from '../../hooks/HeroProvider';
import { useParams } from 'react-router';
import { fetchHeroById } from '../../services/heroDatabase';

const HeroDetail = () => {
    const loading = useLoading();
    const setLoading = useSetLoading();
    const hero = useHero();
    const setHero = useSetHero();
    const { id } = useParams();

    useEffect(() => {
        fetchHeroById(id)
            .then((hero) => setHero(hero))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading)
        return (
            <img src="https://orig00.deviantart.net/2814/f/2017/291/9/d/ezgif_com_gif_maker__2__by_mha_admin-dbr0sr3.gif" alt="loading spinner" />
        );
    
    return (
        <ul aria-label="single-hero">
            <img src={hero.image} alt="`${hero.name}`-image" height={'200px'} />
            <h2>{hero.name}</h2>
            <p><i>{hero.alias}</i></p>
            <p>{hero.quirk}</p>
        </ul>
    );
};

export default HeroDetail;