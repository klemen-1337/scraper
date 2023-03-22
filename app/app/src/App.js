import "bootstrap/dist/css/bootstrap.min.css";
import { fetchApartments } from "./features/apartments";
import { useState, useEffect } from 'react';
import './App.css';

const HomePage = () =>{

  const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
  }

  useEffect(() =>{
    const apartment = async() => setApartments(await fetchApartments(currentPage));
    apartment();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [currentPage]);

  return (
    <div className="App">
      <h1 className='mb-4'>Apartment ads</h1>
      <div className="container">
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 card-deck'>
          {apartments.map(apartment =>(
            <div className="col">
              <div className="card" key={apartment.id}>
                <img className="card-img-top" src={apartment.imageurl} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">{apartment.title}</h5>
                  <p className="card-text">{apartment.loc}</p>
                  <p className="card-text"><small className="text-muted">{apartment.price}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          {[...Array(24).keys()].map((page) => (
            <button key={page} 
                    style={{marginRight: '2px', marginBottom: '2px', width: '40px'}} 
                    className={`btn ${currentPage === page + 1 ? 'btn-primary' : 'btn-secondary'}`} 
                    onClick={() => handleClick(page + 1)}>{page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
