import { Component } from "react";

class Footer extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="container">
          <footer>
            <p className="text-muted fw-semibold">copyrights are as per  2025 law by <a href="#" className="text-decoration-none text-dark">praveen</a></p>
          </footer>
        </div>
      </>
    );
  }
}
export default Footer;
