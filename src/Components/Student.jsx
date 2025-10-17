import PropTypes from 'prop-types';

const Student = (props) => {
    const studentStyle = {
        fontFamily: "Arial, sans-serif",
        border: "2px solid #111",
        padding: "10px",
        margin: "10px",
        height: "auto",
        width: "auto",
    };

    return (
        <div style={studentStyle}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};

export default Student;
