import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleBook() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
    
  const [data, setData] = useState([]);
  const urlSlug = useParams();
  const baseUrl = `${serverUrl}/api/books/${urlSlug.slug}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Basic
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  function StarRating({ numberOfStars }) {
    const stars = [];
    for (let i = 0; i < numberOfStars; i++){
        stars.push(<span key={i}>★</span>)
    }
    return <div>Rating: {stars}</div>
  }



  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Link to={"/books"}>Back to books</Link>
      <div className="bookdetails">
        <div className="col-1">
            <img src={`${serverUrl}/uploads/${data.thumbnail}`} alt={data.title} height='500' />
            
            <Link to={`/editbook/${data.slug}`}></Link>
        </div>

        <div className="col-2">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>Stars: {data.stars}</p>
            <StarRating numberOfStars={data.stars}/>

            <p>Category</p>
            <ul>
                {data.category?.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
      </div>
      <Link to={`/editbook/${data.slug}`}>Edit book</Link>
    </div>
  )
}

export default SingleBook
