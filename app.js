const foods = [
  "Adobo",
  "Albondigas",
  "Allspice",
  "Almond Butter",
  "Almond Milk",
  "Almonds",
  "American Cheese",
  "Beef and Broccoli",
  "Beef and Mushroom Pie",
  "Angel Hair Pasta",
  "Antipasto Salad",
  "Apple Cider Vinegar",
  "Apple",
  "Arborio Rice",
  "Artichoke Dip",
  "Artichoke",
  "Arugula",
  "Asado",
  "Asparagus",
  "Avocado Oil",
  "Avocado Salad",
  "Avocado",
  "Baba Ganoush Pita",
  "Baba Ganoush",
  "Baby Corn",
  "Bacon Cheeseburger",
  "Bagels",
  "Baguette",
  "Baked Beans on Toast",
  "Baked Salmon",
  "Bakewell Tart",
  "Baklava",
  "Balsamic Vinegar",
  "Bamboo Shoots",
  "Banana",
  "Bangers and Mash",
  "Bao Buns",
  "Barbecue Ribs",
  "Barbecue Wings",
  "Barley",
  "Basil",
  "Basmati Rice",
  "Bay Leaf",
  "BBQ Sauce",
  "BBQ Wings",
  "Bean Salad",
  "Bean Sprouts",
  "Beef and Ale Pie",
  "Beef and Broccoli",
  "Beef and Horseradish Sandwich",
  "Beef Gravy",
  "Beef Stew",
  "Beef Stroganoff",
  "Beef Wellington",
  "Beet Salad",
  "Beetroot",
  "Bell Pepper",
  "Benedict",
  "Bhaji",
  "Biryani",
  "Biscuit",
  "Biscuits and Gravy",
  "Black Beans",
  "Black Bun",
  "Black Pudding",
  "Black Rice",
  "Blackcurrant Jam",
  "BLT",
  "Blue Cheese Dressing",
  "Blue Cheese Wings",
  "Blue Cheese",
  "Blueberry",
  "Boiled Eggs",
  "Bok Choy",
  "Boston Lettuce",
  "Bourguignon",
  "Branston Pickle",
  "Brazil Nuts",
  "Bread and Butter Pudding",
  "Bread Sauce",
  "Brie Cheese",
  "Brisket",
  "Broccoli Salad",
  "Broccoli",
  "Brown Rice",
  "Bruschetta",
  "Brussels Sprouts",
  "Bubble and Squeak",
  "Buckwheat",
  "Buffalo Dip",
  "Buffalo Wings",
  "Bulgogi",
  "Bulgur",
  "Burrito Bowl",
  "Burrito",
  "Butter Chicken",
  "Butter",
  "Butternut Squash",
  "Button Mushrooms",
  "Cabbage",
  "Caerphilly Cheese",
  "Caesar Dressing",
  "Caesar Salad",
  "Cajun Jambalaya",
  "Calçots",
  "California Roll",
  "Calzone",
  "Camembert Cheese",
  "Cannellini Beans",
  "Cannelloni",
  "Cannoli",
  "Canola Oil",
  "Caprese Salad",
  "Carnitas",
  "Carrot",
  "Cashew Chicken",
  "Cashews",
  "Casserole",
  "Cauliflower Salad",
  "Cauliflower",
  "Causa",
  "Celery",
  "Cereal",
  "Ceviche",
  "Chana Masala",
  "Chanterelle Mushrooms",
  "Cheddar Cheese",
  "Cheese Dip",
  "Cheese Fries",
  "Cheese",
  "Cheeseburger",
  "Chef Salad",
  "Chelsea Bun",
  "Cherry",
  "Cheshire Cheese",
  "Chestnuts",
  "Chia Seeds",
  "Chicharrón",
  "Chicken Adobo",
  "Chicken Alfredo",
  "Chicken and Dumplings",
  "Chicken and Mushroom Pie",
  "Chicken and Rice",
  "Chicken and Waffles",
  "Chicken Biryani",
  "Chicken Breasts",
  "Chicken Burger",
  "Chicken Burrito",
  "Chicken Charlemagne",
  "Chicken Chasseur",
  "Chicken Chili",
  "Congee",
  "Cordon Bleu",
  "Chicken Enchilada",
  "Chicken Enchiladas",
  "Chicken Fajitas",
  "Chicken Fingers",
  "Chicken Gumbo",
  "Chicken Gyro",
  "Chicken Katsu",
  "Chicken Kebabs",
  "Chicken Kiev",
  "Chicken Korma",
  "Mole",
  "Chicken Noodle Soup",
  "Chicken Nuggets",
  "Chicken Parmigiana",
  "Piri Piri Chicken",
  "Chicken Pot Pie",
  "Chicken Quesadilla",
  "Chicken Rice Soup",
  "Chicken Salad",
  "Chicken Saltimbocca",
  "Chicken Sandwich",
  "Chicken Satay",
  "Chicken Scallopini",
  "Chicken Shawarma",
  "Chicken Strips",
  "Chicken Tacos",
  "Chicken Tenders",
  "Chicken Teriyaki",
  "Chicken Thighs",
  "Chicken Tikka Masala",
  "Chicken Tortilla Soup",
  "Vindaloo",
  "Chicken Wings",
  "Chicken Wrap",
  "Chickpea Salad",
  "Chickpeas",
  "Chili Cheese Fries",
  "Chili Con Carne",
  "Chili Dogs",
  "Chili Pepper",
  "Chilli",
  "Chimichangas",
  "Chimichurri",
  "Chinese Chicken Salad",
  "Chipotle Wings",
  "Chives",
  "Chocolate Cake",
  "Choripán",
  "Chow Mein",
  "Churros",
  "Ciabatta",
  "Cider",
  "Cilantro",
  "Cinnamon Roll",
  "Cinnamon",
  "Clam Chowder",
  "Clam Dip",
  "Cloves",
  "Club Sandwich",
  "Cobb Salad",
  "Cockles",
  "Coconut Milk",
  "Colby Cheese",
  "Coleslaw",
  "Collard Greens",
  "Corn Oil",
  "Corn",
  "Cornbread",
  "Corned Hash",
  "Cornish Cream Tea",
  "Cornish Pasty",
  "Cottage Cheese",
  "Cottage Pie",
  "Couscous Salad",
  "Couscous",
  "Crab Salad",
  "Crackers",
  "Cream Cheese",
  "Cremini Mushrooms",
  "Crepes",
  "Croissant",
  "Croque Monsieur",
  "Croquetas de Jamón",
  "Croquetas",
  "Cuban Sandwiches",
  "Cucumber Salad",
  "Cucumber Sandwiches",
  "Cucumber",
  "Cumberland Sausage",
  "Curry",
  "Custard Tart",
  "Dal Makhani",
  "Danish Pastry",
  "Deviled Eggs",
  "Digestive Biscuits",
  "Dill",
  "Dim Sum",
  "Donburi",
  "Donuts",
  "Dosa",
  "Dover Sole",
  "Dulce de Leche",
  "Dumplings",
  "Earl Grey Tea",
  "Eccles Cake",
  "Edamame",
  "Egg Fried Rice",
  "Egg Noodles",
  "Egg Rolls",
  "Egg Salad",
  "Eggplant Parmesan",
  "Eggplant",
  "Empanadas",
  "Enchiladas",
  "Endive",
  "English Ale",
  "English Breakfast Tea",
  "English Muffin",
  "English Mustard",
  "Enoki Mushrooms",
  "Eton Mess",
  "Fajitas",
  "Falafel Wrap",
  "Falafel",
  "Fattoush",
  "Fennel",
  "Feta Cheese",
  "Fettuccine Alfredo",
  "Filipino Spaghetti",
  "Fish and Chips",
  "Fish Sauce",
  "Fish Tacos",
  "Flan",
  "Flatbread",
  "Flautas",
  "Flaxseed Oil",
  "Focaccia",
  "Fondue",
  "French Dip",
  "French Dressing",
  "French Fries",
  "French Onion Soup",
  "French Toast",
  "Fried Chicken",
  "Fried Eggs",
  "Fried Pickles",
  "Fried Rice",
  "Frittata",
  "Fruit Salad",
  "Fruitcake",
  "Full English Breakfast",
  "Fusilli",
  "Gambas al Ajillo",
  "Garlic Butter Shrimp",
  "Garlic Parmesan Wings",
  "Garlic",
  "Gazpacho",
  "General Tso's Chicken",
  "Gin and Tonic",
  "Ginger",
  "Glamorgan Sausages",
  "Gluten-Free Pasta",
  "Gnocchi",
  "Goat Cheese",
  "Gouda Cheese",
  "Goulash",
  "Granola",
  "Grapes",
  "Grapeseed Oil",
  "Great Northern Beans",
  "Greek Potato Salad",
  "Greek Salad Dressing",
  "Greek Salad",
  "Green Beans",
  "Green Curry",
  "Green Leaf Lettuce",
  "Green Peas",
  "Grilled Portobello Mushrooms",
  "Grilled Steak",
  "Grits",
  "Gruyère Cheese",
  "Guacamole",
  "Gumbo",
  "Gyoza",
  "Gyozas",
  "Gyros",
  "Gyudon",
  "Haggis, Neeps, and Tatties",
  "Haggis",
  "Ham Salad",
  "Hamburger",
  "Havarti Cheese",
  "Hawaiian Salad",
  "Hazelnuts",
  "Hoisin Sauce",
  "Honey Mustard Wings",
  "Hot and Sour Soup",
  "Hot Dog",
  "Hot Sauce",
  "Hotpot",
  "Hummus Wrap",
  "Hummus",
  "Ice Cream",
  "Iceberg Lettuce",
  "Idli",
  "Italian Dressing",
  "Jalapeno Poppers",
  "Jammie Dodgers",
  "Jamón Ibérico",
  "Jasmine Rice",
  "Jellied Eels",
  "Kale",
  "Katsu",
  "Kebab Wrap",
  "Kebabs",
  "Ketchup",
  "Kidney Beans",
  "Kippers",
  "Kiwi",
  "Kofta",
  "Korma",
  "Kung Pao Chicken",
  "Lamb Shank",
  "Lancashire Cheese and Onion Pie",
  "Lancashire Hotpot",
  "Larb",
  "Lasagna",
  "Lavash",
  "Laverbread",
  "Leche Flan",
  "Leek",
  "Lemon Butter Sauce",
  "Lemon Drizzle Cake",
  "Lemon Meringue Pie",
  "Lemon Pepper Wings",
  "Lemon",
  "Lentil Soup",
  "Lentils",
  "Lettuce",
  "Lima Beans",
  "Lime",
  "Linguine with Clams",
  "Linguine",
  "Lo Mein",
  "Loaded Fries",
  "Lobster Bisque",
  "Lobster Roll",
  "Macadamia Nuts",
  "Macaroni Salad",
  "Macaroni",
  "Maitake Mushrooms",
  "Maki Sushi",
  "Manchego Cheese",
  "Mango Salad",
  "Mango",
  "Margarine",
  "Margherita Pizza",
  "Marmalade",
  "Massaman Curry",
  "Massaman",
  "Matambre",
  "Matzo Ball Soup",
  "Mayonnaise",
  "Meatball Sub",
  "Meatloaf",
  "Melton Mowbray Pork Pie",
  "Microgreens",
  "Milk",
  "Millet",
  "Mimosa Salad",
  "Mince Pie",
  "Minestrone Soup",
  "Mint",
  "Miso Soup",
  "Miso",
  "Mole",
  "Mongolian Beef",
  "Mongolian",
  "Monte Cristo",
  "Monterey Jack Cheese",
  "Morel Mushrooms",
  "Moussaka",
  "Mozzarella Cheese",
  "Mozzarella Sticks",
  "Muenster Cheese",
  "Muffin",
  "Multigrain Bread",
  "Mushroom Risotto",
  "Mustard Greens",
  "Mustard",
  "Naan Bread",
  "Nachos",
  "Nicoise Salad",
  "Nutmeg",
  "Oat Milk",
  "Oatmeal",
  "Oats",
  "Okonomiyaki",
  "Okra",
  "Olive Oil",
  "Olive Tapenade",
  "Omelette",
  "Onion Rings",
  "Onion",
  "Orange Chicken",
  "Orange",
  "Oregano",
  "Orzo",
  "Oxford Marmalade",
  "Oyster Mushrooms",
  "Oyster Sauce",
  "Pad See Ew",
  "Pad Thai",
  "Paella",
  "Pakoras",
  "Palak Paneer",
  "Panang Curry",
  "Panang",
  "Pancakes",
  "Paneer Tikka",
  "Panini",
  "Papas Bravas",
  "Paprika",
  "Parmesan Cheese",
  "Parrillada",
  "Parsley",
  "Pasta Carbonara",
  "Pasta Primavera",
  "Pasta Salad",
  "Pasta",
  "Pastrami Sandwich",
  "Patatas Bravas",
  "Pea Salad",
  "Peach",
  "Peanut Butter",
  "Peanut Oil",
  "Peanuts",
  "Pear",
  "Peas",
  "Pecans",
  "Peking Duck",
  "Peking",
  "Penne alla Vodka",
  "Penne",
  "Pepper Jack Cheese",
  "Pepperoni Pizza",
  "Pesto",
  "Philly Cheesesteak",
  "Pho",
  "Pico de Gallo",
  "Pierogi",
  "Pimm's",
  "Pine Nuts",
  "Pineapple",
  "Pinto Beans",
  "Pistachios",
  "Pita Bread",
  "Pita Pocket",
  "Pita",
  "Plaice and Chips",
  "Plantain",
  "Ploughman's Lunch",
  "Plum",
  "Po' Boy",
  "Poached Eggs",
  "Popcorn Chicken",
  "Poppy Seeds",
  "Porcini Mushrooms",
  "Pork Belly",
  "Pork Dumplings",
  "Pork Pie",
  "Pork Scratchings",
  "Porridge",
  "Portobello Mushrooms",
  "Pot Roast",
  "Potato Salad",
  "Loaded Potato Skins",
  "Potato",
  "Potted Shrimp",
  "Poutine",
  "Pretzel",
  "Prime Rib",
  "Provolone Cheese",
  "Pulled Pork Sandwich",
  "Pumpernickel Bread",
  "Pumpkin Seeds",
  "Pumpkin",
  "Quesadilla Supreme",
  "Quesadillas",
  "Queso",
  "Quiche",
  "Quinoa",
  "Radicchio",
  "Radish",
  "Ragù",
  "Instant Ramen",
  "24 Hour Ramen",
  "Ranch Dip",
  "Ranch Dressing",
  "Ranch Wings",
  "Raspberry",
  "Ratatouille",
  "Ravioli",
  "Red Beans and Rice",
  "Red Curry",
  "Red Leicester Cheese",
  "Red Onion",
  "Red Velvet Cake",
  "Red Wine Vinegar",
  "Beef Rendang",
  "Reuben Sandwich",
  "Reuben",
  "Rice Cakes",
  "Rice Milk",
  "Rice Noodles",
  "Rice Pudding",
  "Rice Vinegar",
  "Rice",
  "Ricotta Cheese",
  "Rigatoni",
  "Ripe Plantain",
  "Roast Beef",
  "Roast Chicken",
  "Roast Lamb",
  "Roast Pork",
  "Roast Potatoes",
  "Romaine Lettuce",
  "Rosemary",
  "Roti",
  "Rotini",
  "Rye Bread",
  "Safflower Oil",
  "Sage",
  "Sake",
  "Salsa Roja",
  "Salsa Verde",
  "Salsa",
  "Samosas",
  "Sangria",
  "Sashimi",
  "Satay",
  "Sausages",
  "Scallion",
  "Scones with Clotted Cream and Jam",
  "Scotch Eggs",
  "Scotch Pancakes",
  "Scotch Pie",
  "Scotch Whisky",
  "Scrambled Eggs",
  "Seafood Salad",
  "Seitan",
  "Serrano Ham",
  "Sesame Oil",
  "Sesame Seeds",
  "Shallot",
  "Shawarma",
  "Shepherd's Pie",
  "Shiitake Mushrooms",
  "Shortbread",
  "Shrimp Po' Boy",
  "Sliders",
  "Sloppy Joe",
  "Soba Noodles",
  "Sofrito",
  "Sourdough Bread",
  "Souvlaki",
  "Soy Sauce",
  "Soybeans",
  "Spaghetti Bolognese",
  "Spaghetti Carbonara",
  "Spinach",
  "Split Pea Soup",
  "Spotted Dick",
  "Spring Rolls",
  "Sriracha Wings",
  "Steak and Kidney Pie",
  "Steak Frites",
  "Steak Salad",
  "Sticky Toffee Pudding",
  "Stilton Cheese",
  "Stir-Fry",
  "Strawberry",
  "String Cheese",
  "Stroganoff",
  "Stuffed Mushrooms",
  "Sunflower Oil",
  "Sunflower Salad",
  "Sunflower Seeds",
  "Sushi Rice",
  "Sushi",
  "Sweet and Sour Pork",
  "Sweet and Sour Wings",
  "Sweet Corn",
  "Sweet Potato",
  "Swiss Chard",
  "Swiss Cheese",
  "Szechuan Shrimp",
  "Tabbouleh",
  "Tacos",
  "Tahini",
  "Tamales",
  "Tandoori Chicken",
  "Tandoori Naan",
  "Taquitos",
  "Taro",
  "Tarta de Chocolate",
  "Tarta de Frutas",
  "Tarta de Limón",
  "Tarta de Manzana",
  "Tarta de Queso",
  "Tarta de Santiago",
  "Tater Tots",
  "Tempeh",
  "Tempura",
  "Teppanyaki",
  "Tequeños",
  "Teriyaki Chicken",
  "Teriyaki Salmon",
  "Teriyaki Sauce",
  "Teriyaki Wings",
  "Thai Beef Salad",
  "Thai Chili Wings",
  "Thousand Island Dressing",
  "Thyme",
  "Tikka Masala",
  "Tiramisu",
  "Toad in the Hole",
  "Toast",
  "Toffee Apple",
  "Tofu Stir-Fry",
  "Tofu",
  "Tom Kha Gai",
  "Tom Yum Soup",
  "Tom Yum",
  "Tomato Basil Salad",
  "Tomato Salsa",
  "Tomato Soup",
  "Tomato",
  "Tortellini",
  "Tortilla Soup",
  "Tortilla",
  "Tostadas",
  "Trifle",
  "Truffle Mushrooms",
  "Tuna Melt",
  "Tuna Salad",
  "Turmeric",
  "Turnip",
  "Tzatziki",
  "Udon Noodles",
  "Veal Marsala",
  "Vegetable Lasagna",
  "Veggie Burger",
  "Vermicelli",
  "Victoria Sponge Cake",
  "Vinaigrette Dressing",
  "Vindaloo",
  "Waffles",
  "Walnuts",
  "Watercress",
  "Watermelon Salad",
  "Watermelon",
  "Wellington",
  "Welsh Lamb",
  "Welsh Rarebit",
  "White Bread",
  "White Rice",
  "White Wine Vinegar",
  "Whole Wheat Bread",
  "Whole Wheat Pasta",
  "Wild Rice",
  "Wonton Soup",
  "Worcestershire Sauce",
  "Yakiniku",
  "Yakitori",
  "Yellow Curry",
  "Yogurt",
  "Yorkshire Pudding",
  "Yorkshire Tea",
  "Yuca",
  "Yucca Fries",
  "Zucchini Fritters",
  "Zucchini Noodles",
  "Zucchini",
  "Aberdeen Angus Beef",
];

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
const apiKey = "-LWIU-yUeCb4jaPIoDopccTQmKw62z0jcWX5Au61CAo";

