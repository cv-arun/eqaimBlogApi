const blogModel = require('../model/blogModel')

module.exports = {
    createBlog:({blog})=>{
        return new Promise(async(resolve,reject)=>{
            console.log(blog,"-------------")
            try{
                let data=await blogModel.create(blog)
            resolve(data)
            } catch(err){
                reject(err)
            }
        })
    },
    getAllBlog:()=>{
        return new Promise(async(resolve,reject)=>{
            
            try{
                let data=await blogModel.find()
            resolve(data)
            } catch(err){
                reject(err)
            }
        })
    },
    getBlog:(id)=>{
        return new Promise(async(resolve,reject)=>{
            
            try{
                let data=await blogModel.findById(id)
            resolve(data)
            } catch(err){
                reject(err)
            }
        })
    }





}