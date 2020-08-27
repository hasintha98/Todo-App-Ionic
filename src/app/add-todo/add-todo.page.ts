import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  todo_title: string;
  todo_description: string;
  todo_end_date: Date;

  constructor(private NavCtrl: NavController, private ToastCtrl: ToastController) { }

  ngOnInit() {
  }

  addTodo() {
    firebase.firestore().collection("todos").add({
      title: this.todo_title,
      description: this.todo_description,
      end_date: new Date(this.todo_end_date),
      created: firebase.firestore.FieldValue.serverTimestamp(),
      status: "incomplete"
    }).then((docRef) => {
      this.ToastCtrl.create({
        message: "Todo has been added",
        duration: 2000
      }).then((toast) => {
        toast.present();
        this.NavCtrl.navigateForward(['/home']);
        this.todo_title = "";
        this.todo_description = "";
        this.todo_end_date = null;
      })
    }).catch((err) => {
      this.ToastCtrl.create({
        message: err.message  ,
        duration: 2000
      }).then((toast) => {
        toast.present();
      })
    })
  }

}
