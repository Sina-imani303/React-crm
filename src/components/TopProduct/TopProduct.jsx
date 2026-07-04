import "./TopProduct.css";

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    sold: 532,
    revenue: "$82,540",
    image: "https://picsum.photos/seed/macbook/100/100",
  },
  {
    id: 2,
    name: "iPhone 15",
    sold: 431,
    revenue: "$73,210",
    image: "https://picsum.photos/seed/iphone/100/100",
  },
  {
    id: 3,
    name: "AirPods Pro",
    sold: 387,
    revenue: "$42,850",
    image: "https://picsum.photos/seed/airpods/100/100",
  },
  {
    id: 4,
    name: "Apple Watch",
    sold: 241,
    revenue: "$28,140",
    image: "https://picsum.photos/seed/watch/100/100",
  },
  {
    id: 5,
    name: "iPad Air",
    sold: 173,
    revenue: "$18,930",
    image: "https://picsum.photos/seed/ipad/100/100",
  },
];

export default function TopProduct() {
  return (
    <div className="topProducts">
      <div className="topProductsHeader">
        <div>
          <h2>Top Selling Products</h2>
          <p>Best performing products this month</p>
        </div>

        <button type="button">View All</button>
      </div>

      <div className="topProductsList">
        {products.map((item, index) => (
          <div className="productItem" key={item.id}>
            <div className="productRank">{index + 1}</div>

            <div className="productLeft">
              <img src={item.image} alt={item.name} />

              <div className="productInfo">
                <h4>{item.name}</h4>
                <span>{item.sold} Sold</span>
              </div>
            </div>

            <div className="productRevenue">
              <span>Revenue</span>
              <h3>{item.revenue}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
