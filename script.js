document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartElement = document.getElementById("cart");
    const showCartButton = document.getElementById("show-cart");

    // Agregar producto al carrito
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const product = e.target.closest(".product");
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);

            cart.push({ name, price });
            updateCart();
        });
    });

    // Mostrar/ocultar carrito
    showCartButton.addEventListener("click", () => {
        cartElement.style.display = cartElement.style.display === "none" ? "block" : "none";
    });

    // Actualizar contenido del carrito
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            const removeButton = document.createElement("button");
            removeButton.textContent = "Eliminar";
            removeButton.addEventListener("click", () => {
                cart.splice(index, 1);
                updateCart();
            });
            li.appendChild(removeButton);
            cartItems.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }
});