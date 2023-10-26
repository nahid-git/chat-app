import { Helmet } from "react-helmet";
const Title = ({props}) => {
    return (
        <div>
            <Helmet>
                <title>{props}</title>
            </Helmet>
        </div>
    );
};

export default Title;