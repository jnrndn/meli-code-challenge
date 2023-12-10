const axios = require('axios');
const {Items, ItemDetail} = require('../models/itemModel');
const searchApi = 'https://api.mercadolibre.com/sites/MLA/search?q='
const itemSearchApi = 'https://api.mercadolibre.com/items/'

module.exports.getItems = async (req, res) => {
  try {
    const {search} = req.query
    const {data} = await axios.get(`${searchApi}${search}`)
    const items = Items(data)
    res.status(200).json({
      status: 'success',
      count: items.items.length,
      result: items
    })
    
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
}

module.exports.getItemById = async (req, res) => {
  try {
    const {id} = req.params;
    const itemUrl = `${itemSearchApi}${id}`;
    const item = await axios.get(itemUrl);
    const desc = await axios.get(`${itemUrl}/description`);

    const result = ItemDetail(item.data, desc.data); 
    res.status(200).json({
      status: 'success',
      result
    })

  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
}