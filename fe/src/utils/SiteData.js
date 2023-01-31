import EndPoints from './EndPoints'

class SiteData{
  constructor(){
    this.siteURL = 'http://127.0.0.1:8080/';
    this.endPoints = EndPoints;
  }

  getHeader(){
    let headers = new Headers();
    headers.append( "Content-Type", "application/json; charset=UTF-8" );
    return headers;
  }

  getIpCollection(){
    let url = this.siteURL + this.endPoints.IP_COLLECTION.URI
    let header = this.getHeader();
    let method = this.endPoints.IP_COLLECTION.METHOD
    return { url, header, method };
  }
};

export default SiteData;