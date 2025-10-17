import React from "react";
import Friend from "./Friend"; // assuming you have a Friend component

const friends = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const FriendList = () => {
    <>

const items = [];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        items.push(<Friend key={friend.id} friend={friend} />);
    }

    // ✅ Then return JSX
    </>
    return <section>{items}</section>;
};

export default FriendList;
