const menuGrid = document.getElementById("menuGrid");
const addFoodForm = document.getElementById("addFoodForm");

let foods = [];

// Admin yangi taom qo‘shganda
if (addFoodForm) {
  addFoodForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("foodName").value;
    const desc = document.getElementById("foodDesc").value;
    const price = document.getElementById("foodPrice").value;
    const category = document.getElementById("foodCategory").value;
    const imageFile = document.getElementById("foodImage").files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
      const food = {
        name,
        desc,
        price,
        category,
        image: e.target.result,
        addedAt: Date.now()
      };
      foods.push(food);
      renderMenu(category);
      addFoodForm.reset();
    };
    reader.readAsDataURL(imageFile);
  });
}

function renderMenu(category = null) {
  menuGrid.innerHTML = "";
  foods
    .filter(f => !category || f.category === category)
    .forEach(food => {
      const card = document.createElement("div");
      card.className = "card";
      const isNew = Date.now() - food.addedAt < 24 * 60 * 60 * 1000;
      card.innerHTML = `
        ${isNew ? '<div class="new-badge">NEW</div>' : ""}
        <img src="${food.image}" alt="${food.name}">
        <h3>${food.name}</h3>
        <p>${food.desc}</p>
        <p class="price">${food.price} so'm</p>
        <button>➕ Savatchaga qo‘shish</button>
      `;
      menuGrid.appendChild(card);
    });
}

// Sidebar kategoriya tugmalari ishlashi
document.querySelectorAll(".menu-nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.cat;
    renderMenu(cat);
  });
});

// Dastlab hammasini ko‘rsatamiz
renderMenu();
