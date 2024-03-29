const second=1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
const year = day * 365

x=new Date("03/07/2019")
y=new Date ("03/10/2019")

function kira_hari_bulan(bulan_awal, bulan_akhir){
  return (bulan_akhir.getTime()-bulan_awal.getTime())/day
}

z=kira_hari_bulan(x,y)
console.log(z)