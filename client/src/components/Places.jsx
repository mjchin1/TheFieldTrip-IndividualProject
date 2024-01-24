import React from 'react';
import { useFetchPlacesQuery } from '../api/placesAPI.js';
import { useNavigate } from 'react-router-dom';



const Places = () => {
  const { data = [], error, isLoading } = useFetchPlacesQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <div> Loading...</div>;

  }

  if (error) {

    return <div> Error </div>;

  }

  return (
    <div className="placeContainer">

      <div className="places">

        <h1 className="placesHeading"></h1>

        {data.map((place) => (
          <div key={place.place_id} className="place-card">
            <div className="place-image-container">
                <img className="place-image" src={place.img_url} /> <br/>
            </div> 
            <div className="place-details">
              <span className="placeName">  {place.place_name} </span> <br />
        
              <button onClick={() => {
                navigate(`/places/${place.place_id}`)
              }} >More Info </button>
            </div>
          </div>

        ))}

      </div>

    </div>
  );
};



export default Places;
