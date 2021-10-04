import React from 'react';
import PropTypes from 'prop-types'

const HeroList = ({ name, image, quirk }) => (
 
<button onClick={() => {
        location.replace(`/${hero.id}`);
    }}>
        <img src={image} alt={name} height={'200px'} />
        <h2>{name}</h2>
        <p><i>{alias}</i></p>
        <p>{quirk}</p>
    </button>
);

HeroList.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
    quirk: PropTypes.string.isRequired,
}

export default HeroList;