import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Organization } from './organizations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab_7';
  public organizationData: Organization = new Organization();

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  nameError = '';
  cityError = '';
  addressError = '';
  contactPersonError = '';
  phoneError = '';
  emailError = '';
  objectNameError = '';
  applicationAreaError = '';

  setApplicationArea(area: string) {
    this.organizationData.applicationArea = area;
  }

  checkData() {
    this.nameError = '';
    this.cityError = '';
    this.addressError = '';
    this.contactPersonError = '';
    this.phoneError = '';
    this.emailError = '';
    this.objectNameError = '';
    this.applicationAreaError = '';

    let passed = true;

    if (this.organizationData.name === '') {
      this.nameError = "Заполните поле";
      passed = false;
    }

    if (this.organizationData.city === '') {
      this.cityError = "Заполните поле";
      passed = false;
    }

    if (this.organizationData.address === '') {
      this.addressError = "Заполните поле";
      passed = false;
    }

    if (this.organizationData.contactPerson === '') {
      this.contactPersonError = "Заполните поле";
      passed = false;
    }

    if (this.organizationData.phone === '') {
      this.phoneError = "Заполните поле";
      passed = false;
    } else if (!this.phoneRegex.test(this.organizationData.phone)) {
      this.phoneError = "Неверный номер телефона";
      passed = false;
    }

    if (this.organizationData.email === '') {
      this.emailError = "Заполните поле";
      passed = false;
    } else if (!this.emailRegex.test(this.organizationData.email)) {
      this.emailError = "Неверный email";
      passed = false;
    }

    if (this.organizationData.workObjectName === '') {
      this.objectNameError = "Заполните поле";
      passed = false;
    }

    if (!(this.organizationData.applicationArea === '')) {
      if (!(this.organizationData.applicationArea === 'Отопление' || this.organizationData.applicationArea === 'Вентиляция' || this.organizationData.applicationArea === 'ГВС')) {
        this.applicationAreaError = "Неправильное значение";
        passed = false;
      }
    }

    if (passed) {
      let organizationDataJson = JSON.stringify(this.organizationData);

      localStorage.setItem('myKey', organizationDataJson);


      // console.log(organizationDataJson);
      // console.log('---');

      let storedItem = localStorage.getItem('myKey');
      if (storedItem != null) {
        let orgDataFromJson = JSON.parse(storedItem) as Organization;

        console.log(orgDataFromJson);
      }


      this.organizationData = new Organization();
    }
  }
}
