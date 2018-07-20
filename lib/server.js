import express from 'express';
import config from './config';
import serverRender from 'renderers/server';
const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req, res)=>{
  const initContent = serverRender();
  res.render('index' , { initContent });
});

app.listen(config.port , ()=>{
  console.info('Running on the port : .. ', config.port);
});
