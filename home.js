const ingredients = {
    food: {
        "Burger": [
            { name: "Beef Patty", included: true },
            { name: "Lettuce", included: true },
            { name: "Tomato", included: true },
            { name: "Onions", included: true },
            { name: "Pickles", included: true },
            { name: "Cheese", included: true },
            { name: "Mayo", included: true },
            { name: "Mustard", included: true }
        ],
        "Pizza": [
            { name: "Cheese", included: true },
            { name: "Tomato Sauce", included: true },
            { name: "Pepperoni", included: true },
            { name: "Mushrooms", included: false },
            { name: "Onions", included: false },
            { name: "Bell Peppers", included: false }
        ],
        "Fish & Chips": [
            { name: "Fish Fillet", included: true },
            { name: "Chips", included: true },
            { name: "Lemon Wedge", included: true }
        ],
        "Chicken Curry": [
            { name: "Chicken", included: true },
            { name: "Rice", included: true },
            { name: "Curry Sauce", included: true },
            { name: "Onions", included: true }
        ],
        "Pasta Carbonara": [
            { name: "Pasta", included: true },
            { name: "Bacon", included: true },
            { name: "Parmesan", included: true },
            { name: "Cream Sauce", included: true }
        ],
        "Caesar Salad": [
            { name: "Lettuce", included: true },
            { name: "Croutons", included: true },
            { name: "Parmesan", included: true },
            { name: "Caesar Dressing", included: true },
            { name: "Chicken", included: true }
        ],
        "Club Sandwich": [
            { name: "Bread", included: true },
            { name: "Chicken", included: true },
            { name: "Bacon", included: true },
            { name: "Lettuce", included: true },
            { name: "Tomato", included: true },
            { name: "Mayo", included: true }
        ],
        "Steak & Chips": [
            { name: "Steak", included: true },
            { name: "Chips", included: true },
            { name: "Grilled Tomato", included: true },
            { name: "Mushrooms", included: true }
        ],
        "Lasagna": [
            { name: "Pasta Sheets", included: true },
            { name: "Beef Sauce", included: true },
            { name: "Cheese", included: true },
            { name: "Bechamel Sauce", included: true }
        ],
        "Beef Burrito": [
            { name: "Tortilla", included: true },
            { name: "Beef", included: true },
            { name: "Rice", included: true },
            { name: "Beans", included: true },
            { name: "Cheese", included: true }
        ],
        "Veggie Wrap": [
            { name: "Tortilla", included: true },
            { name: "Mixed Vegetables", included: true },
            { name: "Hummus", included: true },
            { name: "Lettuce", included: true }
        ],
        "Chicken Wings": [
            { name: "Chicken Wings", included: true },
            { name: "BBQ Sauce", included: true },
            { name: "Celery Sticks", included: false },
            { name: "Blue Cheese Dip", included: false }
        ],
        "Greek Salad": [
            { name: "Lettuce", included: true },
            { name: "Tomato", included: true },
            { name: "Cucumber", included: true },
            { name: "Feta Cheese", included: true },
            { name: "Olives", included: true },
            { name: "Dressing", included: true }
        ]
    }
};

