import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id && item.color === product.color && item.size === product.size);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.color === product.color && item.size === product.size ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (id, color, size) => {
    setCartItems((prevItems) => prevItems.filter((item) => !(item.id === id && item.color === color && item.size === size)));
  };

  const increaseQuantity = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id && item.color === color && item.size === size ? { ...item, quantity: item.quantity + 1 } : item)),
    );
  };

  const decreaseQuantity = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => (item.id === id && item.color === color && item.size === size ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen((open) => !open);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
