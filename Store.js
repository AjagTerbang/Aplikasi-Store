/**
 * Kelas Store
 *
 * Kelas ini mengelola daftar produk dan menyediakan metode untuk menambah, menghapus, dan menampilkan produk.
 *
 * Konsep Pemrograman Berorientasi Objek (OOP):
 * - Enkapsulasi: Kelas ini mengenkapsulasi daftar produk dan metode terkait.
 * - Abstraksi: Kelas ini menyediakan antarmuka yang disederhanakan untuk mengelola produk.
 */

class Store {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  deleteProduct(id) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  showProductList() {
    console.log("Product List:");
    this.products.forEach((product) => {
      console.log(
        `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Stock: ${product.stock}`
      );
    });
  }
}

module.exports = Store;
