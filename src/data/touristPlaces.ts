import { TouristPlace } from '../types';

export const touristPlacesData: Record<string, TouristPlace[]> = {
  kerala: [
    {
      name: "Munnar Hill Station",
      id: "munnar",
      description: "A breathtaking hill station nestled in the Western Ghats, famous for its rolling tea plantations, misty mountains, and cool climate. Munnar offers a perfect escape into nature's lap with its pristine beauty and serene atmosphere.",
      history: "Munnar was developed by the British in the 1870s as a summer resort and tea plantation area. The name 'Munnar' literally means 'three rivers' in Malayalam, referring to the confluence of three mountain streams - Mudrapuzha, Nallathanni, and Kundala. The British established extensive tea estates here, and today it remains one of the largest tea-growing regions in South India.",
      bestTimeToVisit: "October to March (cool and pleasant weather)",
      howToReach: "Nearest airport: Cochin (110 km). Well connected by road from major Kerala cities.",
      nearbyAttractions: [
        "Eravikulam National Park - Home to endangered Nilgiri Tahr",
        "Mattupetty Dam - Boating and scenic views",
        "Tea Museum - Learn about tea processing",
        "Top Station - Panoramic valley views"
      ],
      specialFeatures: [
        "Sprawling tea plantations covering rolling hills",
        "Rare Neelakurinji flowers that bloom once in 12 years",
        "Cool climate throughout the year",
        "Adventure activities like trekking and rock climbing",
        "Spice plantations with cardamom, pepper, and cinnamon"
      ],
      entryFee: "No entry fee for the town. National park: ₹90 for Indians, ₹300 for foreigners",
      timings: "Best visited during daylight hours. National park: 8 AM - 4 PM",
      images: ["munnar-tea-plantations.jpg", "munnar-hills.jpg"],
      category: "nature"
    },
    {
      name: "Alleppey Backwaters",
      id: "alleppey",
      description: "Known as the 'Venice of the East', Alleppey is famous for its intricate network of backwaters, houseboats, and lush paddy fields. Experience the unique ecosystem of Kerala's backwaters while staying in traditional houseboats.",
      history: "Alleppey (Alappuzha) was established in 1762 by Raja Kesavadas, the then Diwan of Travancore. It became a major trading center for spices and coir products. The backwater network was historically used for transportation of goods and people. The famous Nehru Trophy Boat Race, started in 1952, celebrates the traditional snake boat racing culture of the region.",
      bestTimeToVisit: "November to February (post-monsoon, pleasant weather)",
      howToReach: "Nearest airport: Cochin (85 km). Well connected by train and road from major cities.",
      nearbyAttractions: [
        "Kumarakom Bird Sanctuary - Migratory bird watching",
        "Vembanad Lake - Largest lake in Kerala",
        "Pathiramanal Island - Small island in Vembanad Lake",
        "Marari Beach - Pristine coastal stretch"
      ],
      specialFeatures: [
        "Traditional houseboat stays with modern amenities",
        "Unique ecosystem with diverse flora and fauna",
        "Traditional fishing methods and coir making",
        "Authentic Kerala cuisine served on houseboats",
        "Sunset and sunrise views over tranquil waters"
      ],
      entryFee: "No entry fee. Houseboat charges: ₹8,000-25,000 per day",
      timings: "24/7 accessible. Best houseboat experience: Check-in 12 PM, Check-out 9 AM",
      images: ["alleppey-houseboat.jpg", "backwaters.jpg"],
      category: "nature"
    },
    {
      name: "Kochi Fort",
      id: "kochi-fort",
      description: "A historic area showcasing Kerala's colonial past with Portuguese, Dutch, and British influences. Features ancient churches, spice markets, and the famous Chinese fishing nets.",
      history: "Fort Kochi was established by the Portuguese in 1503, making it one of the first European settlements in India. It later came under Dutch and British control. The area is famous for St. Francis Church, where Vasco da Gama was originally buried, and the iconic Chinese fishing nets introduced by traders from the court of Kublai Khan.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Cochin International Airport (40 km). Well connected by road and ferry services.",
      nearbyAttractions: [
        "Mattancherry Palace - Dutch Palace with Kerala murals",
        "Jewish Synagogue - 16th-century synagogue",
        "Spice Markets - Aromatic spice trading area",
        "Santa Cruz Cathedral - Beautiful colonial church"
      ],
      specialFeatures: [
        "Chinese fishing nets - Unique fishing method",
        "Colonial architecture blend",
        "Kathakali and Kalaripayattu performances",
        "Art galleries and cafes",
        "Sunset views from the promenade"
      ],
      entryFee: "Free entry to most areas. Museum charges apply",
      timings: "24/7 accessible. Museums: 10 AM - 5 PM",
      images: ["kochi-fort.jpg", "chinese-fishing-nets.jpg"],
      category: "heritage"
    }
  ],
  punjab: [
    {
      name: "Golden Temple",
      id: "golden-temple",
      description: "The holiest shrine of Sikhism, known for its stunning golden architecture and spiritual significance. The temple complex includes the sacred pool (Amrit Sarovar) and serves free meals to thousands of visitors daily through its community kitchen (langar).",
      history: "The Golden Temple, officially known as Harmandir Sahib, was built in 1604 by Guru Arjan Dev, the fifth Sikh Guru. The temple was designed to be accessible from all four directions, symbolizing the openness of Sikhism to all people regardless of caste, creed, or religion. The gold plating was added in the early 19th century by Maharaja Ranjit Singh. The temple has been rebuilt several times due to various invasions and conflicts.",
      bestTimeToVisit: "October to March (pleasant weather), avoid summer heat",
      howToReach: "Amritsar airport (11 km). Well connected by train and road from major Indian cities.",
      nearbyAttractions: [
        "Jallianwala Bagh - Historic memorial garden",
        "Wagah Border - India-Pakistan border ceremony",
        "Partition Museum - History of 1947 partition",
        "Gobindgarh Fort - Historic Sikh fort"
      ],
      specialFeatures: [
        "24-karat gold-plated dome and upper floors",
        "Free community kitchen serving 100,000+ people daily",
        "Sacred pool believed to have healing properties",
        "Continuous recitation of Guru Granth Sahib",
        "Beautiful reflection of the temple in the sacred pool"
      ],
      entryFee: "Free entry for all visitors",
      timings: "Open 24/7. Best visited early morning (4 AM) or evening (sunset)",
      images: ["golden-temple.jpg", "golden-temple-night.jpg"],
      category: "religious"
    },
    {
      name: "Jallianwala Bagh",
      id: "jallianwala-bagh",
      description: "A historic memorial commemorating the tragic massacre of 1919, now a peaceful garden with a museum documenting India's freedom struggle.",
      history: "On April 13, 1919, British troops under General Dyer opened fire on a peaceful gathering of Indians celebrating Baisakhi and protesting the Rowlatt Act. Over 1,000 people were killed and 1,500 wounded in this enclosed garden. The massacre became a turning point in India's independence movement and galvanized public opinion against British rule.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Located in Amritsar city center, walking distance from Golden Temple",
      nearbyAttractions: [
        "Golden Temple - 5-minute walk",
        "Partition Museum - Nearby",
        "Town Hall - Historic building",
        "Company Bagh - Public garden"
      ],
      specialFeatures: [
        "Bullet marks still visible on walls",
        "Memorial flame burning continuously",
        "Museum with historical artifacts",
        "Martyrs' Well where people jumped to escape bullets",
        "Sound and light show in evenings"
      ],
      entryFee: "Free entry",
      timings: "6 AM - 7:30 PM (summer), 7 AM - 6:30 PM (winter)",
      images: ["jallianwala-bagh.jpg", "memorial-flame.jpg"],
      category: "heritage"
    },
    {
      name: "Wagah Border",
      id: "wagah-border",
      description: "The ceremonial border crossing between India and Pakistan, famous for its daily flag-lowering ceremony featuring elaborate military pageantry.",
      history: "Wagah is the only road border crossing between India and Pakistan. The border was established in 1947 during partition. The famous beating retreat ceremony began in 1959 and has become a symbol of the rivalry and brotherhood between the two nations. The ceremony attracts thousands of spectators daily.",
      bestTimeToVisit: "October to March (pleasant weather). Ceremony timing varies by season",
      howToReach: "32 km from Amritsar city center. Regular bus and taxi services available",
      nearbyAttractions: [
        "Attari village - Border town",
        "Gobindgarh Fort - Historic fort in Amritsar",
        "Khalsa College - Historic educational institution",
        "Durgiana Temple - Hindu temple in Amritsar"
      ],
      specialFeatures: [
        "Daily flag-lowering ceremony at sunset",
        "Elaborate military drill and pageantry",
        "Patriotic atmosphere with national songs",
        "View of Pakistan from Indian side",
        "Joint ceremony by both countries' forces"
      ],
      entryFee: "Free entry. VIP seating available for ₹100",
      timings: "Ceremony starts 1 hour before sunset. Gates open 2 hours before",
      images: ["wagah-border.jpg", "flag-ceremony.jpg"],
      category: "cultural"
    }
  ],
  rajasthan: [
    {
      name: "Jaipur City Palace",
      id: "jaipur-city-palace",
      description: "A magnificent palace complex showcasing Rajput and Mughal architecture, still home to the royal family of Jaipur with museums displaying royal artifacts.",
      history: "Built by Maharaja Sawai Jai Singh II between 1729-1732, the City Palace complex covers one-seventh of the old city. It represents a fusion of Rajasthani and Mughal architecture. The palace has been expanded by successive rulers and continues to be the residence of the former royal family of Jaipur.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Jaipur airport (13 km). Located in the heart of Jaipur city",
      nearbyAttractions: [
        "Hawa Mahal - Palace of Winds",
        "Jantar Mantar - Astronomical observatory",
        "Amber Fort - Hilltop fort palace",
        "Johari Bazaar - Traditional jewelry market"
      ],
      specialFeatures: [
        "Chandra Mahal - Seven-story palace",
        "Mubarak Mahal - Museum of textiles",
        "Diwan-i-Khas - Hall of private audience",
        "Peacock Gate - Ornate entrance",
        "Royal armory and art collection"
      ],
      entryFee: "₹200 for Indians, ₹500 for foreigners. Photography charges extra",
      timings: "9:30 AM - 5 PM",
      images: ["city-palace-jaipur.jpg", "peacock-gate.jpg"],
      category: "heritage"
    },
    {
      name: "Udaipur Lake Palace",
      id: "udaipur-lake-palace",
      description: "A stunning white marble palace floating on Lake Pichola, now a luxury hotel but open for visits. Known as one of the most romantic palaces in the world.",
      history: "Built in 1746 by Maharana Jagat Singh II as a summer palace, the Lake Palace covers the entire Jag Niwas Island. It was constructed using white marble and features intricate carvings. The palace served as a royal residence and is now operated as a heritage hotel by the Taj Group.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Udaipur airport (22 km). Boat ride from City Palace jetty",
      nearbyAttractions: [
        "City Palace Udaipur - Largest palace complex",
        "Jag Mandir - Another island palace",
        "Saheliyon ki Bari - Garden of maidens",
        "Fateh Sagar Lake - Another beautiful lake"
      ],
      specialFeatures: [
        "Floating palace on Lake Pichola",
        "White marble architecture",
        "Luxury heritage hotel experience",
        "Stunning sunset views",
        "Featured in James Bond film 'Octopussy'"
      ],
      entryFee: "Hotel guests only. Day visits through hotel packages",
      timings: "Boat rides: 9 AM - 6 PM",
      images: ["lake-palace-udaipur.jpg", "lake-pichola.jpg"],
      category: "heritage"
    },
    {
      name: "Jaisalmer Fort",
      id: "jaisalmer-fort",
      description: "A living fort in the Thar Desert, built with golden sandstone that glows at sunset. One of the few forts in the world where people still live and work.",
      history: "Built in 1156 AD by Rawal Jaisal, Jaisalmer Fort is one of the largest fully preserved fortified cities in the world. Known as 'Sonar Quila' (Golden Fort), it was a strategic trading post on the ancient Silk Route. The fort houses palaces, temples, and residential areas within its walls.",
      bestTimeToVisit: "November to February (pleasant desert weather)",
      howToReach: "Jaisalmer airport (17 km). Well connected by train and road",
      nearbyAttractions: [
        "Sam Sand Dunes - Desert safari destination",
        "Patwon ki Haveli - Ornate merchant mansion",
        "Gadisar Lake - Artificial lake",
        "Desert National Park - Wildlife sanctuary"
      ],
      specialFeatures: [
        "Living fort with 4,000 residents",
        "Golden sandstone architecture",
        "Intricate Jain temples inside",
        "Panoramic desert views",
        "Traditional Rajasthani havelis"
      ],
      entryFee: "₹30 for Indians, ₹70 for foreigners. Palace museum extra",
      timings: "24/7 accessible. Museum: 9 AM - 6 PM",
      images: ["jaisalmer-fort.jpg", "golden-fort-sunset.jpg"],
      category: "heritage"
    }
  ],
  "west-bengal": [
    {
      name: "Victoria Memorial",
      id: "victoria-memorial",
      description: "A magnificent white marble monument dedicated to Queen Victoria, showcasing Indo-Saracenic architecture. Now a museum housing an extensive collection of artifacts from the British colonial period and Bengal's rich history.",
      history: "The Victoria Memorial was conceived by Lord Curzon, Viceroy of India, after Queen Victoria's death in 1901. Construction began in 1906 and was completed in 1921. The monument was designed by Sir William Emerson in the Indo-Saracenic style, combining British and Mughal elements. It was built entirely with white Makrana marble from Rajasthan. The memorial was intended to commemorate Queen Victoria's 25-year reign as Empress of India.",
      bestTimeToVisit: "October to March (pleasant weather), early morning or evening",
      howToReach: "Netaji Subhas Chandra Bose International Airport (17 km). Located in central Kolkata, accessible by metro, bus, and taxi.",
      nearbyAttractions: [
        "Maidan - Large urban park surrounding the memorial",
        "St. Paul's Cathedral - Gothic Revival architecture",
        "Indian Museum - Oldest and largest museum in India",
        "Howrah Bridge - Iconic cantilever bridge"
      ],
      specialFeatures: [
        "16-foot bronze Angel of Victory statue on top",
        "25 galleries displaying paintings, sculptures, and artifacts",
        "Beautiful gardens with fountains and statues",
        "Sound and light show in the evenings",
        "Rare collection of British Raj memorabilia"
      ],
      entryFee: "₹30 for Indians, ₹500 for foreigners. Camera: ₹20",
      timings: "10 AM - 6 PM (closed on Mondays). Gardens: 5:30 AM - 6:15 PM",
      images: ["victoria-memorial.jpg", "victoria-memorial-garden.jpg"],
      category: "heritage"
    },
    {
      name: "Howrah Bridge",
      id: "howrah-bridge",
      description: "An iconic cantilever bridge over the Hooghly River, connecting Kolkata with Howrah. A symbol of the city and an engineering marvel built without nuts and bolts.",
      history: "Opened in 1943, the Howrah Bridge was built to replace a pontoon bridge. Designed by Rendel, Palmer and Tritton, it was constructed without using nuts and bolts, instead using rivets. The bridge was renamed Rabindra Setu in 1965 after Nobel laureate Rabindranath Tagore, though it's still commonly called Howrah Bridge.",
      bestTimeToVisit: "October to March (pleasant weather). Beautiful at sunset and night",
      howToReach: "Located in central Kolkata, accessible by metro, bus, taxi, and on foot",
      nearbyAttractions: [
        "Flower Market - Largest flower market under the bridge",
        "Mullik Ghat - Historic ghat on Hooghly River",
        "Howrah Station - One of India's busiest railway stations",
        "Belur Math - Ramakrishna Mission headquarters"
      ],
      specialFeatures: [
        "Cantilever bridge without nuts and bolts",
        "Daily traffic of over 100,000 vehicles",
        "Illuminated beautifully at night",
        "Featured in numerous Bollywood films",
        "Vibrant flower market underneath"
      ],
      entryFee: "Free to walk across",
      timings: "24/7 accessible",
      images: ["howrah-bridge.jpg", "howrah-bridge-night.jpg"],
      category: "modern"
    },
    {
      name: "Darjeeling Tea Gardens",
      id: "darjeeling-tea-gardens",
      description: "World-famous tea plantations in the foothills of the Himalayas, producing the finest Darjeeling tea with stunning mountain views and colonial charm.",
      history: "Tea cultivation in Darjeeling began in the 1850s when the British established plantations using Chinese tea varieties. The unique climate, altitude, and soil conditions create the distinctive 'muscatel' flavor of Darjeeling tea. The region has over 80 tea gardens and is known as the 'Champagne of Teas'.",
      bestTimeToVisit: "March to May and October to December (clear mountain views)",
      howToReach: "Bagdogra airport (68 km). Famous toy train from New Jalpaiguri",
      nearbyAttractions: [
        "Tiger Hill - Sunrise over Kanchenjunga",
        "Darjeeling Himalayan Railway - UNESCO World Heritage toy train",
        "Peace Pagoda - Japanese Buddhist temple",
        "Himalayan Mountaineering Institute - Mountaineering museum"
      ],
      specialFeatures: [
        "World's finest tea production",
        "Stunning Himalayan mountain views",
        "Colonial-era tea estates",
        "Tea tasting experiences",
        "Traditional tea processing methods"
      ],
      entryFee: "Tea garden visits: ₹50-100. Tea tasting charges extra",
      timings: "Tea gardens: 8 AM - 5 PM",
      images: ["darjeeling-tea-gardens.jpg", "tea-plantation-workers.jpg"],
      category: "nature"
    }
  ],
  "tamil-nadu": [
    {
      name: "Meenakshi Temple",
      id: "meenakshi-temple",
      description: "A historic Hindu temple complex dedicated to Goddess Meenakshi and Lord Sundareshwar. Famous for its towering gopurams (gateway towers) covered in thousands of colorful sculptures depicting various deities and mythological figures.",
      history: "The Meenakshi Amman Temple has ancient origins, but the current structure was built between 1623 and 1655 CE by King Thirumalai Nayak. The temple is dedicated to Meenakshi (an avatar of Goddess Parvati) and her consort Sundareshwar (Lord Shiva). According to legend, the temple was originally built by Indra (king of gods) at the request of Goddess Parvati. The temple has been mentioned in various ancient Tamil texts and has been a center of learning and culture for over 2,000 years.",
      bestTimeToVisit: "October to March (cooler weather), avoid summer heat",
      howToReach: "Madurai airport (12 km). Well connected by train and road from major South Indian cities.",
      nearbyAttractions: [
        "Thirumalai Nayak Palace - 17th-century royal palace",
        "Gandhi Memorial Museum - Mahatma Gandhi artifacts",
        "Alagar Kovil - Hill temple dedicated to Lord Vishnu",
        "Samanar Hills - Ancient Jain caves"
      ],
      specialFeatures: [
        "14 magnificent gopurams with intricate sculptures",
        "Hall of Thousand Pillars with musical pillars",
        "Golden lotus tank (Porthamarai Kulam)",
        "Daily temple rituals and festivals",
        "Architectural marvel spanning 14 acres"
      ],
      entryFee: "Free entry. Camera: ₹50, Video: ₹100",
      timings: "5 AM - 12:30 PM, 4 PM - 9:30 PM",
      images: ["meenakshi-temple.jpg", "meenakshi-gopuram.jpg"],
      category: "religious"
    },
    {
      name: "Mahabalipuram Shore Temple",
      id: "mahabalipuram-shore-temple",
      description: "A UNESCO World Heritage Site featuring ancient rock-cut temples and sculptures from the 7th-8th centuries, showcasing Pallava dynasty architecture along the Bay of Bengal coast.",
      history: "Built during the reign of Narasimhavarman II (700-728 CE), the Shore Temple is one of the oldest structural stone temples in South India. The Pallava dynasty created this architectural marvel as part of the ancient port city of Mamallapuram. The temple complex survived the 2004 tsunami and revealed additional submerged structures.",
      bestTimeToVisit: "November to February (pleasant weather)",
      howToReach: "Chennai airport (58 km). Well connected by road from Chennai",
      nearbyAttractions: [
        "Arjuna's Penance - Massive rock relief",
        "Five Rathas - Monolithic rock temples",
        "Krishna's Butter Ball - Balanced boulder",
        "Lighthouse - Panoramic coastal views"
      ],
      specialFeatures: [
        "UNESCO World Heritage Site",
        "Ancient Pallava architecture",
        "Intricate stone carvings",
        "Coastal temple setting",
        "Archaeological significance"
      ],
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      timings: "6 AM - 6 PM",
      images: ["shore-temple.jpg", "mahabalipuram-sculptures.jpg"],
      category: "heritage"
    },
    {
      name: "Ooty Hill Station",
      id: "ooty-hill-station",
      description: "The 'Queen of Hill Stations' in the Nilgiri Hills, famous for its tea gardens, botanical gardens, and the heritage Nilgiri Mountain Railway.",
      history: "Ooty (Udhagamandalam) was developed by the British in the early 19th century as a summer retreat. The hill station was established in 1823 and became the summer capital of the Madras Presidency. The famous Nilgiri Mountain Railway, built in 1908, connects Ooty to the plains and is now a UNESCO World Heritage Site.",
      bestTimeToVisit: "April to June and September to November (pleasant weather)",
      howToReach: "Coimbatore airport (88 km). Famous toy train from Mettupalayam",
      nearbyAttractions: [
        "Botanical Gardens - 150-year-old garden",
        "Ooty Lake - Boating and scenic views",
        "Doddabetta Peak - Highest point in Nilgiris",
        "Tea Museum - Learn about tea processing"
      ],
      specialFeatures: [
        "UNESCO World Heritage toy train",
        "Sprawling tea plantations",
        "Colonial architecture",
        "Pleasant year-round climate",
        "Beautiful botanical gardens"
      ],
      entryFee: "Various attractions have different fees. Botanical Gardens: ₹30",
      timings: "Most attractions: 9 AM - 6 PM",
      images: ["ooty-tea-gardens.jpg", "nilgiri-mountain-railway.jpg"],
      category: "nature"
    }
  ],
  maharashtra: [
    {
      name: "Ajanta Caves",
      id: "ajanta-caves",
      description: "A UNESCO World Heritage Site featuring 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to 480 CE. These caves contain some of the finest examples of ancient Indian art, particularly Buddhist religious paintings and sculptures.",
      history: "The Ajanta Caves were carved in two phases: the earlier Hinayana phase (2nd century BCE to 2nd century CE) and the later Mahayana phase (5th century CE). The caves were abandoned around 650 CE and remained hidden until 1819 when British officer John Smith rediscovered them during a hunting expedition. The caves served as monsoon retreats for Buddhist monks and showcase the evolution of Buddhist art over several centuries. The paintings and sculptures depict various Jataka tales (stories of Buddha's previous lives) and Buddhist deities.",
      bestTimeToVisit: "November to March (pleasant weather), avoid monsoon season",
      howToReach: "Aurangabad airport (99 km). Nearest railway station: Jalgaon (59 km). Regular bus services from Aurangabad.",
      nearbyAttractions: [
        "Ellora Caves - Hindu, Buddhist, and Jain cave temples",
        "Daulatabad Fort - 14th-century hilltop fortress",
        "Bibi Ka Maqbara - 'Mini Taj Mahal' of the Deccan",
        "Grishneshwar Temple - One of 12 Jyotirlinga temples"
      ],
      specialFeatures: [
        "Exquisite frescoes and paintings on cave walls",
        "Intricate rock-cut sculptures of Buddha and Bodhisattvas",
        "Chaitya halls (prayer halls) with elaborate facades",
        "Viharas (monasteries) with cells for monks",
        "Perfect preservation of ancient Indian art techniques"
      ],
      entryFee: "₹40 for Indians, ₹600 for foreigners. Video camera: ₹25",
      timings: "9 AM - 5:30 PM (closed on Mondays)",
      images: ["ajanta-caves.jpg", "ajanta-paintings.jpg"],
      category: "heritage"
    },
    {
      name: "Gateway of India",
      id: "gateway-of-india",
      description: "An iconic arch monument built during the British Raj, overlooking the Arabian Sea. A symbol of Mumbai and the starting point for many tourists exploring the city.",
      history: "Built to commemorate the visit of King George V and Queen Mary to Mumbai in 1911, the Gateway of India was designed by George Wittet in Indo-Saracenic style. Construction began in 1913 and was completed in 1924. Ironically, it was also the ceremonial entrance point for Viceroys and the last British troops left India through this gateway in 1948.",
      bestTimeToVisit: "November to February (pleasant weather)",
      howToReach: "Mumbai airport (26 km). Located in South Mumbai, accessible by taxi, bus, and train",
      nearbyAttractions: [
        "Taj Mahal Palace Hotel - Luxury heritage hotel",
        "Elephanta Caves - Ancient rock-cut temples (boat ride)",
        "Colaba Causeway - Shopping street",
        "Chhatrapati Shivaji Maharaj Museum - Art and history museum"
      ],
      specialFeatures: [
        "Indo-Saracenic architectural style",
        "Gateway to Elephanta Caves boat rides",
        "Historic significance in Indian independence",
        "Popular gathering place for locals and tourists",
        "Beautiful Arabian Sea views"
      ],
      entryFee: "Free to visit",
      timings: "24/7 accessible",
      images: ["gateway-of-india.jpg", "gateway-mumbai-harbor.jpg"],
      category: "heritage"
    },
    {
      name: "Lonavala Hill Station",
      id: "lonavala-hill-station",
      description: "A popular hill station in the Western Ghats, famous for its scenic valleys, waterfalls during monsoon, and the historic Karla and Bhaja caves.",
      history: "Lonavala was developed as a hill station during the British era as a retreat from the heat of Mumbai and Pune. The area has ancient significance with Buddhist caves dating back to the 2nd century BCE. The hill station gained prominence with the construction of the Mumbai-Pune railway line in 1863.",
      bestTimeToVisit: "October to May (pleasant weather). Monsoon for waterfalls",
      howToReach: "Mumbai airport (96 km), Pune airport (64 km). Well connected by train and road",
      nearbyAttractions: [
        "Karla Caves - Ancient Buddhist rock-cut caves",
        "Bhaja Caves - 2nd century BCE Buddhist caves",
        "Tiger's Leap - Scenic cliff viewpoint",
        "Rajmachi Fort - Trekking destination"
      ],
      specialFeatures: [
        "Scenic Western Ghats location",
        "Beautiful waterfalls during monsoon",
        "Ancient Buddhist caves",
        "Popular weekend getaway from Mumbai-Pune",
        "Adventure activities and trekking"
      ],
      entryFee: "No entry fee for hill station. Cave entry: ₹25",
      timings: "Hill station: 24/7. Caves: 9 AM - 5 PM",
      images: ["lonavala-valley.jpg", "karla-caves.jpg"],
      category: "nature"
    }
  ],
  gujarat: [
    {
      name: "Rann of Kutch",
      id: "rann-of-kutch",
      description: "The world's largest salt desert, transforming into a white wonderland during the dry season. This unique landscape offers spectacular views, especially during full moon nights, and hosts the vibrant Rann Utsav festival showcasing local culture and crafts.",
      history: "The Rann of Kutch is a seasonal salt marsh located in the Thar Desert. Historically, it was a shallow part of the Arabian Sea until geological shifts and climate changes transformed it into a salt marsh. The area has been inhabited by various communities including the Rabaris, Ahirs, and other pastoral tribes for centuries. During the British period, it served as a natural barrier. The region gained international attention after the 2001 earthquake, leading to increased tourism and the establishment of the Rann Utsav festival in 2005.",
      bestTimeToVisit: "November to February (Rann Utsav season), avoid monsoon when area is flooded",
      howToReach: "Bhuj airport (85 km). Well connected by road from Ahmedabad (340 km) and other Gujarat cities.",
      nearbyAttractions: [
        "Kutch Museum - Oldest museum in Gujarat",
        "Prag Mahal - 19th-century Italian Gothic palace",
        "Aina Mahal - Palace of mirrors",
        "Mandvi Beach - Pristine coastline with wind farms"
      ],
      specialFeatures: [
        "Endless white salt desert stretching to horizon",
        "Spectacular full moon nights with silver landscape",
        "Rich wildlife including flamingos and wild ass",
        "Traditional handicrafts and embroidery villages",
        "Cultural performances during Rann Utsav"
      ],
      entryFee: "₹100 per person during Rann Utsav. Vehicle charges extra",
      timings: "24/7 accessible. Best visited during sunset and full moon nights",
      images: ["rann-of-kutch.jpg", "rann-full-moon.jpg"],
      category: "nature"
    },
    {
      name: "Somnath Temple",
      id: "somnath-temple",
      description: "One of the twelve Jyotirlinga shrines of Lord Shiva, located on the Arabian Sea coast. The temple has been destroyed and rebuilt multiple times throughout history.",
      history: "The Somnath Temple has ancient origins mentioned in the Rig Veda. The temple was destroyed multiple times by invaders including Mahmud of Ghazni (1026 CE) and rebuilt each time. The current structure was built in 1951 after India's independence, with the foundation stone laid by Sardar Vallabhbhai Patel.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Diu airport (63 km). Well connected by road and rail from major Gujarat cities",
      nearbyAttractions: [
        "Bhalka Tirth - Where Lord Krishna was shot",
        "Triveni Sangam - Confluence of three rivers",
        "Somnath Beach - Pristine coastline",
        "Prabhas Patan Museum - Archaeological artifacts"
      ],
      specialFeatures: [
        "One of twelve sacred Jyotirlinga temples",
        "Beautiful Arabian Sea location",
        "Sound and light show in evenings",
        "Rich historical and mythological significance",
        "Modern temple architecture"
      ],
      entryFee: "Free entry. Sound and light show: ₹25",
      timings: "6 AM - 9 PM. Sound and light show: 8 PM",
      images: ["somnath-temple.jpg", "somnath-arabian-sea.jpg"],
      category: "religious"
    },
    {
      name: "Gir National Park",
      id: "gir-national-park",
      description: "The last refuge of the Asiatic lions, this national park is home to over 500 lions and diverse wildlife in the dry deciduous forests of Gujarat.",
      history: "Gir was established as a wildlife sanctuary in 1965 and became a national park in 1975. The area was once the hunting ground of the Nawabs of Junagadh. When the Asiatic lion population dropped to just 20 in the early 1900s, conservation efforts began. Today, it's the only place in the world where Asiatic lions live in the wild.",
      bestTimeToVisit: "December to March (cool weather, best wildlife viewing)",
      howToReach: "Rajkot airport (160 km). Nearest railway station: Junagadh (65 km)",
      nearbyAttractions: [
        "Somnath Temple - Sacred Jyotirlinga shrine",
        "Junagadh Fort - Historic hilltop fort",
        "Girnar Hills - Sacred Jain pilgrimage site",
        "Sasan Gir - Gateway town to the park"
      ],
      specialFeatures: [
        "Only home of wild Asiatic lions",
        "Over 500 lions in natural habitat",
        "Diverse wildlife including leopards and deer",
        "Jeep safaris and nature walks",
        "Conservation success story"
      ],
      entryFee: "₹60 for Indians, ₹400 for foreigners. Safari charges extra",
      timings: "6:30 AM - 6 PM. Closed during monsoon (June-October)",
      images: ["gir-lions.jpg", "gir-national-park.jpg"],
      category: "nature"
    }
  ],
  karnataka: [
    {
      name: "Hampi",
      id: "hampi",
      description: "A UNESCO World Heritage Site showcasing the ruins of the magnificent Vijayanagara Empire. This ancient city features stunning temple complexes, royal structures, and boulder landscapes that transport visitors back to the 14th-16th centuries.",
      history: "Hampi was the capital of the Vijayanagara Empire from 1336 to 1565 CE, one of the greatest Hindu empires in Indian history. At its peak, it was one of the largest cities in the world with a population of over 500,000. The city was known for its wealth, derived from trade in spices and cotton. In 1565, the city was conquered and destroyed by a coalition of Deccan Sultanates in the Battle of Talikota. The ruins were rediscovered in 1800 by Colonel Colin Mackenzie and declared a UNESCO World Heritage Site in 1986.",
      bestTimeToVisit: "October to March (pleasant weather), avoid summer heat",
      howToReach: "Hubli airport (143 km) or Bellary airport (64 km). Hospet railway station (13 km) is the nearest railhead.",
      nearbyAttractions: [
        "Anegundi - Ancient village across Tungabhadra River",
        "Daroji Sloth Bear Sanctuary - Wildlife sanctuary",
        "Tungabhadra Dam - Major irrigation project",
        "Sandur - Iron ore mining town with palace"
      ],
      specialFeatures: [
        "Virupaksha Temple - Still active 7th-century temple",
        "Stone Chariot - Iconic symbol of Hampi",
        "Royal Enclosure - Remains of palaces and administrative buildings",
        "Unique boulder landscape and rock formations",
        "Coracle rides on Tungabhadra River"
      ],
      entryFee: "₹40 for Indians, ₹600 for foreigners. Some temples free",
      timings: "Sunrise to sunset. Temples: 6 AM - 6 PM",
      images: ["hampi-stone-chariot.jpg", "hampi-virupaksha.jpg"],
      category: "heritage"
    },
    {
      name: "Mysore Palace",
      id: "mysore-palace",
      description: "The official residence of the Wadiyar dynasty, this Indo-Saracenic palace is famous for its grandeur, intricate architecture, and spectacular illumination during Dussehra festival.",
      history: "The current Mysore Palace was built between 1912-1940, replacing an earlier wooden palace that was destroyed by fire. It served as the seat of the Kingdom of Mysore for nearly six centuries. The palace showcases a blend of Hindu, Muslim, Rajput, and Gothic architectural styles. It's one of the most visited monuments in India after the Taj Mahal.",
      bestTimeToVisit: "October to March (pleasant weather). Dussehra season for special illumination",
      howToReach: "Mysore airport (10 km). Well connected by train and road from Bangalore",
      nearbyAttractions: [
        "Chamundi Hills - Temple atop hill with city views",
        "Brindavan Gardens - Musical fountain gardens",
        "St. Philomena's Church - Neo-Gothic architecture",
        "Mysore Zoo - One of India's oldest zoos"
      ],
      specialFeatures: [
        "Indo-Saracenic architectural masterpiece",
        "Spectacular illumination with 100,000 bulbs",
        "Royal artifacts and paintings collection",
        "Durbar Hall with stained glass ceiling",
        "Annual Dussehra celebrations"
      ],
      entryFee: "₹70 for Indians, ₹200 for foreigners. Audio guide extra",
      timings: "10 AM - 5:30 PM. Illumination: 7 PM - 7:45 PM (Sundays and holidays)",
      images: ["mysore-palace.jpg", "mysore-palace-illuminated.jpg"],
      category: "heritage"
    },
    {
      name: "Coorg Coffee Plantations",
      id: "coorg-coffee-plantations",
      description: "The 'Scotland of India' known for its lush coffee plantations, misty hills, and pleasant climate. Coorg produces some of India's finest coffee and offers plantation stays.",
      history: "Coffee cultivation in Coorg began in the 1850s when the British introduced coffee plants from Yemen. The region's climate and soil proved ideal for coffee growing. Coorg became one of India's largest coffee-producing regions, known for both Arabica and Robusta varieties. The area also has a rich military tradition with the Kodava community.",
      bestTimeToVisit: "October to March (pleasant weather). Coffee harvest season: November to February",
      howToReach: "Mangalore airport (160 km). Well connected by road from Bangalore and Mysore",
      nearbyAttractions: [
        "Abbey Falls - Scenic waterfall in coffee estate",
        "Raja's Seat - Sunset viewpoint",
        "Namdroling Monastery - Tibetan Buddhist monastery",
        "Dubare Elephant Camp - Elephant interaction experience"
      ],
      specialFeatures: [
        "Extensive coffee plantations",
        "Plantation stay experiences",
        "Coffee tasting and processing tours",
        "Misty hill station atmosphere",
        "Rich Kodava culture and cuisine"
      ],
      entryFee: "Plantation visits: ₹50-200. Stays and tours vary",
      timings: "Plantation tours: 9 AM - 5 PM",
      images: ["coorg-coffee-plantations.jpg", "coorg-misty-hills.jpg"],
      category: "nature"
    }
  ],
  // Adding comprehensive data for all remaining states and union territories
  "andhra-pradesh": [
    {
      name: "Tirupati Balaji Temple",
      id: "tirupati-balaji",
      description: "One of the richest and most visited temples in the world, dedicated to Lord Venkateswara. Located atop the Tirumala hills, it attracts millions of devotees annually.",
      history: "The temple has ancient origins dating back to the 9th century CE, though the current structure was built during the Vijayanagara period. According to legend, Lord Vishnu manifested here as Venkateswara. The temple's wealth comes from centuries of donations and is managed by the Tirumala Tirupati Devasthanams.",
      bestTimeToVisit: "September to March (pleasant weather)",
      howToReach: "Tirupati airport (15 km). Well connected by train and road from major South Indian cities",
      nearbyAttractions: [
        "Sri Venkateswara National Park - Wildlife sanctuary",
        "Chandragiri Fort - Historic fort with palace",
        "Kapila Theertham - Sacred waterfall",
        "ISKCON Temple - Modern temple complex"
      ],
      specialFeatures: [
        "Richest temple in the world",
        "Daily darshan for thousands of devotees",
        "Famous laddu prasadam",
        "Hair tonsuring tradition",
        "Ancient Dravidian architecture"
      ],
      entryFee: "Free entry. Special darshan tickets available",
      timings: "5:30 AM - 12 AM (varies by day)",
      images: ["tirupati-temple.jpg", "tirumala-hills.jpg"],
      category: "religious"
    },
    {
      name: "Araku Valley",
      id: "araku-valley",
      description: "A picturesque hill station known for its coffee plantations, tribal culture, and scenic train journey through the Eastern Ghats.",
      history: "Araku Valley has been inhabited by various tribal communities for centuries. The area was developed as a hill station during the British period. The famous train route through the valley was built in the 1990s and is considered one of India's most scenic railway journeys.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Visakhapatnam airport (115 km). Famous train journey from Visakhapatnam",
      nearbyAttractions: [
        "Borra Caves - Million-year-old limestone caves",
        "Tribal Museum - Showcasing local tribal culture",
        "Coffee Plantations - Organic coffee estates",
        "Katiki Waterfalls - Scenic waterfall"
      ],
      specialFeatures: [
        "Scenic train journey through tunnels and bridges",
        "Rich tribal culture and handicrafts",
        "Organic coffee plantations",
        "Pleasant hill station climate",
        "Beautiful valley views"
      ],
      entryFee: "No entry fee. Train and attraction charges apply",
      timings: "Valley accessible 24/7. Attractions: 9 AM - 6 PM",
      images: ["araku-valley.jpg", "araku-train.jpg"],
      category: "nature"
    },
    {
      name: "Lepakshi Temple",
      id: "lepakshi-temple",
      description: "A 16th-century temple famous for its hanging pillar, intricate sculptures, and the largest Nandi statue in the world.",
      history: "Built in 1530 CE during the Vijayanagara period by brothers Virupanna and Veeranna, the temple is dedicated to Lord Veerabhadra. The name 'Lepakshi' comes from the Telugu words 'Le Pakshi' meaning 'Rise Bird', referring to the mythological Jatayu from Ramayana.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Bangalore airport (120 km). Located on Bangalore-Hyderabad highway",
      nearbyAttractions: [
        "Nandi statue - World's largest monolithic Nandi",
        "Hanging pillar - Architectural marvel",
        "Kalyana Mandapa - Wedding hall with paintings",
        "Jatayu sculpture - Mythological bird carving"
      ],
      specialFeatures: [
        "Hanging pillar that doesn't touch the ground",
        "Largest monolithic Nandi statue",
        "Exquisite Vijayanagara architecture",
        "Beautiful ceiling paintings",
        "Mythological significance"
      ],
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      timings: "6 AM - 6 PM",
      images: ["lepakshi-temple.jpg", "lepakshi-nandi.jpg"],
      category: "heritage"
    }
  ],
  telangana: [
    {
      name: "Charminar",
      id: "charminar",
      description: "The iconic monument and mosque built in 1591, symbolizing Hyderabad city. Famous for its four minarets and the bustling markets around it.",
      history: "Built in 1591 by Sultan Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, to commemorate the founding of Hyderabad and the end of a deadly plague. The structure combines Islamic and Persian architectural styles and has been the symbol of Hyderabad for over 400 years.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Hyderabad airport (22 km). Located in the old city, accessible by metro and bus",
      nearbyAttractions: [
        "Laad Bazaar - Famous for bangles and pearls",
        "Mecca Masjid - One of India's largest mosques",
        "Salar Jung Museum - Antique and art collection",
        "Chowmahalla Palace - Nizams' palace complex"
      ],
      specialFeatures: [
        "Four iconic minarets with balconies",
        "Mosque on the upper floor",
        "Bustling markets at the base",
        "Symbol of Hyderabad city",
        "Indo-Islamic architecture"
      ],
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      timings: "9:30 AM - 5:30 PM",
      images: ["charminar.jpg", "charminar-night.jpg"],
      category: "heritage"
    },
    {
      name: "Golconda Fort",
      id: "golconda-fort",
      description: "A magnificent fortress known for its acoustic system, diamond mines, and architectural brilliance. Once the capital of the Qutb Shahi dynasty.",
      history: "Originally built by the Kakatiya dynasty in the 13th century, Golconda was later expanded by the Qutb Shahi rulers in the 16th-17th centuries. The fort was famous for its diamond mines, including the Kohinoor and Hope diamonds. It was considered impregnable until Aurangzeb conquered it in 1687 after an 8-month siege.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Hyderabad airport (20 km). Well connected by road from city center",
      nearbyAttractions: [
        "Qutb Shahi Tombs - Royal necropolis",
        "Ibrahim Bagh - Historic garden",
        "Taramati Baradari - Cultural center",
        "Hussain Sagar Lake - Heart-shaped lake"
      ],
      specialFeatures: [
        "Acoustic system for communication",
        "Historic diamond mining area",
        "Impressive fortification walls",
        "Sound and light show",
        "Panoramic city views from top"
      ],
      entryFee: "₹25 for Indians, ₹300 for foreigners. Sound and light show extra",
      timings: "9 AM - 5:30 PM. Sound and light show: 7 PM",
      images: ["golconda-fort.jpg", "golconda-acoustic.jpg"],
      category: "heritage"
    },
    {
      name: "Ramoji Film City",
      id: "ramoji-film-city",
      description: "The world's largest film studio complex, certified by Guinness World Records. A complete entertainment destination with film sets, gardens, and shows.",
      history: "Established in 1996 by media mogul Ramoji Rao, the film city was built on 1,666 acres. It was designed to provide a complete filmmaking infrastructure and has since become a major tourist attraction. The complex has been used for thousands of films in various Indian languages.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Hyderabad airport (25 km). Located on Hyderabad-Vijayawada highway",
      nearbyAttractions: [
        "Annapurna Studios - Another film studio",
        "Outer Ring Road - Scenic drive",
        "Pocharam Wildlife Sanctuary - Nature reserve",
        "Bhongir Fort - Historic hilltop fort"
      ],
      specialFeatures: [
        "World's largest film studio complex",
        "Multiple film sets and locations",
        "Entertainment shows and rides",
        "Beautiful gardens and landscapes",
        "Film production facilities"
      ],
      entryFee: "₹1,200 for day tour. Various packages available",
      timings: "9 AM - 5:30 PM",
      images: ["ramoji-film-city.jpg", "ramoji-sets.jpg"],
      category: "modern"
    }
  ],
  odisha: [
    {
      name: "Jagannath Temple Puri",
      id: "jagannath-temple-puri",
      description: "One of the four sacred Char Dham pilgrimage sites, famous for the annual Rath Yatra festival where massive chariots carry the deities through the streets.",
      history: "The temple was built in the 12th century by King Anantavarman Chodaganga Deva. The temple is dedicated to Lord Jagannath (a form of Lord Krishna), along with his siblings Balabhadra and Subhadra. The annual Rath Yatra festival has been celebrated for over 900 years and attracts millions of devotees.",
      bestTimeToVisit: "October to March (pleasant weather). Rath Yatra in June-July",
      howToReach: "Bhubaneswar airport (60 km). Well connected by train and road",
      nearbyAttractions: [
        "Puri Beach - Sacred beach for pilgrims",
        "Gundicha Temple - Destination of Rath Yatra",
        "Chilika Lake - Asia's largest brackish water lagoon",
        "Konark Sun Temple - UNESCO World Heritage Site"
      ],
      specialFeatures: [
        "One of four sacred Char Dham sites",
        "Famous Rath Yatra festival",
        "Massive wooden chariots",
        "Sacred mahaprasad food offering",
        "Kalinga architectural style"
      ],
      entryFee: "Free entry for Hindus. Non-Hindus not allowed inside main temple",
      timings: "5 AM - 12 AM (varies by season)",
      images: ["jagannath-temple.jpg", "rath-yatra-puri.jpg"],
      category: "religious"
    },
    {
      name: "Konark Sun Temple",
      id: "konark-sun-temple",
      description: "A UNESCO World Heritage Site designed as a massive chariot with 24 wheels, dedicated to the Sun God. Known for its intricate stone carvings and architectural brilliance.",
      history: "Built in the 13th century (1250 CE) by King Narasimhadeva I of the Eastern Ganga dynasty, the temple was designed as a colossal chariot of the Sun God Surya. The temple took 12 years to complete and employed over 1,200 artisans. Much of the temple has collapsed over time, but the remaining structure showcases exceptional Kalinga architecture.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Bhubaneswar airport (65 km). Well connected by road from Puri and Bhubaneswar",
      nearbyAttractions: [
        "Chandrabhaga Beach - Pristine beach near temple",
        "Archaeological Museum - Temple artifacts",
        "Ramchandi Temple - Beachside temple",
        "Kuruma - Traditional fishing village"
      ],
      specialFeatures: [
        "UNESCO World Heritage Site",
        "Designed as Sun God's chariot with 24 wheels",
        "Intricate erotic sculptures",
        "Exceptional Kalinga architecture",
        "Sundial functionality of wheels"
      ],
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      timings: "6 AM - 8 PM",
      images: ["konark-sun-temple.jpg", "konark-wheel.jpg"],
      category: "heritage"
    },
    {
      name: "Chilika Lake",
      id: "chilika-lake",
      description: "Asia's largest brackish water lagoon, famous for migratory birds, dolphins, and fishing communities. A biodiversity hotspot and Ramsar wetland site.",
      history: "Chilika Lake has been mentioned in ancient texts and has been a vital ecosystem for over 1,000 years. The lake supports numerous fishing communities and has been designated as a Ramsar site for its international importance to wetland conservation. It's also famous for Irrawaddy dolphins.",
      bestTimeToVisit: "November to February (migratory bird season)",
      howToReach: "Bhubaneswar airport (100 km). Accessible from Puri and Bhubaneswar by road",
      nearbyAttractions: [
        "Kalijai Temple - Temple on an island",
        "Satapada - Dolphin watching point",
        "Nalaban Bird Sanctuary - Core area for birds",
        "Rambha - Scenic town on lake shore"
      ],
      specialFeatures: [
        "Asia's largest brackish water lagoon",
        "Over 160 species of migratory birds",
        "Irrawaddy dolphins",
        "Traditional fishing communities",
        "Ramsar wetland site"
      ],
      entryFee: "Boat rides: ₹50-500 depending on route",
      timings: "6 AM - 6 PM for boat rides",
      images: ["chilika-lake.jpg", "chilika-dolphins.jpg"],
      category: "nature"
    }
  ],
  assam: [
    {
      name: "Kaziranga National Park",
      id: "kaziranga-national-park",
      description: "A UNESCO World Heritage Site and home to two-thirds of the world's one-horned rhinoceros population. Also hosts tigers, elephants, and diverse wildlife.",
      history: "Established in 1905 by British officer Mary Curzon (wife of Viceroy Lord Curzon), Kaziranga was created to protect the declining one-horned rhinoceros population. It became a national park in 1974 and a UNESCO World Heritage Site in 1985. The park has been a conservation success story.",
      bestTimeToVisit: "November to April (dry season, best wildlife viewing)",
      howToReach: "Jorhat airport (97 km). Nearest railway station: Furkating (75 km)",
      nearbyAttractions: [
        "Majuli Island - World's largest river island",
        "Sivasagar - Historic Ahom capital",
        "Jorhat - Tea capital of Assam",
        "Gibbon Wildlife Sanctuary - Hoolock gibbon habitat"
      ],
      specialFeatures: [
        "Two-thirds of world's one-horned rhinos",
        "UNESCO World Heritage Site",
        "Tiger reserve with high density",
        "Elephant and wild buffalo populations",
        "Jeep and elephant safaris"
      ],
      entryFee: "₹50 for Indians, ₹500 for foreigners. Safari charges extra",
      timings: "7 AM - 5 PM. Closed during monsoon (May-October)",
      images: ["kaziranga-rhino.jpg", "kaziranga-elephant.jpg"],
      category: "nature"
    },
    {
      name: "Majuli Island",
      id: "majuli-island",
      description: "The world's largest river island on the Brahmaputra River, known for its Vaishnavite monasteries (satras), traditional arts, and unique culture.",
      history: "Majuli has been the cultural capital of Assamese civilization for over 500 years. It became prominent in the 16th century when saint-scholar Sankardeva established Vaishnavite monasteries here. The island has been gradually shrinking due to river erosion but remains a vital cultural center.",
      bestTimeToVisit: "October to March (pleasant weather, accessible by ferry)",
      howToReach: "Jorhat airport (20 km to ferry point). Ferry from Neemati Ghat to Kamalabari",
      nearbyAttractions: [
        "Kamalabari Satra - Famous Vaishnavite monastery",
        "Auniati Satra - Ancient monastery with artifacts",
        "Dakhinpat Satra - Traditional mask-making center",
        "Samaguri Satra - Mask and pottery village"
      ],
      specialFeatures: [
        "World's largest river island",
        "Vaishnavite monasteries and culture",
        "Traditional mask-making and pottery",
        "Unique Assamese neo-Vaishnavite tradition",
        "Seasonal island accessible by ferry"
      ],
      entryFee: "Ferry charges: ₹15. Satra visits usually free",
      timings: "Ferry services: 8 AM - 4 PM",
      images: ["majuli-island.jpg", "majuli-satra.jpg"],
      category: "cultural"
    },
    {
      name: "Kamakhya Temple",
      id: "kamakhya-temple",
      description: "One of the most important Shakti Peethas, dedicated to Goddess Kamakhya. Famous for tantric worship and the annual Ambubachi Mela.",
      history: "The temple has ancient origins, with the current structure built in the 17th century by the Koch dynasty. According to Hindu mythology, this is where the yoni (reproductive organ) of Goddess Sati fell when Lord Shiva carried her body. The temple is central to tantric worship in Hinduism.",
      bestTimeToVisit: "October to March (pleasant weather). Ambubachi Mela in June",
      howToReach: "Guwahati airport (20 km). Located on Nilachal Hills in Guwahati",
      nearbyAttractions: [
        "Umananda Temple - Temple on Peacock Island",
        "Assam State Museum - Cultural artifacts",
        "Brahmaputra River Cruise - Scenic boat ride",
        "Pobitora Wildlife Sanctuary - Rhino sanctuary"
      ],
      specialFeatures: [
        "Most important Shakti Peetha",
        "Center of tantric worship",
        "Annual Ambubachi Mela festival",
        "No idol, only a natural rock formation",
        "Hilltop location with river views"
      ],
      entryFee: "Free entry. Special darshan charges apply",
      timings: "5:30 AM - 1 PM, 2:30 PM - 5:30 PM",
      images: ["kamakhya-temple.jpg", "ambubachi-mela.jpg"],
      category: "religious"
    }
  ],
  bihar: [
    {
      name: "Bodh Gaya",
      id: "bodh-gaya",
      description: "The most sacred site in Buddhism where Prince Siddhartha attained enlightenment under the Bodhi Tree and became Buddha. A UNESCO World Heritage Site.",
      history: "Bodh Gaya has been a pilgrimage site since Buddha's enlightenment in 528 BCE. The Mahabodhi Temple was first built by Emperor Ashoka in the 3rd century BCE. The current structure dates to the 5th-6th centuries CE. The site was lost to history until British archaeologist Alexander Cunningham rediscovered it in the 19th century.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Gaya airport (17 km). Well connected by train and road from major cities",
      nearbyAttractions: [
        "Mahabodhi Temple - Main temple complex",
        "Bodhi Tree - Descendant of original tree",
        "Great Buddha Statue - 80-foot tall statue",
        "Various international monasteries"
      ],
      specialFeatures: [
        "Most sacred Buddhist pilgrimage site",
        "UNESCO World Heritage Site",
        "Original Bodhi Tree descendant",
        "International Buddhist monasteries",
        "Meditation and spiritual retreats"
      ],
      entryFee: "Free entry to most areas. Some monasteries may charge",
      timings: "5 AM - 9 PM",
      images: ["bodh-gaya-temple.jpg", "bodhi-tree.jpg"],
      category: "religious"
    },
    {
      name: "Nalanda University Ruins",
      id: "nalanda-university",
      description: "Ruins of the ancient world's first residential university, a UNESCO World Heritage Site that was a center of learning from 5th to 12th centuries.",
      history: "Nalanda was established in the 5th century CE and became one of the world's first residential universities. At its peak, it housed over 10,000 students and 2,000 teachers from across Asia. The university was destroyed by Turkish invader Bakhtiyar Khilji in 1193 CE. The ruins were excavated in the 19th and 20th centuries.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Patna airport (90 km). Well connected by road from Patna and Gaya",
      nearbyAttractions: [
        "Nalanda Archaeological Museum - Artifacts from excavations",
        "Hiuen Tsang Memorial Hall - Chinese traveler's memorial",
        "Pawapuri - Jain pilgrimage site",
        "Rajgir - Ancient capital with hot springs"
      ],
      specialFeatures: [
        "World's first residential university",
        "UNESCO World Heritage Site",
        "Ancient center of Buddhist learning",
        "Extensive archaeological remains",
        "International significance in education history"
      ],
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      timings: "9 AM - 5 PM",
      images: ["nalanda-ruins.jpg", "nalanda-excavation.jpg"],
      category: "heritage"
    },
    {
      name: "Rajgir",
      id: "rajgir",
      description: "An ancient city surrounded by hills, significant in both Buddhism and Jainism. Known for hot springs, ropeway, and the first Buddhist council site.",
      history: "Rajgir was the first capital of the Magadha kingdom and later became important in Buddhism when Buddha spent many years here. The first Buddhist council was held here after Buddha's death. The city is also sacred to Jains as it was visited by Mahavira. The hot springs have been mentioned in ancient texts.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Patna airport (100 km). Well connected by road and rail",
      nearbyAttractions: [
        "Griddhakuta Hill - Vulture's Peak where Buddha preached",
        "Venuvana - Bamboo grove monastery",
        "Ajatshatru Fort - Ancient fortification",
        "Japanese Peace Pagoda - Modern Buddhist monument"
      ],
      specialFeatures: [
        "Ancient capital of Magadha",
        "Sacred to both Buddhism and Jainism",
        "Natural hot springs",
        "Ropeway to hilltop",
        "First Buddhist council site"
      ],
      entryFee: "Various attractions have different fees. Hot springs: ₹10",
      timings: "Most sites: 6 AM - 6 PM",
      images: ["rajgir-hills.jpg", "rajgir-hot-springs.jpg"],
      category: "heritage"
    }
  ],
  jharkhand: [
    {
      name: "Betla National Park",
      id: "betla-national-park",
      description: "The first national park of Jharkhand, known for its tigers, elephants, and the historic Betla Fort within the park boundaries.",
      history: "Established in 1986, Betla National Park was carved out of the Palamau Tiger Reserve. The area has historical significance with the Betla Fort built by the Chero dynasty in the 16th century. The park represents the typical dry deciduous forests of the Chota Nagpur plateau.",
      bestTimeToVisit: "November to March (cool weather, best wildlife viewing)",
      howToReach: "Ranchi airport (160 km). Nearest railway station: Daltonganj (25 km)",
      nearbyAttractions: [
        "Betla Fort - 16th-century fort ruins",
        "Palamau Fort - Historic fort complex",
        "Lodh Falls - Scenic waterfall",
        "Netarhat - Hill station nearby"
      ],
      specialFeatures: [
        "Part of Palamau Tiger Reserve",
        "Historic Betla Fort within park",
        "Diverse wildlife including tigers and elephants",
        "Dry deciduous forest ecosystem",
        "Jeep safaris and nature walks"
      ],
      entryFee: "₹50 for Indians, ₹300 for foreigners. Safari charges extra",
      timings: "6 AM - 6 PM. Closed during monsoon",
      images: ["betla-national-park.jpg", "betla-fort.jpg"],
      category: "nature"
    },
    {
      name: "Hundru Falls",
      id: "hundru-falls",
      description: "A spectacular 98-meter waterfall on the Subarnarekha River, one of the highest waterfalls in Jharkhand, surrounded by dense forests.",
      history: "Hundru Falls has been a natural landmark for centuries, mentioned in local tribal folklore. The area around the falls has been inhabited by various tribal communities who consider it sacred. The falls gained prominence as a tourist destination after the formation of Jharkhand state.",
      bestTimeToVisit: "July to February (post-monsoon for full flow, winter for pleasant weather)",
      howToReach: "Ranchi airport (45 km). Well connected by road from Ranchi",
      nearbyAttractions: [
        "Jonha Falls - Another scenic waterfall",
        "Dassam Falls - Multi-tiered waterfall",
        "Ranchi Lake - Artificial lake in city",
        "Jagannath Temple Ranchi - Modern temple"
      ],
      specialFeatures: [
        "98-meter high waterfall",
        "Subarnarekha River source",
        "Dense forest surroundings",
        "Natural swimming pools",
        "Tribal cultural significance"
      ],
      entryFee: "₹10 for parking. No entry fee",
      timings: "6 AM - 6 PM",
      images: ["hundru-falls.jpg", "hundru-forest.jpg"],
      category: "nature"
    },
    {
      name: "Deoghar Baba Baidyanath Temple",
      id: "deoghar-temple",
      description: "One of the twelve Jyotirlingas, this temple complex is a major pilgrimage site dedicated to Lord Shiva, especially during the Shravan month.",
      history: "The temple has ancient origins with references in the Shiva Purana. The current structure was built and renovated by various rulers over centuries. The temple gained prominence during the Shravan Mela when millions of devotees carry holy water from the Ganges to offer to the Shiva lingam.",
      bestTimeToVisit: "October to March (pleasant weather). Shravan month (July-August) for festival",
      howToReach: "Deoghar airport (5 km). Well connected by train and road",
      nearbyAttractions: [
        "Nandan Pahar - Hill with amusement park",
        "Tapovan - Meditation caves",
        "Trikuta Parvat - Sacred hills",
        "Basukinath Temple - Another Shiva temple"
      ],
      specialFeatures: [
        "One of twelve sacred Jyotirlingas",
        "Major Shravan Mela pilgrimage",
        "Complex of 22 temples",
        "Millions of annual pilgrims",
        "Sacred Kanwar Yatra tradition"
      ],
      entryFee: "Free entry. Special darshan charges apply",
      timings: "4 AM - 11 PM",
      images: ["deoghar-temple.jpg", "shravan-mela.jpg"],
      category: "religious"
    }
  ],
  chhattisgarh: [
    {
      name: "Chitrakote Falls",
      id: "chitrakote-falls",
      description: "Known as the 'Niagara of India', this horseshoe-shaped waterfall on the Indravati River is the broadest waterfall in India.",
      history: "Chitrakote Falls has been known to local tribal communities for centuries and features in their folklore. The falls gained wider recognition in recent decades as Chhattisgarh developed its tourism infrastructure. The area is also significant for its tribal culture and natural beauty.",
      bestTimeToVisit: "July to March (post-monsoon for full flow, winter for pleasant weather)",
      howToReach: "Raipur airport (300 km). Nearest railway station: Jagdalpur (38 km)",
      nearbyAttractions: [
        "Tirathgarh Falls - Multi-tiered waterfall",
        "Kanger Valley National Park - Wildlife sanctuary",
        "Anthropological Museum Jagdalpur - Tribal culture",
        "Danteshwari Temple - Ancient goddess temple"
      ],
      specialFeatures: [
        "Broadest waterfall in India",
        "Horseshoe-shaped cascade",
        "Indravati River source",
        "Tribal cultural significance",
        "Natural rainbow formation"
      ],
      entryFee: "₹25 for Indians, ₹200 for foreigners",
      timings: "6 AM - 6 PM",
      images: ["chitrakote-falls.jpg", "chitrakote-rainbow.jpg"],
      category: "nature"
    },
    {
      name: "Kanger Valley National Park",
      id: "kanger-valley-national-park",
      description: "A biosphere reserve known for its limestone caves, underground rivers, and diverse wildlife including the rare hill myna bird.",
      history: "Established in 1982, Kanger Valley National Park is one of the most dense and spectacular national parks in India. The area has been inhabited by tribal communities for centuries. The park is famous for its Kutumsar and Kailash caves, which were discovered in recent decades.",
      bestTimeToVisit: "November to May (dry season, caves accessible)",
      howToReach: "Raipur airport (350 km). Nearest town: Jagdalpur (35 km)",
      nearbyAttractions: [
        "Kutumsar Caves - Limestone cave system",
        "Kailash Caves - Underground cave network",
        "Tirathgarh Falls - Scenic waterfall",
        "Bastar Palace - Tribal royal heritage"
      ],
      specialFeatures: [
        "UNESCO Biosphere Reserve",
        "Spectacular limestone caves",
        "Underground rivers",
        "Rare hill myna birds",
        "Dense tropical forests"
      ],
      entryFee: "₹50 for Indians, ₹300 for foreigners. Cave entry extra",
      timings: "8 AM - 5 PM",
      images: ["kanger-valley.jpg", "kutumsar-caves.jpg"],
      category: "nature"
    },
    {
      name: "Sirpur Archaeological Site",
      id: "sirpur-archaeological",
      description: "An ancient town with Buddhist, Hindu, and Jain monuments dating from 5th to 12th centuries, showcasing the region's rich historical heritage.",
      history: "Sirpur was the capital of South Kosala kingdom from 5th to 8th centuries CE. The town flourished under various dynasties and became a major center of learning and trade. Chinese traveler Hiuen Tsang visited Sirpur in the 7th century. The site was rediscovered in the 20th century and extensive excavations have revealed numerous temples and monasteries.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Raipur airport (78 km). Well connected by road from Raipur",
      nearbyAttractions: [
        "Laxman Temple - 7th-century brick temple",
        "Buddha Vihar - Ancient Buddhist monastery",
        "Gandheshwar Temple - Shiva temple ruins",
        "Mahamaya Temple - Archaeological remains"
      ],
      specialFeatures: [
        "Ancient capital of South Kosala",
        "Multi-religious archaeological site",
        "7th-century Laxman Temple",
        "Buddhist monastery ruins",
        "Mentioned by Chinese traveler Hiuen Tsang"
      ],
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      timings: "9 AM - 5 PM",
      images: ["sirpur-laxman-temple.jpg", "sirpur-ruins.jpg"],
      category: "heritage"
    }
  ],
  "madhya-pradesh": [
    {
      name: "Khajuraho Temples",
      id: "khajuraho-temples",
      description: "A UNESCO World Heritage Site famous for its intricate sculptures and erotic art, representing the pinnacle of medieval Indian temple architecture.",
      history: "Built between 950-1050 CE by the Chandela dynasty, Khajuraho originally had 85 temples, of which 25 survive today. The temples were 'lost' for centuries until British engineer T.S. Burt rediscovered them in 1838. The erotic sculptures represent only 10% of the total carvings and symbolize the celebration of life and spiritual liberation.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Khajuraho airport (5 km). Well connected by train and road",
      nearbyAttractions: [
        "Kandariya Mahadev Temple - Largest temple",
        "Lakshmana Temple - Vishnu temple",
        "Archaeological Museum - Temple artifacts",
        "Panna National Park - Tiger reserve nearby"
      ],
      specialFeatures: [
        "UNESCO World Heritage Site",
        "Intricate erotic and spiritual sculptures",
        "Chandela dynasty architecture",
        "25 surviving temples from original 85",
        "Annual dance festival venue"
      ],
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      timings: "Sunrise to sunset",
      images: ["khajuraho-temples.jpg", "khajuraho-sculptures.jpg"],
      category: "heritage"
    },
    {
      name: "Bandhavgarh National Park",
      id: "bandhavgarh-national-park",
      description: "One of India's premier tiger reserves with the highest density of tigers in the world, also known for its ancient fort and diverse wildlife.",
      history: "The area has been a hunting preserve of the Maharajas of Rewa for centuries. It became a national park in 1968 and a tiger reserve in 1993. The park is famous for being the home of the white tigers of Rewa, the last of which was captured here in 1951. The ancient Bandhavgarh Fort within the park dates back 2,000 years.",
      bestTimeToVisit: "October to June (park open season)",
      howToReach: "Jabalpur airport (200 km). Nearest railway station: Umaria (35 km)",
      nearbyAttractions: [
        "Bandhavgarh Fort - Ancient hilltop fort",
        "Baghel Museum - Royal artifacts",
        "Shesh Shaiya - Vishnu statue",
        "Climber's Point - Scenic viewpoint"
      ],
      specialFeatures: [
        "Highest tiger density in India",
        "Ancient Bandhavgarh Fort",
        "Former home of white tigers",
        "Diverse wildlife and bird species",
        "Excellent tiger sighting opportunities"
      ],
      entryFee: "₹80 for Indians, ₹1,000 for foreigners. Safari charges extra",
      timings: "6 AM - 11 AM, 2:30 PM - 6 PM",
      images: ["bandhavgarh-tiger.jpg", "bandhavgarh-fort.jpg"],
      category: "nature"
    },
    {
      name: "Sanchi Stupa",
      id: "sanchi-stupa",
      description: "A UNESCO World Heritage Site with the oldest stone structures in India, built by Emperor Ashoka in the 3rd century BCE to house Buddha's relics.",
      history: "Sanchi was built by Emperor Ashoka in the 3rd century BCE as a Buddhist complex. The Great Stupa was originally a simple brick structure, later enlarged and encased in stone. The site was abandoned in the 13th century and rediscovered by British archaeologist Alexander Cunningham in 1818. The intricate gateways (toranas) were added in the 1st century BCE.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Bhopal airport (46 km). Nearest railway station: Sanchi (1 km)",
      nearbyAttractions: [
        "Archaeological Museum - Buddhist artifacts",
        "Udayagiri Caves - Rock-cut caves",
        "Vidisha - Ancient city nearby",
        "Heliodorus Pillar - Greek ambassador's pillar"
      ],
      specialFeatures: [
        "UNESCO World Heritage Site",
        "Oldest stone structures in India",
        "Built by Emperor Ashoka",
        "Intricate carved gateways (toranas)",
        "Important Buddhist pilgrimage site"
      ],
      entryFee: "₹30 for Indians, ₹500 for foreigners",
      timings: "Sunrise to sunset",
      images: ["sanchi-stupa.jpg", "sanchi-torana.jpg"],
      category: "heritage"
    }
  ],
  "uttar-pradesh": [
    {
      name: "Taj Mahal",
      id: "taj-mahal-up",
      description: "One of the Seven Wonders of the World, this ivory-white marble mausoleum is a symbol of eternal love. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it represents the pinnacle of Mughal architecture.",
      history: "The Taj Mahal was commissioned in 1632 by Mughal Emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal, who died during childbirth. Construction took approximately 22 years (1632-1654) and employed thousands of artisans and craftsmen from across the empire and Central Asia. The main architect is believed to be Ustad Ahmad Lahauri. The complex represents the finest example of Mughal architecture, combining elements from Islamic, Persian, Ottoman Turkish, and Indian architectural styles.",
      bestTimeToVisit: "October to March (cool weather), avoid monsoon and summer",
      howToReach: "Agra airport (13 km). Well connected by train from Delhi (3 hours) and other major cities.",
      nearbyAttractions: [
        "Agra Fort - UNESCO World Heritage red sandstone fort",
        "Fatehpur Sikri - Abandoned Mughal city",
        "Itimad-ud-Daulah's Tomb - 'Baby Taj' marble mausoleum",
        "Mehtab Bagh - Garden with Taj Mahal views"
      ],
      specialFeatures: [
        "Perfect symmetrical design with central dome",
        "Intricate inlay work with precious and semi-precious stones",
        "Calligraphy from the Quran adorning the walls",
        "Optical illusion - appears larger when approaching",
        "Changes color throughout the day with sunlight"
      ],
      entryFee: "₹50 for Indians, ₹1,100 for foreigners. Additional ₹200 for main mausoleum",
      timings: "Sunrise to sunset (closed on Fridays). Night viewing on full moon nights",
      images: ["taj-mahal.jpg", "taj-mahal-sunset.jpg"],
      category: "heritage"
    },
    {
      name: "Varanasi Ghats",
      id: "varanasi-ghats",
      description: "The spiritual capital of India with over 80 ghats along the Ganges River. Witness ancient rituals, evening aarti ceremonies, and the eternal cycle of life and death.",
      history: "Varanasi is one of the world's oldest continuously inhabited cities, with a history spanning over 3,000 years. The ghats were built over centuries by various rulers and wealthy merchants. The city has been a center of learning and spirituality since ancient times, mentioned in Buddhist and Hindu texts. Mark Twain called it 'older than history, older than tradition, older even than legend.'",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Varanasi airport (25 km). Well connected by train and road from major cities",
      nearbyAttractions: [
        "Kashi Vishwanath Temple - Sacred Shiva temple",
        "Sarnath - Where Buddha gave his first sermon",
        "Banaras Hindu University - Premier educational institution",
        "Ramnagar Fort - Maharaja's palace across the river"
      ],
      specialFeatures: [
        "Over 80 ghats along the Ganges",
        "Daily Ganga Aarti ceremony",
        "Ancient spiritual traditions",
        "Boat rides at sunrise and sunset",
        "Center of Hindu pilgrimage"
      ],
      entryFee: "Free to visit ghats. Boat rides: ₹100-500",
      timings: "24/7 accessible. Aarti: 6:45 PM",
      images: ["varanasi-ghats.jpg", "ganga-aarti.jpg"],
      category: "religious"
    },
    {
      name: "Fatehpur Sikri",
      id: "fatehpur-sikri",
      description: "A UNESCO World Heritage Site, this abandoned Mughal city built by Emperor Akbar showcases Indo-Islamic architecture and was the capital for 14 years.",
      history: "Built by Emperor Akbar between 1571-1585, Fatehpur Sikri served as the Mughal capital for 14 years before being abandoned due to water scarcity. The city was built to honor Sufi saint Sheikh Salim Chishti, who predicted the birth of Akbar's son. The architecture represents a unique blend of Hindu, Islamic, and Persian styles, reflecting Akbar's policy of religious tolerance.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Agra airport (55 km). Well connected by road from Agra and Delhi",
      nearbyAttractions: [
        "Buland Darwaza - Victory gate",
        "Jama Masjid - Grand mosque",
        "Panch Mahal - Five-story palace",
        "Sheikh Salim Chishti's Tomb - Sufi saint's shrine"
      ],
      specialFeatures: [
        "UNESCO World Heritage Site",
        "Abandoned Mughal capital",
        "Indo-Islamic architectural fusion",
        "Buland Darwaza - largest gateway in the world",
        "Perfectly preserved 16th-century city"
      ],
      entryFee: "₹50 for Indians, ₹610 for foreigners",
      timings: "Sunrise to sunset",
      images: ["fatehpur-sikri.jpg", "buland-darwaza.jpg"],
      category: "heritage"
    }
  ],
  uttarakhand: [
    {
      name: "Valley of Flowers",
      id: "valley-of-flowers",
      description: "A UNESCO World Heritage Site and national park known for its meadows of endemic alpine flowers and diverse flora, nestled in the Himalayas.",
      history: "The Valley of Flowers was discovered in 1931 by British mountaineer Frank S. Smythe. Local legends speak of fairies and supernatural beings inhabiting the valley. It was declared a national park in 1982 and a UNESCO World Heritage Site in 2005. The valley has been mentioned in Hindu mythology and is considered sacred by locals.",
      bestTimeToVisit: "July to September (flower blooming season)",
      howToReach: "Jolly Grant Airport Dehradun (295 km). Trek from Govindghat via Ghangaria",
      nearbyAttractions: [
        "Hemkund Sahib - Sikh pilgrimage site",
        "Badrinath Temple - Sacred Hindu shrine",
        "Mana Village - Last Indian village",
        "Nanda Devi National Park - Adjacent biosphere reserve"
      ],
      specialFeatures: [
        "UNESCO World Heritage Site",
        "Over 600 species of flowers",
        "Endemic Himalayan flora",
        "Trekking destination",
        "Part of Nanda Devi Biosphere Reserve"
      ],
      entryFee: "₹150 for Indians, ₹600 for foreigners. Trekking permits required",
      timings: "Valley open July to September only",
      images: ["valley-of-flowers.jpg", "himalayan-flowers.jpg"],
      category: "nature"
    },
    {
      name: "Rishikesh",
      id: "rishikesh",
      description: "The 'Yoga Capital of the World' and gateway to the Himalayas, famous for its ashrams, adventure sports, and spiritual significance on the Ganges.",
      history: "Rishikesh has been a spiritual center for thousands of years, mentioned in ancient Hindu scriptures. The city gained international fame when The Beatles visited Maharishi Mahesh Yogi's ashram in 1968. It has been a pilgrimage site and center for yoga and meditation, attracting spiritual seekers from around the world.",
      bestTimeToVisit: "September to November and February to May (pleasant weather)",
      howToReach: "Jolly Grant Airport Dehradun (35 km). Well connected by train and road",
      nearbyAttractions: [
        "Laxman Jhula - Suspension bridge",
        "Ram Jhula - Another iconic bridge",
        "Parmarth Niketan - Famous ashram",
        "Beatles Ashram - Abandoned meditation center"
      ],
      specialFeatures: [
        "Yoga capital of the world",
        "Adventure sports hub",
        "Spiritual ashrams and meditation centers",
        "White water rafting on Ganges",
        "Gateway to Char Dham pilgrimage"
      ],
      entryFee: "Free to visit. Activity charges vary",
      timings: "24/7 accessible. Ganga Aarti: 6 PM",
      images: ["rishikesh-ganges.jpg", "laxman-jhula.jpg"],
      category: "religious"
    },
    {
      name: "Kedarnath Temple",
      id: "kedarnath-temple",
      description: "One of the twelve Jyotirlingas and part of the Char Dham pilgrimage, located at 3,583 meters altitude in the Himalayas.",
      history: "The temple is believed to have been built by the Pandavas and later revived by Adi Shankaracharya in the 8th century. According to legend, the Pandavas sought Lord Shiva's blessings here after the Kurukshetra war. The temple has survived numerous natural calamities, including the devastating 2013 floods, and remains a symbol of faith and resilience.",
      bestTimeToVisit: "May to June and September to October (temple open season)",
      howToReach: "Jolly Grant Airport Dehradun (239 km to Gaurikund). 16 km trek from Gaurikund",
      nearbyAttractions: [
        "Gaurikund - Starting point of trek",
        "Vasuki Tal - High altitude lake",
        "Gandhi Sarovar - Sacred lake",
        "Chorabari Tal - Glacier lake"
      ],
      specialFeatures: [
        "One of twelve Jyotirlingas",
        "Part of Char Dham pilgrimage",
        "Highest Jyotirlinga temple",
        "Survived 2013 Kedarnath floods",
        "Challenging high-altitude trek"
      ],
      entryFee: "Free entry. Helicopter services available",
      timings: "6 AM - 7 PM (when temple is open)",
      images: ["kedarnath-temple.jpg", "kedarnath-mountains.jpg"],
      category: "religious"
    }
  ],
  "himachal-pradesh": [
    {
      name: "Shimla",
      id: "shimla",
      description: "The former summer capital of British India, known for its colonial architecture, toy train, and pleasant hill station climate.",
      history: "Shimla was developed by the British as a summer retreat in the 1820s and became the summer capital of British India in 1864. The city was named after the goddess Shyamala Devi. The famous Kalka-Shimla Railway, built in 1903, is now a UNESCO World Heritage Site. The city played a crucial role in India's independence movement.",
      bestTimeToVisit: "March to June and September to November (pleasant weather)",
      howToReach: "Shimla airport (23 km). Famous toy train from Kalka",
      nearbyAttractions: [
        "Mall Road - Main shopping street",
        "Christ Church - Neo-Gothic architecture",
        "Jakhu Temple - Hanuman temple on hilltop",
        "Kufri - Nearby hill station"
      ],
      specialFeatures: [
        "Former British summer capital",
        "UNESCO World Heritage toy train",
        "Colonial architecture",
        "Pleasant hill station climate",
        "Mall Road shopping and dining"
      ],
      entryFee: "No entry fee for city. Toy train charges apply",
      timings: "City accessible 24/7. Toy train: Multiple daily services",
      images: ["shimla-mall-road.jpg", "kalka-shimla-train.jpg"],
      category: "heritage"
    },
    {
      name: "Manali",
      id: "manali",
      description: "A popular hill station and adventure sports destination in the Kullu Valley, gateway to Ladakh and known for its scenic beauty.",
      history: "Manali is named after the Hindu sage Manu, who is believed to have recreated human life here after a great flood. The town has been a trading post on the ancient trade route to Ladakh and Central Asia. It gained popularity as a tourist destination in the 20th century and became famous among backpackers and adventure enthusiasts.",
      bestTimeToVisit: "March to June and September to November (pleasant weather)",
      howToReach: "Bhuntar airport (50 km). Well connected by road from Delhi and Chandigarh",
      nearbyAttractions: [
        "Rohtang Pass - High altitude mountain pass",
        "Solang Valley - Adventure sports destination",
        "Hadimba Temple - Ancient wooden temple",
        "Old Manali - Backpacker hub"
      ],
      specialFeatures: [
        "Gateway to Ladakh",
        "Adventure sports hub",
        "Scenic Kullu Valley location",
        "Popular backpacker destination",
        "Base for high-altitude treks"
      ],
      entryFee: "No entry fee for town. Activity charges vary",
      timings: "Town accessible 24/7. Rohtang Pass: May to November",
      images: ["manali-valley.jpg", "rohtang-pass.jpg"],
      category: "nature"
    },
    {
      name: "Spiti Valley",
      id: "spiti-valley",
      description: "A cold desert mountain valley known for its Buddhist monasteries, ancient culture, and stark Himalayan landscapes.",
      history: "Spiti means 'The Middle Land' as it lies between Tibet and India. The valley has been influenced by Tibetan Buddhism for over 1,000 years. Key Monastery, founded in the 11th century, is one of the oldest in the region. The area remained largely isolated until recent decades, preserving its unique culture and traditions.",
      bestTimeToVisit: "May to October (roads accessible)",
      howToReach: "Bhuntar airport (200 km). Accessible via Manali or Shimla routes",
      nearbyAttractions: [
        "Key Monastery - Ancient Buddhist monastery",
        "Chandratal Lake - High altitude lake",
        "Tabo Monastery - 'Ajanta of the Himalayas'",
        "Pin Valley National Park - Snow leopard habitat"
      ],
      specialFeatures: [
        "Cold desert landscape",
        "Ancient Buddhist monasteries",
        "Tibetan culture and traditions",
        "High altitude villages",
        "Snow leopard habitat"
      ],
      entryFee: "No entry fee. Monastery donations welcome",
      timings: "Valley accessible May to October only",
      images: ["spiti-valley.jpg", "key-monastery.jpg"],
      category: "cultural"
    }
  ],
  haryana: [
    {
      name: "Kurukshetra",
      id: "kurukshetra",
      description: "The sacred land where the epic Mahabharata war was fought and Lord Krishna delivered the Bhagavad Gita, dotted with numerous temples and tanks.",
      history: "Kurukshetra is mentioned in ancient Hindu texts as a sacred land. It's where the great Kurukshetra war of the Mahabharata was fought, and where Lord Krishna delivered the Bhagavad Gita to Arjuna. The area has numerous temples and sacred tanks (sarovars) associated with various episodes from Hindu mythology. It has been a pilgrimage site for thousands of years.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Delhi airport (160 km). Well connected by train and road from Delhi",
      nearbyAttractions: [
        "Brahma Sarovar - Sacred tank",
        "Jyotisar - Where Gita was delivered",
        "Kurukshetra Panorama - Museum depicting Mahabharata",
        "Sheikh Chilli's Tomb - Sufi saint's mausoleum"
      ],
      specialFeatures: [
        "Sacred land of Mahabharata",
        "Birthplace of Bhagavad Gita",
        "Numerous ancient temples",
        "Sacred tanks (sarovars)",
        "Major pilgrimage destination"
      ],
      entryFee: "Free entry to most sites. Museum charges apply",
      timings: "Most sites: 6 AM - 8 PM",
      images: ["kurukshetra-brahma-sarovar.jpg", "jyotisar.jpg"],
      category: "religious"
    },
    {
      name: "Sultanpur National Park",
      id: "sultanpur-national-park",
      description: "A bird sanctuary and national park known for its migratory birds, especially during winter months, located near Gurgaon.",
      history: "Sultanpur was developed as a bird sanctuary in 1971 by Dr. Salim Ali, the famous ornithologist. It was upgraded to a national park in 1989. The area was originally a seasonal lake that attracted numerous migratory birds. The park has been developed with watchtowers and nature trails for bird watching.",
      bestTimeToVisit: "November to March (migratory bird season)",
      howToReach: "Delhi airport (60 km). Well connected by road from Delhi and Gurgaon",
      nearbyAttractions: [
        "Kingdom of Dreams - Entertainment complex",
        "Heritage Transport Museum - Vintage vehicles",
        "Damdama Lake - Adventure sports destination",
        "Sohna Hot Springs - Natural hot water springs"
      ],
      specialFeatures: [
        "Over 250 bird species",
        "Major migratory bird destination",
        "Watchtowers for bird watching",
        "Nature interpretation center",
        "Easy accessibility from Delhi NCR"
      ],
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      timings: "6 AM - 6 PM",
      images: ["sultanpur-birds.jpg", "sultanpur-lake.jpg"],
      category: "nature"
    },
    {
      name: "Pinjore Gardens",
      id: "pinjore-gardens",
      description: "A 17th-century Mughal garden also known as Yadavindra Gardens, featuring terraced lawns, fountains, and historic pavilions.",
      history: "Created in the 17th century by Fidai Khan, foster brother of Mughal Emperor Aurangzeb, the garden was designed in the traditional Mughal charbagh style. It was later restored and renamed Yadavindra Gardens after Maharaja Yadavindra Singh of Patiala. The garden represents the pinnacle of Mughal landscape architecture in the region.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Chandigarh airport (22 km). Well connected by road from Chandigarh",
      nearbyAttractions: [
        "Cactus Garden Panchkula - Unique cactus collection",
        "Morni Hills - Hill station nearby",
        "Gurudwara Nada Sahib - Sikh pilgrimage site",
        "Timber Trail - Ropeway and resort"
      ],
      specialFeatures: [
        "17th-century Mughal garden",
        "Traditional charbagh design",
        "Terraced lawns and fountains",
        "Historic pavilions and structures",
        "Well-preserved Mughal architecture"
      ],
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      timings: "8 AM - 8 PM",
      images: ["pinjore-gardens.jpg", "mughal-pavilion.jpg"],
      category: "heritage"
    }
  ],
  goa: [
    {
      name: "Basilica of Bom Jesus",
      id: "basilica-bom-jesus",
      description: "A UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier, showcasing Portuguese colonial architecture and Christian heritage.",
      history: "Built between 1594-1605, the Basilica of Bom Jesus is one of the oldest churches in Goa and India. It houses the mortal remains of St. Francis Xavier, a Spanish missionary who worked in Goa. The church is built in baroque architecture and was one of the first churches in India to be elevated to the status of a minor basilica. The body of St. Francis Xavier is displayed every 10 years.",
      bestTimeToVisit: "November to March (pleasant weather)",
      howToReach: "Goa airport (29 km). Located in Old Goa, accessible by bus and taxi",
      nearbyAttractions: [
        "Se Cathedral - Largest church in Asia",
        "Church of St. Francis of Assisi - Historic church and museum",
        "Archaeological Museum - Goan heritage artifacts",
        "Reis Magos Fort - Portuguese fort"
      ],
      specialFeatures: [
        "UNESCO World Heritage Site",
        "Mortal remains of St. Francis Xavier",
        "Portuguese baroque architecture",
        "One of oldest churches in India",
        "Important Christian pilgrimage site"
      ],
      entryFee: "Free entry",
      timings: "9 AM - 6:30 PM",
      images: ["basilica-bom-jesus.jpg", "st-francis-xavier.jpg"],
      category: "heritage"
    },
    {
      name: "Dudhsagar Falls",
      id: "dudhsagar-falls",
      description: "One of India's tallest waterfalls, cascading from a height of 310 meters, located on the Mandovi River in the Western Ghats.",
      history: "Dudhsagar, meaning 'Sea of Milk', gets its name from the milky white appearance of the water as it cascades down the rocky terrain. The falls have been a natural landmark for centuries and gained popularity as a tourist destination with the construction of the Konkan Railway. The area is part of the Bhagwan Mahavir Wildlife Sanctuary.",
      bestTimeToVisit: "June to January (post-monsoon for full flow)",
      howToReach: "Goa airport (60 km). Accessible by train to Dudhsagar station or jeep safari",
      nearbyAttractions: [
        "Bhagwan Mahavir Wildlife Sanctuary - Protected forest area",
        "Tambdi Surla Temple - 12th-century temple",
        "Mollem National Park - Biodiversity hotspot",
        "Devil's Canyon - Adventure activity spot"
      ],
      specialFeatures: [
        "One of India's tallest waterfalls",
        "310-meter cascade",
        "Milky white water appearance",
        "Located in wildlife sanctuary",
        "Train passes through the falls"
      ],
      entryFee: "Jeep safari: ₹3,000-4,000 per jeep. Train journey charges apply",
      timings: "6 AM - 5 PM",
      images: ["dudhsagar-falls.jpg", "dudhsagar-train.jpg"],
      category: "nature"
    },
    {
      name: "Anjuna Beach",
      id: "anjuna-beach",
      description: "Famous for its vibrant flea market, trance music scene, and dramatic red cliffs, representing Goa's hippie culture and nightlife.",
      history: "Anjuna Beach became famous in the 1960s when it was discovered by hippies who made it their home. The beach became synonymous with the counterculture movement and psychedelic trance music. The famous Anjuna Flea Market started in the 1960s when hippies sold their belongings to fund their stay. Today, it remains a symbol of Goa's alternative culture.",
      bestTimeToVisit: "November to March (pleasant weather, peak season)",
      howToReach: "Goa airport (43 km). Well connected by road from Panaji",
      nearbyAttractions: [
        "Chapora Fort - Portuguese fort with panoramic views",
        "Vagator Beach - Adjacent beach with red cliffs",
        "Anjuna Flea Market - Wednesday market",
        "Curlies Beach Shack - Famous beach restaurant"
      ],
      specialFeatures: [
        "Famous Wednesday flea market",
        "Hippie culture heritage",
        "Trance music scene",
        "Dramatic red laterite cliffs",
        "Vibrant nightlife"
      ],
      entryFee: "Free entry to beach. Market and activity charges vary",
      timings: "Beach accessible 24/7. Flea market: Wednesdays",
      images: ["anjuna-beach.jpg", "anjuna-flea-market.jpg"],
      category: "cultural"
    }
  ],
  manipur: [
    {
      name: "Loktak Lake",
      id: "loktak-lake",
      description: "The largest freshwater lake in Northeast India, famous for its floating islands called 'phumdis' and the unique Keibul Lamjao National Park.",
      history: "Loktak Lake has been central to Manipuri civilization for centuries, providing livelihood through fishing and agriculture. The lake is mentioned in ancient Manipuri texts and folklore. The unique floating biomass islands (phumdis) have been used by locals for fishing and agriculture for generations. The lake faces environmental challenges due to human activities.",
      bestTimeToVisit: "October to March (pleasant weather, clear views)",
      howToReach: "Imphal airport (48 km). Well connected by road from Imphal",
      nearbyAttractions: [
        "Keibul Lamjao National Park - Only floating national park",
        "Sendra Island - Tourist resort island",
        "INA Memorial - Indian National Army memorial",
        "Moirang - Historic town"
      ],
      specialFeatures: [
        "Largest freshwater lake in Northeast India",
        "Unique floating islands (phumdis)",
        "Only floating national park in the world",
        "Important wetland ecosystem",
        "Traditional fishing communities"
      ],
      entryFee: "Boat rides: ₹200-500. National park entry extra",
      timings: "6 AM - 6 PM for boat rides",
      images: ["loktak-lake.jpg", "phumdis-floating-islands.jpg"],
      category: "nature"
    },
    {
      name: "Kangla Fort",
      id: "kangla-fort",
      description: "The ancient seat of Manipur's rulers for over 2,000 years, now a historical and archaeological site with temples and museums.",
      history: "Kangla Fort served as the seat of the Manipur kingdom for over 2,000 years until 1891. The fort complex includes ancient temples, royal residences, and ceremonial grounds. It was the center of Manipuri political and religious life. The British destroyed much of the fort in 1891, but restoration efforts have revived its historical significance.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Imphal airport (8 km). Located in the heart of Imphal city",
      nearbyAttractions: [
        "Manipur State Museum - Cultural artifacts",
        "Ima Keithel - Women's market",
        "Shri Govindajee Temple - Vaishnavite temple",
        "War Cemetery - Commonwealth war graves"
      ],
      specialFeatures: [
        "Ancient seat of Manipur rulers",
        "Over 2,000 years of history",
        "Archaeological and historical significance",
        "Traditional Manipuri architecture",
        "Sacred temples within complex"
      ],
      entryFee: "₹10 for Indians, ₹100 for foreigners",
      timings: "10 AM - 4:30 PM (closed on Mondays)",
      images: ["kangla-fort.jpg", "kangla-temple.jpg"],
      category: "heritage"
    },
    {
      name: "Shirui Kashong Peak",
      id: "shirui-kashong-peak",
      description: "Home to the rare Shirui Lily (state flower of Manipur), this peak offers panoramic views and is significant for its endemic flora.",
      history: "Shirui Kashong Peak is sacred to the local Tangkhul Naga community and has been protected by traditional conservation practices for generations. The peak gained scientific attention when the rare Shirui Lily was discovered here. The flower blooms only on this peak and has become a symbol of Manipur's unique biodiversity.",
      bestTimeToVisit: "May to June (Shirui Lily blooming season)",
      howToReach: "Imphal airport (120 km). Road journey to Ukhrul, then trek to peak",
      nearbyAttractions: [
        "Ukhrul town - Tangkhul Naga cultural center",
        "Khangkhui Cave - Limestone cave",
        "Khayang Peak - Another scenic peak",
        "Tangkhul villages - Traditional Naga culture"
      ],
      specialFeatures: [
        "Home to rare Shirui Lily (state flower)",
        "Endemic flora and fauna",
        "Panoramic mountain views",
        "Sacred to Tangkhul Naga community",
        "Trekking destination"
      ],
      entryFee: "No entry fee. Guide charges may apply",
      timings: "Best visited during daylight hours",
      images: ["shirui-lily.jpg", "shirui-peak.jpg"],
      category: "nature"
    }
  ],
  meghalaya: [
    {
      name: "Living Root Bridges",
      id: "living-root-bridges",
      description: "Unique bioengineered bridges made from living tree roots by the Khasi people, found in the rainforests of Meghalaya.",
      history: "The living root bridges have been created by the Khasi and Jaintia tribes for over 500 years. These bridges are made by training the roots of rubber trees (Ficus elastica) to grow across streams and rivers. The most famous is the double-decker root bridge in Nongriat village. This traditional knowledge represents sustainable bioengineering practices.",
      bestTimeToVisit: "October to May (dry season, easier trekking)",
      howToReach: "Shillong airport (80 km to Cherrapunji). Trek from Tyrna village",
      nearbyAttractions: [
        "Cherrapunji - Wettest place on earth",
        "Nohkalikai Falls - Tallest plunge waterfall in India",
        "Mawsmai Cave - Limestone cave system",
        "Seven Sisters Falls - Segmented waterfall"
      ],
      specialFeatures: [
        "Unique bioengineered bridges",
        "500-year-old traditional knowledge",
        "Sustainable construction method",
        "Double-decker root bridge",
        "UNESCO recognition potential"
      ],
      entryFee: "No entry fee. Guide charges recommended",
      timings: "Best visited during daylight hours",
      images: ["living-root-bridge.jpg", "double-decker-bridge.jpg"],
      category: "nature"
    },
    {
      name: "Cherrapunji",
      id: "cherrapunji",
      description: "Once the wettest place on Earth, known for its dramatic waterfalls, limestone caves, and unique monsoon landscape.",
      history: "Cherrapunji (Sohra) held the record for the wettest place on Earth for many years, receiving over 11,000mm of rainfall annually. The area has been inhabited by the Khasi people for centuries. British colonial records documented its extreme rainfall, making it famous worldwide. The landscape has been shaped by centuries of intense monsoon rains.",
      bestTimeToVisit: "October to May (post-monsoon, waterfalls visible)",
      howToReach: "Shillong airport (56 km). Well connected by road from Shillong",
      nearbyAttractions: [
        "Nohkalikai Falls - India's tallest plunge waterfall",
        "Mawsmai Cave - Accessible limestone cave",
        "Eco Park - Viewpoint and garden",
        "Thangkharang Park - Valley viewpoint"
      ],
      specialFeatures: [
        "Former wettest place on Earth",
        "Spectacular waterfalls during monsoon",
        "Unique monsoon landscape",
        "Limestone cave systems",
        "Khasi tribal culture"
      ],
      entryFee: "Various attractions have different fees. Eco Park: ₹10",
      timings: "Most attractions: 9 AM - 5 PM",
      images: ["cherrapunji-falls.jpg", "nohkalikai-falls.jpg"],
      category: "nature"
    },
    {
      name: "Shillong",
      id: "shillong",
      description: "The 'Scotland of the East', capital of Meghalaya known for its pleasant climate, colonial architecture, and vibrant music scene.",
      history: "Shillong became the capital of Assam in 1874 and later of Meghalaya in 1972. The city was developed by the British as a hill station due to its pleasant climate. It's named after Lei Shyllong, an idol worshipped at the Shillong Peak. The city has a rich musical heritage and is known as the 'Rock Capital of India'.",
      bestTimeToVisit: "March to June and September to November (pleasant weather)",
      howToReach: "Shillong airport (30 km). Well connected by road from Guwahati",
      nearbyAttractions: [
        "Ward's Lake - Artificial lake in city center",
        "Elephant Falls - Three-tiered waterfall",
        "Shillong Peak - Highest point with city views",
        "Don Bosco Museum - Cultural heritage museum"
      ],
      specialFeatures: [
        "Scotland of the East",
        "Pleasant hill station climate",
        "Vibrant music and cultural scene",
        "Colonial architecture",
        "Rock Capital of India"
      ],
      entryFee: "No entry fee for city. Attraction charges vary",
      timings: "City accessible 24/7. Attractions: 9 AM - 5 PM",
      images: ["shillong-city.jpg", "wards-lake.jpg"],
      category: "cultural"
    }
  ],
  mizoram: [
    {
      name: "Aizawl",
      id: "aizawl",
      description: "The capital city perched on ridges, known for its scenic beauty, Mizo culture, and being one of India's most peaceful cities.",
      history: "Aizawl was founded in 1890 by the British as a military outpost. The name means 'field of wild cardamom' in Mizo language. The city became the capital of Mizoram when it became a state in 1987. It's built on steep hills and ridges, giving it a unique topography. The city is known for its peaceful atmosphere and strong Christian influence.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Lengpui airport (32 km). Well connected by road from other northeastern states",
      nearbyAttractions: [
        "Mizoram State Museum - Cultural artifacts",
        "Solomon's Temple - Large church complex",
        "Durtlang Hills - Scenic viewpoint",
        "Bara Bazaar - Main market"
      ],
      specialFeatures: [
        "Capital city on ridges",
        "One of India's most peaceful cities",
        "Strong Mizo cultural identity",
        "Predominantly Christian population",
        "Scenic hill station setting"
      ],
      entryFee: "No entry fee for city. Museum charges apply",
      timings: "City accessible 24/7. Museum: 10 AM - 4 PM",
      images: ["aizawl-city.jpg", "aizawl-hills.jpg"],
      category: "cultural"
    },
    {
      name: "Champhai",
      id: "champhai",
      description: "Known as the 'Rice Bowl of Mizoram', this border town offers scenic views of Myanmar and traditional Mizo village life.",
      history: "Champhai has been an important trading center on the India-Myanmar border for centuries. The area has been inhabited by various Mizo clans and has a rich agricultural tradition, particularly rice cultivation. The town gained strategic importance during World War II and continues to be a significant border trade center.",
      bestTimeToVisit: "October to March (pleasant weather, clear views)",
      howToReach: "Lengpui airport (192 km). Well connected by road from Aizawl",
      nearbyAttractions: [
        "Rih Dil - Heart-shaped lake on Myanmar border",
        "Murlen National Park - Biodiversity hotspot",
        "Thasiama Seno Neihna - Scenic viewpoint",
        "Traditional Mizo villages - Cultural experience"
      ],
      specialFeatures: [
        "Rice Bowl of Mizoram",
        "India-Myanmar border town",
        "Traditional Mizo agriculture",
        "Scenic valley views",
        "Cross-border trade center"
      ],
      entryFee: "No entry fee. Border area permits required",
      timings: "Town accessible 24/7. Border areas: restricted timings",
      images: ["champhai-valley.jpg", "rih-dil-lake.jpg"],
      category: "cultural"
    },
    {
      name: "Phawngpui Blue Mountain",
      id: "phawngpui-blue-mountain",
      description: "The highest peak in Mizoram, known for its blue haze, rhododendron forests, and panoramic views of the surrounding hills.",
      history: "Phawngpui, meaning 'blue mountain' in Mizo, is considered sacred by the Mizo people. The mountain has been part of local folklore and traditional beliefs for generations. It was declared a national park in 1992 to protect its unique ecosystem and biodiversity. The mountain is famous for its blue haze created by the dense forest cover.",
      bestTimeToVisit: "October to March (clear weather, best views)",
      howToReach: "Lengpui airport (300 km). Road journey via Lunglei, then trek",
      nearbyAttractions: [
        "Phawngpui National Park - Protected forest area",
        "Lunglei town - District headquarters",
        "Saikuti Hall - Historical building",
        "Traditional Mizo villages - Cultural sites"
      ],
      specialFeatures: [
        "Highest peak in Mizoram (2,157m)",
        "Sacred to Mizo people",
        "Blue haze phenomenon",
        "Rhododendron forests",
        "National park status"
      ],
      entryFee: "National park entry: ₹25. Trekking permits required",
      timings: "Best visited during daylight hours",
      images: ["phawngpui-peak.jpg", "blue-mountain-haze.jpg"],
      category: "nature"
    }
  ],
  nagaland: [
    {
      name: "Hornbill Festival Kohima",
      id: "hornbill-festival",
      description: "The 'Festival of Festivals' showcasing all Naga tribes' culture, held annually in December at Kisama Heritage Village near Kohima.",
      history: "The Hornbill Festival was started in 2000 by the Government of Nagaland to promote inter-tribal interaction and preserve Naga culture. Named after the hornbill bird, which is significant in Naga folklore, the festival brings together all 16 major Naga tribes. It has become one of India's most important cultural festivals, attracting visitors from around the world.",
      bestTimeToVisit: "December 1-10 (festival period)",
      howToReach: "Dimapur airport (74 km). Well connected by road from Dimapur",
      nearbyAttractions: [
        "Kisama Heritage Village - Festival venue",
        "Kohima War Cemetery - World War II memorial",
        "Kohima Museum - Naga cultural artifacts",
        "Dzukou Valley - Valley of flowers"
      ],
      specialFeatures: [
        "Festival of all 16 Naga tribes",
        "Traditional music, dance, and crafts",
        "Naga cuisine and local brews",
        "Cultural competitions and exhibitions",
        "International cultural significance"
      ],
      entryFee: "Festival passes: ₹50-200 per day",
      timings: "Festival: December 1-10, 9 AM - 6 PM",
      images: ["hornbill-festival.jpg", "naga-traditional-dance.jpg"],
      category: "cultural"
    },
    {
      name: "Dzukou Valley",
      id: "dzukou-valley",
      description: "Known as the 'Valley of Flowers of the Northeast', famous for its seasonal flowers, especially the Dzukou lily, and pristine natural beauty.",
      history: "Dzukou Valley has been known to the local Angami Naga tribe for generations and is considered sacred. The valley remained relatively unknown to the outside world until recent decades. It gained fame for its unique ecosystem and the endemic Dzukou lily that blooms here. The valley represents the pristine natural heritage of Nagaland.",
      bestTimeToVisit: "June to September (flower blooming season)",
      howToReach: "Dimapur airport (80 km to base). Trek from Viswema village",
      nearbyAttractions: [
        "Viswema village - Trekking base",
        "Japfu Peak - Second highest peak in Nagaland",
        "Kohima town - State capital",
        "Angami villages - Traditional Naga culture"
      ],
      specialFeatures: [
        "Valley of Flowers of Northeast",
        "Endemic Dzukou lily",
        "Pristine natural ecosystem",
        "Trekking destination",
        "Sacred to Angami Nagas"
      ],
      entryFee: "Trekking permits and guide charges apply",
      timings: "Best visited during daylight hours",
      images: ["dzukou-valley.jpg", "dzukou-lily.jpg"],
      category: "nature"
    },
    {
      name: "Mon District",
      id: "mon-district",
      description: "Home to the Konyak tribe, known for their headhunting history, traditional tattoos, and unique cultural practices in remote villages.",
      history: "Mon district is the homeland of the Konyak Naga tribe, historically known as headhunters. The practice was banned in the 1960s, but the cultural traditions remain strong. The area was one of the last to be brought under British administration and has maintained its traditional way of life. The Konyak people are known for their intricate tattoos and woodcarvings.",
      bestTimeToVisit: "October to March (pleasant weather, accessible roads)",
      howToReach: "Dimapur airport (250 km). Road journey via Mokokchung",
      nearbyAttractions: [
        "Longwa village - Village straddling India-Myanmar border",
        "Shangnyu village - Traditional Konyak village",
        "Veda Peak - Highest point in Mon district",
        "Traditional Konyak morungs - Bachelor dormitories"
      ],
      specialFeatures: [
        "Konyak tribe homeland",
        "Former headhunting culture",
        "Traditional tattoos and crafts",
        "Remote border villages",
        "Unique cultural practices"
      ],
      entryFee: "No entry fee. Inner Line Permit required",
      timings: "Villages accessible during daylight hours",
      images: ["konyak-tribe.jpg", "longwa-village.jpg"],
      category: "cultural"
    }
  ],
  tripura: [
    {
      name: "Ujjayanta Palace",
      id: "ujjayanta-palace",
      description: "The former royal palace of Tripura, now a museum showcasing the state's history, culture, and royal heritage with Indo-Saracenic architecture.",
      history: "Built by Maharaja Radha Kishore Manikya in 1901, Ujjayanta Palace served as the seat of the Tripura royal family until 1972. The palace was designed by Sir Alexander Martin in Indo-Saracenic style. It was converted into a museum in 2013, displaying artifacts from Tripura's royal history and tribal culture. The palace represents the synthesis of Mughal and European architectural styles.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Agartala airport (12 km). Located in the heart of Agartala city",
      nearbyAttractions: [
        "Jagannath Temple - 16th-century temple",
        "Fourteen Goddess Temple - Chaturdasha Temple",
        "Heritage Park - Cultural complex",
        "Tripura Government Museum - State artifacts"
      ],
      specialFeatures: [
        "Former royal palace of Tripura",
        "Indo-Saracenic architecture",
        "Museum of royal artifacts",
        "Beautiful gardens and fountains",
        "Cultural heritage center"
      ],
      entryFee: "₹10 for Indians, ₹100 for foreigners",
      timings: "10 AM - 5 PM (closed on Mondays)",
      images: ["ujjayanta-palace.jpg", "palace-museum.jpg"],
      category: "heritage"
    },
    {
      name: "Neermahal",
      id: "neermahal",
      description: "The 'Water Palace' built in the middle of Rudrasagar Lake, showcasing a unique blend of Hindu and Mughal architecture.",
      history: "Neermahal was built in 1930 by Maharaja Bir Bikram Kishore Manikya as a summer resort. The palace is built in the middle of Rudrasagar Lake and represents a unique architectural experiment. It combines Hindu and Mughal architectural elements and was used for royal recreation and cultural programs. The palace is accessible only by boat.",
      bestTimeToVisit: "October to March (pleasant weather, boat rides comfortable)",
      howToReach: "Agartala airport (53 km). Boat ride from Melaghar",
      nearbyAttractions: [
        "Rudrasagar Lake - Scenic lake surrounding palace",
        "Melaghar - Boat departure point",
        "Dumboor Lake - Another scenic lake",
        "Gunabati Group of Temples - Ancient temple complex"
      ],
      specialFeatures: [
        "Palace built in middle of lake",
        "Unique Hindu-Mughal architecture",
        "Accessible only by boat",
        "Royal summer retreat",
        "Cultural program venue"
      ],
      entryFee: "₹10 for palace. Boat charges: ₹50-100",
      timings: "9 AM - 5 PM",
      images: ["neermahal-water-palace.jpg", "rudrasagar-lake.jpg"],
      category: "heritage"
    },
    {
      name: "Unakoti",
      id: "unakoti",
      description: "An ancient Shaivite pilgrimage site with rock-cut sculptures and carvings dating back to the 7th-9th centuries, known as the 'Angkor Wat of Northeast India'.",
      history: "Unakoti, meaning 'one less than a crore', is an ancient pilgrimage site with rock-cut sculptures dating to the 7th-9th centuries. According to legend, when Lord Shiva was going to Kashi with one crore gods and goddesses, all except Shiva himself were turned to stone at this place. The site has been a center of Shaivite worship for over 1,000 years.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Agartala airport (178 km). Road journey via Kailashahar",
      nearbyAttractions: [
        "Kailashahar - Nearest town",
        "Chabimura - Rock carvings on riverbank",
        "Pilak - Archaeological site",
        "Jampui Hills - Orange cultivation area"
      ],
      specialFeatures: [
        "Ancient rock-cut sculptures",
        "7th-9th century Shaivite art",
        "Angkor Wat of Northeast India",
        "Mythological significance",
        "Archaeological importance"
      ],
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      timings: "9 AM - 5 PM",
      images: ["unakoti-sculptures.jpg", "rock-cut-carvings.jpg"],
      category: "heritage"
    }
  ],
  // Union Territories
  delhi: [
    {
      name: "Red Fort",
      id: "red-fort-delhi",
      description: "A UNESCO World Heritage Site and symbol of India, this Mughal fortress served as the main residence of the Mughal emperors for nearly 200 years.",
      history: "Built by Emperor Shah Jahan between 1638-1648, the Red Fort served as the main residence of the Mughal emperors until 1857. The fort is famous for the Prime Minister's Independence Day speech from its ramparts. It represents the zenith of Mughal creativity and has been the site of many significant historical events including the trial of the last Mughal emperor.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Delhi airport (20 km). Chandni Chowk metro station nearby",
      nearbyAttractions: [
        "Jama Masjid - Largest mosque in India",
        "Chandni Chowk - Historic market street",
        "Raj Ghat - Mahatma Gandhi memorial",
        "India Gate - War memorial"
      ],
      specialFeatures: [
        "UNESCO World Heritage Site",
        "Mughal architectural masterpiece",
        "Independence Day speech venue",
        "Sound and light show",
        "Museum of Mughal artifacts"
      ],
      entryFee: "₹35 for Indians, ₹500 for foreigners",
      timings: "Sunrise to sunset (closed on Mondays)",
      images: ["red-fort-delhi.jpg", "red-fort-ramparts.jpg"],
      category: "heritage"
    },
    {
      name: "India Gate",
      id: "india-gate-delhi",
      description: "A war memorial dedicated to Indian soldiers who died in World War I, standing majestically on Rajpath with the eternal flame Amar Jawan Jyoti.",
      history: "Designed by Sir Edwin Lutyens and completed in 1931, India Gate commemorates the 82,000 Indian soldiers who died in World War I and the Third Afghan War. The memorial bears the names of over 13,000 servicemen. The Amar Jawan Jyoti (eternal flame) was added in 1972 to honor soldiers who died in the 1971 Indo-Pakistan War.",
      bestTimeToVisit: "October to March (pleasant weather), beautiful in evening",
      howToReach: "Delhi airport (15 km). Central Secretariat metro station nearby",
      nearbyAttractions: [
        "Rashtrapati Bhavan - President's residence",
        "Parliament House - Seat of Indian democracy",
        "National Museum - Indian art and artifacts",
        "Connaught Place - Shopping and dining hub"
      ],
      specialFeatures: [
        "War memorial for Indian soldiers",
        "Amar Jawan Jyoti eternal flame",
        "Part of Rajpath ceremonial boulevard",
        "Republic Day parade venue",
        "Beautiful evening illumination"
      ],
      entryFee: "Free entry",
      timings: "24/7 accessible. Best visited in evening",
      images: ["india-gate-delhi.jpg", "amar-jawan-jyoti.jpg"],
      category: "heritage"
    },
    {
      name: "Lotus Temple",
      id: "lotus-temple-delhi",
      description: "A Bahá'í House of Worship known for its distinctive lotus-shaped architecture, welcoming people of all faiths for meditation and prayer.",
      history: "Completed in 1986, the Lotus Temple was designed by Iranian architect Fariborz Sahba. It's one of seven Bahá'í Houses of Worship worldwide and has won numerous architectural awards. The temple is built in the shape of a lotus flower, symbolizing purity and peace. It welcomes people of all religions for silent prayer and meditation.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Delhi airport (18 km). Kalkaji Mandir metro station nearby",
      nearbyAttractions: [
        "ISKCON Temple - Krishna temple complex",
        "Humayun's Tomb - Mughal emperor's tomb",
        "Safdarjung Tomb - 18th-century mausoleum",
        "Nehru Place - Shopping and business district"
      ],
      specialFeatures: [
        "Lotus-shaped architectural marvel",
        "Bahá'í House of Worship",
        "Open to all religions",
        "Silent prayer and meditation",
        "Award-winning architecture"
      ],
      entryFee: "Free entry",
      timings: "9 AM - 7 PM (closed on Mondays)",
      images: ["lotus-temple.jpg", "lotus-temple-interior.jpg"],
      category: "religious"
    }
  ],
  chandigarh: [
    {
      name: "Rock Garden",
      id: "rock-garden-chandigarh",
      description: "A unique sculpture garden created from industrial and home waste by Nek Chand, featuring thousands of sculptures in a fantasy landscape.",
      history: "Created secretly by Nek Chand starting in 1957, the Rock Garden was built from recycled materials including broken pottery, tiles, and industrial waste. When discovered by authorities in 1975, it had already become a 12-acre wonderland. Instead of demolishing it, the government gave Chand official recognition and support. Today it's one of India's most visited tourist attractions.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Chandigarh airport (11 km). Well connected by road within city",
      nearbyAttractions: [
        "Sukhna Lake - Artificial lake for boating",
        "Rose Garden - Asia's largest rose garden",
        "Capitol Complex - Le Corbusier's architecture",
        "Sector 17 Plaza - Shopping and dining"
      ],
      specialFeatures: [
        "Created from recycled waste materials",
        "Thousands of unique sculptures",
        "Fantasy landscape design",
        "Environmental art pioneer",
        "Nek Chand's artistic vision"
      ],
      entryFee: "₹30 for Indians, ₹100 for foreigners",
      timings: "9 AM - 7 PM",
      images: ["rock-garden.jpg", "nek-chand-sculptures.jpg"],
      category: "modern"
    },
    {
      name: "Capitol Complex",
      id: "capitol-complex-chandigarh",
      description: "A UNESCO World Heritage Site designed by Le Corbusier, housing the Punjab and Haryana High Court, Secretariat, and Legislative Assembly.",
      history: "Designed by renowned architect Le Corbusier between 1951-1965, the Capitol Complex represents modernist architecture principles. It was built as the administrative center for Punjab and later served both Punjab and Haryana. The complex was inscribed as a UNESCO World Heritage Site in 2016, recognizing Le Corbusier's outstanding contribution to modern architecture.",
      bestTimeToVisit: "October to March (pleasant weather)",
      howToReach: "Chandigarh airport (15 km). Well connected by road within city",
      nearbyAttractions: [
        "Open Hand Monument - Le Corbusier's symbol",
        "Geometric Hill - Sculptural landscape",
        "Tower of Shadows - Architectural experiment",
        "Museum of Evolution of Life - Natural history"
      ],
      specialFeatures: [
        "UNESCO World Heritage Site",
        "Le Corbusier's modernist architecture",
        "Administrative center design",
        "Brutalist concrete structures",
        "Urban planning masterpiece"
      ],
      entryFee: "Guided tours available. Charges vary",
      timings: "Tours: 10 AM - 5 PM (advance booking required)",
      images: ["capitol-complex.jpg", "le-corbusier-architecture.jpg"],
      category: "modern"
    },
    {
      name: "Sukhna Lake",
      id: "sukhna-lake-chandigarh",
      description: "An artificial lake created by Le Corbusier, popular for boating, morning walks, and as a recreational hub with beautiful sunset views.",
      history: "Sukhna Lake was created in 1958 by damming the Sukhna Choe, a seasonal stream coming down from the Shivalik Hills. The lake was part of Le Corbusier's master plan for Chandigarh and serves as the city's recreational center. The lake has been maintained as a pollution-free zone and is home to various migratory birds during winter.",
      bestTimeToVisit: "October to March (pleasant weather, migratory birds)",
      howToReach: "Chandigarh airport (8 km). Well connected by road within city",
      nearbyAttractions: [
        "Garden of Silence - Meditation garden",
        "Shanti Kunj - Peaceful park",
        "Golf Club - 18-hole golf course",
        "Leisure Valley - Green belt parks"
      ],
      specialFeatures: [
        "Artificial lake by Le Corbusier",
        "Boating and water sports",
        "Morning walk destination",
        "Migratory bird habitat",
        "Pollution-free zone"
      ],
      entryFee: "Free entry. Boating charges: ₹50-200",
      timings: "5 AM - 10 PM",
      images: ["sukhna-lake.jpg", "sukhna-boating.jpg"],
      category: "modern"
    }
  ],
  "jammu-kashmir": [
    {
      name: "Dal Lake",
      id: "dal-lake-srinagar",
      description: "The 'Jewel in the crown of Kashmir', famous for its houseboats, shikaras, floating gardens, and stunning reflections of surrounding mountains.",
      history: "Dal Lake has been central to Kashmir's culture and economy for centuries. The lake and its houseboats became famous during the British Raj when Europeans built floating accommodations. The Mughal gardens around the lake were built by various emperors. The lake supports a unique ecosystem with floating gardens (rad) where vegetables are grown on floating mats of vegetation.",
      bestTimeToVisit: "April to October (pleasant weather, accessible)",
      howToReach: "Srinagar airport (22 km). Well connected by road from city center",
      nearbyAttractions: [
        "Mughal Gardens - Shalimar, Nishat, Chashme Shahi",
        "Hazratbal Shrine - Sacred Muslim shrine",
        "Shankaracharya Temple - Hilltop Hindu temple",
        "Floating Vegetable Market - Unique lake market"
      ],
      specialFeatures: [
        "Iconic Kashmir houseboats",
        "Shikara boat rides",
        "Floating gardens (rad)",
        "Mughal garden reflections",
        "Unique lake ecosystem"
      ],
      entryFee: "Shikara rides: ₹500-1500. Houseboat stays vary",
      timings: "Lake accessible 24/7. Best in early morning and evening",
      images: ["dal-lake-houseboats.jpg", "shikara-dal-lake.jpg"],
      category: "nature"
    },
    {
      name: "Gulmarg",
      id: "gulmarg-kashmir",
      description: "A premier ski resort and hill station known for its meadows of flowers, highest golf course, and the Gulmarg Gondola cable car.",
      history: "Gulmarg, meaning 'meadow of flowers', was discovered as a tourist destination by the British in the 19th century. It was developed as a hill station and later became India's premier skiing destination. The area has been mentioned in ancient texts and was a favorite retreat of Mughal rulers. The golf course, established in 1891, is one of the highest in the world.",
      bestTimeToVisit: "December to March (skiing), April to June (flowers and golf)",
      howToReach: "Srinagar airport (56 km). Well connected by road from Srinagar",
      nearbyAttractions: [
        "Gulmarg Gondola - Cable car to Apharwat Peak",
        "Alpather Lake - High altitude lake",
        "Khilanmarg - Scenic meadow",
        "Gulmarg Golf Course - World's highest golf course"
      ],
      specialFeatures: [
        "Premier skiing destination",
        "Highest golf course in the world",
        "Gulmarg Gondola cable car",
        "Meadows of alpine flowers",
        "Adventure sports hub"
      ],
      entryFee: "Gondola: ₹740-1330. Skiing equipment rental extra",
      timings: "Gondola: 9 AM - 5 PM (weather permitting)",
      images: ["gulmarg-skiing.jpg", "gulmarg-gondola.jpg"],
      category: "adventure"
    },
    {
      name: "Amarnath Cave",
      id: "amarnath-cave",
      description: "One of Hinduism's holiest shrines, housing a natural ice lingam that forms annually, accessible through a challenging high-altitude pilgrimage.",
      history: "The Amarnath Cave has been a pilgrimage site for over 5,000 years, mentioned in ancient Hindu texts. According to legend, Lord Shiva revealed the secret of immortality to Goddess Parvati here. The cave was 'rediscovered' in the 15th century by a Muslim shepherd named Buta Malik. The annual pilgrimage (Amarnath Yatra) attracts hundreds of thousands of devotees.",
      bestTimeToVisit: "July to August (pilgrimage season only)",
      howToReach: "Srinagar airport (95 km to Pahalgam). Trek from Pahalgam or helicopter from Baltal",
      nearbyAttractions: [
        "Pahalgam - Base camp for pilgrimage",
        "Chandanwari - Glacier and trekking point",
        "Sheshnag Lake - High altitude lake on route",
        "Panchtarni - Five streams confluence"
      ],
      specialFeatures: [
        "Natural ice lingam formation",
        "One of holiest Hindu shrines",
        "High altitude pilgrimage (3,888m)",
        "Annual Amarnath Yatra",
        "Challenging trek through glaciers"
      ],
      entryFee: "Yatra registration required. Helicopter charges extra",
      timings: "Pilgrimage season: July-August only",
      images: ["amarnath-cave.jpg", "ice-lingam.jpg"],
      category: "religious"
    }
  ],
  ladakh: [
    {
      name: "Pangong Tso",
      id: "pangong-tso-ladakh",
      description: "A high-altitude lake extending from India to China, famous for its changing colors and stunning beauty at 4,350 meters altitude.",
      history: "Pangong Tso, meaning 'high grassland lake' in Tibetan, has been known to local nomads for centuries. The lake gained international fame after being featured in Bollywood films. It's strategically important as it lies on the India-China border. The lake has been a point of contention between the two countries but remains a major tourist attraction.",
      bestTimeToVisit: "May to September (accessible season)",
      howToReach: "Leh airport (160 km). Road journey via Chang La pass",
      nearbyAttractions: [
        "Chang La Pass - High altitude mountain pass",
        "Tangtse village - Last Indian village",
        "Spangmik - Camping site by lake",
        "Lukung - Scenic village"
      ],
      specialFeatures: [
        "High altitude lake (4,350m)",
        "Changes color throughout the day",
        "Extends into China",
        "Crystal clear brackish water",
        "Bollywood film location"
      ],
      entryFee: "Inner Line Permit required. ₹400 for Indians",
      timings: "Accessible May to September only",
      images: ["pangong-tso.jpg", "pangong-changing-colors.jpg"],
      category: "nature"
    },
    {
      name: "Leh Palace",
      id: "leh-palace-ladakh",
      description: "A 17th-century former royal palace overlooking Leh town, showcasing traditional Ladakhi architecture and offering panoramic views.",
      history: "Built in the 17th century by King Sengge Namgyal, Leh Palace was the residence of the royal family of Ladakh. The nine-story palace was modeled after the Potala Palace in Lhasa, Tibet. It was abandoned in the 19th century when the royal family moved to Stok Palace. The palace has been partially restored and now houses a museum.",
      bestTimeToVisit: "May to September (accessible season)",
      howToReach: "Leh airport (5 km). Walking distance from Leh main market",
      nearbyAttractions: [
        "Leh Main Market - Shopping and dining",
        "Shanti Stupa - Peace pagoda with views",
        "Namgyal Tsemo Monastery - Hilltop monastery",
        "Leh Mosque - Historic mosque"
      ],
      specialFeatures: [
        "17th-century royal palace",
        "Traditional Ladakhi architecture",
        "Panoramic views of Leh",
        "Museum of royal artifacts",
        "Modeled after Potala Palace"
      ],
      entryFee: "₹15 for Indians, ₹100 for foreigners",
      timings: "9 AM - 6 PM",
      images: ["leh-palace.jpg", "leh-palace-view.jpg"],
      category: "heritage"
    },
    {
      name: "Nubra Valley",
      id: "nubra-valley-ladakh",
      description: "A high-altitude cold desert valley known for its sand dunes, double-humped Bactrian camels, and monasteries, accessible via Khardung La.",
      history: "Nubra Valley was an important stop on the ancient Silk Route connecting India with Central Asia. The valley has been inhabited by Balti people for centuries and has several ancient monasteries. It was opened to tourists only in 1994 due to its strategic location near the Pakistan and China borders. The valley is famous for its unique ecosystem combining desert and mountains.",
      bestTimeToVisit: "May to September (accessible season)",
      howToReach: "Leh airport (150 km). Road via Khardung La pass",
      nearbyAttractions: [
        "Khardung La - World's highest motorable pass",
        "Hunder Sand Dunes - Desert with Bactrian camels",
        "Diskit Monastery - Largest monastery in Nubra",
        "Panamik Hot Springs - Natural hot water springs"
      ],
      specialFeatures: [
        "High altitude cold desert",
        "Double-humped Bactrian camels",
        "Ancient Silk Route location",
        "Sand dunes at 10,000 feet",
        "Unique desert-mountain ecosystem"
      ],
      entryFee: "Inner Line Permit required. ₹400 for Indians",
      timings: "Valley accessible May to September only",
      images: ["nubra-valley.jpg", "bactrian-camels.jpg"],
      category: "nature"
    }
  ],
  "andaman-nicobar": [
    {
      name: "Cellular Jail",
      id: "cellular-jail-andaman",
      description: "A colonial prison known as 'Kala Pani', now a national memorial showcasing India's freedom struggle and the sacrifices of freedom fighters.",
      history: "Built by the British between 1896-1906, Cellular Jail was designed to house political prisoners in solitary confinement. The jail had 698 cells and housed many prominent freedom fighters including Batukeshwar Dutt and Veer Savarkar. The jail was called 'Kala Pani' (black waters) as crossing the sea meant loss of caste for Hindus. It's now a national memorial.",
      bestTimeToVisit: "November to April (pleasant weather)",
      howToReach: "Port Blair airport (3 km). Located in Port Blair city center",
      nearbyAttractions: [
        "Corbyn's Cove Beach - Nearest beach",
        "Anthropological Museum - Tribal culture",
        "Chatham Saw Mill - Historic sawmill",
        "Marina Park - Waterfront park"
      ],
      specialFeatures: [
        "Colonial prison turned memorial",
        "Freedom fighters' sacrifice site",
        "Sound and light show",
        "Museum of independence struggle",
        "National memorial status"
      ],
      entryFee: "₹30 for Indians, ₹100 for foreigners. Sound and light show extra",
      timings: "9 AM - 5 PM. Sound and light show: 6 PM",
      images: ["cellular-jail.jpg", "kala-pani-memorial.jpg"],
      category: "heritage"
    },
    {
      name: "Radhanagar Beach",
      id: "radhanagar-beach-andaman",
      description: "Voted as Asia's best beach, known for its pristine white sand, crystal clear waters, and spectacular sunsets on Havelock Island.",
      history: "Radhanagar Beach on Havelock Island has been relatively untouched until recent decades when it was developed for tourism. The beach gained international recognition when Time magazine voted it as Asia's best beach. The island was renamed Swaraj Dweep in 2018. The beach represents the pristine natural beauty of the Andaman Islands.",
      bestTimeToVisit: "November to April (calm seas, pleasant weather)",
      howToReach: "Port Blair airport, then ferry to Havelock Island (57 km by sea)",
      nearbyAttractions: [
        "Elephant Beach - Snorkeling and water sports",
        "Kalapathar Beach - Black rocks and sunrise views",
        "Neil Island - Nearby island with beaches",
        "Scuba diving sites - Coral reef exploration"
      ],
      specialFeatures: [
        "Asia's best beach (Time magazine)",
        "Pristine white sand",
        "Crystal clear turquoise waters",
        "Spectacular sunset views",
        "Untouched natural beauty"
      ],
      entryFee: "No entry fee. Ferry charges apply",
      timings: "Beach accessible 24/7. Best sunset viewing: 5-6 PM",
      images: ["radhanagar-beach.jpg", "havelock-sunset.jpg"],
      category: "nature"
    },
    {
      name: "Ross Island",
      id: "ross-island-andaman",
      description: "The former administrative headquarters of the British, now in ruins and reclaimed by nature, offering a glimpse into colonial history.",
      history: "Ross Island served as the administrative headquarters of the British in the Andaman Islands from 1858 to 1941. It was called the 'Paris of the East' for its sophisticated lifestyle. The island was abandoned after an earthquake in 1941 and later occupied by the Japanese during World War II. Nature has now reclaimed the ruins, creating a unique archaeological site.",
      bestTimeToVisit: "November to April (pleasant weather)",
      howToReach: "Port Blair airport, then boat from Aberdeen Jetty (3 km by sea)",
      nearbyAttractions: [
        "North Bay Island - Coral viewing and water sports",
        "Viper Island - Another historic island",
        "Port Blair city - Capital and main hub",
        "Samudrika Naval Marine Museum - Marine life exhibits"
      ],
      specialFeatures: [
        "Former British administrative center",
        "Colonial ruins reclaimed by nature",
        "Paris of the East heritage",
        "Japanese occupation history",
        "Unique archaeological site"
      ],
      entryFee: "₹30 for Indians, ₹100 for foreigners. Boat charges extra",
      timings: "9 AM - 3 PM",
      images: ["ross-island-ruins.jpg", "colonial-architecture.jpg"],
      category: "heritage"
    }
  ],
  lakshadweep: [
    {
      name: "Agatti Island",
      id: "agatti-island-lakshadweep",
      description: "The gateway to Lakshadweep with the only airport, known for its coral reefs, lagoons, and water sports activities.",
      history: "Agatti has been inhabited for centuries by the indigenous population of Lakshadweep. The island became the gateway to the archipelago when the airport was built in 1988. The island has a rich maritime tradition with fishing and coconut cultivation being the main occupations. The coral reefs around Agatti are among the most pristine in the Indian Ocean.",
      bestTimeToVisit: "October to May (calm seas, pleasant weather)",
      howToReach: "Agatti airport (direct flights from Kochi). Entry permit required",
      nearbyAttractions: [
        "Bangaram Island - Uninhabited coral island",
        "Thinnakara Island - Pristine beach destination",
        "Parali Islands - Twin uninhabited islands",
        "Coral reef diving sites - Underwater exploration"
      ],
      specialFeatures: [
        "Gateway to Lakshadweep",
        "Only airport in the archipelago",
        "Pristine coral reefs",
        "Crystal clear lagoons",
        "Water sports destination"
      ],
      entryFee: "Entry permit required. Island entry: ₹1,000",
      timings: "Island accessible during daylight hours",
      images: ["agatti-island.jpg", "agatti-lagoon.jpg"],
      category: "nature"
    },
    {
      name: "Kavaratti Island",
      id: "kavaratti-island-lakshadweep",
      description: "The capital of Lakshadweep, known for its beautiful lagoon, marine aquarium, and traditional island culture.",
      history: "Kavaratti has been the administrative center of Lakshadweep since the islands became a union territory in 1956. The island has a rich Islamic culture brought by Arab traders centuries ago. The island is known for its traditional boat building, coir making, and fishing practices. The beautiful lagoon has been the center of island life for generations.",
      bestTimeToVisit: "October to May (calm seas, pleasant weather)",
      howToReach: "Agatti airport, then helicopter or boat transfer. Entry permit required",
      nearbyAttractions: [
        "Marine Aquarium - Tropical fish and coral displays",
        "Ujra Mosque - Beautiful traditional mosque",
        "Water Sports Complex - Kayaking and sailing",
        "Lagoon - Swimming and snorkeling"
      ],
      specialFeatures: [
        "Capital of Lakshadweep",
        "Beautiful natural lagoon",
        "Marine aquarium",
        "Traditional Islamic culture",
        "Water sports facilities"
      ],
      entryFee: "Entry permit required. Aquarium: ₹10",
      timings: "Island accessible during daylight hours",
      images: ["kavaratti-lagoon.jpg", "kavaratti-mosque.jpg"],
      category: "cultural"
    },
    {
      name: "Bangaram Island",
      id: "bangaram-island-lakshadweep",
      description: "An uninhabited coral island known for its pristine beaches, excellent diving spots, and luxury eco-resort experience.",
      history: "Bangaram is one of the few uninhabited islands in Lakshadweep that has been developed for tourism while maintaining its pristine environment. The island has been used by local fishermen for centuries but remained largely untouched. It was developed as an eco-tourism destination to showcase the natural beauty of Lakshadweep while providing sustainable tourism opportunities.",
      bestTimeToVisit: "October to May (calm seas, best diving conditions)",
      howToReach: "Agatti airport, then boat transfer. Entry permit and resort booking required",
      nearbyAttractions: [
        "Thinnakara Island - Adjacent uninhabited island",
        "Parali Islands - Twin coral islands",
        "Diving sites - Pristine coral reefs",
        "Agatti Island - Gateway island"
      ],
      specialFeatures: [
        "Uninhabited coral island",
        "Pristine beaches and reefs",
        "Excellent diving and snorkeling",
        "Eco-resort destination",
        "Sustainable tourism model"
      ],
      entryFee: "Entry permit and resort booking required. Packages from ₹15,000",
      timings: "Resort accessible 24/7",
      images: ["bangaram-island.jpg", "bangaram-diving.jpg"],
      category: "nature"
    }
  ],
  "dadra-nagar-haveli-daman-diu": [
    {
      name: "Diu Fort",
      id: "diu-fort",
      description: "A massive Portuguese fort built in the 16th century, offering panoramic sea views and showcasing Portuguese colonial architecture.",
      history: "Built by the Portuguese between 1535-1541, Diu Fort was constructed to defend against Mughal and Maratha attacks. The fort played a crucial role in Portuguese control over the Arabian Sea trade routes. It withstood several sieges and remained under Portuguese control until 1961. The fort represents one of the finest examples of Portuguese military architecture in India.",
      bestTimeToVisit: "November to March (pleasant weather)",
      howToReach: "Diu airport (5 km). Well connected by road from Gujarat",
      nearbyAttractions: [
        "St. Paul's Church - Portuguese church ruins",
        "Diu Museum - Portuguese artifacts",
        "Nagoa Beach - Popular beach destination",
        "Gangeshwar Temple - Shiva temple by the sea"
      ],
      specialFeatures: [
        "16th-century Portuguese fort",
        "Panoramic Arabian Sea views",
        "Portuguese military architecture",
        "Historical significance",
        "Well-preserved ramparts"
      ],
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      timings: "9 AM - 6 PM",
      images: ["diu-fort.jpg", "portuguese-architecture.jpg"],
      category: "heritage"
    },
    {
      name: "Silvassa Tribal Museum",
      id: "silvassa-tribal-museum",
      description: "A museum showcasing the rich tribal culture and heritage of the Warli, Dhodia, and other indigenous communities of the region.",
      history: "The Tribal Museum was established to preserve and showcase the rich cultural heritage of the indigenous tribes of Dadra and Nagar Haveli. The region has been inhabited by various tribal communities for centuries, each with unique traditions, art forms, and lifestyle. The museum was created to educate visitors about tribal culture and promote cultural preservation.",
      bestTimeToVisit: "November to March (pleasant weather)",
      howToReach: "Mumbai airport (180 km). Well connected by road from Mumbai",
      nearbyAttractions: [
        "Vanganga Lake - Scenic lake and garden",
        "Dudhni Lake - Boating destination",
        "Hirwa Van Garden - Botanical garden",
        "Warli tribal villages - Cultural experience"
      ],
      specialFeatures: [
        "Tribal culture and heritage",
        "Warli art exhibitions",
        "Traditional lifestyle displays",
        "Cultural preservation center",
        "Educational programs"
      ],
      entryFee: "₹10 for Indians, ₹100 for foreigners",
      timings: "10 AM - 6 PM (closed on Mondays)",
      images: ["tribal-museum.jpg", "warli-art.jpg"],
      category: "cultural"
    },
    {
      name: "Nagoa Beach",
      id: "nagoa-beach-diu",
      description: "A pristine horseshoe-shaped beach in Diu, known for its golden sand, palm trees, and water sports activities.",
      history: "Nagoa Beach has been a natural harbor and fishing area for centuries. During Portuguese rule, it served as a quiet retreat away from the main town. The beach gained popularity as a tourist destination after Diu's integration with India. Its horseshoe shape and palm-fringed coastline make it one of the most beautiful beaches on the western coast.",
      bestTimeToVisit: "November to March (pleasant weather, calm seas)",
      howToReach: "Diu airport (7 km). Well connected by road from Diu town",
      nearbyAttractions: [
        "Diu Fort - Historic Portuguese fort",
        "Sunset Point - Scenic viewpoint",
        "Shell Museum - Collection of shells",
        "Ghoghla Beach - Another beautiful beach"
      ],
      specialFeatures: [
        "Horseshoe-shaped beach",
        "Golden sand and palm trees",
        "Water sports activities",
        "Peaceful and clean environment",
        "Portuguese coastal heritage"
      ],
      entryFee: "Free entry. Water sports charges vary",
      timings: "Beach accessible 24/7",
      images: ["nagoa-beach.jpg", "diu-coastline.jpg"],
      category: "nature"
    }
  ]
};