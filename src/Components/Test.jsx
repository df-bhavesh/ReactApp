import React from 'react';

const Test = () => {
    const post = {
        content: `<img src=x onerror="alert('Hi')" />`
    };
    // const markUp = { __html: `<img src=https://www.shutterstock.com/image-illustration/business-cartoon-showing-meeting-businessman-260nw-301186181.jpg" />` };
    const markUp = { __html: post.content };
    return (
        <div dangerouslySetInnerHTML={markUp}>

        </div>
    );
}

export default Test;
