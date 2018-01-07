import 'babel-polyfill';
import express from 'express';
import renderer from './helper/renderer';
import createStore from './helper/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();
app.use(express.static('public'));
app.get('*', (req, res)=>{

  const store = createStore();

  matchRoutes(Routes, req.path);

  res.send(renderer(req, store));
})

app.listen(3000, ()=>{
  console.log("listen to port 3000");
});