const customizations = {
    food: {
        "Burger": {
            sauces: [
                { name: "BBQ Sauce", price: 0.30, icon: "fa-bottle-droplet" },
                { name: "Garlic Mayo", price: 0.30, icon: "fa-bottle-droplet" },
                { name: "Chipotle Sauce", price: 0.30, icon: "fa-bottle-droplet" },
                { name: "Ketchup", price: 0, icon: "fa-bottle-droplet", default: true },
                { name: "Mustard", price: 0, icon: "fa-bottle-droplet", default: true }
            ],
            extras: [
                { name: "Extra Cheese", price: 1.00, icon: "fa-cheese" },
                { name: "Extra Bacon", price: 1.50, icon: "fa-bacon" },
                { name: "Extra Patty", price: 2.50, icon: "fa-burger" },
                { name: "Gluten-Free Bun", price: 1.50, icon: "fa-bread-slice" },
                { name: "Extra Lettuce", price: 0.30, icon: "fa-leaf" },
                { name: "Extra Tomato", price: 0.30, icon: "fa-apple-whole" },
                { name: "Caramelized Onions", price: 0.50, icon: "fa-ring" }
            ]
        },
        "Pizza": {
            crustOptions: [
                { name: "Thin Crust", price: 0, icon: "fa-pizza-slice" },
                { name: "Thick Crust", price: 1.00, icon: "fa-pizza-slice" },
                { name: "Stuffed Crust", price: 2.50, icon: "fa-pizza-slice" }
            ],
            toppings: [
                { name: "Extra Cheese", price: 1.50, icon: "fa-cheese" },
                { name: "Extra Pepperoni", price: 1.50, icon: "fa-pizza-slice" },
                { name: "Mushrooms", price: 1.00, icon: "fa-mushroom" },
                { name: "Olives", price: 1.00, icon: "fa-circle" },
                { name: "Bell Peppers", price: 1.00, icon: "fa-pepper-hot" },
                { name: "Onions", price: 0.75, icon: "fa-ring" },
                { name: "Ham", price: 1.50, icon: "fa-bacon" },
                { name: "Pineapple", price: 1.00, icon: "fa-apple-whole" }
            ],
            sauces: [
                { name: "Extra Tomato Sauce", price: 0.50, icon: "fa-bottle-droplet" },
                { name: "BBQ Base", price: 1.00, icon: "fa-bottle-droplet" },
                { name: "Garlic Base", price: 1.00, icon: "fa-bottle-droplet" }
            ]
        },
        "Fish & Chips": {
            sauces: [
                { name: "Tartar Sauce", price: 0, icon: "fa-bottle-droplet", default: true },
                { name: "Ketchup", price: 0, icon: "fa-bottle-droplet" },
                { name: "Curry Sauce", price: 0.50, icon: "fa-bottle-droplet" },
                { name: "Gravy", price: 0.50, icon: "fa-bottle-droplet" }
            ],
            extras: [
                { name: "Extra Chips", price: 2.00, icon: "fa-french-fries" },
                { name: "Mushy Peas", price: 1.00, icon: "fa-leaf" },
                { name: "Curry Sauce", price: 1.00, icon: "fa-bottle-droplet" },
                { name: "Extra Fish", price: 4.50, icon: "fa-fish" }
            ]
        },
        "Chicken Curry": {
            sauces: [
                { name: "Extra Curry Sauce", price: 1.00, icon: "fa-bottle-droplet" },
                { name: "Spicy Sauce", price: 0.50, icon: "fa-pepper-hot" }
            ],
            extras: [
                { name: "Extra Chicken", price: 3.00, icon: "fa-drumstick-bite" },
                { name: "Extra Rice", price: 1.50, icon: "fa-bowl-rice" },
                { name: "Naan Bread", price: 2.00, icon: "fa-bread-slice" },
                { name: "Poppadoms", price: 1.00, icon: "fa-circle" }
            ]
        },
        "Pasta Carbonara": {
            extras: [
                { name: "Extra Bacon", price: 2.00, icon: "fa-bacon" },
                { name: "Extra Cheese", price: 1.00, icon: "fa-cheese" },
                { name: "Extra Sauce", price: 1.50, icon: "fa-bottle-droplet" },
                { name: "Garlic Bread", price: 2.50, icon: "fa-bread-slice" }
            ]
        },
        "Caesar Salad": {
            extras: [
                { name: "Extra Chicken", price: 3.00, icon: "fa-drumstick-bite" },
                { name: "Extra Croutons", price: 0.50, icon: "fa-bread-slice" },
                { name: "Extra Parmesan", price: 1.00, icon: "fa-cheese" },
                { name: "Extra Dressing", price: 0.50, icon: "fa-bottle-droplet" }
            ]
        },
        "Club Sandwich": {
            sauces: [
                { name: "Mayo", price: 0, icon: "fa-bottle-droplet", default: true },
                { name: "BBQ Sauce", price: 0.30, icon: "fa-bottle-droplet" },
                { name: "Garlic Mayo", price: 0.30, icon: "fa-bottle-droplet" }
            ],
            extras: [
                { name: "Extra Chicken", price: 2.50, icon: "fa-drumstick-bite" },
                { name: "Extra Bacon", price: 1.50, icon: "fa-bacon" },
                { name: "Extra Cheese", price: 1.00, icon: "fa-cheese" },
                { name: "Avocado", price: 1.50, icon: "fa-seedling" }
            ]
        },
        "Steak & Chips": {
            sauces: [
                { name: "Peppercorn Sauce", price: 1.50, icon: "fa-bottle-droplet" },
                { name: "Garlic Butter", price: 1.00, icon: "fa-butter" },
                { name: "BBQ Sauce", price: 1.00, icon: "fa-bottle-droplet" },
                { name: "Béarnaise Sauce", price: 1.50, icon: "fa-bottle-droplet" }
            ],
            extras: [
                { name: "Extra Chips", price: 2.00, icon: "fa-french-fries" },
                { name: "Onion Rings", price: 2.50, icon: "fa-ring" },
                { name: "Grilled Mushrooms", price: 1.50, icon: "fa-mushroom" },
                { name: "Grilled Tomatoes", price: 1.00, icon: "fa-apple-whole" }
            ]
        },
        "Lasagna": {
            extras: [
                { name: "Extra Cheese", price: 1.50, icon: "fa-cheese" },
                { name: "Extra Meat Sauce", price: 2.00, icon: "fa-meat" },
                { name: "Garlic Bread", price: 2.50, icon: "fa-bread-slice" }
            ]
        },
        "Beef Burrito": {
            sauces: [
                { name: "Sour Cream", price: 0.50, icon: "fa-bottle-droplet" },
                { name: "Guacamole", price: 1.00, icon: "fa-bottle-droplet" },
                { name: "Hot Sauce", price: 0.30, icon: "fa-pepper-hot" },
                { name: "Salsa", price: 0.50, icon: "fa-bottle-droplet" }
            ],
            extras: [
                { name: "Extra Cheese", price: 1.00, icon: "fa-cheese" },
                { name: "Extra Beef", price: 2.50, icon: "fa-meat" },
                { name: "Extra Rice", price: 1.00, icon: "fa-bowl-rice" },
                { name: "Jalapeños", price: 0.50, icon: "fa-pepper-hot" }
            ]
        },
        "Veggie Wrap": {
            sauces: [
                { name: "Hummus", price: 0.50, icon: "fa-bottle-droplet" },
                { name: "Tahini", price: 0.50, icon: "fa-bottle-droplet" },
                { name: "Sweet Chili", price: 0.30, icon: "fa-pepper-hot" }
            ],
            extras: [
                { name: "Extra Falafel", price: 1.50, icon: "fa-circle" },
                { name: "Avocado", price: 1.50, icon: "fa-seedling" },
                { name: "Halloumi", price: 2.00, icon: "fa-cheese" }
            ]
        },
        "Chicken Wings": {
            sauces: [
                { name: "BBQ", price: 0, icon: "fa-bottle-droplet", default: true },
                { name: "Hot Sauce", price: 0, icon: "fa-pepper-hot" },
                { name: "Garlic Parmesan", price: 0.50, icon: "fa-cheese" },
                { name: "Sweet Chili", price: 0, icon: "fa-pepper-hot" }
            ],
            extras: [
                { name: "Blue Cheese Dip", price: 0.75, icon: "fa-bottle-droplet" },
                { name: "Ranch Dip", price: 0.75, icon: "fa-bottle-droplet" },
                { name: "Celery Sticks", price: 0.50, icon: "fa-carrot" },
                { name: "Extra Sauce", price: 1.00, icon: "fa-bottle-droplet" }
            ]
        },
        "Greek Salad": {
            extras: [
                { name: "Extra Feta", price: 1.50, icon: "fa-cheese" },
                { name: "Extra Olives", price: 1.00, icon: "fa-circle" },
                { name: "Extra Dressing", price: 0.50, icon: "fa-bottle-droplet" },
                { name: "Grilled Chicken", price: 3.00, icon: "fa-drumstick-bite" }
            ]
        }
    },
    drinks: {
        "Cola": {
            extras: [
                { name: "Ice", price: 0, icon: "fa-ice-cube", default: true },
                { name: "Lemon Slice", price: 0, icon: "fa-lemon" }
            ]
        },
        "Lemonade": {
            extras: [
                { name: "Ice", price: 0, icon: "fa-ice-cube", default: true },
                { name: "Lemon Slice", price: 0, icon: "fa-lemon" },
                { name: "Mint Leaves", price: 0.30, icon: "fa-leaf" }
            ]
        },
        "Orange Juice": {
            extras: [
                { name: "Ice", price: 0, icon: "fa-ice-cube" },
                { name: "Orange Slice", price: 0, icon: "fa-orange" }
            ]
        },
        "Mineral Water": {
            extras: [
                { name: "Ice", price: 0, icon: "fa-ice-cube" },
                { name: "Lemon Slice", price: 0, icon: "fa-lemon" }
            ]
        },
        "Sparkling Water": {
            extras: [
                { name: "Ice", price: 0, icon: "fa-ice-cube" },
                { name: "Lime Wedge", price: 0, icon: "fa-lemon" }
            ]
        },
        "Energy Drink": {
            extras: [
                { name: "Ice", price: 0, icon: "fa-ice-cube" },
                { name: "Lime Wedge", price: 0, icon: "fa-lemon" }
            ]
        },
        "Berry Blast": {
            extras: [
                { name: "Extra Berries", price: 0.50, icon: "fa-apple-whole" },
                { name: "Protein Boost", price: 1.00, icon: "fa-dumbbell" },
                { name: "Energy Boost", price: 1.00, icon: "fa-bolt" }
            ]
        },
        "Milkshake": {
            extras: [
                { name: "Whipped Cream", price: 0.50, icon: "fa-cream" },
                { name: "Chocolate Sauce", price: 0.50, icon: "fa-droplet" },
                { name: "Sprinkles", price: 0.30, icon: "fa-sprinkle" },
                { name: "Extra Syrup", price: 0.50, icon: "fa-droplet" }
            ]
        }
    },
    hotdrinks: {
        "Coffee": {
            extras: [
                { name: "Extra Shot", price: 0.80, icon: "fa-mug-hot" },
                { name: "Caramel Syrup", price: 0.50, icon: "fa-droplet" },
                { name: "Vanilla Syrup", price: 0.50, icon: "fa-droplet" },
                { name: "Hazelnut Syrup", price: 0.50, icon: "fa-droplet" },
                { name: "Whipped Cream", price: 0.50, icon: "fa-cream" }
            ]
        },
        "Tea": {
            extras: [
                { name: "Extra Tea Bag", price: 0.50, icon: "fa-mug-hot" },
                { name: "Honey", price: 0.30, icon: "fa-honey" },
                { name: "Lemon", price: 0, icon: "fa-lemon" }
            ]
        },
        "Hot Chocolate": {
            extras: [
                { name: "Whipped Cream", price: 0.50, icon: "fa-cream" },
                { name: "Marshmallows", price: 0.50, icon: "fa-cloud" },
                { name: "Chocolate Sprinkles", price: 0.30, icon: "fa-sprinkle" },
                { name: "Caramel Drizzle", price: 0.50, icon: "fa-droplet" }
            ]
        },
        "Cappuccino": {
            extras: [
                { name: "Extra Shot", price: 0.80, icon: "fa-mug-hot" },
                { name: "Extra Foam", price: 0.30, icon: "fa-cloud" },
                { name: "Chocolate Powder", price: 0, icon: "fa-sprinkle", default: true },
                { name: "Caramel Syrup", price: 0.50, icon: "fa-droplet" }
            ]
        },
        "Mocha": {
            extras: [
                { name: "Extra Shot", price: 0.80, icon: "fa-mug-hot" },
                { name: "Whipped Cream", price: 0.50, icon: "fa-cream" },
                { name: "Chocolate Sauce", price: 0.50, icon: "fa-droplet" },
                { name: "Marshmallows", price: 0.50, icon: "fa-cloud" }
            ]
        },
        "Flat White": {
            extras: [
                { name: "Extra Shot", price: 0.80, icon: "fa-mug-hot" },
                { name: "Alternative Milk", price: 0.50, icon: "fa-bottle-droplet" }
            ]
        }
    },
    snacks: {
        "Nachos": {
            sauces: [
                { name: "Salsa", price: 0, icon: "fa-bottle-droplet", default: true },
                { name: "Sour Cream", price: 0.50, icon: "fa-bottle-droplet" },
                { name: "Guacamole", price: 1.00, icon: "fa-bottle-droplet" },
                { name: "Cheese Sauce", price: 1.00, icon: "fa-cheese" }
            ],
            extras: [
                { name: "Extra Cheese", price: 1.00, icon: "fa-cheese" },
                { name: "Jalapeños", price: 0.50, icon: "fa-pepper-hot" },
                { name: "Ground Beef", price: 2.00, icon: "fa-meat" },
                { name: "Black Beans", price: 0.75, icon: "fa-bean" }
            ]
        },
        "Popcorn": {
            extras: [
                { name: "Extra Butter", price: 0.50, icon: "fa-butter" },
                { name: "Caramel Sauce", price: 1.00, icon: "fa-droplet" },
                { name: "Sweet & Salty Mix", price: 0.50, icon: "fa-salt-shaker" }
            ]
        },
        "Cookies": {
            extras: [
                { name: "Extra Cookie", price: 0.50, icon: "fa-cookie" },
                { name: "Gift Box", price: 1.00, icon: "fa-gift" }
            ]
        },
        "Fruit Bowl": {
            extras: [
                { name: "Extra Fruit", price: 1.00, icon: "fa-apple-whole" },
                { name: "Yogurt", price: 0.50, icon: "fa-bowl-food" },
                { name: "Honey", price: 0.30, icon: "fa-honey" }
            ]
        }
    }
};

