// export function tambah(a:number,b:number):number{
//   return a+b
// }

// export function bahagi(a:number,b:number):number{
//   return a/b
// }

// -------------------------------------------------------------------

export class Animal{
  constructor(public name:string, public age: number) {}

  berapaUmur(){
    return this.age
  }

  details():any{
    return{
      name:this.name,
      age:this.age
    }
  }
}