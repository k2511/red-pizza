import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from "../app/features/cartSlice";

export default function CartPage() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="py-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-gray-300 px-2 py-1 rounded"
                >-</button>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-gray-300 px-2 py-1 rounded"
                >+</button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >Remove</button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-xl">Total: ${total}</div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
