const express=require('express');
const app=express();
const port=3000;

class Bangunan{
  constructor(namaBangunan,alamatBangunan,umurBangunan){
    this.namaBangunan=namaBangunan;
    this.alamatBangunan=alamatBangunan;
    this.umurBangunan=umurBangunan;
  }

  getNamaBangunan(){
    return this.namaBangunan;
  }

  getAlamatBangunan(){
    return this.alamatBangunan;
  }

  getUmurBangunan(){
    return this.umurBangunan;
  }
}

app.get('/bangunan',(req,res)=>{

  const bangunanSaya=new Bangunan('my building','11, jalan bukit rasa','100 tahun');

  res.status(200).send(bangunanSaya.getNamaBangunan());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})