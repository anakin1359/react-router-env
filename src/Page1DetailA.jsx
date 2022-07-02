import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
    const { state } = useLocation();
    console.log("state: ", state);

    // Screen transition processing with JavaScript
    const pageBackHistory = useHistory();
    const onClickBack = () => pageBackHistory.goBack();

    return (
        <div>
            <h1>Page1DetailA Page</h1>
            <button
                onClick={onClickBack}
            >
                previous
            </button>
        </div>
    );
};