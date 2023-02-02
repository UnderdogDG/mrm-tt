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

  postIpCollection(){
    let url = this.siteURL + this.endPoints.IP_COLLECTION_POST.URI
    let headers = this.getHeader();
    let method = this.endPoints.IP_COLLECTION_POST.METHOD
    return { url, headers, method };
  }

  getIpCollection(){
    let url = this.siteURL + this.endPoints.IP_COLLECTION_GET.URI
    let header = this.getHeader();
    let method = this.endPoints.IP_COLLECTION_GET.METHOD
    return { url, header, method };
  }
};

export default SiteData;