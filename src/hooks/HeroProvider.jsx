import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const HeroContext = createContext();

const HeroProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [heroes, setHeroes] = useState([]);
    const [hero, setHero] = useState({});

    return (
        <HeroContext.Provider value={{ loading, setLoading, heroes, setHeroes, hero, setHero }}>
            {children}
        </HeroContext.Provider>
    );
};

export const useSetHeroes = () => {
    const { setHeroes } = useContext(HeroContext);
    return setHeroes;
};

export const useSetHero = () => {
    const { setHero } = useContext(HeroContext);
    return setHero;
};

export const useSetLoading = () => {
    const { setLoading } = useContext(HeroContext);
    return setLoading;
};

export const useHeroes = () => {
    const { heroes } = useContext(HeroesContext);
    return heroes;
};

export const useHero = () => {
    const { hero } = useContext(HeroContext);
    return hero;
};

export const useLoading = () => {
    const { loading } = useContext(HeroContext);
    return loading;
};

HeroProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default HeroProvider;