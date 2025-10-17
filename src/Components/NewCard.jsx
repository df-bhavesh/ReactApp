import React from 'react';
import PropTypes from 'prop-types';

const NewCard = (props) => {

    return (
        <>
            <div className="d-flex gap-2 align-items-center">
                <div className="fs-4">{props.count}</div>
                <button onClick={props.IncrementCount} className="btn btn-success">
                    {props.increment}
                </button>
                <button onClick={props.DecrementCount} className="btn btn-danger">
                    {props.decrement}
                </button>
            </div>
        </>
    );
};
NewCard.propTypes = {
    increment: PropTypes.string,
    decrement: PropTypes.string,
    count: PropTypes.number.isRequired,
    IncrementCount: PropTypes.func.isRequired,
    DecrementCount: PropTypes.func.isRequired,
};
export default NewCard;
