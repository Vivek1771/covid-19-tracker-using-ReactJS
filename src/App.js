import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import corona from "./images/covid19.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fatchedData = await fetchData();
    this.setState({ data: fatchedData });
  }

  handleCountryChange = async (country) => {
    const fatchedData = await fetchData(country);
    this.setState({ data: fatchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div>
        <img className={styles.image} src={corona} alt="COVID-19" />
        <Cards data={data} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
        <Chart data={data} country={country} />
        <div
          className="footer"
          style={{
            paddingBottom: "1.5rem",
            paddingTop: "1.5rem",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <div className="credits">
            <span>
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
            </span>
            <span>
              {" "}
              by{" "}
              <a
                href="https://www.instagram.com/vivek_1771"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Vivek Mehta.
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
