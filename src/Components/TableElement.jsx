import React from 'react';

const TableElement = () => {
    // STYLE
    const tableElementStyle = {
        borderRadius: "20px",
        backgroundColor: "crimson",
        padding: "10px",
        color: "#fff",
        borderStyle: "solid",
        borderColor: "crimson"


    }
    // RETURN
    return (
        <>
            <style>
                {`
                    a {
                        // border-radius: 5px;
                        // padding: 5px 10px;
                        font-size: 16px;
                        cursor: pointer;
                        color: #111;
                        text-decoration: none;
                    }
                `}
            </style>
            <div style={tableElementStyle}>
                <h1>Bhavesh Krishan Garg</h1>
                <p>
                    I'm Bhavesh Krishan Garg, SDE @ DreamFolks Services Ltd. Gurugram Sector 62
                    <br />
                    LinkedIn: <strong>
                        <a
                            href="https://www.linkedin.com/in/bhaveshgarg2005/"
                            // style={{ color: "#fff", textDecoration: "none" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link
                        </a>
                    </strong>
                </p>

            </div>
        </>
    );
}

export default TableElement;
