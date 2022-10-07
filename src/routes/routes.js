const express = require('express');
const {Categories} = require('../controllers/categoriesController')

const router = express.Router()


router.get('/create', Categories.CreateCategories);

module.exports = {router};