const conect = require('../config/conect');


const Categories = {

    async create(require, response){
        const { category, iconURL, status } = require.body; 

        if(!category || !iconURL || !status) 
            return response.status(400).json({
                Mensagem: "Os campos obrigatório devem ser preenchidos correctamente"
        })

        
    }
}

 module.exports = {
    Categories
 }