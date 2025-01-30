// src/services/ProductService.ts
import { PrismaClient } from '@prisma/client';

export class ProductService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // ฟังก์ชันเพิ่มสินค้า
  async addProduct(name: string, price: number, category: string) {
    if (!name.trim() || price < 0 || !category.trim()) {
      throw new Error('Invalid product data');
    }

    try {
      return await this.prisma.product.create({
        data: { name, price, category }
      });
    } catch (error) {
      throw new Error('Failed to add product');
    }
  }

  // ฟังก์ชันลบสินค้า
  async deleteProduct(id: number) {
    try {
      return await this.prisma.product.delete({
        where: { id }
      });
    } catch (error) {
      throw new Error('Failed to delete product');
    }
  }
}
