// import { Link } from "react-router-dom"
import noImage from './img/noImage.png'

const NewsItem = ({title, description, imageUrl, url, author, date, source}) => {
  return (
    <div>
      <div className="card">
        <div style={{float:'right'}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl?imageUrl:noImage} height="170px" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title?title.substring(0,40):'No Title'}</h5>
            <p className="card-text">{description?description.substring(0,80):'No Description'}</p>
        </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">By: {!author?'Unknown Author' : author} </li>
              <li className="list-group-item">On: {new Date(date).toGMTString()}</li>
            </ul>
            <div className="card-body">
              <a rel="noreferrer" href={url} target="_blank" className="btn btn-primary">Read more...</a>
            </div>
        </div>
    </div>
  )
}

export default NewsItem