const products = {
    food: [
        { 
            name: "Burger", 
            price: 8.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Double", price: 3.00 },
                { name: "Triple", price: 5.00 }
            ]
        },
        { 
            name: "Pizza", 
            price: 12.99,
            sizes: [
                { name: "9 inch", price: 0 },
                { name: "12 inch", price: 3.00 },
                { name: "15 inch", price: 5.00 }
            ]
        },
        { 
            name: "Fish & Chips", 
            price: 10.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 2.50 }
            ]
        },
        { 
            name: "Chicken Curry", 
            price: 9.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 2.50 }
            ]
        },
        { 
            name: "Pasta Carbonara", 
            price: 9.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 2.50 }
            ]
        },
        { 
            name: "Caesar Salad", 
            price: 8.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 2.00 }
            ]
        },
        { 
            name: "Club Sandwich", 
            price: 7.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 2.00 }
            ]
        },
        { 
            name: "Steak & Chips", 
            price: 15.99,
            sizes: [
                { name: "8oz", price: 0 },
                { name: "12oz", price: 4.00 }
            ]
        },
        { 
            name: "Lasagna", 
            price: 10.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 3.00 }
            ]
        },
        { 
            name: "Beef Burrito", 
            price: 9.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 2.50 }
            ]
        },
        { 
            name: "Veggie Wrap", 
            price: 7.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 2.00 }
            ]
        },
        { 
            name: "Chicken Wings", 
            price: 8.99,
            sizes: [
                { name: "6 pieces", price: 0 },
                { name: "12 pieces", price: 7.00 },
                { name: "18 pieces", price: 13.00 }
            ]
        },
        { 
            name: "Greek Salad", 
            price: 8.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 2.00 }
            ]
        }
    ],
    drinks: [
        { 
            name: "Cola", 
            price: 2.49,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 0.50 }
            ]
        },
        { 
            name: "Lemonade", 
            price: 2.49,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 0.50 }
            ]
        },
        { 
            name: "Orange Juice", 
            price: 2.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 0.50 }
            ]
        },
        { 
            name: "Mineral Water", 
            price: 1.99,
            sizes: [
                { name: "330ml", price: 0 },
                { name: "500ml", price: 0.50 }
            ]
        },
        { 
            name: "Sparkling Water", 
            price: 1.99,
            sizes: [
                { name: "330ml", price: 0 },
                { name: "500ml", price: 0.50 }
            ]
        },
        { 
            name: "Energy Drink", 
            price: 2.99,
            sizes: [
                { name: "250ml", price: 0 },
                { name: "500ml", price: 1.00 }
            ]
        },
        { 
            name: "Berry Blast", 
            price: 3.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 1.00 }
            ]
        },
        { 
            name: "Milkshake", 
            price: 3.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 1.00 }
            ]
        }
    ],
    hotdrinks: [
        { 
            name: "Coffee", 
            price: 2.99,
            sizes: [
                { name: "Small", price: 0 },
                { name: "Regular", price: 0.50 },
                { name: "Large", price: 1.00 }
            ]
        },
        { 
            name: "Tea", 
            price: 2.49,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 0.50 }
            ]
        },
        { 
            name: "Hot Chocolate", 
            price: 3.49,
            sizes: [
                { name: "Small", price: 0 },
                { name: "Regular", price: 0.50 },
                { name: "Large", price: 1.00 }
            ]
        },
        { 
            name: "Cappuccino", 
            price: 3.49,
            sizes: [
                { name: "Small", price: 0 },
                { name: "Regular", price: 0.50 },
                { name: "Large", price: 1.00 }
            ]
        },
        { 
            name: "Mocha", 
            price: 3.99,
            sizes: [
                { name: "Small", price: 0 },
                { name: "Regular", price: 0.50 },
                { name: "Large", price: 1.00 }
            ]
        },
        { 
            name: "Flat White", 
            price: 3.49,
            sizes: [
                { name: "Small", price: 0 },
                { name: "Regular", price: 0.50 }
            ]
        }
    ],
    snacks: [
        { 
            name: "Nachos", 
            price: 4.99,
            sizes: [
                { name: "Regular", price: 0 },
                { name: "Large", price: 2.00 },
                { name: "Sharing", price: 3.50 }
            ]
        },
        { 
            name: "Popcorn", 
            price: 2.49,
            sizes: [
                { name: "Small", price: 0 },
                { name: "Medium", price: 1.00 },
                { name: "Large", price: 2.00 }
            ]
        },
        { 
            name: "Cookies", 
            price: 1.99,
            sizes: [
                { name: "2 pieces", price: 0 },
                { name: "4 pieces", price: 1.50 },
                { name: "6 pieces", price: 2.50 }
            ]
        },
        { 
            name: "Fruit Bowl", 
            price: 3.49,
            sizes: [
                { name: "Small", price: 0 },
                { name: "Regular", price: 1.50 },
                { name: "Large", price: 2.50 }
            ]
        }
    ]
};

