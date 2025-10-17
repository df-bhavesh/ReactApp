import React from 'react';
import PeopleUtil from './PeopleUtil';

const Profession = () => {
    // Filter only chemists
    const chemists = PeopleUtil.filter(person => person.profession === 'chemist');

    // Convert them into <li> elements
    const chemistList = chemists.map(person => (
        <li key={person.id} style={{ listStyle: "none", marginBottom: "20px" }}>
            <h3>Name : {person.name}</h3>
            <p>Profession : {person.profession}</p>
            <p>Accompolishment : {person.accomplishment}</p>
            <img
                src={person.imageUrl}
                alt={person.name}
                width="200"
                style={{ borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            />
        </li>
    ));

    return (
        <div>
            <h1>Chemist Profession</h1>
            <ul style={{ padding: 0 }}>{chemistList}</ul>
        </div>
    );
};

export default Profession;
