const knexFile = require('./knexfile').development;
const knex = require('knex')(knexFile);

class Method {
    constructor(knex){
        this.knex = knex
    }

    async get(){
       return await knex.select('*').from('list')
    }

    async add(url){
        let id = await knex.insert({
            url: url
        }).into('list').returning('id')
        return await knex('list').where('id', id[0])
    }

    async remove(id){
        await knex('list').where('id', id).del()
    }
}

module.exports = Method;