import SiteData from './SiteData';

class AjaxRequest{
  constructor(){
    this.site = new SiteData();
  }
  
  IpCollectionRequest(str){
    let { url, method, headers } = this.site.postIpCollection();
    let body = JSON.stringify({ ip: str });
    let options = { method, headers, body };
    console.log(options);
    return this.doRequest(url, options);
  }

  IpCollectionRequestGet(str){
    let { url, method, header } = this.site.getIpCollection();
    let options = { method, header };
    return this.doRequest(url+"?ip="+str, options);
  }

  doRequest(url, options){
    return fetch(url, options).then( res => res.json() );
  }


};

export default AjaxRequest;