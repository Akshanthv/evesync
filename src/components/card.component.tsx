import React from 'react';

export interface ICardProps {
    title: string;
    description: string;
}

const Card = ({title, description}: ICardProps) => {

    return (
        <div style={{border: '1px solid gray', borderRadius: '4px', padding: '8px', margin: '8px'}}>
            <div><span><b>Title: </b></span><span>{title}</span></div>
            <div><span><b>Description: </b></span><span>{description}</span></div>
        </div>
    )
}

export default Card;