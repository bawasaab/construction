import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-category-master',
  templateUrl: './category-master.page.html',
  styleUrls: ['./category-master.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonInput, IonItem, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, FormsModule, IonItem, IonLabel]
})
export class CategoryMasterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
