import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
    const { state } = useLocation();
    console.log("state: ", state);

    return (
        <div>
            <h1>Page1DetailA Page</h1>
        </div>
    );
};