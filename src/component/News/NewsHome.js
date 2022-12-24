import { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar"
import News from "./News"
import Settings from "./Settings";

const NewsHome = () => {
    const [pagesize, setPagesize] = useState(6);
    const [showSetting, setShowSetting] = useState(false)
    const [searchKeyWords, setSearchKeyWords] = useState('')
    const q = new URLSearchParams(useLocation().search)
    let category = q.get("id");
    (!category)?category='general':void 0;

    const handleSetting = () => {
        showSetting ? setShowSetting(false) : setShowSetting(true)
    }

    const handleSearch = (keywords) => {
        console.log(keywords);
        setSearchKeyWords(keywords)
    }
    const handlePageSizeChanged = (size) => {
        setPagesize(size.value)
        console.log(size.value);
    }
  return (
    <div>
      <NavBar showSettings={handleSetting} searchMe={handleSearch} />
    {!showSetting && <News pageSize={pagesize} key={category} category={category} keywords={searchKeyWords} /> }
    {showSetting && <Settings showSettings={handleSetting} previousPageSize={pagesize} pageSizeChanged={handlePageSizeChanged}/> }
    </div>
  )
}

export default NewsHome
