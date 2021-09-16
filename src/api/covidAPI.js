import axios from "axios";
import moment from "moment";
const baseURL = "https://api.covid19api.com";
const covidAPI = {
  fetchAllCoutries: () => {
    return axios.get(`${baseURL}/countries`);
  },
  fetchCountryData: (countryId) => {
    return axios.get(
      `${baseURL}/dayone/country/${countryId}?from=2021-01-01T00:00:00&to=${moment()
        .utc(0)
        .format()}`
    );
  },
  fetchMapDataByCountry: (conuntryCode) => {
    return import(
      `@highcharts/map-collection/countries/${conuntryCode}/${conuntryCode}-all.geo.json`
    );
  },
};

export default covidAPI;
