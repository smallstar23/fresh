export default function listHome() {
  let products = ["Tomatoes", "Pasta", "Coconuts"];
  return (
    <div>
      <div>
        <h4 className="title">상품목록</h4>
        {products.map((item, i) => {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`} alt={item} className="food-img" />
              <h4>{item} $40</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
