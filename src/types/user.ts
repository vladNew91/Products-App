export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserGeo {
  lat: string;
  lng: string;
}

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  geo?: UserGeo;
  phone?: string;
  website?: string;
  company?: UserCompany;
}