const currentCategory = 'food';
let selectedItems = [];
let total = 0;
let currentQuantity = 1;
let isDiscountApplied = false;
let isBlueLightApplied = false;
let editingOrderItem = null;
let selectedOrderItem = null;

function getCustomizationCategories(category, itemName) {
    const itemCustomizations = customizations[category]?.[itemName];
    if (!itemCustomizations) return [];
    
    return Object.keys(itemCustomizations).map(key => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        options: itemCustomizations[key],
        type: key.includes('Options') ? 'radio' : 'checkbox'
    }));
}

function getIngredients(category, itemName) {
    return ingredients[category]?.[itemName] || [];
}

function displayItems() {
    const columns = document.querySelectorAll('.item-column');
    const items = products[currentCategory];
    
    // Clear existing items
    columns.forEach(column => column.innerHTML = '');
    
    // Distribute items across columns
    items.forEach((item, index) => {
        const column = columns[index % columns.length];
        const button = document.createElement('button');
        button.className = 'item-btn';
        button.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">£${item.price.toFixed(2)}</span>
        `;
        button.onclick = () => showCustomizationModal(item);
        column.appendChild(button);
    });
}

function showCustomizationModal(item) {
    const modal = document.getElementById('orderModal');
    modal.querySelector('h2').textContent = `Customize ${item.name}`;
    
    // Show the Add button and hide the Update button
    modal.querySelector('.add-to-order').style.display = 'block';
    modal.querySelector('.update-order').style.display = 'none';
    
    // Show size options
    const sizeOptions = modal.querySelector('.size-options');
    sizeOptions.innerHTML = item.sizes.map(size => `
        <div class="customization-option" data-size='${JSON.stringify(size)}'>
            <div class="option-name">${size.name}</div>
            <div class="option-price">${size.price > 0 ? `+£${size.price.toFixed(2)}` : 'Included'}</div>
            <div class="checkbox">
                <i class="fas fa-check"></i>
            </div>
        </div>
    `).join('');

    // Add click handlers for size options
    const sizeOptionsElements = sizeOptions.querySelectorAll('.customization-option');
    sizeOptionsElements.forEach(option => {
        option.addEventListener('click', () => {
            sizeOptionsElements.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            updateCustomizationSummary(modal);
        });
    });

    // Show customization options
    showCustomizationOptions(modal, currentCategory, item.name);
    
    // Reset quantity
    currentQuantity = 1;
    document.querySelector('.quantity-display').value = currentQuantity;
    
    modal.classList.add('active');
}

function editOrderItem(button) {
    const orderItem = button.closest('.order-item');
    const itemData = JSON.parse(orderItem.dataset.itemData);
    editingOrderItem = orderItem;
    
    const modal = document.getElementById('orderModal');
    modal.querySelector('h2').textContent = `Edit ${itemData.name}`;
    
    // Set quantity
    document.querySelector('.quantity-display').value = itemData.quantity;
    currentQuantity = itemData.quantity;

    // Select the size if it exists
    if (itemData.size) {
        const sizeOption = modal.querySelector(`.size-options .customization-option[data-size='${JSON.stringify(itemData.size)}']`);
        if (sizeOption) {
            modal.querySelectorAll('.size-options .customization-option').forEach(opt => 
                opt.classList.remove('selected'));
            sizeOption.classList.add('selected');
        }
    }

    // Select the customizations
    modal.querySelectorAll('.customization-options .customization-option').forEach(opt => 
        opt.classList.remove('selected'));
    itemData.customizations.forEach(customization => {
        const customOption = modal.querySelector(`.customization-options .customization-option[data-option='${JSON.stringify(customization)}']`);
        if (customOption) {
            customOption.classList.add('selected');
        }
    });

    // Select the ingredients
    modal.querySelectorAll('.ingredients-list .customization-option').forEach(opt => 
        opt.classList.remove('selected'));
    itemData.ingredients.forEach(ingredient => {
        const ingredientOption = modal.querySelector(`.ingredients-list .customization-option[data-ingredient='${JSON.stringify(ingredient)}']`);
        if (ingredientOption) {
            ingredientOption.classList.add('selected');
        }
    });

    // Show update button instead of add button
    modal.querySelector('.add-to-order').style.display = 'none';
    modal.querySelector('.update-order').style.display = 'block';
    
    updateModalPrice();
    modal.classList.add('active');
}

function updateOrderClicked(button) {
    if (!editingOrderItem) return;
    
    // Start loading animation
    setButtonLoading(button, 'Updating Item...');
    
    const modal = document.getElementById('orderModal');
    const itemName = modal.querySelector('h2').textContent.replace('Edit ', '');
    const selectedSize = modal.querySelector('.size-options .customization-option.selected');
    const selectedCustomizations = Array.from(modal.querySelectorAll('.customization-options .customization-option.selected'));
    const selectedIngredients = Array.from(modal.querySelectorAll('.ingredients-list .customization-option.selected'));
    const quantity = parseInt(document.querySelector('.quantity-display').value) || 1;
    
    // Calculate price and create item
    const categoryKey = currentCategory.replace(/\s+/g, '');
    const item = products[categoryKey].find(i => i.name === itemName);
    if (!item) {
        resetButton(button, 'Update Item');
        return;
    }
    
    let totalPrice = item.price;
    let customizationDetails = [];
    
    if (selectedSize) {
        const sizeData = JSON.parse(selectedSize.dataset.size);
        if (itemName === "Pizza") {
            switch(sizeData.name) {
                case "9 inch": totalPrice = 12.99; break;
                case "12 inch": totalPrice = 15.99; break;
                case "15 inch": totalPrice = 17.99; break;
            }
        } else if (itemName === "Chicken Wings") {
            switch(sizeData.name) {
                case "6 pieces": totalPrice = 8.99; break;
                case "12 pieces": totalPrice = 15.99; break;
                case "18 pieces": totalPrice = 21.99; break;
            }
        } else {
            totalPrice += sizeData.price;
        }
        customizationDetails.push(`${sizeData.name}`);
    }
    
    selectedCustomizations.forEach(option => {
        const optionData = JSON.parse(option.dataset.option);
        if (optionData.price > 0) {
            totalPrice += optionData.price;
            customizationDetails.push(`${optionData.name} (+£${optionData.price.toFixed(2)})`);
        } else {
            customizationDetails.push(optionData.name);
        }
    });
    
    selectedIngredients.forEach(ingredient => {
        const ingredientData = JSON.parse(ingredient.dataset.ingredient);
        if (!ingredientData.included) {
            customizationDetails.push(`No ${ingredientData.name}`);
        }
    });
    
    const subtotal = totalPrice * quantity;
    
    // Update the order item HTML
    editingOrderItem.innerHTML = `
        <div class="item-details">
            <span class="item-name">${itemName}</span>
            ${customizationDetails.length > 0 ? 
                `<span class="item-customizations">${customizationDetails.join(', ')}</span>` : ''}
            <span class="item-price">£${totalPrice.toFixed(2)} x ${quantity}</span>
        </div>
        <span class="item-subtotal">£${subtotal.toFixed(2)}</span>
        <div class="item-actions">
            <button class="edit-btn" onclick="editOrderItem(this)" title="Edit Item">
                <i class="fas fa-pen"></i>
            </button>
            <button class="delete-btn" onclick="removeOrderItem(this)" title="Remove Item">
                <i class="fas fa-xmark"></i>
            </button>
        </div>
    `;
    
    // Update the stored item data
    editingOrderItem.dataset.itemData = JSON.stringify({
        name: itemName,
        size: selectedSize ? JSON.parse(selectedSize.dataset.size) : null,
        customizations: selectedCustomizations.map(c => JSON.parse(c.dataset.option)),
        ingredients: selectedIngredients.map(i => JSON.parse(i.dataset.ingredient)),
        quantity: quantity,
        price: totalPrice,
        subtotal: subtotal
    });
    
    // Update total
    updateTotalDisplay();
    
    // Reset editing state
    editingOrderItem = null;
    currentQuantity = 1;
    
    // Show success notification
    setTimeout(() => {
        showNotification(
            'Success',
            'Item updated successfully',
            'success'
        );
        resetButton(button, 'Update Item');
        closeModal(modal);
    }, 500);
}

function closeModal(modal) {
    // Reset the modal
    modal.querySelector('h2').textContent = 'Customize Your Order';
    modal.querySelector('.add-to-order').style.display = 'block';
    modal.querySelector('.update-order').style.display = 'none';
    currentQuantity = 1;
    document.querySelector('.quantity-display').value = 1;
    editingOrderItem = null;
    
    // Hide the modal
    modal.classList.remove('active');
}

function removeOrderItem(button) {
    const orderItem = button.closest('.order-item');
    const subtotalElement = orderItem.querySelector('.item-subtotal');
    const subtotal = parseFloat(subtotalElement.textContent.replace('£', ''));
    
    // Animate removal
    orderItem.style.animation = 'slideOut 0.3s ease-out';
    
    setTimeout(() => {
        // Remove the item
        orderItem.remove();
        
        // Update total by subtracting the removed item's subtotal
        total -= subtotal;
        
        // Ensure total doesn't go below 0
        total = Math.max(0, total);
        
        // Update the display
        updateTotalDisplay();
        
        // Show notification
        showNotification(
            'Item Removed',
            'Item has been removed from your order',
            'info'
        );
        
        // If no items left, reset any applied discounts
        if (total === 0) {
            isDiscountApplied = false;
            isBlueLightApplied = false;
            document.getElementById('discountBtn')?.classList.remove('active');
            document.getElementById('blueLightBtn')?.classList.remove('active');
        }
    }, 300);
}

function updateTotalDisplay() {
    let displayTotal = 0;
    const orderItems = document.querySelectorAll('.order-item');
    
    orderItems.forEach(item => {
        const itemData = JSON.parse(item.dataset.itemData);
        let itemTotal = itemData.price * itemData.quantity;
        
        // Apply discount if active
        if (isDiscountApplied) {
            itemTotal *= 0.9; // 10% discount
        } else if (isBlueLightApplied) {
            itemTotal *= 0.8; // 20% discount
        }
        
        // Update the item's displayed price and subtotal
        const originalPrice = itemData.price;
        const discountedPrice = isDiscountApplied ? originalPrice * 0.9 : (isBlueLightApplied ? originalPrice * 0.8 : originalPrice);
        
        item.querySelector('.item-price').textContent = `£${originalPrice.toFixed(2)} x ${itemData.quantity}`;
        item.querySelector('.item-subtotal').textContent = `£${itemTotal.toFixed(2)}`;
        
        displayTotal += itemTotal;
    });

    // Update the total display
    total = displayTotal;
    document.querySelector('.order-total').textContent = `Total: £${displayTotal.toFixed(2)}`;
}

function updateDiscountButtonStates() {
    const discountBtn = document.getElementById('discountBtn');
    const blueLightBtn = document.getElementById('blueLightBtn');
    
    if (isDiscountApplied) {
        discountBtn.classList.add('active');
        blueLightBtn.classList.remove('active');
        blueLightBtn.disabled = true;
        blueLightBtn.style.opacity = '0.5';
        blueLightBtn.style.cursor = 'not-allowed';
    } else if (isBlueLightApplied) {
        blueLightBtn.classList.add('active');
        discountBtn.classList.remove('active');
        discountBtn.disabled = true;
        discountBtn.style.opacity = '0.5';
        discountBtn.style.cursor = 'not-allowed';
    } else {
        // No discount active, enable both buttons
        discountBtn.classList.remove('active');
        blueLightBtn.classList.remove('active');
        discountBtn.disabled = false;
        blueLightBtn.disabled = false;
        discountBtn.style.opacity = '1';
        blueLightBtn.style.opacity = '1';
        discountBtn.style.cursor = 'pointer';
        blueLightBtn.style.cursor = 'pointer';
    }
}

function toggleDiscount() {
    if (total === 0) {
        showNotification('Error', 'No items in order to apply discount', 'error');
        return;
    }

    const button = document.getElementById('discountBtn');
    if (button.disabled) return;
    
    setButtonLoading(button, 'Applying...');

    setTimeout(() => {
        if (isDiscountApplied) {
            // Remove discount
            isDiscountApplied = false;
            showNotification('Info', 'Student Discount Removed', 'info');
        } else {
            // Apply student discount
            isDiscountApplied = true;
            isBlueLightApplied = false;
            showNotification('Success', '10% Student Discount Applied', 'success');
        }
        
        updateTotalDisplay();
        updateDiscountButtonStates();
        resetButton(button, 'Student Discount');
    }, 500);
}

function toggleBlueLight() {
    if (total === 0) {
        showNotification('Error', 'No items in order to apply Blue Light discount', 'error');
        return;
    }

    const button = document.getElementById('blueLightBtn');
    if (button.disabled) return;
    
    setButtonLoading(button, 'Applying...');

    setTimeout(() => {
        if (isBlueLightApplied) {
            // Remove discount
            isBlueLightApplied = false;
            showNotification('Info', 'Blue Light Discount Removed', 'info');
        } else {
            // Apply blue light discount
            isBlueLightApplied = true;
            isDiscountApplied = false;
            showNotification('Success', '20% Blue Light Discount Applied', 'success');
        }
        
        updateTotalDisplay();
        updateDiscountButtonStates();
        resetButton(button, 'Blue Light');
    }, 500);
}

// Initialize discount buttons and their states
document.addEventListener('DOMContentLoaded', () => {
    const discountBtn = document.getElementById('discountBtn');
    const blueLightBtn = document.getElementById('blueLightBtn');
    
    if (discountBtn) {
        discountBtn.onclick = toggleDiscount;
    }
    if (blueLightBtn) {
        blueLightBtn.onclick = toggleBlueLight;
    }

    // Initialize button states
    updateDiscountButtonStates();
});

// Update the removeOrderItem function to handle discount button states when cart is empty
function removeOrderItem(button) {
    const orderItem = button.closest('.order-item');
    const subtotalElement = orderItem.querySelector('.item-subtotal');
    const subtotal = parseFloat(subtotalElement.textContent.replace('£', ''));
    
    // Animate removal
    orderItem.style.animation = 'slideOut 0.3s ease-out';
    
    setTimeout(() => {
        // Remove the item
        orderItem.remove();
        
        // Update total by subtracting the removed item's subtotal
        total -= subtotal;
        
        // Ensure total doesn't go below 0
        total = Math.max(0, total);
        
        // Update the display
        updateTotalDisplay();
        
        // Show notification
        showNotification(
            'Item Removed',
            'Item has been removed from your order',
            'info'
        );
        
        // If no items left, reset any applied discounts
        if (total === 0) {
            isDiscountApplied = false;
            isBlueLightApplied = false;
            updateDiscountButtonStates();
        }
    }, 300);
}

function setButtonLoading(button, loadingText) {
    const originalText = button.textContent;
    button.disabled = true;
    button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${loadingText}`;
    return originalText;
}

function resetButton(button, text) {
    button.disabled = false;
    button.textContent = text;
}

function updateModalPrice() {
    const modal = document.getElementById('orderModal');
    const itemName = modal.querySelector('h2').textContent.replace('Customize ', '');
    const selectedSize = modal.querySelector('.size-options .customization-option.selected');
    const selectedCustomizations = modal.querySelectorAll('.customization-options .customization-option.selected');
    const quantity = parseInt(document.querySelector('.quantity-display').value) || 1;

    // Get base item price
    const categoryKey = currentCategory.replace(/\s+/g, '');
    const item = products[categoryKey].find(i => i.name === itemName);
    if (!item) return;

    let totalPrice = item.price;

    // Handle special pricing for different items
    if (selectedSize) {
        const sizeData = JSON.parse(selectedSize.dataset.size);
        totalPrice += sizeData.price;
    }

    // Add customization prices
    selectedCustomizations.forEach(option => {
        const optionData = JSON.parse(option.dataset.option);
        if (optionData.price > 0) {
            totalPrice += optionData.price;
        }
    });

    // Update price display in modal
    const priceDisplay = modal.querySelector('.price-display');
    if (priceDisplay) {
        priceDisplay.textContent = `£${(totalPrice * quantity).toFixed(2)}`;
    }
}

function showCustomizationOptions(modal, category, itemName) {
    const categoryKey = category.replace(/\s+/g, '');
    const item = products[categoryKey].find(i => i.name === itemName);
    if (!item) return;

    // Reset modal content
    const customizationOptions = modal.querySelector('.customization-options');
    const sizeOptionsContainer = modal.querySelector('.size-options');
    customizationOptions.innerHTML = '';
    sizeOptionsContainer.innerHTML = '';
    modal.querySelector('h2').textContent = `Customize ${itemName}`;

    // Add size options with simplified title
    const sizeSection = document.createElement('div');
    sizeSection.className = 'customization-category';
    sizeSection.innerHTML = `
        <h3>Size</h3>
        <div class="options-grid radio-grid">
            ${item.sizes.map(size => `
                <div class="customization-option" data-size='${JSON.stringify(size)}'>
                    <div class="option-name">${size.name}</div>
                    <div class="option-price">${size.price > 0 ? `+£${size.price.toFixed(2)}` : 'Included'}</div>
                    <div class="checkbox">
                        <i class="fas fa-circle"></i>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add size option click handlers
    const sizeOptions = sizeSection.querySelectorAll('.customization-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', () => {
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            updateCustomizationSummary(modal);
        });
    });
    sizeOptionsContainer.appendChild(sizeSection);

    // Modified ingredients section with simplified title and no box
    const ingredientsList = modal.querySelector('.ingredients-list');
    const itemIngredients = getIngredients(categoryKey, itemName);
    
    if (itemIngredients && itemIngredients.length > 0) {
        ingredientsList.innerHTML = `
            <h3>Ingredients</h3>
            <div class="options-grid">
                ${itemIngredients.map(ingredient => `
                    <div class="customization-option ${ingredient.included ? 'selected' : ''}" 
                         data-ingredient='${JSON.stringify(ingredient)}'>
                        <div class="option-name">
                            <i class="fas fa-utensils"></i>
                            ${ingredient.name}
                        </div>
                        <div class="option-price">
                            ${ingredient.included ? 'Included' : ''}
                        </div>
                        <div class="checkbox">
                            <i class="fas fa-check"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Update click handlers for ingredients
        const ingredientOptions = ingredientsList.querySelectorAll('.customization-option');
        ingredientOptions.forEach(option => {
            option.addEventListener('click', () => {
                option.classList.toggle('selected');
                updateCustomizationSummary(modal);
            });
        });
    } else {
        ingredientsList.innerHTML = '<p class="no-ingredients">No customizable ingredients available</p>';
    }

    // Customization categories with simplified titles
    const customizationCategories = getCustomizationCategories(categoryKey, itemName);
    if (customizationCategories.length > 0) {
        customizationCategories.forEach(category => {
            const categorySection = document.createElement('div');
            categorySection.className = 'customization-category';
            categorySection.innerHTML = `
                <h3>${category.name}</h3>
                <div class="options-grid">
                    ${category.options.map(option => `
                        <div class="customization-option" data-option='${JSON.stringify(option)}'>
                            <div class="option-name">
                                <i class="fas ${option.icon}"></i>
                                ${option.name}
                            </div>
                            <div class="option-price">
                                ${option.price > 0 ? `+£${option.price.toFixed(2)}` : 
                                  option.default ? 'Included' : ''}
                            </div>
                            <div class="checkbox">
                                <i class="fas fa-check"></i>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            // Add click handlers for options
            const options = categorySection.querySelectorAll('.customization-option');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    if (category.type === 'radio') {
                        options.forEach(opt => opt.classList.remove('selected'));
                    }
                    option.classList.toggle('selected');
                    updateCustomizationSummary(modal);
                });
            });

            customizationOptions.appendChild(categorySection);
        });
    }

    // Show modal
    modal.classList.add('active');
    modal.querySelector('.modal-content').classList.add('show');

    // Initial summary update
    updateCustomizationSummary(modal);
}

