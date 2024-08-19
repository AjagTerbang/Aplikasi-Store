/**
 * Kelas Transaction
 *
 * Kelas ini mencatat transaksi penjualan, mengurangi stok produk sesuai dengan pembelian, dan menampilkan ringkasan transaksi.
 *
 * Konsep Pemrograman Berorientasi Objek (OOP):
 * - Enkapsulasi: Kelas ini mengenkapsulasi properti dan metode transaksi.
 * - Abstraksi: Kelas ini menyediakan antarmuka yang disederhanakan untuk mengelola transaksi.
 */

class Transaction {
  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  performTransaction(store, productId, quantity) {
    const product = store.products.find((p) => p.id === productId);
    if (product && product.stock >= quantity) {
      product.stock -= quantity;
      const totalPrice = product.price * quantity;
      this.transactions.push({ productId, quantity, totalPrice });
      console.log(
        `Transaction successful: Bought ${quantity} of ${product.name} for ${totalPrice}`
      );
    } else {
      console.log(
        "Transaction failed: Insufficient stock or product not found."
      );
    }
  }

  showTransactions() {
    console.log("Transaction List:");
    this.transactions.forEach((transaction) => {
      console.log(
        `Product ID: ${transaction.productId}, Quantity: ${transaction.quantity}, Total Price: ${transaction.totalPrice}`
      );
    });
  }
}

module.exports = Transaction;
