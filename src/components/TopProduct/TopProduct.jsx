import "./TopProduct.css";

const products = [
  {
    name: "MacBook Pro",
    sold: 532,
    revenue: "$82,540",
    image: "https://picsum.photos/60?1",
  },
  {
    name: "iPhone 15",
    sold: 431,
    revenue: "$73,210",
    image: "https://picsum.photos/60?2",
  },
  {
    name: "AirPods Pro",
    sold: 387,
    revenue: "$42,850",
    image: "https://picsum.photos/60?3",
  },
  {
    name: "Apple Watch",
    sold: 241,
    revenue: "$28,140",
    image: "https://picsum.photos/60?4",
  },
  {
    name: "iPad Air",
    sold: 173,
    revenue: "$18,930",
    image: "https://picsum.photos/60?5",
  },
];

export default function TopProduct() {
  return (
    <div className="topProducts">
      <h2>Top Selling Products</h2>

      {products.map((item, index) => (
        <div className="productItem" key={index}>
          <div className="productLeft">
            <img src={item.image} alt="" />

            <div>
              <h4>{item.name}</h4>
              <span>{item.sold} Sold</span>
            </div>
          </div>

          <h3>{item.revenue}</h3>
        </div>
      ))}
    </div>
  );
}
