import { Organization } from "./organizations";


describe('Organization', () => {
  const organization = new Organization();

  it('should create an instance', () => {
    expect(new Organization()).toBeTruthy();
  });

  it('name is accessible', () => {
    expect(organization.name).toEqual('');
    organization.name='blabla corp';
    expect(organization.name).toEqual('blabla corp');
  });

  it('address is accessible', () => {
    expect(organization.address).toEqual('');
    organization.address='karlpatz 3';
    expect(organization.address).toEqual('karlpatz 3');
  });

  it('city is accessible', () => {
    expect(organization.city).toEqual('');
    organization.city='NY';
    expect(organization.city).toEqual('NY');
  });

  it('contactPerson is accessible', () => {
    expect(organization.contactPerson).toEqual('');
    organization.contactPerson='Jhon';
    expect(organization.contactPerson).toEqual('Jhon');
  });

  it('phone is accessible', () => {
    expect(organization.phone).toEqual('');
    organization.phone='0991234567';
    expect(organization.phone).toEqual('0991234567');
  });

  it('email is accessible', () => {
    expect(organization.email).toEqual('');
    organization.email='test@gmail.com';
    expect(organization.email).toEqual('test@gmail.com');
  });

  it('workObjectName is accessible', () => {
    expect(organization.workObjectName).toEqual('');
    organization.workObjectName='blabla';
    expect(organization.workObjectName).toEqual('blabla');
  });

  it('applicationArea is accessible', () => {
    expect(organization.applicationArea).toEqual('');
    organization.applicationArea='noArea';
    expect(organization.applicationArea).toEqual('noArea');
  });


});