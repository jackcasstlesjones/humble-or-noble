const foods = [
  "Aberdeen Angus Beef",
  "Adobo",
  "Ají de Gallina",
  "Ajiaco",
  "Albondigas",
  "Alfalfa Sprouts",
  "Allspice",
  "Almond Butter",
  "Almond Milk",
  "Almonds",
  "Aloo Gobi",
  "Amaranth",
  "Ambrosia Salad",
  "American Cheese",
  "and Broccoli",
  "and Mushroom Pie",
  "Angel Hair Pasta",
  "Anticuchos",
  "Antipasto Salad",
  "Apple Cider Vinegar",
  "Arborio Rice",
  "Arbroath Smokie",
  "Arepa",
  "Arepas",
  "Arroz a la Valenciana",
  "Arroz Caldo",
  "Arroz con Gandules",
  "Arroz Negro",
  "Artichoke Dip",
  "Artichoke",
  "Arugula",
  "Asado",
  "Asparagus",
  "Avgolemono Soup",
  "Avocado Oil",
  "Avocado Salad",
  "Avocado",
  "Baba Ganoush Pita",
  "Baba Ganoush",
  "Baby Corn",
  "Bacalao a la Vizcaína",
  "Bacon Cheeseburger",
  "Bagel",
  "Bagels",
  "Baguette",
  "Baingan Bharta",
  "Baked Beans on Toast",
  "Baked Salmon",
  "Baked Ziti",
  "Bakewell Tart",
  "Baklava",
  "Balsamic Vinegar",
  "Balut",
  "Bamboo Shoots",
  "Banana",
  "Bandeja Paisa",
  "Bangers and Mash",
  "Bangus",
  "Bao",
  "Bara Brith",
  "Barbecue Wings",
  "Barley",
  "Basil",
  "Basmati Rice",
  "Bay Leaf",
  "BBQ Sauce",
  "BBQ Wings",
  "Bean Dip",
  "Bean Salad",
  "Bean Sprouts",
  "Beef and Ale Pie",
  "Beef and Broccoli",
  "Beef and Horseradish Sandwich",
  "Beef Gravy",
  "Beef Stew",
  "Beef Wellington",
  "Beet Salad",
  "Beetroot",
  "Bell Pepper",
  "Benedict",
  "Bhaji",
  "Bibb Lettuce",
  "Bibingka",
  "Biryani",
  "Biscuit",
  "Bisi Bele Bath",
  "Bistec Encebollado",
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
  "Boquerones",
  "Boston Lettuce",
  "Bougatsa",
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
  "Buñuelos",
  "Burrito Bowl",
  "Burrito",
  "Butter Chicken",
  "Butter",
  "Butternut Squash",
  "Button Mushrooms",
  "Cabbage",
  "Cachapa",
  "Caerphilly Cheese",
  "Caesar Dressing",
  "Caesar Salad",
  "Calçots",
  "Camembert Cheese",
  "Cannellini Beans",
  "Cannelloni",
  "Canola Oil",
  "Caprese Salad",
  "Carnitas",
  "Carrot",
  "Cashew Butter",
  "Cashew Chicken",
  "Cashew Milk",
  "Cashews",
  "Casserole",
  "Cauliflower Salad",
  "Cauliflower",
  "Causa",
  "Celery",
  "Cereal",
  "Ceviche de Camarones",
  "Ceviche",
  "Champorado",
  "Chana Masala",
  "Chanterelle Mushrooms",
  "Cheddar Cheese",
  "Cheese Dip",
  "Cheese Fries",
  "Cheese",
  "Chef Salad",
  "Chelsea Bun",
  "Cherry",
  "Cheshire Cheese",
  "Chestnuts",
  "Chia Seeds",
  "Chicharrón",
  "Chicken a la King",
  "Chicken Adobo",
  "Chicken Afritada",
  "Chicken Alfredo",
  "Chicken and Dumplings",
  "Chicken and Mushroom Pie",
  "Chicken and Rice",
  "Chicken and Waffles",
  "Chicken Biryani",
  "Chicken Bistilla",
  "Chicken Breasts",
  "Chicken Burger",
  "Chicken Burrito",
  "Chicken Cacciatore",
  "Chicken Caldereta",
  "Chicken Charlemagne",
  "Chicken Chasseur",
  "Chicken Chili",
  "Chicken Congee",
  "Chicken Cordon Bleu",
  "Chicken Curry",
  "Chicken Divan",
  "Chicken Drumettes",
  "Chicken Drumsticks",
  "Chicken Enchiladas",
  "Chicken Fajitas",
  "Chicken Fesenjan",
  "Chicken Fingers",
  "Chicken Florentine",
  "Chicken Forestiere",
  "Chicken Francaise",
  "Chicken Fricassee",
  "Chicken Goulash",
  "Chicken Gumbo",
  "Chicken Gyro",
  "Chicken Katsu",
  "Chicken Kebabs",
  "Chicken Kiev",
  "Chicken Korma",
  "Chicken Marbella",
  "Chicken Marengo",
  "Chicken Marsala",
  "Chicken Mechado",
  "Chicken Mole",
  "Chicken Mulligatawny",
  "Chicken Noodle Soup",
  "Chicken Normandy",
  "Chicken Nuggets",
  "Chicken Papalaise",
  "Chicken Paprikash",
  "Chicken Parmesan",
  "Chicken Pastilla",
  "Chicken Picatta",
  "Chicken Piccata",
  "Chicken Piri Piri",
  "Chicken Pizzaiola",
  "Chicken Popcorn",
  "Chicken Pot Pie",
  "Chicken Quesadilla",
  "Chicken Salad",
  "Chicken Saltimbocca",
  "Chicken Sandwich",
  "Chicken Satay",
  "Chicken Sausage",
  "Chicken Scallopini",
  "Chicken Shawarma",
  "Chicken Sinigang",
  "Chicken Soubise",
  "Chicken Souvlaki",
  "Chicken Strips",
  "Chicken Tacos",
  "Chicken Tagine",
  "Chicken Tamales",
  "Chicken Tandoori",
  "Chicken Tenders",
  "Chicken Teriyaki",
  "Chicken Tetrazzini",
  "Chicken Thighs",
  "Chicken Tikka Masala",
  "Chicken Tinola",
  "Chicken Tortilla Soup",
  "Chicken Veronique",
  "Chicken Vindaloo",
  "Chicken Wings",
  "Chicken Wrap",
  "Chickpea Salad",
  "Chickpeas",
  "Chiles Rellenos",
  "Chili Cheese Fries",
  "Chili Dog",
  "Chili Pepper",
  "Chili",
  "Chilli",
  "Chimichanga Salad",
  "Chimichanga",
  "Chimichangas",
  "Chimichurri",
  "Chinese Chicken Salad",
  "Chipotle Wings",
  "Chives",
  "Choripán",
  "Chow Mein",
  "Churros con Chocolate",
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
  "Cochinita Pibil",
  "Cocido Madrileño",
  "Cockles",
  "Coconut Milk",
  "Coconut Oil",
  "Colby Cheese",
  "Coleslaw",
  "Collard Greens",
  "Coquinas",
  "Coquito",
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
  "Crab Dip",
  "Crab Rangoon",
  "Crab Salad",
  "Crackers",
  "Cream Cheese",
  "Crema Catalana",
  "Crema de Marisco",
  "Cremini Mushrooms",
  "Crepes",
  "Crispy Pata",
  "Croissant",
  "Croquetas de Jamón",
  "Croquetas",
  "Cuban Sandwich",
  "Cucumber Salad",
  "Cucumber Sandwiches",
  "Cucumber",
  "Cumberland Sausage",
  "Curry",
  "Custard Tart",
  "Dal Makhani",
  "Danish Pastry",
  "Danish",
  "Deviled Eggs",
  "Digestive Biscuits",
  "Dill",
  "Dim Sum",
  "Dolmades",
  "Dolmas",
  "Donburi",
  "Donuts",
  "Dosa",
  "Dover Sole",
  "Dulce de Leche",
  "Dumplings",
  "Earl Grey Tea",
  "Eccles Cake",
  "Edamame",
  "Egg Drop Soup",
  "Egg Noodles",
  "Egg Rolls",
  "Egg Salad",
  "Eggplant Parmesan",
  "Eggplant Salad",
  "Eggplant",
  "Ekmek Kataifi",
  "Empanada",
  "Empanadas Argentinas",
  "Empanadas",
  "Enchilada Salad",
  "Enchiladas",
  "Endive",
  "English Ale",
  "English Breakfast Tea",
  "English Muffin",
  "English Mustard",
  "Enoki Mushrooms",
  "Escabeche",
  "Escarole",
  "Escudella i Carn d'Olla",
  "Eton Mess",
  "Fabada Asturiana",
  "Fajita Salad",
  "Fajitas",
  "Falafel Pita",
  "Falafel Wrap",
  "Falafel",
  "Farro",
  "Fattoush Salad",
  "Fattoush",
  "Fennel",
  "Feta Cheese",
  "Fettuccine Alfredo",
  "Fettuccine",
  "Fideua",
  "Fideuà",
  "Filipino Spaghetti",
  "Finikia",
  "Fish and Chips",
  "Fish Sauce",
  "Flan",
  "Flatbread",
  "Flautas",
  "Flaxseed Oil",
  "Flaxseeds",
  "Focaccia",
  "Fondue",
  "French Dip",
  "French Dressing",
  "French Onion Soup",
  "French Toast",
  "Fried Eggplant",
  "Fried Eggs",
  "Fried Pickles",
  "Fried Rice",
  "Frittata",
  "Fruit Salad",
  "Fruitcake",
  "Full English Breakfast",
  "Fusilli",
  "Galaktoboureko",
  "Gambas al Ajillo",
  "Garlic Butter Shrimp",
  "Garlic Parmesan Wings",
  "Garlic",
  "Gazpacho Andaluz",
  "Gazpacho",
  "General Tso's Chicken",
  "Gin and Tonic",
  "Ginataang",
  "Ginger",
  "Glamorgan Sausages",
  "Gluten-Free Pasta",
  "Gnocchi",
  "Goat Cheese",
  "Gordita",
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
  "Gulab Jamun",
  "Gyoza",
  "Gyozas",
  "Gyro Wrap",
  "Gyro",
  "Gyros",
  "Haggis, Neeps, and Tatties",
  "Haggis",
  "Hallaca",
  "Halo-Halo",
  "Ham Salad",
  "Havarti Cheese",
  "Hawaiian Salad",
  "Hazelnuts",
  "Hoisin Sauce",
  "Honey Mustard Wings",
  "Horchata de Chufa",
  "Horchata",
  "Hot and Sour Soup",
  "Hot Pot",
  "Hot Sauce",
  "Hotpot",
  "Huevos a la Flamenca",
  "Hummus Wrap",
  "Hummus",
  "Iceberg Lettuce",
  "Idli",
  "Italian Dressing",
  "Jalapeno Poppers",
  "Jalebi",
  "Jammie Dodgers",
  "Jamón Ibérico",
  "Jasmine Rice",
  "Jellied Eels",
  "Jicama",
  "Kakanin",
  "Kale",
  "Kare-Kare",
  "Katsu",
  "Kebab Wrap",
  "Kebabs",
  "Ketchup",
  "Kheer",
  "Kidney Beans",
  "Kippers",
  "Kiwi",
  "Kofta",
  "Korma",
  "Koulourakia",
  "Kourabiedes",
  "Kung Pao Chicken",
  "Lamb Shank",
  "Lancashire Cheese and Onion Pie",
  "Lancashire Hotpot",
  "Larb",
  "Lasagna",
  "Lavash",
  "Laverbread",
  "Leche Flan",
  "Lechón Asado",
  "Lechon",
  "Leek",
  "Lemon Drizzle Cake",
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
  "Lomo a lo Pobre",
  "Lomo Saltado",
  "Longganisa",
  "Loukoumades",
  "Lumpia",
  "Macadamia Nuts",
  "Macaroni Salad",
  "Macaroni",
  "Maitake Mushrooms",
  "Maja Blanca",
  "Manchego Cheese",
  "Mango Salad",
  "Mango",
  "Manicotti",
  "Margarine",
  "Marmalade",
  "Massaman Curry",
  "Massaman",
  "Matambre",
  "Matzo Ball Soup",
  "Matzo",
  "Mayonnaise",
  "Meatball Sub",
  "Meatloaf",
  "Media Noche",
  "Melomakarona",
  "Melton Mowbray Pork Pie",
  "Menudo",
  "Microgreens",
  "Migas",
  "Milanesa",
  "Milhojas",
  "Milk",
  "Millet",
  "Mimosa Salad",
  "Mince Pie",
  "Minestrone Soup",
  "Mint",
  "Miso Soup",
  "Miso",
  "Mofongo",
  "Mole",
  "Mongolian Beef",
  "Mongolian",
  "Monte Cristo",
  "Monterey Jack Cheese",
  "Morcilla",
  "Morel Mushrooms",
  "Moussaka",
  "Mozzarella Cheese",
  "Mozzarella Sticks",
  "Muenster Cheese",
  "Muffin",
  "Muffuletta",
  "Multigrain Bread",
  "Mushroom Risotto",
  "Mustard Greens",
  "Mustard",
  "Naan Bread",
  "Nacho Supreme",
  "Nachos",
  "Napa Cabbage",
  "Natillas",
  "Navy Beans",
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
  "Osso Buco",
  "Oxford Marmalade",
  "Oyster Mushrooms",
  "Oyster Sauce",
  "Pabellón Criollo",
  "Pad See Ew",
  "Pad Thai",
  "Paella Valenciana",
  "Paella",
  "Pakoras",
  "Paksiw",
  "Palak Paneer",
  "Panang Curry",
  "Panang",
  "Pancakes",
  "Pancit",
  "Paneer Tikka",
  "Pani Puri",
  "Panini",
  "Papa a la Huancaina",
  "Papas Bravas",
  "Paprika",
  "Papusa",
  "Paratha",
  "Parmesan Cheese",
  "Parrillada",
  "Parsley",
  "Pasta Primavera",
  "Pasta Salad",
  "Pasta",
  "Pastelitos",
  "Pastitsio",
  "Pastrami Sandwich",
  "Patatas Bravas",
  "Pea Salad",
  "Peach",
  "Peanut Butter",
  "Peanut Oil",
  "Peanuts",
  "Pear",
  "Peas",
  "Pease Pudding",
  "Pecans",
  "Peking Duck",
  "Peking",
  "Penne alla Vodka",
  "Penne",
  "Pepper Jack Cheese",
  "Pepperoni Pizza",
  "Pernil",
  "Pesto",
  "Philly Cheesesteak",
  "Pho",
  "Picadillo",
  "Pico de Gallo",
  "Pilaf",
  "Pimm's",
  "Pinchos",
  "Pine Nuts",
  "Pineapple Salad",
  "Pineapple",
  "Pinto Beans",
  "Pintxos",
  "Pistachios",
  "Pisto Manchego",
  "Pisto",
  "Pita Bread",
  "Pita Pocket",
  "Pita",
  "Plaice and Chips",
  "Plantain",
  "Ploughman's Lunch",
  "Ploughman's Salad",
  "Plum",
  "Po' Boy",
  "Poached Eggs",
  "Pollo a la Brasa",
  "Popcorn Chicken",
  "Poppy Seeds",
  "Porcini Mushrooms",
  "Pork Pie",
  "Pork Scratchings",
  "Porridge",
  "Portobello Mushrooms",
  "Portokalopita",
  "Pot Roast",
  "Potato Salad",
  "Potato Skin",
  "Potato Skins",
  "Potato",
  "Potted Shrimp",
  "Pozole",
  "Provoleta",
  "Provolone Cheese",
  "Pulled Pork Sandwich",
  "Pulpo a Feira",
  "Pulpo a la Gallega",
  "Pumpernickel Bread",
  "Pumpkin Seeds",
  "Pumpkin",
  "Pupusa",
  "Puto",
  "Quesadilla Supreme",
  "Quesadillas",
  "Queso",
  "Quiche",
  "Quinoa Pasta",
  "Quinoa Salad",
  "Quinoa",
  "Rabo de Toro",
  "Radicchio",
  "Radish Sprouts",
  "Radish",
  "Ragù",
  "Rajma",
  "Ramen Noodles",
  "Ramen Soup",
  "Ramen",
  "Ranch Dip",
  "Ranch Dressing",
  "Ranch Wings",
  "Rasgulla",
  "Raspberry",
  "Rava Kesari",
  "Ravani",
  "Ravioli",
  "Red Beans",
  "Red Curry",
  "Red Leaf Lettuce",
  "Red Leicester Cheese",
  "Red Onion",
  "Red Rice",
  "Red Wine Vinegar",
  "Rendang",
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
  "Roasted Beet Salad",
  "Roasted Vegetable Salad",
  "Rocoto Relleno",
  "Romaine Lettuce",
  "Ropa Vieja",
  "Rosemary",
  "Rosquillas",
  "Roti",
  "Rotini",
  "Rouladen",
  "Russian Salad",
  "Rutabaga",
  "Rye Bread",
  "Rye",
  "Safflower Oil",
  "Saganaki",
  "Sage",
  "Salmorejo",
  "Salsa Roja",
  "Salsa Verde",
  "Salsa",
  "Samosa",
  "Samosas",
  "Sancocho",
  "Sangria",
  "Sashimi",
  "Satay",
  "Sausage Dip",
  "Sausage",
  "Scallion",
  "Scone",
  "Scones with Clotted Cream and Jam",
  "Scotch Egg",
  "Scotch Pancakes",
  "Scotch Pie",
  "Scotch Whisky",
  "Scrambled Eggs",
  "Seafood Salad",
  "Seco de Res",
  "Seitan",
  "Serrano Ham",
  "Sesame Oil",
  "Sesame Seeds",
  "Shallot",
  "Shawarma Pita",
  "Shawarma",
  "Shepherd's Pie",
  "Shiitake Mushrooms",
  "Shortbread",
  "Shrimp Salad",
  "Sidra",
  "Sinigang",
  "Sizzling Sisig",
  "Sliders",
  "Sloppy Joe",
  "Soba Noodles",
  "Sofrito",
  "Sopes",
  "Sorghum",
  "Sourdough Bread",
  "Soutzouk Loukoum",
  "Souvlaki Wrap",
  "Souvlaki",
  "Soy Milk",
  "Soy Sauce",
  "Soybeans",
  "Spaghetti Carbonara",
  "Spaghetti Squash",
  "Spaghetti",
  "Spanakopita",
  "Spinach and Artichoke Dip",
  "Spinach Dip",
  "Spinach Salad",
  "Spinach",
  "Split Pea Soup",
  "Split Peas",
  "Spotted Dick",
  "Spring Rolls",
  "Sriracha Wings",
  "Stargazy Pie",
  "Steak and Kidney Pie",
  "Steak Salad",
  "Sticky Toffee Pudding",
  "Stilton Cheese",
  "Stir-Fry",
  "Strawberry",
  "String Cheese",
  "Stroganoff",
  "Stuffed Mushrooms",
  "Sukiyaki",
  "Suman",
  "Sunflower Oil",
  "Sunflower Salad",
  "Sunflower Seed Butter",
  "Sunflower Seeds",
  "Sunflower Sprouts",
  "Sushi Rice",
  "Sushi",
  "Suspiro a la Limeña",
  "Sweet and Sour Pork",
  "Sweet and Sour Wings",
  "Sweet Corn",
  "Sweet Potato",
  "Swiss Chard",
  "Swiss Cheese",
  "Szechuan Shrimp",
  "Szechuan",
  "Tabbouleh Salad",
  "Tabbouleh",
  "Taco Salad",
  "Tacos Al Pastor",
  "Tacos",
  "Tacu Tacu",
  "Tahini",
  "Taho",
  "Tajín",
  "Tamale",
  "Tamales",
  "Tamari",
  "Tandoori Chicken",
  "Tandoori Naan",
  "Tandoori",
  "Taquitos",
  "Taro",
  "Tarta de Chocolate",
  "Tarta de Frutas",
  "Tarta de Limón",
  "Tarta de Manzana",
  "Tarta de Queso",
  "Tarta de Santiago",
  "Tarta",
  "Tataki",
  "Tater Tots",
  "Tempeh",
  "Tempura",
  "Tepanyaki",
  "Teppanyaki",
  "Tequeños",
  "Teriyaki Chicken",
  "Teriyaki Sauce",
  "Teriyaki Wings",
  "Teriyaki",
  "Textured Vegetable Protein",
  "Thai Beef Salad",
  "Thai Chili Wings",
  "Thousand Island Dressing",
  "Thyme",
  "Tikka Masala",
  "Tinapa",
  "Tinola",
  "Tinto de Verano",
  "Tirokafteri",
  "Tiropita",
  "Toad in the Hole",
  "Toast",
  "Tocino",
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
  "Tortilla",
  "Tostada Cubana",
  "Tostada",
  "Tostadas",
  "Tostone",
  "Tostones",
  "Tournedos",
  "Trifle",
  "Truffle Mushrooms",
  "Tuna Melt",
  "Tuna Salad",
  "Tunnock's Teacake",
  "Turmeric",
  "Turnip",
  "Turon",
  "Turron de Alicante",
  "Turrón",
  "Tzatziki Pita",
  "Tzatziki",
  "Udon Noodles",
  "Udon",
  "Upma",
  "Vada",
  "Veal Marsala",
  "Vegetable Lasagna",
  "Venezuelan Arepas",
  "Vermicelli",
  "Victoria Sponge Cake",
  "Vinaigrette Dressing",
  "Vindaloo",
  "Waffles",
  "Waldorf Salad",
  "Walnut Oil",
  "Walnuts",
  "Watercress",
  "Watermelon Salad",
  "Watermelon",
  "Wellington",
  "Welsh Cakes",
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
  "Yuca con Mojo",
  "Yuca",
  "Yucca Fries",
  "Zarzuela",
  "Zucchini Fritters",
  "Zucchini Noodles",
  "Zucchini",
  "Apple",
  "Baguette",
  "Baklava",
  "Barbecue Ribs",
  "Beef Stroganoff",
  "Biryani",
  "Biscuits and Gravy",
  "Borscht",
  "Burrito",
  "Cannoli",
  "Ceviche",
  "Cheeseburger",
  "Chicken Alfredo",
  "Chicken and Waffles",
  "Chicken Parmesan",
  "Chicken Rice Soup",
  "Chicken Satay",
  "Chicken Shawarma",
  "Chicken Tikka Masala",
  "Chili Con Carne",
  "Chocolate Cake",
  "Chow Mein",
  "Clam Chowder",
  "Club Sandwich",
  "Croissant",
  "Dim Sum",
  "Donuts",
  "Empanadas",
  "Enchiladas",
  "Falafel",
  "Fish Tacos",
  "French Fries",
  "Fried Chicken",
  "Fried Rice",
  "Goulash",
  "Gumbo",
  "Hamburger",
  "Hot Dog",
  "Hummus",
  "Ice Cream",
  "Lasagna",
  "Lobster Bisque",
  "Lobster Roll",
  "Maki Sushi",
  "Margherita Pizza",
  "Miso Soup",
  "Nachos",
  "Pad Thai",
  "Paella",
  "Pancakes",
  "Peking Duck",
  "Pho",
  "Pierogi",
  "Pita Bread",
  "Poutine",
  "Pretzel",
  "Prime Rib",
  "Pulled Pork Sandwich",
  "Ramen",
  "Reuben Sandwich",
  "Samosas",
  "Sashimi",
  "Shrimp and Grits",
  "Shrimp Scampi",
  "Sloppy Joe",
  "Spaghetti Carbonara",
  "Spring Rolls",
  "Steak Frites",
  "Sushi",
  "Tandoori Chicken",
  "Tiramisu",
  "Tofu Stir-Fry",
  "Tom Yum",
  "Tuna Salad",
  "Veggie Burger",
  "Wonton Soup",
  "Yakitori",
  "Ziti",
  "Zucchini Noodles",
  "Bagel",
  "Baklava",
  "Barbecue Ribs",
  "Beef Stew",
  "Biryani",
  "Biscuits and Gravy",
  "Borscht",
  "Burrito",
  "Cannoli",
  "Ceviche",
  "Cheeseburger",
  "Chicken Alfredo",
  "Chicken and Waffles",
  "Chicken Parmesan",
  "Chicken Rice Soup",
  "Chicken Satay",
  "Chicken Shawarma",
  "Chicken Tikka Masala",
  "Chili Con Carne",
  "Chocolate Cake",
  "Chow Mein",
  "Clam Chowder",
  "Club Sandwich",
  "Croissant",
  "Dim Sum",
  "Donuts",
  "Empanadas",
  "Enchiladas",
  "Falafel",
  "Fish Tacos",
  "French Fries",
  "Fried Chicken",
  "Fried Rice",
  "Goulash",
  "Gumbo",
  "Hamburger",
  "Hot Dog",
  "Hummus",
  "Ice Cream",
  "Lasagna",
  "Lobster Bisque",
  "Lobster Roll",
  "Maki Sushi",
  "Margherita Pizza",
  "Miso Soup",
  "Nachos",
  "Pad Thai",
  "Paella",
  "Pancakes",
  "Peking Duck",
  "Pho",
  "Pierogi",
  "Pita Bread",
  "Poutine",
  "Pretzel",
  "Prime Rib",
  "Pulled Pork Sandwich",
  "Ramen",
  "Reuben Sandwich",
  "Samosas",
  "Sashimi",
  "Shrimp and Grits",
  "Shrimp Scampi",
  "Sloppy Joe",
  "Spaghetti Carbonara",
  "Spring Rolls",
  "Steak Frites",
  "Sushi",
  "Tandoori Chicken",
  "Tiramisu",
  "Tofu Stir-Fry",
  "Tom Yum",
  "Tuna Salad",
  "Veggie Burger",
  "Wonton Soup",
  "Yakitori",
  "Ziti",
  "Zucchini Noodles",
  "Croque Monsieur",
  "Pork Belly",
  "Chicken Katsu",
  "Gyudon",
  "Cobb Salad",
  "Tortilla Soup",
  "Red Velvet Cake",
  "Chicken Pot Pie",
  "Ratatouille",
  "Beef and Broccoli",
  "Spaghetti Bolognese",
  "Pork Dumplings",
  "Shrimp Po' Boy",
  "Chicken Enchilada",
  "Butter Chicken",
  "Pasta Carbonara",
  "Lemon Meringue Pie",
  "Pad See Ew",
  "Cajun Jambalaya",
  "Fettuccine Alfredo",
  "Paneer Tikka",
  "Chicken Fajitas",
  "Egg Fried Rice",
  "Pepperoni Pizza",
  "Chicken Quesadilla",
  "Mongolian Beef",
  "California Roll",
  "Calzone",
  "Croissant",
  "Cobb Salad",
  "Tortilla Soup",
  "Red Velvet Cake",
  "Ratatouille",
  "Beef and Broccoli",
  "Spaghetti Bolognese",
  "Pork Dumplings",
  "Shrimp Po' Boy",
  "Chicken Enchilada",
  "Butter Chicken",
  "Pasta Carbonara",
  "Lemon Meringue Pie",
  "Pad See Ew",
  "Cajun Jambalaya",
  "Fettuccine Alfredo",
  "Paneer Tikka",
  "Chicken Fajitas",
  "Egg Fried Rice",
  "Pepperoni Pizza",
  "Chicken Quesadilla",
  "Mongolian Beef",
  "California Roll",
  "Baked Ziti",
  "Garlic Butter Shrimp",
  "Grilled Portobello Mushrooms",
  "Tuna Melt",
  "Baked Salmon",
  "Lemon Butter Sauce",
  "Teriyaki Salmon",
  "Spicy Tuna Roll",
  "Chicken Tenders",
  "Chicken Nuggets",
  "Chicken Fingers",
  "Chicken Popcorn",
  "Chicken Strips",
  "Chicken Drumsticks",
  "Chicken Thighs",
  "Chicken Breasts",
  "Chicken Sausage",
  "Chicken Sandwich",
  "Chicken Burger",
  "Chicken Wrap",
  "Chicken Salad",
  "Chicken Tacos",
  "Chicken Quesadilla",
  "Chicken Enchiladas",
  "Chicken Burrito",
  "Chicken Fajitas",
  "Chicken Alfredo",
  "Chicken Marsala",
  "Chicken Piccata",
  "Chicken Teriyaki",
  "Chicken Kebabs",
  "Chicken Shawarma",
  "Chicken Curry",
  "Chicken Pot Pie",
  "Chicken and Rice",
  "Chicken and Waffles",
  "Chicken and Dumplings",
  "Chicken Noodle Soup",
  "Chicken Tortilla Soup",
  "Chicken Gumbo",
  "Chicken Chili",
  "Chicken Congee",
  "Chicken Tikka Masala",
  "Chicken Satay",
  "Chicken Adobo",
  "Bacon Cheeseburger",
  "Pepperoni Pizza",
  "Cheese Fries",
  "Mushroom Risotto",
  "Tofu Stir-Fry",
  "Vegetable Lasagna",
  "Eggplant Parmesan",
  "Spinach and Artichoke Dip",
  "Potato Skins",
  "Deviled Eggs",
  "Fried Eggplant",
  "Zucchini Fritters",
  "Fried Pickles",
  "Onion Rings",
  "Mozzarella Sticks",
  "Jalapeno Poppers",
  "Sourdough Bread",
  "Whole Wheat Bread",
  "Multigrain Bread",
  "Rye Bread",
  "Pumpernickel Bread",
  "Baguette",
  "Ciabatta",
  "Focaccia",
  "Croissant",
  "Danish Pastry",
  "Cinnamon Roll",
  "English Muffin",
  "Pancakes",
  "Waffles",
  "French Toast",
  "Crepes",
  "Biscuit",
  "Cornbread",
  "Tortilla",
  "Naan Bread",
  "Flatbread",
  "Lavash",
  "Matzo",
  "Rice Cakes",
  "Crackers",
  "Bagels",
  "Donuts",
  "Muffin",
  "Cereal",
  "Granola",
  "Porridge",
  "Grits",
  "Omelette",
  "Scrambled Eggs",
  "Fried Eggs",
  "Poached Eggs",
  "Boiled Eggs",
  "Deviled Eggs",
  "Benedict",
  "Quiche",
  "Frittata",
  "French Toast",
  "Pancakes",
  "Waffles",
  "Crepes",
  "Toast",
  "Croissant",
  "Danish",
  "Muffin",
  "Bagel",
  "Scone",
  "Biscuit",
  "English Muffin",
  "Cereal",
  "Oatmeal",
  "Grits",
  "Yogurt",
  "Milk",
  "Almond Milk",
  "Soy Milk",
  "Coconut Milk",
  "Cashew Milk",
  "Rice Milk",
  "Oat Milk",
  "Cheese",
  "Cheddar Cheese",
  "Swiss Cheese",
  "Mozzarella Cheese",
  "Parmesan Cheese",
  "Gouda Cheese",
  "Brie Cheese",
  "Camembert Cheese",
  "Blue Cheese",
  "Feta Cheese",
  "Goat Cheese",
  "Cream Cheese",
  "Cottage Cheese",
  "Ricotta Cheese",
  "Provolone Cheese",
  "Gruyère Cheese",
  "Havarti Cheese",
  "Pepper Jack Cheese",
  "Colby Cheese",
  "Monterey Jack Cheese",
  "Muenster Cheese",
  "American Cheese",
  "String Cheese",
  "Butter",
  "Margarine",
  "Olive Tapenade",
  "Pesto",
  "Hummus",
  "Tzatziki",
  "Baba Ganoush",
  "Salsa",
  "Spinach Dip",
  "Artichoke Dip",
  "Queso",
  "Bruschetta",
  "Tomato Salsa",
  "Salsa Verde",
  "Chimichurri",
  "Ranch Dip",
  "Buffalo Dip",
  "Crab Dip",
  "Clam Dip",
  "Bean Dip",
  "Sausage Dip",
  "Cheese Dip",
  "Fondue",
  "Mozzarella Sticks",
  "Potato",
  "Tomato",
  "Onion",
  "Carrot",
  "Cucumber",
  "Bell Pepper",
  "Spinach",
  "Broccoli",
  "Cauliflower",
  "Zucchini",
  "Eggplant",
  "Celery",
  "Asparagus",
  "Green Beans",
  "Peas",
  "Corn",
  "Pumpkin",
  "Radish",
  "Beetroot",
  "Artichoke",
  "Brussels Sprouts",
  "Okra",
  "Swiss Chard",
  "Kale",
  "Collard Greens",
  "Turnip",
  "Rutabaga",
  "Cilantro",
  "Parsley",
  "Basil",
  "Thyme",
  "Rosemary",
  "Oregano",
  "Dill",
  "Mint",
  "Sage",
  "Bay Leaf",
  "Cabbage",
  "Fennel",
  "Jicama",
  "Bamboo Shoots",
  "Taro",
  "Bok Choy",
  "Napa Cabbage",
  "Baby Corn",
  "Bean Sprouts",
  "Alfalfa Sprouts",
  "Sunflower Sprouts",
  "Microgreens",
  "Watercress",
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

  // h1 textcontent = food name
  title.textContent = newFood;

  // Get picture URL from Unsplash
  const pictureURL = await getData(newFood, apiKey);
  console.log(pictureURL);

  // Create image and set it's URL as the unsplash URL
  const image = createImg();
  image.src = pictureURL;
}

getNextFood();