// Also add this helper function for getting selected customizations
function getSelectedCustomizations(modal) {
    const selectedCustomizations = [];
    const customizationOptions = modal.querySelectorAll('.customization-option.selected');
    
    customizationOptions.forEach(option => {
        if (option.dataset.size) return; // Skip size options
        
        const optionData = JSON.parse(option.dataset.option);
        selectedCustomizations.push(optionData);
    });
    
    return selectedCustomizations;
}

// And this function for updating the customization summary
function updateCustomizationSummary(modal) {
    const selectedSize = modal.querySelector('.size-options .customization-option.selected');
    const selectedCustomizations = modal.querySelectorAll('.customization-options .customization-option.selected');
    const summaryList = modal.querySelector('.selected-customizations-list');
    
    let summary = '';
    let totalPrice = 0;

    if (selectedSize) {
        const sizeData = JSON.parse(selectedSize.dataset.size);
        totalPrice += sizeData.price;
        summary += `<div class="summary-item">
            <i class="fas fa-check-circle"></i>
            <span>${sizeData.name}</span>
            <span>${sizeData.price > 0 ? `+£${sizeData.price.toFixed(2)}` : ''}</span>
        </div>`;
    }

    selectedCustomizations.forEach(option => {
        const optionData = JSON.parse(option.dataset.option);
        totalPrice += optionData.price;
        summary += `<div class="summary-item">
            <i class="fas ${optionData.icon}"></i>
            <span>${optionData.name}</span>
            <span>+£${optionData.price.toFixed(2)}</span>
        </div>`;
    });

    summaryList.innerHTML = summary || '<p class="no-selections">No customizations selected</p>';
}

