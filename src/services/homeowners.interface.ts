export interface Homeowner {
  first_name: string;
  last_name: string;
  company: string | undefined | null;
  email: string;
  phone: string;
  street: string;
  apt: string | undefined | null;
  city: string;
  state: string;
  zip_code: string;
}
// export interface HomeownerSelect {
//   id: number;
//   first_name: string;
//   last_name: string;
//   company: string | undefined | null;
//   email: string;
//   phone: string;
//   street: string;
//   apt: string | undefined | null;
//   city: string;
//   state: string;
//   zip_code: string;
//   createdAt: Date;
// }

export interface HomeownerSelect extends Homeowner {
  id: number;
  createdAt: Date;
}

// export interface HomeownerSelect
//   extends Omit<Homeowner['homeowner'], 'createdAt'> {
//   id: number;
//   createdAt: Date;
// }
