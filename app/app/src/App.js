import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 className='mb-5'>Apartment ads</h1>
        <div className='row'>
              <div className="card w-25">
                <img className="card-img-top" src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg" alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Title</h5>
                  <p className="card-text">Location</p>
                  <p className="card-text"><small className="text-muted">Price</small></p>
                </div>
              </div>
        </div>
    </div>
  );
}

export default App;
