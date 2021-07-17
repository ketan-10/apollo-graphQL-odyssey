const {RESTDataSource} = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource{
  constructor(){
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome(){
    return this.get("tracks");
  }

  getAuthor(autherId){
    return this.get(`author/${autherId}`);
  }

}


module.exports = TrackAPI;