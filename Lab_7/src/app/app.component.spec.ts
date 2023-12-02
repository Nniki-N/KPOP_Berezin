import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Lab_7' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Lab_7');
  });

  it('should show error messages for required field "name" when submitting with empty value', () => {
    component.organizationData.name = '';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#nameError').textContent;
    expect(elementText).toBe('Заполните поле');
  });

  it('should show error messages for required field "city" when submitting with empty value', () => {
    component.organizationData.city = '';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#cityError').textContent;
    expect(elementText).toBe('Заполните поле');
  });

  it('should show error messages for required field "address" when submitting with empty value', () => {
    component.organizationData.address = '';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#addressError').textContent;
    expect(elementText).toBe('Заполните поле');
  });

  it('should show error messages for required field "contactPerson" when submitting with empty value', () => {
    component.organizationData.contactPerson = '';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#contactPersonError').textContent;
    expect(elementText).toBe('Заполните поле');
  });
  
  it('should show error messages for required field "phone" when submitting with empty value', () => {
    component.organizationData.phone = '';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#phoneError').textContent;
    expect(elementText).toBe('Заполните поле');
  });

  it('should show error messages for required field "phone" when submitting with wrong value', () => {
    component.organizationData.phone = 'dfg443gfgd';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#phoneError').textContent;
    expect(elementText).toBe('Неверный номер телефона');
  });

  it('should show error messages for required field "email" when submitting with empty value', () => {
    component.organizationData.email = '';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailError').textContent;
    expect(elementText).toBe('Заполните поле');
  });
  
  it('should show error messages for required field "email" when submitting with wrong value', () => {
    component.organizationData.email = 'fsgsgds.com';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailError').textContent;
    expect(elementText).toBe('Неверный email');
  });
  
  it('should show error messages for required field "workObjectName" when submitting with empty value', () => {
    component.organizationData.workObjectName = '';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#objectNameError').textContent;
    expect(elementText).toBe('Заполните поле');
  });
  
  it('should not show error messages for field "applicationArea" when submitting with empty value', () => {
    component.organizationData.applicationArea = '';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#applicationAreaError').textContent;
    expect(elementText).toBe('');
  });
  
  it('should  show error messages for field "applicationArea" when submitting with wrong value', () => {
    component.organizationData.applicationArea = 'sdf';
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#applicationAreaError').textContent;
    expect(elementText).toBe('Неправильное значение');
  });

});
