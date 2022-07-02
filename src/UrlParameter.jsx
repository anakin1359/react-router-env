import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
    const { ParameterId } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    console.log("ParameterId: ", ParameterId);
    console.log("search     : ", search);
    console.log("queryObject: ", query);
    console.log("query's get: ", query.get);

    return (
        <div>
            <h1>Url Parameter Page</h1>
            <p>Parameter is {ParameterId}.</p>
            <p>Query Parameter is {query.get("name")}.</p>
        </div>
    );
};