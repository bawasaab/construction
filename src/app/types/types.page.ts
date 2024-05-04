import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-types',
  templateUrl: './types.page.html',
  styleUrls: ['./types.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, FormsModule, IonItem, IonLabel]
})
export class TypesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
