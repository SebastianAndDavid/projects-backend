import { HomeownerSelect } from './homeowners.interface';

export interface Project {
  name: string;
  description: string | undefined | null;
  street: string;
  apt: string | undefined | null;
  city: string;
  state: string;
  zip_code: string;
  deposit: string;
}

export interface ProjectSelect extends Project {
  id: number;
  createdAt: Date;
}

export interface ProjectWithHomeowners {
  name: string;
  street: string;
  apt: string | undefined | null;
  city: string;
  state: string;
  zip_code: string;
  deposit: string;
  id: number;
  createdAt: Date;
  homeowners: HomeownerSelect[];
}

export interface ProjectReq {
  name: string;
  description: string | undefined | null;
  street: string;
  apt: string | undefined | null;
  city: string;
  state: string;
  zip_code: string;
  deposit: string;
  projectFormData: Project;
  clientID: Array<number>;
}
