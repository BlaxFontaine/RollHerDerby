import React from "react";
import { Link } from "react-router-dom";

class LeagueList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagues: []
    };
  }

  componentDidMount() {
      const url = "/api/v1/leagues/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ leagues: response }))
        .catch(() => this.props.history.push("/"));
  }

  render() {
    const { leagues } = this.state;
    const allLeagues = leagues.map((league, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src="https://res.cloudinary.com/ddzuex19b/image/upload/v1574266920/enchanted_island_roller_derby.jpg"
            className="card-img-top"
            alt={`${league.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{league.name}</h5>
            <Link to={`/league/${league.id}`} className="btn custom-button">
              View league
            </Link>
          </div>
        </div>
      </div>
    ));
    const noLeague = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No leagues yet. Why not <Link to="/new_league">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Leagues for every occasion</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular leagues, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/league" className="btn custom-button">
                Create New league
              </Link>
            </div>
            <div className="row">
              {leagues.length > 0 ? allLeagues : noLeague}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}
export default LeagueList;
