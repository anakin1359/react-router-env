import { useParams } from "react-router-dom";

export const UrlParameter = () => {
    const { ParameterId } = useParams();
    console.log("ParameterId: ", ParameterId);
    return (
        <div>
            <h1>Url Parameter Page</h1>
            <p>Parameter is {ParameterId}.</p>
        </div>
    );
};