const {conect} = require('../config/conect');
const { getFirestore, collection, addDoc, query, where, docs, getDocs, doc, setDoc} = require('firebase/firestore');

const DB = getFirestore(conect);
const GETCATEGORIES = collection(DB, 'Categories'); 
const GETSUBCATEGORIES = collection(DB, 'SubCategories'); 

const Categories = {

    async CreateCategories(require, response){
        const { category, iconURL, status, logoURL, name, uid } = require.body; 

        if(!category || !iconURL || !status) 
            return response.status(400).json({
                Mensagem: "Os campos obrigatórios devem ser preenchidos correctamente"
        })

        if(!logoURL || !name || !uid) 
            return response.status(400).json({Mensagem: "Os campos da subcategoria não podem ser nulos"})
        
        const GetDocumentCategories = await getDocs(GETCATEGORIES);
        const q = await query(GETCATEGORIES, where("category", "==", "comercio"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });

        try{
            const addCategories = await addDoc(GETCATEGORIES, {
                category, 
                iconURL, 
                status
            })
            const SubCategory = await setDoc(doc(GETSUBCATEGORIES, category), {
                    highLigthVendors: [{
                        logo: 'http adress', 
                        name: 'sun marce', 
                        uid: 'fgtvbhjnmkl'
                        }
                    ], 
                    SubCategory: category, 
                    SubCategoryDisplayName: category
                })

        return response.status(200).json({
                Message: "Categoria e subcategoria adicionadas com sucesso", 
                Categoria: addCategories, 
                SubCategory: SubCategory
        })
        }catch(error){
            console.log("Erro ao cadastrar categoria" + error.message)
            return response.status(400).json({Error: "Falha no servidor, tente mais tarde"})
        }
    }
}

 module.exports = {
    Categories
 }