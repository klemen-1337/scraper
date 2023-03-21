import "bootstrap/dist/css/bootstrap.min.css";
import { fetchApartments } from "./features/apartments";
import { useState, useEffect } from 'react';

const HomePage = () =>{

  const [apartments, setApartments] = useState([]);

  useEffect(() =>{
    const apartment = async() => setApartments(await fetchApartments());
    apartment();
  }, []);

  return (
    <div className="App">
      <h1 className='mb-5'>Apartment ads</h1>
        <div className='row'>
          {apartments && apartments.map(apartment =>(
              <div className="card w-25" key={apartment.id}>
                <img className="card-img-top" src={apartment.imageurl} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">{apartment.title}</h5>
                  <p className="card-text">{apartment.loc}</p>
                  <p className="card-text"><small className="text-muted">{apartment.price}</small></p>
                </div>
              </div>
          ))}
        </div>
    </div>
  );
}

export default HomePage;
