class APIFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr= queryStr;
        //console.log(this.query);
    }

    search(){
        const params = this.queryStr.params ? {
            name:{
                $regex : this.queryStr.params,
                $options : 'i' 
            }
        } : {}
        //console.log(params);
        this.query = this.query.find({...params});
       // console.log(this.query);
       
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr};
        const removeField =['params','limit','page']
        removeField.forEach(el=>delete queryCopy[el]);
        //console.log(queryCopy);
        let queryStr=JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,match=>`$${match}`)
        //console.log(queryStr); 
        //console.log(this.query.find(JSON.parse(queryStr)));
        console.log(JSON.parse(queryStr));
        this.query = this.query.find(JSON.parse(queryStr));
        //console.log(queryStr)
        //this.query = this.query.find({price:{$gte: '5'},price:{$lte: '200'}});
        return this;
       
    }


    pagination(resPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage *(currentPage - 1)
        this.query = this.query.limit(resPerPage).skip(skip);
        //console.log(this.query);
        return this;
    }


}

module.exports = APIFeatures
