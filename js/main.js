var mealsMenu = [
    {
        title: "Pad Thai",
        image: "./images/Pad Thai.avif",
        description: "Popular Thai stir-fried noodles with shrimp and peanuts",
        difficulty: "Intermediate",
        type: "Asian",
        rate: "4.8",
        reviews: "(445 reviews)",
        prepTime: 20,
        cookTime: 15,
        servings: "2 people",
        nutrition: {
            calories: "540 kcal",
            protein: "32g",
            Carbohydrates: "62g",
            fat: "16g",
            fiber: "4g",
            sodium: "1120mg"
        },
        ingredients: [
            "200g rice noodles",
            "200g shrimp, peeled",
            "2 eggs",
            "3 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Bean sprouts",
            "Crushed peanuts",
            "Lime wedges and cilantro"
        ],
        instructions: [
            "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
            "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
            "Heat wok over high heat. Scramble eggs and set aside.",
            "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
            "Add scrambled eggs and bean sprouts. Toss everything together.",
            "Serve topped with crushed peanuts, lime wedges, and cilantro."
        ],
        chefTips: [
            "Don't oversoak noodles or they'll be mushy",
            "Cook on high heat for authentic wok flavor",
            "Balance sweet, sour, and salty flavors",
            "Prepare all ingredients before starting to cook"
        ]
    },
    {
        title: "Chicken Alfredo",
        image: "./images/Chicken Alfredo.png",
        description: "Creamy Italian pasta with grilled chicken and parmesan",
        difficulty: "Easy",
        type: "Italian",
        rate: "4.7",
        reviews: "(389 reviews)",
        prepTime: 15,
        cookTime: 20,
        servings: "2 people",
        nutrition: {
            calories: "670 kcal",
            protein: "38g",
            Carbohydrates: "56g",
            fat: "32g",
            fiber: "3g",
            sodium: "640mg"
        },
        ingredients: [
            "200g fettuccine pasta",
            "250g chicken breast",
            "1 cup heavy cream",
            "1/2 cup parmesan cheese",
            "2 cloves garlic",
            "2 tbsp butter",
            "Salt and pepper"
        ],
        instructions: [
            "Boil pasta until al dente.",
            "Season and cook chicken until golden brown.",
            "Sauté garlic in butter, add cream and simmer.",
            "Add parmesan and stir until smooth.",
            "Mix pasta with sauce and add sliced chicken."
        ],
        chefTips: [
            "Use fresh parmesan for best texture",
            "Add pasta water if sauce becomes too thick",
            "Grill chicken for extra flavor",
            "Don't overcook the pasta"
        ]
    },
    {
        title: "Margherita Pizza",
        image: "./images/Margherita Pizza.png",
        description: "Classic Italian pizza with mozzarella, basil, and tomato sauce",
        difficulty: "Intermediate",
        type: "Italian",
        rate: "4.9",
        reviews: "(512 reviews)",
        prepTime: 60,
        cookTime: 12,
        servings: "2 people",
        nutrition: {
            calories: "720 kcal",
            protein: "30g",
            Carbohydrates: "90g",
            fat: "25g",
            fiber: "5g",
            sodium: "780mg"
        },
        ingredients: [
            "Pizza dough",
            "1 cup tomato sauce",
            "200g fresh mozzarella",
            "Fresh basil leaves",
            "Olive oil",
            "Salt",
            "Black pepper"
        ],
        instructions: [
            "Preheat oven to highest temperature.",
            "Spread sauce on stretched dough.",
            "Add torn mozzarella pieces.",
            "Bake until crust is golden.",
            "Top with basil and olive oil."
        ],
        chefTips: [
            "Use a pizza stone for better crust",
            "Don't overload with cheese",
            "Bake at highest heat possible",
            "Use fresh basil only"
        ]
    },
    {
        title: "Beef Tacos",
        image: "./images/Beef Tacos.png",
        description: "Mexican tacos with seasoned ground beef and toppings",
        difficulty: "Easy",
        type: "Mexican",
        rate: "4.6",
        reviews: "(298 reviews)",
        prepTime: 10,
        cookTime: 12,
        servings: "3 people",
        nutrition: {
            calories: "430 kcal",
            protein: "24g",
            Carbohydrates: "34g",
            fat: "20g",
            fiber: "4g",
            sodium: "760mg"
        },
        ingredients: [
            "6 small tortillas",
            "300g ground beef",
            "Taco seasoning",
            "Lettuce",
            "Tomatoes",
            "Cheddar cheese",
            "Sour cream"
        ],
        instructions: [
            "Cook beef with taco seasoning.",
            "Warm tortillas.",
            "Fill with beef and toppings.",
            "Add cheese and sour cream."
        ],
        chefTips: [
            "Toast tortillas for better flavor",
            "Use fresh toppings",
            "Don't overfill tacos",
            "Add lime juice for freshness"
        ]
    },
    {
        title: "Chicken Biryani",
        image: "./images/Chicken Biryani.png",
        description: "Aromatic Indian rice dish with chicken and spices",
        difficulty: "Advanced",
        type: "Indian",
        rate: "4.9",
        reviews: "(689 reviews)",
        prepTime: 40,
        cookTime: 45,
        servings: "3 people",
        nutrition: {
            calories: "780 kcal",
            protein: "42g",
            Carbohydrates: "95g",
            fat: "28g",
            fiber: "5g",
            sodium: "980mg"
        },
        ingredients: [
            "2 cups basmati rice",
            "500g chicken",
            "Biryani spices",
            "Onions",
            "Yogurt",
            "Saffron",
            "Ghee"
        ],
        instructions: [
            "Marinate chicken.",
            "Cook onions until golden.",
            "Layer rice and chicken.",
            "Steam on low heat.",
            "Serve hot."
        ],
        chefTips: [
            "Use long-grain basmati rice",
            "Don't stir while steaming",
            "Fry onions deeply for real biryani flavor",
            "Use saffron soaked in warm milk"
        ]
    },
    {
        title: "Sushi Rolls",
        image: "./images/Sushi Rolls.png",
        description: "Japanese rice rolls with vegetables and seafood",
        difficulty: "Advanced",
        type: "Asian",
        rate: "4.8",
        reviews: "(410 reviews)",
        prepTime: 45,
        cookTime: 10,
        servings: "2 people",
        nutrition: {
            calories: "380 kcal",
            protein: "18g",
            Carbohydrates: "62g",
            fat: "6g",
            fiber: "3g",
            sodium: "420mg"
        },
        ingredients: [
            "2 cups sushi rice",
            "Nori sheets",
            "Cucumber",
            "Avocado",
            "Crab or salmon",
            "Soy sauce",
            "Wasabi"
        ],
        instructions: [
            "Cook sushi rice.",
            "Lay rice on nori.",
            "Add fillings.",
            "Roll tightly.",
            "Slice and serve."
        ],
        chefTips: [
            "Wet hands to avoid sticky rice",
            "Use a sharp knife",
            "Don't overfill rolls",
            "Keep rice warm when rolling"
        ]
    },
    {
        title: "Caesar Salad",
        image: "./images/Caesar Salad.png",
        description: "Crisp romaine lettuce with creamy Caesar dressing",
        difficulty: "Easy",
        type: "American",
        rate: "4.5",
        reviews: "(254 reviews)",
        prepTime: 10,
        cookTime: 0,
        servings: "2 people",
        nutrition: {
            calories: "320 kcal",
            protein: "9g",
            Carbohydrates: "12g",
            fat: "26g",
            fiber: "3g",
            sodium: "610mg"
        },
        ingredients: [
            "Romaine lettuce",
            "Croutons",
            "Parmesan",
            "Caesar dressing",
            "Black pepper",
            "Lemon juice",
            "Anchovies (optional)"
        ],
        instructions: [
            "Chop lettuce.",
            "Add dressing and toss.",
            "Top with croutons and parmesan.",
            "Season with pepper."
        ],
        chefTips: [
            "Use cold crisp lettuce",
            "Add homemade croutons",
            "Shave parmesan instead of grating",
            "Add grilled chicken for protein"
        ]
    },
    {
        title: "Teriyaki Salmon",
        image: "./images/Teriyaki Salmon.png",
        description: "Salmon glazed with a sweet and savory teriyaki sauce",
        difficulty: "Easy",
        type: "Asian",
        rate: "4.8",
        reviews: "(333 reviews)",
        prepTime: 10,
        cookTime: 15,
        servings: "2 people",
        nutrition: {
            calories: "520 kcal",
            protein: "34g",
            Carbohydrates: "22g",
            fat: "30g",
            fiber: "1g",
            sodium: "820mg"
        },
        ingredients: [
            "2 salmon fillets",
            "Soy sauce",
            "Honey",
            "Ginger",
            "Garlic",
            "Sesame seeds",
            "Green onions"
        ],
        instructions: [
            "Mix teriyaki sauce ingredients.",
            "Pan-sear salmon.",
            "Add sauce and reduce.",
            "Serve with sesame and onions."
        ],
        chefTips: [
            "Don't overcook salmon",
            "Use fresh ginger",
            "Let sauce thicken properly",
            "Serve with rice"
        ]
    },
    {
        title: "Chicken Gyros",
        image: "./images/Chicken Gyros.png",
        description: "Greek pita wraps with marinated chicken and tzatziki",
        difficulty: "Intermediate",
        type: "Mediterranean",
        rate: "4.7",
        reviews: "(278 reviews)",
        prepTime: 20,
        cookTime: 15,
        servings: "3 people",
        nutrition: {
            calories: "480 kcal",
            protein: "29g",
            Carbohydrates: "52g",
            fat: "18g",
            fiber: "4g",
            sodium: "680mg"
        },
        ingredients: [
            "Pita bread",
            "Chicken strips",
            "Greek yogurt",
            "Cucumber",
            "Garlic",
            "Lemon juice",
            "Tomatoes"
        ],
        instructions: [
            "Marinate chicken.",
            "Cook until golden.",
            "Mix tzatziki.",
            "Assemble gyros."
        ],
        chefTips: [
            "Use thick Greek yogurt",
            "Warm pita before serving",
            "Add fresh herbs",
            "Squeeze lemon before eating"
        ]
    },
    {
        title: "Chili Con Carne",
        image: "./images/Chili Con Carne.png",
        description: "Spicy beef chili with beans and tomatoes",
        difficulty: "Intermediate",
        type: "American",
        rate: "4.6",
        reviews: "(340 reviews)",
        prepTime: 15,
        cookTime: 45,
        servings: "3 people",
        nutrition: {
            calories: "610 kcal",
            protein: "40g",
            Carbohydrates: "48g",
            fat: "26g",
            fiber: "9g",
            sodium: "900mg"
        },
        ingredients: [
            "400g ground beef",
            "Kidney beans",
            "Tomatoes",
            "Chili powder",
            "Garlic",
            "Onion",
            "Paprika"
        ],
        instructions: [
            "Sauté onions and garlic.",
            "Add beef and brown.",
            "Add tomatoes and beans.",
            "Simmer for 30 minutes.",
            "Serve warm."
        ],
        chefTips: [
            "Let it simmer longer for deeper flavor",
            "Add spicy peppers if you want heat",
            "Use smoked paprika",
            "Serve with rice or bread"
        ]
    },
    {
        title: "French Toast",
        image: "./images/French Toast.png",
        description: "Golden bread slices soaked in sweet egg mixture",
        difficulty: "Easy",
        type: "Breakfast",
        rate: "4.9",
        reviews: "(502 reviews)",
        prepTime: 5,
        cookTime: 10,
        servings: "2 people",
        nutrition: {
            calories: "360 kcal",
            protein: "12g",
            Carbohydrates: "42g",
            fat: "16g",
            fiber: "2g",
            sodium: "380mg"
        },
        ingredients: [
            "4 slices bread",
            "2 eggs",
            "1/2 cup milk",
            "1 tbsp sugar",
            "Butter",
            "Cinnamon",
            "Maple syrup"
        ],
        instructions: [
            "Mix eggs, milk, sugar, and cinnamon.",
            "Dip bread on both sides.",
            "Cook in butter until golden.",
            "Serve with syrup."
        ],
        chefTips: [
            "Use thick bread",
            "Don't soak too long",
            "Cook on medium heat",
            "Add vanilla for extra flavor"
        ]
    }
];