function showNotification(title, message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
    `;

    const container = document.querySelector('.notification-container');
    container.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'login.html';
}

function addToOrderClicked(button) {
    // Start loading animation
    setButtonLoading(button, 'Adding to Order...');

    const modal = document.getElementById('orderModal');
    const itemName = modal.querySelector('h2').textContent.replace('Customize ', '');
    const selectedSize = modal.querySelector('.size-options .customization-option.selected');
    const selectedCustomizations = Array.from(modal.querySelectorAll('.customization-options .customization-option.selected'));
    const selectedIngredients = Array.from(modal.querySelectorAll('.ingredients-list .customization-option.selected'));
    const quantity = parseInt(document.querySelector('.quantity-display').value) || 1;

    // Calculate price and create item
    const categoryKey = currentCategory.replace(/\s+/g, '');
    const item = products[categoryKey].find(i => i.name === itemName);
    if (!item) {
        resetButton(button, 'Add to Order');
        return;
    }

    let totalPrice = item.price;
    let customizationDetails = [];

    if (selectedSize) {
        const sizeData = JSON.parse(selectedSize.dataset.size);
        if (itemName === "Pizza") {
            switch(sizeData.name) {
                case "9 inch": totalPrice = 12.99; break;
                case "12 inch": totalPrice = 15.99; break;
                case "15 inch": totalPrice = 17.99; break;
            }
        } else if (itemName === "Chicken Wings") {
            switch(sizeData.name) {
                case "6 pieces": totalPrice = 8.99; break;
                case "12 pieces": totalPrice = 15.99; break;
                case "18 pieces": totalPrice = 21.99; break;
            }
        } else {
            totalPrice += sizeData.price;
        }
        customizationDetails.push(`${sizeData.name}`);
    }

    selectedCustomizations.forEach(option => {
        const optionData = JSON.parse(option.dataset.option);
        if (optionData.price > 0) {
            totalPrice += optionData.price;
            customizationDetails.push(`${optionData.name} (+£${optionData.price.toFixed(2)})`);
        } else {
            customizationDetails.push(optionData.name);
        }
    });

    selectedIngredients.forEach(ingredient => {
        const ingredientData = JSON.parse(ingredient.dataset.ingredient);
        if (!ingredientData.included) {
            customizationDetails.push(`No ${ingredientData.name}`);
        }
    });

    const subtotal = totalPrice * quantity;

    // Create the order item element
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.innerHTML = `
        <div class="item-details">
            <span class="item-name">${itemName}</span>
            ${customizationDetails.length > 0 ? 
                `<span class="item-customizations">${customizationDetails.join(', ')}</span>` : ''}
            <span class="item-price">£${totalPrice.toFixed(2)} x ${quantity}</span>
        </div>
        <span class="item-subtotal">£${subtotal.toFixed(2)}</span>
        <div class="item-actions">
            <button class="edit-btn" onclick="editOrderItem(this)" title="Edit Item">
                <i class="fas fa-pen"></i>
            </button>
            <button class="delete-btn" onclick="removeOrderItem(this)" title="Remove Item">
                <i class="fas fa-xmark"></i>
            </button>
        </div>
    `;

    // Store the item data for editing
    orderItem.dataset.itemData = JSON.stringify({
        name: itemName,
        size: selectedSize ? JSON.parse(selectedSize.dataset.size) : null,
        customizations: selectedCustomizations.map(c => JSON.parse(c.dataset.option)),
        ingredients: selectedIngredients.map(i => JSON.parse(i.dataset.ingredient)),
        quantity: quantity,
        price: totalPrice,
        subtotal: subtotal
    });

    // Add to order and update total
    document.querySelector('.order-items').appendChild(orderItem);
    selectOrderItem(orderItem); // Select the newly added item
    total += subtotal;
    updateTotalDisplay();

    // Show success notification
    setTimeout(() => {
        showNotification(
            'Success',
            'Item added to order successfully',
            'success'
        );
        resetButton(button, 'Add to Order');
        closeModal(modal);
    }, 500);
}

function printAndPay() {
    if (total === 0) {
        showNotification('Error', 'No items in order to print', 'error');
        return;
    }

    const button = document.querySelector('button[onclick="printAndPay()"]');
    if (button.disabled) return;
    
    setButtonLoading(button, 'Printing Receipt...');

    setTimeout(() => {
        const orderItems = Array.from(document.querySelectorAll('.order-item')).map(item => {
            const subtotalElement = item.querySelector('.item-subtotal');
            const subtotal = parseFloat(subtotalElement.textContent.replace('£', ''));
            
            return {
                name: item.querySelector('.item-name').textContent,
                quantity: parseInt(item.querySelector('.item-price').textContent.match(/x\s*(\d+)/)[1]),
                subtotal: subtotal
            };
        });

        // Calculate the final total from the discounted subtotals
        const finalTotal = orderItems.reduce((sum, item) => sum + item.subtotal, 0);
        sessionStorage.setItem('orderTotal', finalTotal.toFixed(2));
        sessionStorage.setItem('orderItems', JSON.stringify(orderItems));

        showNotification(
            'Success',
            'Receipt printed successfully',
            'success'
        );

        setTimeout(() => {
            setButtonLoading(button, 'Redirecting...');
            
            setTimeout(() => {
                window.location.href = 'payment.html';
            }, 1000);
        }, 1000);
    }, 1500);
}

// Add event listeners for price updates
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('orderModal');
    
    // Update price when size is selected
    modal.querySelector('.size-options')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('customization-option')) {
            updateModalPrice();
        }
    });
    
    // Update price when customizations are selected
    modal.querySelector('.customization-options')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('customization-option')) {
            updateModalPrice();
        }
    });
    
    // Update price when quantity changes
    document.querySelector('.quantity-display')?.addEventListener('change', updateModalPrice);
    document.querySelector('.quantity-display')?.addEventListener('input', updateModalPrice);
});

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Check login status
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    // Get staff info
    const staffRole = sessionStorage.getItem('staffRole');
    const staffName = sessionStorage.getItem('staffName');

    // Update UI with staff name
    document.querySelector('.header-actions').insertAdjacentHTML('afterbegin', `
        <div class="staff-info">
            <i class="fas fa-id-badge"></i>
            <div>
                <span>${staffName === 'Manager' ? staffName : `${staffName} (${staffRole})`}</span>
            </div>
        </div>
    `);

    // Handle permissions
    if (staffRole !== 'admin' && staffRole !== 'manager') {
        // Disable certain features for regular staff
        document.querySelectorAll('.action-btn').forEach(btn => {
            if (btn.textContent.includes('Discount') || 
                btn.textContent.includes('Blue Light')) {
                btn.disabled = true;
                btn.style.opacity = '0.5';
                btn.title = 'Requires manager approval';
            }
        });
    }

    // Category buttons
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(btn => 
                btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.textContent.toLowerCase().replace(/\s+/g, '');
            displayItems();
        });
    });

    // Add click handler for order items
    document.querySelector('.order-items').addEventListener('click', (e) => {
        const orderItem = e.target.closest('.order-item');
        if (orderItem) {
            selectOrderItem(orderItem);
        }
    });

    // Quantity controls
    const quantityInput = document.querySelector('.quantity-display');
    document.querySelectorAll('.control-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent multiple clicks
            if (!selectedOrderItem) return;
            updateSelectedItemQuantity(button.textContent);
        });
    });

    // Manual quantity input
    quantityInput.addEventListener('change', () => {
        if (!selectedOrderItem) return;
        
        let value = parseInt(quantityInput.value) || 1;
        value = Math.max(1, value); // Ensure minimum of 1
        quantityInput.value = value;
        
        const itemData = JSON.parse(selectedOrderItem.dataset.itemData);
        const newSubtotal = itemData.price * value;
        
        // Update the item's display
        selectedOrderItem.querySelector('.item-price').textContent = `£${itemData.price.toFixed(2)} x ${value}`;
        selectedOrderItem.querySelector('.item-subtotal').textContent = `£${newSubtotal.toFixed(2)}`;
        
        // Update the stored item data
        itemData.quantity = value;
        itemData.subtotal = newSubtotal;
        selectedOrderItem.dataset.itemData = JSON.stringify(itemData);
        
        // Update total
        updateTotalDisplay();
    });

    // Modal close button
    document.querySelector('.modal-btn.cancel').addEventListener('click', () => {
        document.getElementById('orderModal').classList.remove('active');
    });

    // Initial display
    displayItems();
});

let isUpdatingQuantity = false;

function selectOrderItem(orderItem) {
    // Remove selection from previously selected item
    document.querySelectorAll('.order-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Select the new item
    orderItem.classList.add('selected');
    selectedOrderItem = orderItem;
    
    // Update quantity display to match selected item
    const itemData = JSON.parse(orderItem.dataset.itemData);
    document.querySelector('.quantity-display').value = itemData.quantity;
}

function updateSelectedItemQuantity(change) {
    if (!selectedOrderItem) return;
    
    const quantityInput = document.querySelector('.quantity-display');
    const itemData = JSON.parse(selectedOrderItem.dataset.itemData);
    let newQuantity = itemData.quantity;
    
    if (change === '+') {
        newQuantity++;
    } else if (change === '-' && newQuantity > 1) {
        newQuantity--;
    }
    
    // Update the quantity input display
    quantityInput.value = newQuantity;
    
    // Calculate new subtotal
    const newSubtotal = itemData.price * newQuantity;
    
    // Update the item's display
    selectedOrderItem.querySelector('.item-price').textContent = `£${itemData.price.toFixed(2)} x ${newQuantity}`;
    selectedOrderItem.querySelector('.item-subtotal').textContent = `£${newSubtotal.toFixed(2)}`;
    
    // Update the stored item data
    itemData.quantity = newQuantity;
    itemData.subtotal = newSubtotal;
    selectedOrderItem.dataset.itemData = JSON.stringify(itemData);
    
    // Update total
    updateTotalDisplay();
    
    // Reset the update flag after a short delay
    setTimeout(() => {
        isUpdatingQuantity = false;
    }, 200); // 200ms delay between updates
}
