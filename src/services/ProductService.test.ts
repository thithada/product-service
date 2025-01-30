// src/services/ProductService.test.ts
import { ProductService } from './ProductService';

describe('ProductService', () => {
  let productService: ProductService;

  beforeEach(() => {
    productService = new ProductService();
  });

  // Test cases สำหรับ addProduct
  describe('addProduct', () => {
    // Test case 1: เพิ่มสินค้าสำเร็จ
    it('should add product successfully', async () => {
      const product = await productService.addProduct('iPhone', 1000, 'Electronics');
      
      expect(product).toHaveProperty('id');
      expect(product.name).toBe('iPhone');
      expect(product.price).toBe(1000);
      expect(product.category).toBe('Electronics');
    });

    // Test case 2: เพิ่มสินค้าด้วยข้อมูลไม่ถูกต้อง
    it('should throw error with invalid data', async () => {
      await expect(
        productService.addProduct('', -100, '')
      ).rejects.toThrow('Invalid product data');
    });
  });

  // Test cases สำหรับ deleteProduct
  describe('deleteProduct', () => {
    // Test case 3: ลบสินค้าสำเร็จ
    it('should delete product successfully', async () => {
      // เพิ่มสินค้าก่อน
      const newProduct = await productService.addProduct('Test Product', 100, 'Test');
      // ลบสินค้า
      const deletedProduct = await productService.deleteProduct(newProduct.id);
      
      expect(deletedProduct.id).toBe(newProduct.id);
    });

    // Test case 4: ลบสินค้าที่ไม่มีอยู่
    it('should throw error when deleting non-existent product', async () => {
      await expect(
        productService.deleteProduct(999999)
      ).rejects.toThrow('Failed to delete product');
    });
  });
});