const title = document.getElementById("title-div");
const imageDiv = document.getElementById("image-div");
const arrayLength = foods.length;
const buttons = document.querySelectorAll("button");
const artistDescription = document.getElementById("artist-description");

for (let i = 0; i < buttons.length; i++) {
  console.log("boogie");
  buttons[i].addEventListener("click", getNextFood);
}

// *******************************************************

async function getData(newFood, apiKey) {
  console.log(apiKey);

  // Get data from Unsplash
  const results = await fetch(
    `https://api.unsplash.com/search/photos/?query=${newFood}&page=1&per_page=1&client_id=${apiKey}`,
    { mode: "cors" }
  );
  const myData = await results.json();
  console.log(myData);

  // Get picture URL
  const pictureURL = myData.results[0].urls.regular;

  // Get artist attribution details
  const artistName = myData.results[0].user.name;
  const artistURL = myData.results[0].user.links.html;

  // Create artist credits in "p" element
  createArtistCredits(artistName, artistURL);

  return pictureURL;
}

// Generate a random number
function randomFunc(max) {
  return Math.floor(Math.random() * max);
}

// Remove and return random food from array using random number, makes sure that foods can't be picked twice
function randomFood() {
  const randomNumber = randomFunc(arrayLength);
  const randomFood = foods.splice(randomNumber, 1);
  return randomFood;
}

function removeFoodFromArray(index) {}

// Create image element and append it to image div
function createImg() {
  imageDiv.innerHTML = "";
  const image = document.createElement("img");
  imageDiv.appendChild(image);

  return image;
}

// Create artist credits using the URLs provided
function createArtistCredits(artistName, artistURL) {
  const myAppURL = "?utm_source=humble_or_noble&utm_medium=referral ";
  const myString = `Photo by <a href="${artistURL}${myAppURL}">${artistName}</a> on <a href="https://unsplash.com/${myAppURL}">Unsplash</a>`;
  artistDescription.innerHTML = myString;
}

// Get next food when buttons are clicked ** Main function
async function getNextFood() {
  //Get new food name
  const newFood = randomFood();

  try {
    // h1 textcontent = food name
    title.textContent = newFood;

    // Get picture URL from Unsplash
    const pictureURL = await getData(newFood, apiKey);

    // Create image and set it's URL as the unsplash URL
    const image = createImg();
    image.src = pictureURL;
  } catch {
    console.log(`There has been an error with the food ${newFood}`);
    getNextFood();
  }
}

getNextFood();
