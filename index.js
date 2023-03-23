const express = require('express');
const app = express();
const port = 3006;
//const responses = require('./swagger-prueba.yaml');

app.get('/test-soyyo', (req, res) => {
  res.send('TEST SOYYO');
})

app.get('/responses', (res, req) =>{
  //app.use('api/v1', responses);
  res.send("200: description: OKcontent: application/json: schema: type: array items: $ref: '#/components/schemas/Entity'");
})
app.listen(port, () =>
{
  console.log('Port ' + port);
})
