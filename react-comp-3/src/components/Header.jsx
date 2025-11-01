function Header(props) {
  console.log(props)
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <a className="navbar-brand fs-3 fw-bold" href="#">
                Todo list
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto">
                  <a className="nav-link active mx-3" aria-current="page" href="#">
                    Home
                  </a>
                  <a className="nav-link mx-3" href="#">
                    Features
                  </a>
                  <a className="nav-link mx-3" href="#">
                    Pricing
                  </a>
                </div>
                <div className="navbar-nav ms-auto">
                  <button className="btn btn-success mx-2 my-2">Login</button>
                  <button className="btn btn-info text-light my-2">Sign in</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
