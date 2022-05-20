import family from '../img/family.jpg';

function Home() {
  return (
    <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row mb-5 mt-5">
          <div class="col-md m-auto">
            <h2 class="text-justify">Most Luminous Group Production</h2>
            <p>Abadikan Momen Bahagiamu, Bayar Sesukamu!</p>
            <a class="btn btn-primary" href="/footer">Whatsapp Admin</a>
          </div>
          <div class="col-md">
            <img src={family} class="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
