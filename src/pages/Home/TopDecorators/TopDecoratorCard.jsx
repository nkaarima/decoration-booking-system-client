import React from 'react';

const TopDecoratorCard = ({decorator}) => {

    const {name, rating_num,speciality,image} = decorator;
    return (
        <div className="w-87.5 h-87.5 mx-auto">
            <img src={image} className="w-full h-full object-contain rounded-lg"></img>
            <div className="space-y-2">
                 <p className="text-large">{name}</p>
                <p className= "text-small">Rating: {rating_num}</p>
                <p className="text-small">Speciality: {speciality}</p>
            </div>
        </div>
    );
};

export default TopDecoratorCard;