function chooseRandomMeal() {
    var cartona = ``
    var randomIndex = Math.floor(Math.random() * mealsMenu.length);

    for (var i = randomIndex; i <= randomIndex; i++) {

        var totalTime = mealsMenu[i].prepTime + mealsMenu[i].cookTime
        cartona += `<div class="container">
                    <div class="row card-border">
                        <div class="col-lg-5 p-0">
                            <div class="rounded-5">
                                <div class="recipe-img position-relative">
                                    <img src="${mealsMenu[i].image}" alt="">
                                    <span class="img-span rounded-pill">
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <span class="text-black fw-bold">${mealsMenu[i].rate}</span>
                                        <span class="txt-gray">${mealsMenu[i].reviews}</span>
                                    </span>
                                    <span class="img-bottom-span d-flex justify-content-around rounded-4">
                                        <div class="text-center">
                                            <i class="fa-solid fa-clock fs-4"></i>
                                            <p class="m-0 txt-gray">Prep Time</p>
                                            <p class="text-black fw-bold">${mealsMenu[i].prepTime} min</p>
                                        </div>
                                        <div class="text-center">
                                            <i class="fa-solid fa-fire-burner fs-4"></i>
                                            <p class="m-0 txt-gray">Cook Time</p>
                                            <p class="text-black fw-bold">${mealsMenu[i].cookTime} min</p>
                                        </div>
                                        <div class="text-center">
                                            <i class="fa-solid fa-users fs-4"></i>
                                            <p class="m-0 txt-gray">Servings</p>
                                            <p class="text-black fw-bold">${mealsMenu[i].servings}</p>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 details bg-white overflow-y-auto">
                            <div class="container p-4">
                                <div class="details-heading d-flex align-items-center justify-content-between">
                                    <div class="details-heading-left">
                                        <span class="green-span rounded-pill">${mealsMenu[i].difficulty}</span>
                                        <span class="blue-span rounded-pill">${mealsMenu[i].type}</span>
                                        <h2 class="text-black fw-bold my-2">${mealsMenu[i].title}</h2>
                                        <span class="txt-gray fs-6">${mealsMenu[i].description}</span>
                                    </div>
                                    <div class="details-heading-right d-flex">
                                        <i class="fa-solid fa-bookmark me-2"></i>
                                        <i class="fa-solid fa-share-nodes"></i>
                                    </div>
                                </div>
                                
                                ${totalTime >= 45 ? `
                                <div class="warning d-flex align-items-center my-4 p-3">
                                    <div class="warning-icon">
                                        <i class="fa-solid fa-triangle-exclamation me-3 fs-5"></i>
                                    </div>
                                    <div>
                                       <p class="m-0">Extended Preparation Time</p>
                                       <span>This recipe requires more than 45 minutes to prepare. Plan accordingly!</span>
                                    </div>
                                </div>`
                : ''
            }

                                <ul class="nav nav-pills justify-content-between my-4 flex-nowrap" id="pills-tab"
                                    role="tablist">
                                    <li class="nav-item " role="presentation">
                                        <button class="nav-link active d-flex align-items-center" id="ingredient-tab"
                                            data-bs-toggle="pill" data-bs-target="#ingredient" type="button" role="tab"
                                            aria-controls="ingredient" aria-selected="true"><i
                                                class="fa-solid fa-list-check me-1"></i>Ingredients</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" id="instruction-tab"
                                            data-bs-toggle="pill" data-bs-target="#instruction" type="button" role="tab"
                                            aria-controls="instruction" aria-selected="false"><i
                                                class="fa-solid fa-book-open me-1"></i>Instructions</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" id="nutrition-tab"
                                            data-bs-toggle="pill" data-bs-target="#nutrition" type="button" role="tab"
                                            aria-controls="nutrition" aria-selected="false"> <i
                                                class="fa-solid fa-chart-pie me-1"></i>Nutrition</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" id="tips-tab"
                                            data-bs-toggle="pill" data-bs-target="#tips" type="button" role="tab"
                                            aria-controls="tips" aria-selected="false"><i
                                                class="fa-solid fa-lightbulb me-1"></i>Chef's Tips</button>
                                    </li>
                                </ul>
                                <div class="tab-content position-relative" id="pills-tabContent">
                                    <div class="tab-pane fade show active overflow-y-auto" id="ingredient"
                                       role="tabpanel" aria-labelledby="ingredient-tab" tabindex="0">
                                       <div class="ingredient-design rounded-3 p-4 mb-5">
                                            ${mealsMenu[i].ingredients.map((item, index) => `
                                             <div class="ingredient d-flex mb-3">
                                                    <div class="num">${index + 1}</div>
                                                    <span>${item}</span>
                                              </div>
                                            `).join('')}
                                       </div>
                                    </div>
                                   <div class="tab-pane fade overflow-y-auto" id="instruction" role="tabpanel" aria-labelledby="instruction-tab" tabindex="0">
                                       <div class="instruction-design p-4 mb-5">
                                         ${mealsMenu[i].instructions.map((step, index) => `
                                                <div class="instruction d-flex align-items-center mb-3">
                                                  <div class="num col-2">${index + 1}</div>
                                                   <span class="col-10 fs-6">${step}</span>
                                                </div>
                                           `).join('')}
                                       </div>
                                    </div>

                                    <div class="tab-pane fade overflow-y-auto" id="nutrition" role="tabpanel"
                                        aria-labelledby="nutrition-tab" tabindex="0">
                                        <div class="nutrition-design rounded-3 mb-5">
                                            <div class="d-flex flex-wrap gy-3">
                                                <div class="col-12 col-md-6 p-2">
                                                    <div
                                                        class="nutrition p-3 d-flex align-items-center justify-content-between rounded-3">
                                                        <div class="nutrition-left d-flex align-items-center">
                                                            <i class="fa-solid fa-fire"></i>
                                                            <span class="fs-6 fw-medium txt-gray ">Calories</span>
                                                        </div>
                                                        <div class="nutrition-right">
                                                            <span class="fs-5 fw-bold text-black">${mealsMenu[i].nutrition.calories}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 p-2">
                                                    <div
                                                        class="nutrition p-3 d-flex align-items-center justify-content-between rounded-3">
                                                        <div class="nutrition-left d-flex align-items-center">
                                                            <i class="fa-solid fa-dumbbell"></i>
                                                            <span class="fs-6 fw-medium txt-gray ">Protein</span>
                                                        </div>
                                                        <div class="nutrition-right">
                                                            <span class="fs-5 fw-bold text-black">${mealsMenu[i].nutrition.protein}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 p-2">
                                                    <div
                                                        class="nutrition p-3 d-flex align-items-center justify-content-between rounded-3">
                                                        <div class="nutrition-left d-flex align-items-center">
                                                            <i class="fa-solid fa-wheat-awn"></i>
                                                            <span class="fs-6 fw-medium txt-gray ">Carbohydrates</span>
                                                        </div>
                                                        <div class="nutrition-right">
                                                            <span class="fs-5 fw-bold text-black">${mealsMenu[i].nutrition.Carbohydrates}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 p-2">
                                                    <div
                                                        class="nutrition p-3 d-flex align-items-center justify-content-between rounded-3">
                                                        <div class="nutrition-left d-flex align-items-center">
                                                            <i class="fa-solid fa-droplet"></i>
                                                            <span class="fs-6 fw-medium txt-gray ">Fat</span>
                                                        </div>
                                                        <div class="nutrition-right">
                                                            <span class="fs-5 fw-bold text-black">${mealsMenu[i].nutrition.fat}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 p-2">
                                                    <div
                                                        class="nutrition p-3 d-flex align-items-center justify-content-between rounded-3">
                                                        <div class="nutrition-left d-flex align-items-center">
                                                            <i class="fa-solid fa-seedling"></i>
                                                            <span class="fs-6 fw-medium txt-gray ">Fiber</span>
                                                        </div>
                                                        <div class="nutrition-right">
                                                            <span class="fs-5 fw-bold text-black">${mealsMenu[i].nutrition.fiber}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 p-2">
                                                    <div
                                                        class="nutrition p-3 d-flex align-items-center justify-content-between rounded-3">
                                                        <div class="nutrition-left d-flex align-items-center">
                                                            <i class="fa-solid fa-cube"></i>
                                                            <span class="fs-6 fw-medium txt-gray ">Sodium</span>
                                                        </div>
                                                        <div class="nutrition-right">
                                                            <span class="fs-5 fw-bold text-black">${mealsMenu[i].nutrition.sodium}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade overflow-y-auto" id="tips" role="tabpanel" aria-labelledby="tips-tab" tabindex="0">
                                        <div class="tips-design rounded-3 mb-5">
                                           ${mealsMenu[i].chefTips.map(tip => `
                                                <div class="tips d-flex align-items-center mb-3">
                                                   <i class="fa-solid fa-check-circle me-2"></i>
                                                   <span>${tip}</span>
                                                </div>
                                           `).join('')}
                                        </div>
                                    </div>
                                </div>
                                <button class="btn" onclick="chooseRandomMeal()"><i class="fa-solid fa-rotate me-2"></i>Try Another
                                    Recipe</button>

                            </div>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById("meals").innerHTML = cartona;

}
window.onload = chooseRandomMeal;