/**
 * Kelas Product
 *
 * Kelas ini merepresentasikan sebuah produk dengan informasi dasar seperti ID, nama, harga, dan stok.
 *
 * Konsep Pemrograman Berorientasi Objek (OOP):
 * - Enkapsulasi: Kelas ini mengenkapsulasi properti dan metode produk.
 */

class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

module.exports = Product;
