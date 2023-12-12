import { prisma } from '../utils/db.server';
import {
  Homeowner,
  HomeownerSelect,
  HomeownersCreateInput,
  HomeownersUncheckedCreateInput,
} from './homeowners.interface';

export default class HomeownersService {
  static async createHomeowner(homeowner: Homeowner): Promise<HomeownerSelect> {
    //destructuring company/apt from obj.
    const { company, apt, ...rest } = homeowner;
    //make new obj w/ the remaining properties and set company/apt to null if they're undefined
    const data: HomeownersUncheckedCreateInput = {
      ...rest,
      company: company || null,
      apt: apt || null,
    };

    const newHomeowner = await prisma.homeowners.create({
      data: data as HomeownersCreateInput,
    });

    return newHomeowner;
  }

  static async getHomeowners(): Promise<HomeownerSelect[]> {
    const homeowners = await prisma.homeowners.findMany();
    return homeowners;
  }

  static async getHomeownerById(id: string): Promise<HomeownerSelect | null> {
    const homeowner = await prisma.homeowners.findUnique({
      where: {
        id: Number(id),
      },
    });
    return homeowner;
  }
}
