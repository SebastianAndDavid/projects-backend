import { Prisma } from '@prisma/client';

export interface Homeowner {
  first_name: string;
  last_name: string;
  company?: string | null;
  email: string;
  phone: string;
  street: string;
  apt?: string | null;
  city: string;
  state: string;
  zip_code: string;
}

export interface HomeownerSelect extends Homeowner {
  id: number;
  createdAt: Date;
}

//This type is generated from Prisma and it includes all properties
//defined in Homeowners model 'first_name', 'last_name', etc.
export type HomeownersCreateInput = Prisma.HomeownersCreateInput;

//Custom type to handle company and apt, the unchecked version of HomeownersCreateInput
//Omit creates a type w/ everything except company/apt
//Then we add back in company/apt, but they're marked as optional (string or null)
export type HomeownersUncheckedCreateInput = Omit<
  HomeownersCreateInput,
  'company' | 'apt'
> & {
  company?: string | null;
  apt?: string | null;
};
