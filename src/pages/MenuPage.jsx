import { useDispatch } from "react-redux";
import { addToCart } from "../app/features/cartSlice";

const pizzas = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "BBQ Chicken", price: 12 },
];

export default function MenuPage() {
  const dispatch = useDispatch();

  return (
    <div className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="border rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold mb-2">{pizza.name}</h3>
            <p className="text-gray-600 mb-4">${pizza.price}</p>
            <button
              onClick={() => dispatch(addToCart(pizza))}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
