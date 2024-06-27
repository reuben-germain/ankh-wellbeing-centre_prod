const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Tailwind CSS Section
const products = [
    { name: "Wheatgrass", image: "wheatgrass.png", description: "Rich in vitamins and minerals.", price: "£10.00" },
    { name: "Spirulina", image: "spirulina.png", description: "A powerful source of protein.", price: "£15.00" },
    { name: "Turmeric", image: "turmeric.png", description: "Great for reducing inflammation.", price: "£8.00" },
    { name: "Ginger", image: "ginger.png", description: "Supports digestion and immunity.", price: "£7.00" },
    { name: "Moringa", image: "moringa.png", description: "Packed with antioxidants.", price: "£12.00" },
    { name: "Chlorella", image: "chlorella.png", description: "Detoxifies the body.", price: "£14.00" },
    { name: "Ashwagandha", image: "ashwagandha.png", description: "Reduces stress and anxiety.", price: "£18.00" },
    { name: "Maca", image: "maca-root.png", description: "Boosts energy and stamina.", price: "£11.00" },
    { name: "Goji Berries", image: "goji-berries.png", description: "Rich in antioxidants.", price: "£20.00" },
    { name: "Acai Berries", image: "acai-berry.png", description: "High in nutrients.", price: "£22.00" },
    { name: "Camu Camu", image: "camu-camu.png", description: "Supports immune health.", price: "£19.00" },
    { name: "Reishi", image: "reishi-mushroom.png", description: "Boosts immune function.", price: "£25.00" }
];

const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'bg-white rounded-lg shadow-lg overflow-hidden';
    
    productCard.innerHTML = `
        <div class="p-4">
            <h2 class="text-xl font-bold mb-2">${product.name}</h2>
            <img src="images/${product.image}" alt="${product.name}" class="w-full h-48 object-cover mb-2">
            <p class="text-gray-700 mb-2">${product.description}</p>
            <p class="text-green-600 font-bold text-lg mb-2">${product.price}</p>
            <button class="bg-green-900 text-white py-2 px-4 rounded hover:bg-green-600">Buy</button>
        </div>
    `;
    
    productGrid.appendChild(productCard);
});