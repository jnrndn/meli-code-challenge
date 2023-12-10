const buildItem = (data, isDetail = false) => {
  return {
    id: data.id,
    title: data.title,
    price: {
      currency: data.currency_id,
      amount: data.price,
      decimals: data?.price.toString().split('.')[1]?.length || 0,
    },
  picture: isDetail ? data.pictures[0].url : data.thumbnail,
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
    description: data.description?.plain_text
  }
}

module.exports.Items = (data) => {
  return {
    author: {
      name: 'Juan',
      lastName: 'Rendon'
    },
    categories: [], // TODO: find categories.
    items: data.results.slice(0,4).map(result => buildItem(result))
  }
}

module.exports.ItemDetail = (item, description) => {
  const itemData = {...item, description}
  return {
    author: {
      name: 'Juan',
      lastName: 'Rendon'
    },
    item: buildItem(itemData, true)
  }
}