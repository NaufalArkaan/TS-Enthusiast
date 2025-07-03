"use strict";
//Tipe data Inference
// let nama = "fal boyy"
// console.log(nama)
//Tipe data annotation
// let nama:string = "ginn";
// console.log(nama);
//array
// let angka: number[] = [1,2,3,4];
// console.log(angka);
//tuple
// let person: [number, string] = [20, "john"];
// console.log(person);
//Tipe data any
// let variabel: any;
// variabel = "hahaah";
// variabel = 12;
// variabel = true;
// console.log(variabel);
//eror pada any (eror pada run time)
// function anyRisk(value:any){
//     console.log(value.toFixed(2));
// }
// anyRisk("haloo");
//Uninon Types
// let id: string | number;
// id = "hahaah";
// id = 22;
// console.log(id);
//Literal Types
// let confir: "success" | "fail";
// confir = "success";
// console.log(confir);
//Type Aliases
// type User = {
//     id: number,
//     name: string,
//     age: number
// }
// let user1: User = {
//     id: 1,
//     name: "Alex",
//     age: 20
// }
// console.log(user1);
// let cewe: string = "zara";
// type pilihan = "Sayang" | "Ga sayang";
// let adi: pilihan = "Sayang"
// console.log(adi, `${cewe}`)
//Optional Properties
// type user = {
//     name: string,
//     age?: number,
//     email?: string
// }
// let user1: user = {
//     name: "Naufal"
// }
// let user2: user = {
//     name: "Arkaan",
//     age: 20
// }
// let user3: user = {
//     name: "boyy",
//     email: "boy123@gmail.com"
// }
// console.log(user1, user2, user3);
//enum
// enum Menghitung {
//     angka1 = -1,
//     angka2,
//     angka3,
//     angka4
// }
// let hasil: Menghitung = Menghitung.angka1;
// console.log(hasil);
// console.log(Menghitung.angka2);
//Const Enum
// const enum Menghitung {
//     angka1 = -1,
//     angka2,
//     angka3,
//     angka4
// }
// let hasil: Menghitung = Menghitung.angka1;
// console.log(hasil);
// console.log(Menghitung.angka2);
//Tipe Unknown (lebih aman ketimbang any)
// let data: unknown; //tipe datanya bebas bisa apa saja
// data = "hello, world!";
// if(typeof data === "string"){
//     console.log(data.toUpperCase());
// }
//Type Assertion
let someValue = "haii";
// console.log((<string>someValue).length);
// console.log((someValue as string).length);
let image = document.getElementById('imageID');
image.src = "https://images.unsplash.com/photo-1751514327780-07ea25d993dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
