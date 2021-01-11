const _destination = {
    'South Africa' : {
        name: 'South Africa',
        food: ['Biltong & Droewors', ' A Braai', 'Cape Malay Curry', 'Malva Pudding', 'Chakalaka & Pap', 'Bunny Chow'], 
        activity: ['go on The Cape Canopy Tour', 'Go to The Kruger National Park Safari', 'go To The Cape of Good Hope', 'Hike Up Table Mountain', 'Take a Drive through Chapmens Dead','Party on Long Street'],
        attraction: ['Garden Route Road Trip', 'Kgalagadi (Kalahari) Transfrontier Park, Northern Cape', 'Drakensberg, Western Cape','Blyde River Canyon Nature Reserve, Mpumalanga', ' Robben Island Prison, Western Cape', 'Nelson Mandela Museum'] //Add One
    }, 
    'Italy': { //!
        name: 'Italy',
        food:  ['the Bottarga', ' the Lasagna',' the Ribollita',' the Ossobuco','Polenta','Gelato'],
        activity: ['Hike the Cinque Terre','Glide Through Venice in a Gondola','Make Perfect Pasta in Florence','Tour Lake Como by Boat','Trek Through Sardinia','Ski the Dolomites'],
        attraction: ['Colosseum','Florence Duomo Santa Maria del Fiore','Grand Canal in Venice','Pompeii and Mount Vesuvius','Leaning Tower of Pisa','Amalfi Coast']
    },
    'Spain': {
        name: 'Spain',
        food: ['Gazpacho','Paella','Tortilla Española','Gambas al ajillo','Patatas bravas','Pollo al ajillo'], 
        activity: ['Kitesurfing in Tarifa', 'Paragliding in Madrid', 'Canyoning on the Costa del Sol','Try Rafting in the Sierra de Guara','try Surfing in Mundaka','Dive in Ibiza'],
        attraction: ['Alhambra and Generalife Gardens, Granada',"Barcelona's Sagrada Familia and Gaudi Sites",'La Rambla, Barcelona','El Teide, Tenerife','Guggenheim, Bilbao','Aqueduct, Segovia'] 

    },
    'Madeira': {
        name: 'Madeira',
        food: ['Tomato and Onion Soup','Tuna steak with fried maize','Black Scabbard fish fillet with Banana','“Espetada” and “Bolo do caco”','Wine and Garlic Pork','Passion Fruit Pudding'],
        activity: ['do the Levada Walks','do the Funchal Cable Car','do the Panoramic Drives','do the Vereda dos Balcões','go Diving','try the Boat Trips'],
        attraction: ['Ponta de Sao Lourenco','Sao Vicente Caves','Porto Santo','Porto Moniz Natural Pools','Monte Palace Tropical Garden','Cabo Girao']
    },
    'Puerto Rico': {
        name: 'Puerto Rico',
        food: ['Mofongo','Alcapurria','Coconut Candy','Blue Crab Empanada','Red Snapper with Skirt Steak, Mofongo & Yucca','Amarillitos'],
        activity: [' Surf and Whale Watching at Rincon','Explore Cañon de Tanamá','try the Rainforst Zip Line','Camp on Isla de Mona','Kayak and Snorkel in Vieques','Have Coffee in the Mountains'],
        attraction: ['El Yunque National Forest','Culebra Island (Isla Culebra)','Vieques and Bioluminescent Bay','Arecibo Radio Telescope (Observatorio de Arecibo)','Rio Camuy Caves (Parque de las Cavernas del Río Camuy)','Barcardi Rum Factory']
    },
    'Mexico': {
        name: 'Mexico',
        food: ['Chilaquiles','Tostadas','Enchiladas','Tamales','Mole','Pozole'],
        activity: ['Go Trekking in the Sierra Norte Mountains','Take a dip at Hierve el Agua','Cheer on Wrestlers at a Lucha Libre match','Bike around Mexico City','Search for street art','Go museum hopping in Mexico City'], 
        attraction: ['Monte Alban','San Miguel de Allende','Great Pyramid of Cholula',' El Malecon','Uxmal','Museo Nacional de Antropologia']
    },
    get generateTrip() {
        let selectedDestination = this[destinationSelect(randomNum())].name;
        let selectedFood = this[selectedDestination].food[randomNum()];
        let selectedActivity = this[selectedDestination].activity[randomNum()];
        let selectedAttraction = this[selectedDestination].attraction[randomNum()];

        console.log(`In ${year} you should travel to ${selectedDestination}. Whilst you are there you should should try some local food, like ${selectedFood}. If you are looking for something to do, you should ${selectedActivity} and don't for get to check out The ${selectedAttraction}! ` );
    }
}

const destinationKeys = ['South Africa', 'Italy','Spain','Madeira','Puerto Rico','Mexico']; 

function randomNum() {
    return Math.floor(Math.random() * 6); 
};

function destinationSelect(random) {
    return destinationKeys[random]
};

let year = new Date().getFullYear();

_destination.generateTrip;