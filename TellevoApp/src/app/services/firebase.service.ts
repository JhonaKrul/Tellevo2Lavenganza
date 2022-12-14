import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { Usuario } from './usuario';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth ,private database: AngularFirestore, private loading: LoadingController, private toastController: ToastController, private router: Router) { }

createDoc(data: any, path: string, id: string) {
  const collection = this.database.collection(path);
  return collection.doc(id).set(data);
}

getDoc<tipo>(path: string, id: string) {
  const collection = this.database.collection<tipo>(path);
  return collection.doc(id).valueChanges();
}

deleteDoc(path: string, id: string) {
  const collection = this.database.collection(path);
  return collection.doc(id).delete();
}


getId() {
  return this.database.createId();
}

getCollection<tipo>(path: string) {
  const collection = this.database.collection<tipo>(path);
  return collection.valueChanges();
}


async mensaje(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 1500,
    //position: 'top' | 'middle' | 'bottom'
  });

  await toast.present();
}

loadingAux: any;

async cargarLoading(mensaje: string) {
  this.loadingAux = await this.loading.create({
    cssClass: 'my-custom-class',
    message: mensaje,
    //duration: 2000
  });

  await this.loadingAux.present();
}

async cerrarLoading() {
  await this.loadingAux.dismiss();
}


async logout(){
  await this.afAuth.signOut();

}

async login(correo: string, pass: string){
  const { user } = await this.afAuth.signInWithEmailAndPassword(correo, pass)
  await this.verificacion();
  return user;
}

async verificacion(){
  return (await this.afAuth.currentUser).sendEmailVerification();

}

async recuperar(correo: string){
  return this.afAuth.sendPasswordResetEmail(correo);
}

async registrar(correo: string, pass: string){
  const { user } = await this.afAuth.createUserWithEmailAndPassword(correo, pass)
  return user;

}

async obtenerUsuario(){
  const aux: Usuario = await this.afAuth.currentUser;
  return aux;
}

async obtenerEmail(){
  return ( await this.afAuth.currentUser).email;
}


async googleSignIn(){
  return this.afAuth.signInWithPopup(new GoogleAuthProvider).then(res =>{
    this.router.navigate(['mapa'])
    localStorage.setItem('token',JSON.stringify(res.user?.uid));
  },err =>{
    alert(err.message);
  })
 
}

async github(){
  return this.afAuth.signInWithPopup(new GithubAuthProvider).then(res =>{
    this.router.navigate(['mapa'])
    localStorage.setItem('token',JSON.stringify(res.user?.uid))
  },err =>{
      alert(err.message);
    })
}





}
