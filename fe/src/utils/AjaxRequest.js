import SiteData from './SiteData';

class AjaxRequest{
  constructor(){
    this.site = new SiteData();
  }
  
  IpCollectionRequest(str){
    let { url, method, header } = this.site.getIpCollection();
    let raw = JSON.stringify({ ip: str});
    console.log(raw);
    let options = { method, header };
    return this.doRequest(url+"?ip="+str, options);
  }

  doRequest(url, options){
    return fetch(url, options).then( res => res.json() );
  }


};

export default AjaxRequest;