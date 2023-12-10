const request = require('supertest');
const app = require('./../app');

describe('GET /item', () => {
  it('should return 4 items related to the search query', async () => {
    const response = await request(app).get('/api/v1/item?search=iphone');
    expect(response.status).toBe(200);
    expect(response.body.status).toEqual('success');
    expect(response.body.count).toEqual(4);
    response.body.result.items.forEach(item => {
      expect(item.title.toLowerCase()).toContain('iphone');
    });
  });
});

describe('GET /item/:id', () => {
  it('should return the item of a given id', async () => {
    const response = await request(app).get('/api/v1/item/MLA1474383632');
    const item = {
      id: 'MLA1474383632',
      title: ' iPhone 6s 32 Gb  Gris Espacial',
      price: {
          "currency": "ARS",
          "amount": 199999,
          "decimals": 0
      },
      picture: 'http://http2.mlstatic.com/D_898290-MLA31003118647_062019-O.jpg',
      condition: 'new',
      free_shipping: true,
      description: 'Momentos únicos, capturas reales\nCapturá tus mejores momentos y revivilos cuando quieras con la cámara trasera de 12 Mpx.\n\nAdemás, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.\n\nMás para ver\nCon su pantalla IPS de 4.7\", disfrutá de colores intensos y mayor nitidez en todos tus contenidos.\n\nTodo lo que necesitás\nSu memoria RAM de 2 GB es justo lo que necesitás para utilizar las funciones más importantes como llamar, enviar mensajes, navegar y ejecutar aplicaciones de uso frecuente como redes sociales o multimedia.\n\nDesbloqueo veloz con tu huella dactilar\nCon el sensor de huella dactilar, el acceso es seguro y podrás desbloquearlo automáticamente con un toque.\n\nEl espacio que necesitás\nCon su memoria interna de 32 GB descargá tus aplicaciones favoritas y guardá todas las fotos y videos que quieras.'
    }
    expect(response.status).toBe(200);
    expect(response.body.result.item).toEqual(item)
  });
});