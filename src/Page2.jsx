import { Link } from "react-router-dom"

export const Page2 = () => {
    return (
        <div>
            <h1>Page2 Page</h1>
            <Link to="/page2/1359">React URL Parameter</Link>
            <br/>

            <Link to="/page2/1359?name=query_parameter">Query Parameter</Link>
        </div>
    )
}