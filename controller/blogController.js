const blogHelper = require('../helper/blogHelper')
const blogModel = require('../model/blogModel')

module.exports = {
    createBlog: async (req, res, next) => {

        try {
            console.log(req.body,"----------body")
            let data = await blogHelper.createBlog(req.body)
            res.json(data)

        } catch (err) {
            next(err)
        }



    },
    getAllBlog: async (req, res, next) => {

        try {
            let data = await blogHelper.getAllBlog()
            res.json(data)
        } catch (err) {
            next(err)
        }
    },

    getBlogs: async (req, res, next) => {
       let skip=req.params.skip
        console.log(skip,"skip")
        try {
            let data = await blogModel.find().skip(skip).limit(3)
            res.json(data)
        } catch (err) {
            next(err)
        }

    }
    ,
    getBlog: async (req, res, next) => {
        console.log(req.params,"------------")
        try {
            let data = await blogHelper.getBlog(req.params.id)
            res.json(data)
        } catch (err) {
            next(err)
        }
    }
}