
import { useState } from "react";
import NewsContext from "./NewsContext";

const NewsState = (props) => {

    const [keywords, setKeywords] = useState('');

    return (
        <NewsContext.Provider value={{keywords, setKeywords}}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;