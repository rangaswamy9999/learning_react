import { UserContext } from "./userContext";
import React, { useContext } from "react";

export
const Child2 = () => {

    const user = useContext(UserContext);
    const { name } = user;
    console.log(name);


    return(
        <h1>Child 2</h1>

    );
};

export default Child2;