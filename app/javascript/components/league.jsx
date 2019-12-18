import React from "react";
import { Link } from "react-router-dom";

class League extends React.Component {
  constructor(props) {
    super(props);
    this.state = { league: { teams: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

   componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ league: response }))
      .catch(() => this.props.history.push("/leagues"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  render() {
    const { league } = this.state;
    let teamList = "No teams available";
    console.log(league.teams);
    if (league.teams.length > 0) {
      teamList = league.teams
        .split(",")
        .map((team, index) => (
          <li key={index} className="list-group-item">
            {team}
          </li>
        ));
    }
    const leagueCountry = this.addHtmlEntities(league.country);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src="https://res.cloudinary.com/ddzuex19b/image/upload/v1574266920/enchanted_island_roller_derby.jpg"
            alt={`${league.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {league.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">teams</h5>
                {teamList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">League country</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${leagueCountry}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger">
                Delete league
              </button>
            </div>
          </div>
          <Link to="/leagues" className="btn btn-link">
            Back to leagues
          </Link>
        </div>
      </div>
    );
  }


}

export default League;
