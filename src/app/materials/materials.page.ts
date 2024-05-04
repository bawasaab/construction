import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonInput, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, FormsModule, IonItem, IonLabel]
})
export class MaterialsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
