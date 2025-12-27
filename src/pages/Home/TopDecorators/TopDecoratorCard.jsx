import React from 'react';

const TopDecoratorCard = ({decorator}) => {

    const {name, rating_num,speciality,image} = decorator;
    return (
        <div className="w-87.5 h-87.5 mx-auto">
            <img src={image} className="w-full h-full object-contain rounded-lg"></img>
            <p className="text-large">{name}</p>
            <p>{rating_num}</p>
            <p>{speciality}</p>
        </div>
    );
};

export default TopDecoratorCard;