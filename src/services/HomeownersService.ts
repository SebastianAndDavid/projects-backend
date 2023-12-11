import { prisma } from '../utils/db.server';
import { Homeowner, HomeownerSelect } from './homeowners.interface';

export default class HomeownersService {
  static async createHomeowner(homeowner: Homeowner): Promise<HomeownerSelect> {
    const newHomeowner = await prisma.homeowners.create({
      data: homeowner,
    });
    return newHomeowner;
  }
}
