const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 5,
    checked: false,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: true,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <GroceryList />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Catatan Belanjaku 📝</h1>;
}

function Form() {
  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select>{quantityNum}</select>
        <input type="text" placeholder="nama barang..." />
      </div>
      <button>Tambah</button>
    </form>
  );
}

function GroceryList() {
  return (
    <>
      <div className="list">
        <ul>
          {groceryItems.map((item) => (
            <li key={item.id}>
              <input type="checkbox" checked={item.checked} />
              <span
                style={
                  item.checked === true
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                {item.quantity} {item.name}
              </span>
              <button>&times;</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="stats">
      Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)
    </footer>
  );
}
