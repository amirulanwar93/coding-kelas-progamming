// class Bangunan{
//   constructor(
//     public nama:string,
//     private telefon:number,
//     public alamat:string,
//     public dalamRumah: boolean
//   ){}

//   getTelefon(){
//     return this.telefon
//   }
// }

// const bangunanSaya=new Bangunan('rumah ',123456, 'jalan 1', true)

// console.log(bangunanSaya.nama)
// // console.log(bangunanSaya.telefon)
// console.log(bangunanSaya.alamat)
// console.log(bangunanSaya.dalamRumah)

// ----------------------------------------------------------------

// const diriSaya:[string,number,boolean]=['Programming',2020,true]
// console.log(diriSaya)
// console.log(diriSaya[0])
// console.log(diriSaya[1])
// console.log(diriSaya[2])

// enum Food{
//   animal='ayam',
//   vegetable='bayam',
//   fruit='pisang'
// }

// const makanan: Food=Food.animal;
// console.log(makanan)

// let umurSaya:any=123
// umurSaya='byebye'
// console.log(umurSaya)

// ----------------------------------------------------------------

// let abc:any=[];

// abc.push('saya');
// abc.push('nak');
// abc.push('makan');
// abc.push('nasi');

// console.log(abc[3]);

// ----------------------------------------------------------------

// let def:any={}

// def.nama='ahmad'
// def.ummur=30
// console.log(def)

// ----------------------------------------------------------------

// interface Pekerja{
//   nama:string
//   umur:number
//   kahwin:boolean
//   alamat:string
//   gaji():number
// }

// const admin:Pekerja={
//   nama:'Ali',
//   umur:20,
//   kahwin:false,
//   alamat:'Kuala Lumpur',
//   gaji():number{
//     return 500
//   }
// }
// console.log(admin.alamat)
// console.log(admin.gaji())

// ----------------------------------------------------------------

// interface Pekerja{
//   nama:string
//   umur:number
//   kahwin:boolean
//   alamat:string
//   gaji():number
// }

// class PizzahutStuff implements Pekerja{
//   public nama:string
//   public umur:number
//   public kahwin:boolean
//   public alamat:string

//   constructor(
//     nama:string,
//     umur:number,
//     kahwin:boolean,
//     alamat:string,
//     private staffID:number
//   ){
//     this.nama=nama
//     this.umur=umur
//     this.kahwin=kahwin
//     this.alamat=alamat
//     this.staffID=staffID
//   }

//   gaji(): number {
//     return 1000
//   }
// }
// const pekerja:PizzahutStuff=new PizzahutStuff('Ali',20,false,'Shah Alam',1234)
// console.log(pekerja.nama)
// console.log(pekerja.gaji())

// ----------------------------------------------------------------

// function cariPanjang(x:string|number):number{
//   if (typeof x==='string'){
//     return x.length
//   }
//   else{
//     return x
//   }
// }

// console.log(cariPanjang("Halo"))
// console.log(cariPanjang(5))

// ----------------------------------------------------------------

// function balikSusunan<T>(susunan:T[]):T[]{
//   return susunan.reverse()
// }

// const kata: string[]=['saya','cinta','TypeScript']
// const susunanKataTerbalik: string[]=balikSusunan(kata)
// console.log(susunanKataTerbalik)

// const nombor: number[]=[1,2,3,4,5]
// const susunanNomborTerbalik: number[]=balikSusunan(nombor)
// console.log(susunanNomborTerbalik)

// ----------------------------------------------------------------

import {tambah,tolak} from "../kalkulator";

const hasilTambah = tambah(5,3);
const hasilTolak = tolak(10,2);

console.log("Hasil Tambah: %f", hasilTambah);
console.log("Hasil Tolak: %f", hasilTolak);
