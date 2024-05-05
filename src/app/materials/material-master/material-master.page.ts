import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-material-master',
  templateUrl: './material-master.page.html',
  styleUrls: ['./material-master.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, FormsModule, IonItem, IonLabel]
})
export class MaterialMasterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
