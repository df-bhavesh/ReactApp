import React from 'react';

const List = () => {
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
    ];

    const Items = people.map((person) => (
        <li key={person}>{person}</li>
    ));

    return (
        <div>
            <h3>List of Scientists</h3>
            <ul>{Items}</ul>
        </div>
    );
};

export default List;
