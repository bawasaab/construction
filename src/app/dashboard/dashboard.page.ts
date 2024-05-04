import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, FormsModule, IonItem, IonLabel]
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
