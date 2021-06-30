const express = require("express")

class Router {
    constructor(Method) {
        this.Method = Method
    }

    router() {
        let router = express.Router();
        router.get("/", this.get.bind(this))
        router.post("/add", this.add.bind(this))
        router.post("/remove", this.remove.bind(this))
        return router;
    }

    async get(req, res) {
        let data = await this.Method.get()
        res.send(data)
    }

    async add(req, res) {
        let data = await this.Method.add(req.body.url)
        res.json(data)
    }

    async remove(req, res) {
        await this.Method.remove(req.body.id)
        res.json({
            success: true
        })
    }

   
}

module.exports = Router;