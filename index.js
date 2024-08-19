const readline = require("readline");
const Product = require("./Product");
const Store = require("./Store");
const Transaction = require("./Transaction");

const store = new Store();
const transaction = new Transaction();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(`
    1. Tambah Produk
    2. List Produk
    3. Hapus Produk
    4. Transaksi
    5. Show Transactions
    6. Exit
    `);
  rl.question("Choose an option: ", handleMenu);
}

function handleMenu(option) {
  switch (option) {
    case "1":
      rl.question("Tambah Detail Produk (id,nama,harga,jumlah): ", (input) => {
        const [id, name, price, stock] = input.split(",");
        store.addProduct(
          new Product(parseInt(id), name, parseFloat(price), parseInt(stock))
        );
        console.log("Produk Berhasil ditambah!.");
        showMenu();
      });
      break;
    case "2":
      store.showProductList();
      showMenu();
      break;
    case "3":
      rl.question("Masukan ID Produk untuk di hapus: ", (id) => {
        store.deleteProduct(parseInt(id));
        console.log("Product berhasil dihapus!.");
        showMenu();
      });
      break;
    case "4":
      rl.question("Masukan jumlah transaksi (id Produk,Jumlah): ", (input) => {
        const [productId, quantity] = input.split(",");
        transaction.performTransaction(
          store,
          parseInt(productId),
          parseInt(quantity)
        );
        showMenu();
      });
      break;
    case "5":
      transaction.showTransactions();
      showMenu();
      break;
    case "6":
      rl.close();
      break;
    default:
      console.log("Kesalahan dalam memilih menu!");
      showMenu();
      break;
  }
}

showMenu();
