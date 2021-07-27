class APIFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr= queryStr;
        
    }

    search(){
        const params = this.queryStr.params ? {
            name:{
                $regex : this.queryStr.params,
                $options : 'i' 
            }
        } : {}
        console.log(params);
        this.query = this.query.find({...params});
       
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr};
        const removeField =['params','limit','page']
        removeField.forEach(el=>delete queryCopy[el]);
        this.query = this.query.find(queryCopy);
        return this;
       
    }
}

module.exports = APIFeatures
