const {RESTDataSource} = require("apollo-datasource-rest");

// REST datasource for cashing -> N+1 cashing problem
class TrackAPI extends RESTDataSource{
  constructor(){
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome(){
    return this.get("tracks");
  }

  getTrack(trackId){
    return this.get(`track/${trackId}`)
  }

  getAuthor(autherId){
    return this.get(`author/${autherId}`);
  }

  getModule(moduleId){
    return this.get(`module/${moduleId}`);
  }

}


module.exports = TrackAPI;