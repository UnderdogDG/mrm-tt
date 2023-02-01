class IpBuilder{
    constructor(){
        this.str = '';
        this.ipCollection = [];
        this.ipJoined = [];
    }

    setString(str){
        let prev = str.trim().toString();
        this.str = !prev.match(/\D/g) && (prev.length <= 12) ? prev : '';
        return this;
    }

    validate(str){
        return str.length <= 3 && parseInt(str) <= 255 && !str.match(/^0{1,}[0-9]{1,}/g)
    }

    makeGroups(str, arr=[]){
        let size = Math.min(str.length, 3);

        for(let i = size; i > 0; --i){

            let frag = str.substr(0, i);
            let res = str.substr(i, str.length - 1);

            if(this.validate(frag)){
                
                if(arr.length <= 2 && this.validate(res) ){
                    this.ipCollection.push([...arr, frag, res]);
                }

                this.makeGroups(res, [...arr, frag]);
            }

        }

        return this;

    }

    build(){
        this.ipCollection = [];
        this.makeGroups(this.str);
        this.ipJoined = this.ipCollection.map(e=>e.join('.'));

        return this.ipJoined;
    }
}

module.exports = IpBuilder;