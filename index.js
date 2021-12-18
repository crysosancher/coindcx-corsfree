const express = require('express')
const axios=require('axios')
const path=require('path')
const app = express()
const port = process.env.PORT || 8000;
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
const price=async()=>{
  var confiq={
    method:'GET',
    url:'https://public.coindcx.com/market_data/current_prices'
  }
  let ms;
  return await axios.request(confiq).then((res)=>{
    ms=res.data;
    //console.log(ms);
    return ms;
}).catch((error)=>{
  ms="DAta error"
  return ms; 
})
}
app.get('/',async (req, res) => {
  

 //let k= await res.json(`${price()}`)
 await price().then(data=>{
   console.log(data);
   res.json(data);
 }).catch((err)=>{
   res.json({gandu:12})
 });
//  await res.json(`${k}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})