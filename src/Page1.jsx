import { Link } from "react-router-dom"

export const Page1 = () => {
    const sampleArray = [...Array(25).keys()];
    console.log("sampleArray: ", sampleArray);
    return (
        <div>
            <h1>Page1 Page</h1>
            {/* <Link to="/page1/detailA">Link to DetailA</Link> */}
            <Link to={{
                pathname: "/page1/detailA",
                state: sampleArray
            }}>
                Link to DetailA
            </Link>
            <br />

            <Link to="/page1/detailB">Link to DetailB</Link>
            <br />
        </div>
    )
}