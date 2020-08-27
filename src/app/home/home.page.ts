import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: any[] = [];
  completedTodos: any[] =[];


  constructor(private ToastCtrl: ToastController, private alertCtrl: AlertController, private navCtrl: NavController) {
    this.getTodos();
    this.getTCompletedTodos();
  }

  //get incompleted todos
  getTodos() {
    firebase.firestore().collection("todos")
    .where("status", "==", "incomplete")
    .onSnapshot((querySnapshot) => {
      this.todos = querySnapshot.docs;
    })
  }

  //get completed todos
  getTCompletedTodos() {
    firebase.firestore().collection("todos")
    .where("status", "==", "completed")
    .onSnapshot((querySnapshot) => {
      this.completedTodos = querySnapshot.docs;
    })
  }

  //get date as normal
  getDate(timestamp: firebase.firestore.Timestamp) {
    let date = timestamp.toDate();
    return "Last Date : "+date.toLocaleDateString();
  }

  //delete todo
  async deleteTodo(document: firebase.firestore.QueryDocumentSnapshot) {
    console.log(document)
    await firebase.firestore().collection("todos").doc(document.id).delete()
    .then(() => {
      this.ToastCtrl.create({
        message: "Todo item is deleted",
        duration: 2000
      }).then((toast) => {
        toast.present();
      })
    })
    
  }

  //mark todo as completed
  markCompleted(document: firebase.firestore.QueryDocumentSnapshot) {
    firebase.firestore().collection("todos").doc(document.id).set({
      "status": "completed"
    }, {
      merge: true
    }).then(() => {
      this.ToastCtrl.create({
        message: "Todo item marked as completed",
        duration: 2000
      }).then((toast) => {
        toast.present();
      })
    }

    )
  }


  //navigate to add todo page
  goToAddTodos() {
    this.navCtrl.navigateForward(['/add-todo'])
  }

 

   




}
