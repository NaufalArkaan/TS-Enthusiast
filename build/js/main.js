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
// let someValue: unknown = "haii";
// // console.log((<string>someValue).length);
// // console.log((someValue as string).length);
// let image = document.getElementById('imageID') as HTMLImageElement;
// image.src = "https://images.unsplash.com/photo-1751514327780-07ea25d993dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//Struktur Control
// try{
//     throw new Error("Something went wrong!");
// }catch(eror){
//     console.error(eror);
// }
//Fungsi dasar
// function greeting(value: string): string{
//     return "hallo " + value;
// }
// console.log(greeting("asep"));
//Parameter Opsional
// function greet(name: string, age?: number): string {
//     if(age){
//         return `Umur anda adalah ${age}`;
//     }else{
//         return `Haloo ${name}`;
//     }
// }
// console.log(greet("Hayaa"));
//Parameter Default
// function greet(name: string = "Guest"): string {
//     return `Halo ${name}`;
// }
// console.log(greet());
// console.log(greet("Yono"));
//Void dan Never
//Void
// function message(argument: string): void{
//     console.log(argument);
// }
// message("haii");
//Never
// function throwError(message: string): never {
//     throw new Error(message);   
// }
//Arrow Function
// let multiply = (x: number, y: number): number => x * y;
// console.log(multiply(2, 6));
//Overloading fungsi
// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;
// function combine(a: any, b: any): any {
//     if(typeof a === "number" && typeof b === "number"){
//         return a + b;
//     }else if(typeof a === "string" && typeof b === "string"){
//         return a + b
//     }
// }
// console.log(combine(2, 3));
// console.log(combine("Hallo", " Sayang"));
//Callback(type safety)
// function processData(data: number[], Callback: (item: number) => void): void{
//     data.forEach(Callback);
// }
// function logItem(item: number): void{
//     console.log(item * 2);
// }
// processData([1,2,3,4], logItem);
//class dan constructor
// class Product{
//     name: string;
//     price: number;
//     constructor(name: string, price:number){
//         this.name = name;
//         this.price = price;
//     }
//     displayInfo(): void {
//         console.log(`Nama produk: ${this.name}`);
//         console.log(`Harga produk: ${this.price}`);
//     }
// }
// const product1 = new Product("Roti", 15000);
// console.log(product1);
// console.log(product1.name);
// product1.displayInfo();
// class Electronic extends Product {
//     warranty: number;
//     constructor(name: string, price: number, warranty: number){
//         super(name, price);
//         this.warranty = warranty;
//     }
//     displayInfo(): void {
//         super.displayInfo();
//         console.log(`Warranty: ${this.warranty} years`);
//     }
// }
// const electronic1 = new Electronic("Kulkas", 1000000, 3);
// electronic1.displayInfo();
//Modifier
// class Product{
//     protected name: string; //protected hanya bisa di subclass nya
//     readonly price: number; //hanya bisa ngebaca dan ga bisa ubah value nya
//     constructor(name: string, price:number){
//         this.name = name;
//         this.price = price;
//     }
//     displayInfo(): void {
//         console.log(`Nama produk: ${this.name}`);
//         console.log(`Harga produk: ${this.price}`);
//     }
// }
// const product1 = new Product("Roti", 15000);
// console.log(product1);
// product1.displayInfo();
// class Electronic extends Product {
//     warranty: number;
//     constructor(name: string, price: number, warranty: number){
//         super(name, price);
//         this.warranty = warranty;
//     }
//     displayInfo(): void {
//         super.displayInfo();
//         console.log(`Warranty: ${this.warranty} years`);
//         console.log(this.name);
//     }
// }
// const electronic1 = new Electronic("Kulkas", 1000000, 3);
// electronic1.displayInfo();
//Shorthand Initiliazation
// class User{
//     constructor(public name: string, public age: number){}
// }
// const user1 = new User("fal", 19);
// console.log(user1);
//Polymorphism
// class Animal{
//     makeSound(): void {
//         console.log('Some generic animal sound');
//     }
// }
// class Dog extends Animal{
//     makeSound(): void {
//         console.log('bark!');
//     }
// }
// const animal:Animal = new Dog();
// console.log(animal.makeSound());
//Static Methods
// class Calculator {
//     static pi: number = 3.14;
//     static calculateArea(radius: number): number {
//         return Calculator.pi * radius * radius;
//     }
// }
// console.log(Calculator.calculateArea(2));
// //Getters and Setters (get balikin nilai, set ubah nilai)
// class Person{
//     constructor(private _age: number){
//         this._age = _age;
//     }
//     get age(): number{
//         return this._age;
//     }
//     set age(value: number){
//         if(value >= 0){
//             this._age = value;
//         }else{
//             console.log('Invalid');
//         }
//     }
// }
// const person1 = new Person(20);
// console.log(person1.age);
// person1.age = 30;
// console.log(person1.age);
//Abstract Class
