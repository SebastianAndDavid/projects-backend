export interface Project {
  name: string;
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
