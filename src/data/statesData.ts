import { StateData } from '../types';

export const statesData: StateData[] = [
  // States
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    famousFor: 'Tirupati Temple, Spicy Cuisine, Classical Dance',
    culturalEssence: 'Known for its rich cultural heritage, classical dance forms like Kuchipudi, and architectural marvels. The state is famous for its spicy Andhra cuisine and the sacred Tirupati temple.',
    dish: {
      name: 'Hyderabadi Biryani',
      description: 'A fragrant rice dish layered with marinated meat, saffron, and aromatic spices, slow-cooked to perfection in the traditional dum style.'
    },
    language: {
      phrase: 'Namaskaram',
      meaning: 'Respectful greeting with joined palms',
      language: 'Telugu'
    },
    stereotype: {
      myth: 'Only known for spicy food and IT industry',
      reality: 'Rich in classical arts, ancient temples, diverse landscapes from beaches to hills, and a thriving cultural scene beyond technology.'
    },
    festivals: {
      spring: 'Ugadi (Telugu New Year)',
      summer: 'Brahmotsavam',
      monsoon: 'Bonalu',
      winter: 'Sankranti'
    },
    dayInLife: {
      urban: 'Tech professionals start early with filter coffee, commute through bustling Hyderabad streets, enjoy spicy biryanis for lunch, and unwind at cultural events or modern malls.',
      rural: 'Farmers wake before dawn to tend rice fields, women draw colorful rangoli patterns, families gather for traditional meals on banana leaves, and evenings are spent in temple courtyards.'
    },
    touristPlaces: [
      {
        id: 'tirupati-temple',
        name: 'Tirupati Balaji Temple',
        description: 'One of the most visited religious sites in the world, dedicated to Lord Venkateswara.',
        history: 'Built over several centuries, this temple has been a major pilgrimage center since ancient times.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Tirupati Airport or take train to Tirupati Railway Station',
        nearbyAttractions: ['Sri Venkateswara National Park', 'Chandragiri Fort', 'Talakona Waterfalls'],
        specialFeatures: ['Daily thousands of devotees', 'Gold-plated dome', 'Free meals for pilgrims'],
        entryFee: 'Free (Special darshan tickets available)',
        timings: '2:30 AM to 1:00 AM',
        images: [],
        category: 'religious'
      },
      {
        id: 'araku-valley',
        name: 'Araku Valley',
        description: 'A picturesque hill station known for its coffee plantations and tribal culture.',
        history: 'Home to various tribal communities for centuries, developed as a hill station during British era.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train from Visakhapatnam (scenic route) or drive via NH16',
        nearbyAttractions: ['Borra Caves', 'Tribal Museum', 'Coffee Plantations'],
        specialFeatures: ['Scenic train journey', 'Organic coffee', 'Tribal handicrafts'],
        images: [],
        category: 'nature'
      },
      {
        id: 'charminar',
        name: 'Charminar',
        description: 'Iconic monument and mosque built in 1591, symbol of Hyderabad.',
        history: 'Built by Sultan Muhammad Quli Qutb Shah in 1591 to commemorate the end of plague.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Old City Hyderabad, accessible by metro, bus, or taxi',
        nearbyAttractions: ['Laad Bazaar', 'Mecca Masjid', 'Salar Jung Museum'],
        specialFeatures: ['Four minarets', 'Central mosque', 'Bustling bazaars around'],
        entryFee: 'Free',
        timings: '9:00 AM to 5:30 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'golconda-fort',
        name: 'Golconda Fort',
        description: 'Magnificent fortress known for its acoustic architecture and diamond trade history.',
        history: 'Originally built by Kakatiya dynasty, later expanded by Qutb Shahi rulers.',
        bestTimeToVisit: 'October to March',
        howToReach: '11 km from Hyderabad city center, accessible by bus or taxi',
        nearbyAttractions: ['Qutb Shahi Tombs', 'Taramati Baradari', 'Ibrahim Bagh'],
        specialFeatures: ['Acoustic system', 'Light and sound show', 'Panoramic city views'],
        entryFee: '₹25 for Indians, ₹300 for foreigners',
        timings: '9:00 AM to 5:30 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'visakhapatnam-beaches',
        name: 'Visakhapatnam Beaches',
        description: 'Beautiful coastal city with pristine beaches and naval heritage.',
        history: 'Ancient port city mentioned in Buddhist texts, developed as major naval base.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Visakhapatnam Airport or train to Visakhapatnam Junction',
        nearbyAttractions: ['Submarine Museum', 'Kailasagiri Hill', 'Simhachalam Temple'],
        specialFeatures: ['Naval museum', 'Beach resorts', 'Dolphin spotting'],
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    famousFor: 'Monasteries, Tribal Culture, Himalayan Landscapes',
    culturalEssence: 'The "Land of Rising Sun" is home to diverse tribal communities, ancient monasteries, and pristine Himalayan landscapes. Rich in Buddhist culture and traditional practices.',
    dish: {
      name: 'Thukpa',
      description: 'A hearty noodle soup with vegetables and meat, perfect for the cold mountain climate, influenced by Tibetan cuisine.'
    },
    language: {
      phrase: 'Khamjang',
      meaning: 'How are you?',
      language: 'Monpa'
    },
    stereotype: {
      myth: 'Remote and inaccessible region with no modern facilities',
      reality: 'Rapidly developing state with rich biodiversity, vibrant tribal cultures, and growing eco-tourism, while preserving ancient traditions.'
    },
    festivals: {
      spring: 'Losar (Tibetan New Year)',
      summer: 'Dree Festival',
      monsoon: 'Siang River Festival',
      winter: 'Torgya Festival'
    },
    dayInLife: {
      urban: 'Government employees start with butter tea, work in modern offices with mountain views, enjoy momos for lunch, and participate in community cultural programs.',
      rural: 'Tribal families wake to mountain mists, tend to jhum cultivation, weave traditional textiles, and gather around fires sharing folk tales in the evening.'
    },
    touristPlaces: [
      {
        id: 'tawang-monastery',
        name: 'Tawang Monastery',
        description: 'Largest monastery in India and second largest in the world, perched at 10,000 feet.',
        history: 'Founded in 1680 by Merak Lama Lodre Gyatso, birthplace of 6th Dalai Lama.',
        bestTimeToVisit: 'April to October',
        howToReach: 'Fly to Guwahati, then drive 480 km (requires Inner Line Permit)',
        nearbyAttractions: ['Tawang War Memorial', 'Sela Pass', 'Madhuri Lake'],
        specialFeatures: ['400-year-old monastery', 'Stunning mountain views', 'Buddhist manuscripts'],
        images: [],
        category: 'religious'
      },
      {
        id: 'ziro-valley',
        name: 'Ziro Valley',
        description: 'UNESCO World Heritage site known for Apatani tribe and rice cultivation.',
        history: 'Home to Apatani tribe for over 600 years, known for sustainable agriculture.',
        bestTimeToVisit: 'March to October',
        howToReach: 'Fly to Lilabari Airport (Assam), then drive 100 km',
        nearbyAttractions: ['Talley Valley Wildlife Sanctuary', 'Kile Pakho', 'Hong Village'],
        specialFeatures: ['Unique tribal culture', 'Music festivals', 'Organic farming'],
        images: [],
        category: 'cultural'
      },
      {
        id: 'namdapha-national-park',
        name: 'Namdapha National Park',
        description: 'Largest national park in Northeast India, biodiversity hotspot.',
        history: 'Established in 1983, home to four big cat species.',
        bestTimeToVisit: 'October to April',
        howToReach: 'Fly to Dibrugarh, then drive to Miao (entry point)',
        nearbyAttractions: ['Miao Museum', 'Deban', 'Hornbill Nest Adoption'],
        specialFeatures: ['Four big cats habitat', 'Over 1000 plant species', 'Pristine wilderness'],
        images: [],
        category: 'nature'
      },
      {
        id: 'bomdila',
        name: 'Bomdila',
        description: 'Scenic hill station with Buddhist monasteries and apple orchards.',
        history: 'Strategic location on ancient trade route between Tibet and India.',
        bestTimeToVisit: 'March to October',
        howToReach: 'Drive from Tezpur (Assam) via Bhalukpong',
        nearbyAttractions: ['Bomdila Monastery', 'Apple Orchards', 'Craft Center'],
        specialFeatures: ['Panoramic Himalayan views', 'Buddhist culture', 'Handicraft center'],
        images: [],
        category: 'nature'
      },
      {
        id: 'sela-pass',
        name: 'Sela Pass',
        description: 'High altitude mountain pass at 13,700 feet with sacred lake.',
        history: 'Named after Sela, a local Monpa girl who helped Indian Army during 1962 war.',
        bestTimeToVisit: 'May to October',
        howToReach: 'On route to Tawang from Guwahati',
        nearbyAttractions: ['Sela Lake', 'Jaswant Garh War Memorial', 'Paradise Lake'],
        specialFeatures: ['Snow-capped peaks', 'Sacred Buddhist lake', 'War memorial'],
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-green-500 to-blue-600'
  },
  {
    id: 'assam',
    name: 'Assam',
    capital: 'Dispur',
    famousFor: 'Tea Gardens, Kaziranga National Park, Silk',
    culturalEssence: 'The gateway to Northeast India, famous for its tea culture, one-horned rhinoceros, and rich Assamese traditions. Known for Bihu festivals and traditional silk weaving.',
    dish: {
      name: 'Assam Laksa',
      description: 'A tangy fish curry with rice noodles, flavored with lemongrass and local herbs, representing the state\'s love for fish and rice.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Respectful greeting',
      language: 'Assamese'
    },
    stereotype: {
      myth: 'Only tea gardens and floods, remote and underdeveloped',
      reality: 'Rich cultural heritage, diverse wildlife, growing industries, vibrant festivals, and significant contribution to India\'s tea and oil production.'
    },
    festivals: {
      spring: 'Rongali Bihu',
      summer: 'Ambubachi Mela',
      monsoon: 'Kati Bihu',
      winter: 'Bhogali Bihu'
    },
    dayInLife: {
      urban: 'Office workers start with Assam tea, navigate through Guwahati\'s busy streets, enjoy fish curry for lunch, and attend cultural programs at Srimanta Sankaradeva Kalakshetra.',
      rural: 'Tea garden workers pluck leaves at dawn, families enjoy rice and fish meals, women weave traditional silk, and communities gather for evening prayers at village namghars.'
    },
    touristPlaces: [
      {
        id: 'kaziranga-national-park',
        name: 'Kaziranga National Park',
        description: 'UNESCO World Heritage site, home to two-thirds of world\'s one-horned rhinoceros.',
        history: 'Established in 1905, declared National Park in 1974, UNESCO site since 1985.',
        bestTimeToVisit: 'November to April',
        howToReach: 'Fly to Jorhat Airport, then drive 97 km to park',
        nearbyAttractions: ['Majuli Island', 'Sivasagar', 'Jorhat Tea Gardens'],
        specialFeatures: ['One-horned rhinoceros', 'Tiger reserve', 'Elephant safaris'],
        entryFee: '₹50 for Indians, ₹500 for foreigners',
        timings: '7:00 AM to 5:00 PM',
        images: [],
        category: 'nature'
      },
      {
        id: 'majuli-island',
        name: 'Majuli Island',
        description: 'World\'s largest river island, center of Assamese neo-Vaishnavite culture.',
        history: 'Formed by Brahmaputra river, cultural center since 16th century.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Ferry from Jorhat to Kamalabari Ghat',
        nearbyAttractions: ['Satras (monasteries)', 'Auniati Satra', 'Dakhinpat Satra'],
        specialFeatures: ['Vaishnavite monasteries', 'Traditional mask making', 'Cultural performances'],
        images: [],
        category: 'cultural'
      },
      {
        id: 'kamakhya-temple',
        name: 'Kamakhya Temple',
        description: 'Ancient Shakti Peeth temple dedicated to Goddess Kamakhya.',
        history: 'One of 51 Shakti Peethas, rebuilt in 17th century after destruction.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Guwahati, accessible by taxi or bus',
        nearbyAttractions: ['Umananda Temple', 'Assam State Museum', 'Brahmaputra River Cruise'],
        specialFeatures: ['Tantric worship', 'Ambubachi Mela', 'Hilltop location'],
        entryFee: 'Free',
        timings: '5:30 AM to 1:00 PM, 2:30 PM to 10:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'sivasagar',
        name: 'Sivasagar',
        description: 'Historical town with Ahom dynasty monuments and temples.',
        history: 'Capital of Ahom kingdom for 600 years, rich in historical monuments.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Jorhat, then drive 55 km',
        nearbyAttractions: ['Rang Ghar', 'Talatal Ghar', 'Shiva Dol'],
        specialFeatures: ['Ahom architecture', 'Historical palaces', 'Ancient temples'],
        images: [],
        category: 'heritage'
      },
      {
        id: 'tea-gardens-jorhat',
        name: 'Jorhat Tea Gardens',
        description: 'World\'s largest tea-growing region with scenic plantations.',
        history: 'Tea cultivation started in 1850s, now produces world\'s finest Assam tea.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Jorhat Airport or train to Mariani Junction',
        nearbyAttractions: ['Tea factories', 'Tocklai Tea Research Institute', 'Gibbon Wildlife Sanctuary'],
        specialFeatures: ['Tea tasting sessions', 'Colonial bungalows', 'Scenic landscapes'],
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-green-600 to-teal-600'
  },
  {
    id: 'bihar',
    name: 'Bihar',
    capital: 'Patna',
    famousFor: 'Buddhist Heritage, Ancient Universities, Litti Chokha',
    culturalEssence: 'The birthplace of Buddhism and Jainism, home to ancient Nalanda University. Rich in spiritual heritage, classical music, and traditional folk arts.',
    dish: {
      name: 'Litti Chokha',
      description: 'Wheat balls stuffed with roasted gram flour, served with mashed vegetables - a rustic and nutritious meal representing Bihar\'s agricultural heritage.'
    },
    language: {
      phrase: 'Pranam',
      meaning: 'Respectful greeting with folded hands',
      language: 'Hindi/Bhojpuri'
    },
    stereotype: {
      myth: 'Backward state with only poverty and crime',
      reality: 'Rich historical heritage, birthplace of major religions, growing economy, excellent educational institutions, and strong cultural traditions.'
    },
    festivals: {
      spring: 'Holi',
      summer: 'Buddha Purnima',
      monsoon: 'Teej',
      winter: 'Chhath Puja'
    },
    dayInLife: {
      urban: 'Students rush to coaching centers, government employees commute by cycle, families enjoy litti-chokha for lunch, and evenings are spent discussing politics over tea.',
      rural: 'Farmers wake before sunrise for field work, women perform Chhath rituals by rivers, children study under village trees, and communities gather for folk music sessions.'
    },
    touristPlaces: [
      {
        id: 'bodh-gaya',
        name: 'Bodh Gaya',
        description: 'Most sacred Buddhist pilgrimage site where Buddha attained enlightenment.',
        history: 'Buddha meditated under Bodhi tree here 2500 years ago, achieving enlightenment.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Gaya Airport or train to Gaya Junction',
        nearbyAttractions: ['Mahabodhi Temple', 'Bodhi Tree', 'Various international monasteries'],
        specialFeatures: ['UNESCO World Heritage site', 'Sacred Bodhi Tree', 'International Buddhist temples'],
        entryFee: 'Free',
        timings: '5:00 AM to 9:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'nalanda-university',
        name: 'Nalanda University Ruins',
        description: 'Ruins of ancient world\'s first residential university.',
        history: 'Founded in 5th century CE, attracted students from across Asia until 12th century.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Patna (90 km) or Gaya (60 km)',
        nearbyAttractions: ['Nalanda Archaeological Museum', 'Hiuen Tsang Memorial', 'Surya Mandir'],
        specialFeatures: ['Ancient university ruins', 'Archaeological museum', 'UNESCO World Heritage site'],
        entryFee: '₹25 for Indians, ₹300 for foreigners',
        timings: '9:00 AM to 5:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'rajgir',
        name: 'Rajgir',
        description: 'Ancient city surrounded by hills, important for Buddhism and Jainism.',
        history: 'Capital of Magadha empire, where Buddha spent many years teaching.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Patna (100 km) or take train to Rajgir',
        nearbyAttractions: ['Vulture Peak', 'Hot Springs', 'Vishwa Shanti Stupa'],
        specialFeatures: ['Ropeway to hilltop', 'Natural hot springs', 'Buddhist meditation caves'],
        images: [],
        category: 'religious'
      },
      {
        id: 'patna-sahib',
        name: 'Patna Sahib Gurudwara',
        description: 'Sacred Sikh pilgrimage site, birthplace of Guru Gobind Singh.',
        history: 'Guru Gobind Singh, 10th Sikh Guru, was born here in 1666.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Patna city, accessible by all modes of transport',
        nearbyAttractions: ['Ganga Ghat', 'Patna Museum', 'Gandhi Maidan'],
        specialFeatures: ['Sikh pilgrimage center', 'Beautiful architecture', 'Community kitchen'],
        entryFee: 'Free',
        timings: '4:00 AM to 10:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'vikramshila-university',
        name: 'Vikramshila University Ruins',
        description: 'Ruins of another ancient Buddhist university.',
        history: 'Founded by King Dharmapala in 8th century, rival to Nalanda.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Bhagalpur (40 km)',
        nearbyAttractions: ['Bhagalpur Silk City', 'Sultanganj', 'Kahalgaon'],
        specialFeatures: ['Ancient Buddhist university', 'Archaeological excavations', 'Ganges river views'],
        images: [],
        category: 'heritage'
      }
    ],
    color: 'from-yellow-600 to-orange-600'
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    capital: 'Raipur',
    famousFor: 'Tribal Culture, Waterfalls, Steel Production',
    culturalEssence: 'Known as the "Rice Bowl of India," rich in tribal heritage, dense forests, and mineral resources. Famous for traditional dance forms and handicrafts.',
    dish: {
      name: 'Bafauri',
      description: 'Steamed rice flour dumplings served with spicy chutneys, a healthy and traditional tribal delicacy of Chhattisgarh.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Traditional greeting',
      language: 'Hindi/Chhattisgarhi'
    },
    stereotype: {
      myth: 'Only industrial state with mining, no culture or tourism',
      reality: 'Rich tribal heritage, beautiful waterfalls, ancient temples, vibrant folk culture, and growing eco-tourism while balancing industrial development.'
    },
    festivals: {
      spring: 'Bastar Dussehra',
      summer: 'Hareli',
      monsoon: 'Teej',
      winter: 'Madai Festival'
    },
    dayInLife: {
      urban: 'Steel plant workers start early shifts, families enjoy rice-based meals, students attend modern schools, and evenings feature traditional dance performances.',
      rural: 'Tribal communities practice sustainable farming, women create beautiful handicrafts, children learn folk songs, and villages celebrate with traditional drums.'
    },
    touristPlaces: [
      {
        id: 'chitrakote-falls',
        name: 'Chitrakote Falls',
        description: 'India\'s widest waterfall, known as "Niagara of India".',
        history: 'Natural waterfall on Indravati river, sacred to local tribal communities.',
        bestTimeToVisit: 'July to March',
        howToReach: 'Drive from Raipur (270 km) via Jagdalpur',
        nearbyAttractions: ['Bastar Palace', 'Anthropological Museum', 'Danteshwari Temple'],
        specialFeatures: ['Widest waterfall in India', 'Horseshoe shape', 'Tribal cultural significance'],
        images: [],
        category: 'nature'
      },
      {
        id: 'bastar-region',
        name: 'Bastar Tribal Region',
        description: 'Home to diverse tribal communities with unique traditions.',
        history: 'Ancient tribal kingdom, preserved indigenous culture for centuries.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Raipur, then drive to Jagdalpur (300 km)',
        nearbyAttractions: ['Tribal markets', 'Handicraft villages', 'Traditional festivals'],
        specialFeatures: ['Authentic tribal culture', 'Traditional crafts', 'Folk performances'],
        images: [],
        category: 'cultural'
      },
      {
        id: 'sirpur',
        name: 'Sirpur',
        description: 'Ancient archaeological site with Buddhist and Hindu temples.',
        history: 'Capital of South Kosala kingdom from 5th-8th centuries.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Raipur (78 km)',
        nearbyAttractions: ['Laxman Temple', 'Buddha Vihar', 'Anand Prabhu Kuti Vihar'],
        specialFeatures: ['Ancient brick temples', 'Buddhist monasteries', 'Archaeological excavations'],
        images: [],
        category: 'heritage'
      },
      {
        id: 'kanger-valley',
        name: 'Kanger Valley National Park',
        description: 'Biodiversity hotspot with caves, waterfalls, and wildlife.',
        history: 'Established in 1982, named after Kanger river flowing through it.',
        bestTimeToVisit: 'October to June',
        howToReach: 'Drive from Jagdalpur (35 km)',
        nearbyAttractions: ['Kutumsar Cave', 'Kailash Cave', 'Tirathgarh Falls'],
        specialFeatures: ['Underground caves', 'Diverse wildlife', 'Tribal villages'],
        images: [],
        category: 'nature'
      },
      {
        id: 'ratanpur',
        name: 'Ratanpur',
        description: 'Ancient town with historical temples and fort ruins.',
        history: 'Former capital of Kalchuri dynasty, important religious center.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Raipur (25 km)',
        nearbyAttractions: ['Mahamaya Temple', 'Ratanpur Fort', 'Budha Talab'],
        specialFeatures: ['Ancient temples', 'Historical significance', 'Religious festivals'],
        images: [],
        category: 'heritage'
      }
    ],
    color: 'from-green-600 to-yellow-600'
  },
  {
    id: 'goa',
    name: 'Goa',
    capital: 'Panaji',
    famousFor: 'Beaches, Portuguese Heritage, Seafood',
    culturalEssence: 'A unique blend of Indian and Portuguese cultures, famous for its laid-back lifestyle, beautiful beaches, and vibrant nightlife. Known for its colonial architecture and seafood cuisine.',
    dish: {
      name: 'Fish Curry Rice',
      description: 'Fresh fish cooked in coconut milk with aromatic spices, served with steamed rice - the soul food of every Goan household.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Traditional greeting',
      language: 'Konkani'
    },
    stereotype: {
      myth: 'Only beaches, parties, and alcohol - no real culture',
      reality: 'Rich Indo-Portuguese heritage, beautiful churches, traditional festivals, vibrant local culture, and much more beyond beaches and nightlife.'
    },
    festivals: {
      spring: 'Shigmo (Holi)',
      summer: 'Feast of St. John',
      monsoon: 'Sao Joao',
      winter: 'Christmas and New Year'
    },
    dayInLife: {
      urban: 'Locals start with poi bread and tea, work in tourism or IT, enjoy seafood lunches, and relax at beach shacks in the evening.',
      rural: 'Fishermen head out before dawn, families tend to cashew plantations, women prepare traditional sweets, and communities gather for evening prayers.'
    },
    touristPlaces: [
      {
        id: 'old-goa-churches',
        name: 'Old Goa Churches',
        description: 'UNESCO World Heritage site with magnificent Portuguese churches.',
        history: 'Former capital of Portuguese India, built in 16th-17th centuries.',
        bestTimeToVisit: 'November to February',
        howToReach: 'Drive from Panaji (10 km) or take local bus',
        nearbyAttractions: ['Basilica of Bom Jesus', 'Se Cathedral', 'Church of St. Francis'],
        specialFeatures: ['UNESCO World Heritage', 'Portuguese architecture', 'St. Francis Xavier\'s remains'],
        entryFee: 'Free',
        timings: '9:00 AM to 6:30 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'calangute-beach',
        name: 'Calangute Beach',
        description: 'Queen of beaches, most popular beach destination in Goa.',
        history: 'Discovered by hippies in 1960s, became international tourist destination.',
        bestTimeToVisit: 'November to February',
        howToReach: 'Drive from Panaji (15 km) or take taxi/bus',
        nearbyAttractions: ['Baga Beach', 'Anjuna Beach', 'Saturday Night Market'],
        specialFeatures: ['Water sports', 'Beach shacks', 'Vibrant nightlife'],
        images: [],
        category: 'nature'
      },
      {
        id: 'dudhsagar-falls',
        name: 'Dudhsagar Falls',
        description: 'Four-tiered waterfall, one of India\'s tallest waterfalls.',
        history: 'Natural waterfall on Mandovi river, means "Sea of Milk" in Konkani.',
        bestTimeToVisit: 'June to September',
        howToReach: 'Train to Dudhsagar station or jeep safari from Mollem',
        nearbyAttractions: ['Bhagwan Mahavir Wildlife Sanctuary', 'Mollem National Park', 'Tambdi Surla Temple'],
        specialFeatures: ['Train passes through falls', 'Trekking trails', 'Natural swimming pools'],
        images: [],
        category: 'nature'
      },
      {
        id: 'fort-aguada',
        name: 'Fort Aguada',
        description: 'Well-preserved Portuguese fort with lighthouse and beach.',
        history: 'Built in 1612 by Portuguese to guard against Dutch and Maratha invasions.',
        bestTimeToVisit: 'November to February',
        howToReach: 'Drive from Panaji (18 km)',
        nearbyAttractions: ['Sinquerim Beach', 'Candolim Beach', 'Aguada Jail'],
        specialFeatures: ['Historic lighthouse', 'Panoramic sea views', 'Portuguese architecture'],
        entryFee: 'Free',
        timings: '9:30 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'spice-plantations',
        name: 'Spice Plantations',
        description: 'Aromatic spice gardens showcasing Goa\'s agricultural heritage.',
        history: 'Spice cultivation introduced by Portuguese, traditional farming continues.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Various plantations in Ponda and Sanguem talukas',
        nearbyAttractions: ['Sahakari Spice Farm', 'Tropical Spice Plantation', 'Savoi Plantation'],
        specialFeatures: ['Spice tours', 'Traditional Goan lunch', 'Elephant rides'],
        images: [],
        category: 'cultural'
      }
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    capital: 'Gandhinagar',
    famousFor: 'Business Hub, Handicrafts, Vegetarian Cuisine',
    culturalEssence: 'The birthplace of Mahatma Gandhi, known for entrepreneurial spirit, vibrant festivals like Navratri, and rich textile traditions. A predominantly vegetarian state with diverse landscapes.',
    dish: {
      name: 'Dhokla',
      description: 'Steamed fermented cake made from gram flour, light and spongy, served with green chutney - a healthy Gujarati snack loved across India.'
    },
    language: {
      phrase: 'Kem cho?',
      meaning: 'How are you?',
      language: 'Gujarati'
    },
    stereotype: {
      myth: 'Only business-minded people, no alcohol, boring food',
      reality: 'Rich cultural heritage, diverse landscapes from deserts to coasts, vibrant festivals, delicious vegetarian cuisine, and warm hospitality beyond business.'
    },
    festivals: {
      spring: 'Navratri',
      summer: 'Rath Yatra',
      monsoon: 'Janmashtami',
      winter: 'Uttarayan (Kite Festival)'
    },
    dayInLife: {
      urban: 'Businessmen start with prayers, engage in trade activities, enjoy thali lunches, and participate in community garba dancing in evenings.',
      rural: 'Farmers tend to cotton fields, women create intricate handicrafts, families gather for vegetarian meals, and communities celebrate with folk music.'
    },
    touristPlaces: [
      {
        id: 'rann-of-kutch',
        name: 'Rann of Kutch',
        description: 'World\'s largest salt desert, spectacular white landscape.',
        history: 'Ancient sea bed, now seasonal salt marsh, culturally significant for local communities.',
        bestTimeToVisit: 'November to February',
        howToReach: 'Fly to Bhuj, then drive to Dhordo (85 km)',
        nearbyAttractions: ['Kutch Museum', 'Handicraft villages', 'Flamingo sanctuary'],
        specialFeatures: ['Full moon nights', 'Rann Utsav festival', 'Traditional crafts'],
        images: [],
        category: 'nature'
      },
      {
        id: 'somnath-temple',
        name: 'Somnath Temple',
        description: 'First among 12 Jyotirlinga temples, rebuilt multiple times.',
        history: 'Ancient temple destroyed and rebuilt several times, current structure from 1951.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Rajkot, then drive 200 km',
        nearbyAttractions: ['Triveni Sangam', 'Bhalka Tirth', 'Somnath Beach'],
        specialFeatures: ['Jyotirlinga temple', 'Sound and light show', 'Arabian Sea views'],
        entryFee: 'Free',
        timings: '6:00 AM to 9:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'gir-national-park',
        name: 'Gir National Park',
        description: 'Only home of Asiatic lions in the world.',
        history: 'Established in 1965, saved Asiatic lions from extinction.',
        bestTimeToVisit: 'December to March',
        howToReach: 'Fly to Rajkot, then drive 160 km to Sasan Gir',
        nearbyAttractions: ['Devalia Safari Park', 'Kankai Mata Temple', 'Crocodile breeding center'],
        specialFeatures: ['Asiatic lions', 'Wildlife safari', 'Conservation success story'],
        entryFee: '₹60 for Indians, ₹400 for foreigners',
        timings: '6:00 AM to 9:00 AM, 3:00 PM to 6:00 PM',
        images: [],
        category: 'nature'
      },
      {
        id: 'dwarka',
        name: 'Dwarka',
        description: 'One of four Char Dham pilgrimage sites, Krishna\'s kingdom.',
        history: 'Ancient city associated with Lord Krishna, mentioned in Mahabharata.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Dwarka station or drive from Jamnagar (137 km)',
        nearbyAttractions: ['Dwarkadhish Temple', 'Bet Dwarka', 'Nageshwar Jyotirlinga'],
        specialFeatures: ['Char Dham pilgrimage', 'Krishna temples', 'Arabian Sea coast'],
        entryFee: 'Free',
        timings: '6:00 AM to 12:30 PM, 5:00 PM to 9:30 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'sabarmati-ashram',
        name: 'Sabarmati Ashram',
        description: 'Gandhi\'s residence, center of Indian independence movement.',
        history: 'Established by Gandhi in 1917, starting point of Dandi March.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Ahmedabad, accessible by all transport modes',
        nearbyAttractions: ['Gandhi Museum', 'Hriday Kunj', 'Sabarmati Riverfront'],
        specialFeatures: ['Gandhi\'s living quarters', 'Independence movement history', 'Peaceful environment'],
        entryFee: 'Free',
        timings: '8:30 AM to 6:30 PM',
        images: [],
        category: 'heritage'
      }
    ],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'haryana',
    name: 'Haryana',
    capital: 'Chandigarh',
    famousFor: 'Agriculture, Sports, Kurukshetra',
    culturalEssence: 'Known as India\'s sports nursery, producing Olympic medalists and wrestlers. Rich in Vedic culture with Kurukshetra as the land of Bhagavad Gita.',
    dish: {
      name: 'Bajra Khichdi',
      description: 'Nutritious millet-based dish cooked with lentils and vegetables, representing Haryana\'s agricultural abundance and healthy eating traditions.'
    },
    language: {
      phrase: 'Sat Sri Akal',
      meaning: 'God is truth (common greeting)',
      language: 'Hindi/Haryanvi'
    },
    stereotype: {
      myth: 'Only agricultural state with no culture, male-dominated society',
      reality: 'Progressive state with growing industries, rich cultural heritage, sports excellence, and evolving social dynamics while preserving traditions.'
    },
    festivals: {
      spring: 'Baisakhi',
      summer: 'Teej',
      monsoon: 'Karva Chauth',
      winter: 'Lohri'
    },
    dayInLife: {
      urban: 'IT professionals commute to Gurgaon offices, families enjoy parathas for breakfast, athletes train in sports academies, and evenings feature cultural programs.',
      rural: 'Farmers work in wheat fields, women participate in self-help groups, youth practice wrestling, and communities gather for folk music sessions.'
    },
    touristPlaces: [
      {
        id: 'kurukshetra',
        name: 'Kurukshetra',
        description: 'Sacred land where Bhagavad Gita was narrated, site of Mahabharata war.',
        history: 'Ancient battlefield of Mahabharata, mentioned in Vedic texts.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Kurukshetra station or drive from Delhi (160 km)',
        nearbyAttractions: ['Brahma Sarovar', 'Jyotisar', 'Krishna Museum'],
        specialFeatures: ['Bhagavad Gita birthplace', 'Sacred tanks', 'Solar eclipse pilgrimage'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'religious'
      },
      {
        id: 'sultanpur-bird-sanctuary',
        name: 'Sultanpur Bird Sanctuary',
        description: 'Important bird sanctuary with migratory and resident species.',
        history: 'Established in 1971, upgraded to national park in 1989.',
        bestTimeToVisit: 'November to March',
        howToReach: 'Drive from Delhi (50 km) via Gurgaon',
        nearbyAttractions: ['Damdama Lake', 'Heritage Transport Museum', 'Kingdom of Dreams'],
        specialFeatures: ['Migratory birds', 'Nature trails', 'Bird watching towers'],
        entryFee: '₹25 for Indians, ₹300 for foreigners',
        timings: '7:00 AM to 5:00 PM',
        images: [],
        category: 'nature'
      },
      {
        id: 'panipat-museum',
        name: 'Panipat Museum',
        description: 'Museum showcasing three historic battles of Panipat.',
        history: 'Site of three decisive battles that shaped Indian history.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Panipat station or drive from Delhi (90 km)',
        nearbyAttractions: ['Kabuli Bagh Mosque', 'Devi Temple', 'Textile markets'],
        specialFeatures: ['Battle artifacts', 'Historical displays', 'Educational tours'],
        entryFee: '₹10 for Indians',
        timings: '10:00 AM to 5:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'morni-hills',
        name: 'Morni Hills',
        description: 'Only hill station in Haryana with lakes and trekking trails.',
        history: 'Named after Queen Morni, natural retreat in Shivalik range.',
        bestTimeToVisit: 'March to June, September to November',
        howToReach: 'Drive from Chandigarh (45 km)',
        nearbyAttractions: ['Tikkar Taal', 'Morni Fort', 'Adventure activities'],
        specialFeatures: ['Twin lakes', 'Trekking trails', 'Adventure sports'],
        images: [],
        category: 'nature'
      },
      {
        id: 'pinjore-gardens',
        name: 'Pinjore Gardens',
        description: 'Mughal-style terraced garden, also known as Yadavindra Gardens.',
        history: 'Built in 17th century by Nawab Fidai Khan, Mughal architecture.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Chandigarh (22 km)',
        nearbyAttractions: ['Mini Zoo', 'Japanese Garden', 'Historic palaces'],
        specialFeatures: ['Mughal architecture', 'Terraced gardens', 'Cultural events'],
        entryFee: '₹25 for Indians',
        timings: '9:00 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      }
    ],
    color: 'from-green-600 to-yellow-600'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    famousFor: 'Hill Stations, Adventure Sports, Apple Orchards',
    culturalEssence: 'The "Land of Gods" with snow-capped mountains, ancient temples, and vibrant hill culture. Known for adventure tourism and traditional Pahari lifestyle.',
    dish: {
      name: 'Dham',
      description: 'Traditional festive meal served on special occasions, featuring rice, dal, rajma, and sweet rice, prepared by specialized cooks called "botis".'
    },
    language: {
      phrase: 'Namaste',
      meaning: 'Respectful greeting',
      language: 'Hindi/Pahari'
    },
    stereotype: {
      myth: 'Only honeymoon destination with no real culture',
      reality: 'Rich Pahari culture, ancient temples, diverse landscapes, adventure sports hub, and strong community traditions beyond tourism.'
    },
    festivals: {
      spring: 'Baisakhi',
      summer: 'Kullu Dussehra',
      monsoon: 'Teej',
      winter: 'Lohri'
    },
    dayInLife: {
      urban: 'Hotel staff welcome tourists, shopkeepers sell local handicrafts, students attend hill schools, and families enjoy evening walks on mall roads.',
      rural: 'Apple farmers tend orchards, women weave traditional shawls, shepherds graze cattle on hillsides, and communities gather around bonfires.'
    },
    touristPlaces: [
      {
        id: 'shimla',
        name: 'Shimla',
        description: 'Former British summer capital, queen of hill stations.',
        history: 'Developed by British as summer capital in 1864, UNESCO World Heritage railway.',
        bestTimeToVisit: 'March to June, December to January',
        howToReach: 'Toy train from Kalka or drive from Delhi (350 km)',
        nearbyAttractions: ['Mall Road', 'Christ Church', 'Jakhu Temple'],
        specialFeatures: ['Colonial architecture', 'Toy train', 'Mall Road shopping'],
        images: [],
        category: 'nature'
      },
      {
        id: 'manali',
        name: 'Manali',
        description: 'Popular hill station and gateway to Ladakh and Spiti.',
        history: 'Named after sage Manu, ancient trading route to Central Asia.',
        bestTimeToVisit: 'March to June, October to February',
        howToReach: 'Fly to Bhuntar Airport or drive from Delhi (540 km)',
        nearbyAttractions: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple'],
        specialFeatures: ['Adventure sports', 'Snow activities', 'Backpacker hub'],
        images: [],
        category: 'nature'
      },
      {
        id: 'dharamshala-mcleodganj',
        name: 'Dharamshala & McLeod Ganj',
        description: 'Home of Dalai Lama, center of Tibetan culture in India.',
        history: 'Established as British hill station, became Tibetan refugee center in 1960.',
        bestTimeToVisit: 'March to June, September to December',
        howToReach: 'Fly to Gaggal Airport or drive from Delhi (480 km)',
        nearbyAttractions: ['Dalai Lama Temple', 'Bhagsu Waterfall', 'Triund Trek'],
        specialFeatures: ['Tibetan culture', 'Buddhist monasteries', 'Trekking base'],
        images: [],
        category: 'cultural'
      },
      {
        id: 'spiti-valley',
        name: 'Spiti Valley',
        description: 'Cold desert mountain valley, "Little Tibet".',
        history: 'Ancient Buddhist kingdom, preserved Tibetan culture for centuries.',
        bestTimeToVisit: 'May to October',
        howToReach: 'Drive from Manali (200 km) or Shimla (412 km)',
        nearbyAttractions: ['Key Monastery', 'Chandratal Lake', 'Kibber Village'],
        specialFeatures: ['High altitude desert', 'Ancient monasteries', 'Unique landscape'],
        images: [],
        category: 'nature'
      },
      {
        id: 'kullu-valley',
        name: 'Kullu Valley',
        description: 'Valley of Gods with temples, festivals, and natural beauty.',
        history: 'Ancient kingdom mentioned in Mahabharata, rich cultural heritage.',
        bestTimeToVisit: 'March to June, October to December',
        howToReach: 'Fly to Bhuntar Airport or drive from Delhi (520 km)',
        nearbyAttractions: ['Kullu Dussehra', 'Bijli Mahadev', 'Great Himalayan National Park'],
        specialFeatures: ['Famous Dussehra festival', 'River rafting', 'Apple orchards'],
        images: [],
        category: 'cultural'
      }
    ],
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    capital: 'Ranchi',
    famousFor: 'Tribal Culture, Waterfalls, Mineral Resources',
    culturalEssence: 'Rich in tribal heritage with diverse indigenous communities, beautiful waterfalls, and dense forests. Known for its mineral wealth and traditional arts.',
    dish: {
      name: 'Handia',
      description: 'Traditional fermented rice beer of tribal communities, prepared during festivals and special occasions, representing indigenous brewing traditions.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Traditional greeting',
      language: 'Hindi/Tribal languages'
    },
    stereotype: {
      myth: 'Only mining state with no culture, unsafe for tourists',
      reality: 'Rich tribal heritage, beautiful natural landscapes, growing tourism, vibrant folk culture, and warm hospitality of indigenous communities.'
    },
    festivals: {
      spring: 'Sarhul',
      summer: 'Karma',
      monsoon: 'Teej',
      winter: 'Sohrai'
    },
    dayInLife: {
      urban: 'Mining engineers work in industrial areas, students attend technical colleges, families enjoy tribal cuisine, and evenings feature folk music.',
      rural: 'Tribal communities practice sustainable farming, women create traditional crafts, children learn folk dances, and villages celebrate with drums.'
    },
    touristPlaces: [
      {
        id: 'hundru-falls',
        name: 'Hundru Falls',
        description: 'Spectacular waterfall formed by Subarnarekha river.',
        history: 'Natural waterfall, sacred to local tribal communities.',
        bestTimeToVisit: 'July to February',
        howToReach: 'Drive from Ranchi (45 km)',
        nearbyAttractions: ['Jonha Falls', 'Ranchi Lake', 'Rock Garden'],
        specialFeatures: ['98-meter high fall', 'Natural swimming pool', 'Scenic surroundings'],
        images: [],
        category: 'nature'
      },
      {
        id: 'betla-national-park',
        name: 'Betla National Park',
        description: 'First national park of Jharkhand with diverse wildlife.',
        history: 'Established in 1986, part of Palamau Tiger Reserve.',
        bestTimeToVisit: 'November to June',
        howToReach: 'Drive from Ranchi (170 km) to Daltonganj',
        nearbyAttractions: ['Palamau Fort', 'Kechki', 'Mirchiya Waterfalls'],
        specialFeatures: ['Tiger reserve', 'Elephant safari', 'Ancient fort ruins'],
        entryFee: '₹50 for Indians, ₹500 for foreigners',
        timings: '6:00 AM to 6:00 PM',
        images: [],
        category: 'nature'
      },
      {
        id: 'deoghar',
        name: 'Deoghar',
        description: 'Sacred town with Baidyanath Jyotirlinga temple.',
        history: 'One of 12 Jyotirlinga temples, ancient pilgrimage center.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Jasidih station, then drive 7 km',
        nearbyAttractions: ['Baidyanath Temple', 'Nandan Pahar', 'Tapovan'],
        specialFeatures: ['Jyotirlinga temple', 'Shravan month pilgrimage', 'Ropeway rides'],
        entryFee: 'Free',
        timings: '4:00 AM to 3:30 PM, 6:00 PM to 9:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'netarhat',
        name: 'Netarhat',
        description: 'Queen of Chotanagpur, hill station with sunrise views.',
        history: 'British-era hill station, educational center with residential school.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Ranchi (156 km)',
        nearbyAttractions: ['Sunrise Point', 'Sunset Point', 'Lower Ghaghri Falls'],
        specialFeatures: ['Sunrise and sunset views', 'Pleasant climate', 'Educational tourism'],
        images: [],
        category: 'nature'
      },
      {
        id: 'parasnath-hill',
        name: 'Parasnath Hill',
        description: 'Highest peak in Jharkhand, sacred Jain pilgrimage site.',
        history: 'Sacred to Jains, 20 of 24 Tirthankaras attained moksha here.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Parasnath station, then trek to hilltop',
        nearbyAttractions: ['Jain temples', 'Madhuban', 'Giridih'],
        specialFeatures: ['Jain pilgrimage', 'Trekking trails', 'Panoramic views'],
        images: [],
        category: 'religious'
      }
    ],
    color: 'from-green-600 to-brown-600'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    capital: 'Bengaluru',
    famousFor: 'IT Hub, Palaces, Coffee Plantations',
    culturalEssence: 'Silicon Valley of India with rich historical heritage, magnificent palaces, and diverse landscapes from beaches to hills. Known for classical music and dance.',
    dish: {
      name: 'Bisi Bele Bath',
      description: 'Spicy rice dish cooked with lentils, vegetables, and aromatic spices, topped with ghee and served hot - comfort food of Karnataka.'
    },
    language: {
      phrase: 'Namaskara',
      meaning: 'Respectful greeting',
      language: 'Kannada'
    },
    stereotype: {
      myth: 'Only IT city with no traditional culture',
      reality: 'Perfect blend of tradition and modernity, rich cultural heritage, diverse landscapes, classical arts, and vibrant local traditions alongside technology.'
    },
    festivals: {
      spring: 'Ugadi',
      summer: 'Karaga',
      monsoon: 'Teej',
      winter: 'Dussehra (Mysore)'
    },
    dayInLife: {
      urban: 'IT professionals work in tech parks, families enjoy filter coffee, students attend prestigious institutions, and evenings feature cultural performances.',
      rural: 'Coffee farmers tend plantations, silk weavers create beautiful sarees, families visit ancient temples, and communities celebrate with classical music.'
    },
    touristPlaces: [
      {
        id: 'mysore-palace',
        name: 'Mysore Palace',
        description: 'Magnificent royal palace, architectural marvel of South India.',
        history: 'Built by Tipu Sultan and Hyder Ali, current structure from early 20th century.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Mysore station or drive from Bangalore (150 km)',
        nearbyAttractions: ['Chamundi Hills', 'Brindavan Gardens', 'St. Philomena\'s Church'],
        specialFeatures: ['Royal architecture', 'Dussehra celebrations', 'Light illumination'],
        entryFee: '₹70 for Indians, ₹200 for foreigners',
        timings: '10:00 AM to 5:30 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'hampi',
        name: 'Hampi',
        description: 'UNESCO World Heritage site, ruins of Vijayanagara Empire.',
        history: 'Capital of Vijayanagara Empire (14th-16th centuries), destroyed in 1565.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Hospet, then drive 13 km to Hampi',
        nearbyAttractions: ['Virupaksha Temple', 'Lotus Mahal', 'Elephant Stables'],
        specialFeatures: ['UNESCO World Heritage', 'Ancient ruins', 'Boulder landscapes'],
        entryFee: '₹40 for Indians, ₹600 for foreigners',
        timings: '6:00 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'coorg',
        name: 'Coorg (Kodagu)',
        description: 'Scotland of India, famous for coffee plantations and hill stations.',
        history: 'Independent kingdom until 1834, known for warrior Kodava community.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Bangalore (260 km) or Mysore (120 km)',
        nearbyAttractions: ['Abbey Falls', 'Raja\'s Seat', 'Dubare Elephant Camp'],
        specialFeatures: ['Coffee plantations', 'Kodava culture', 'Adventure activities'],
        images: [],
        category: 'nature'
      },
      {
        id: 'gokarna',
        name: 'Gokarna',
        description: 'Sacred town with pristine beaches and ancient temples.',
        history: 'Ancient pilgrimage center, mentioned in Hindu scriptures.',
        bestTimeToVisit: 'November to March',
        howToReach: 'Train to Gokarna Road station or drive from Bangalore (485 km)',
        nearbyAttractions: ['Mahabaleshwar Temple', 'Om Beach', 'Kudle Beach'],
        specialFeatures: ['Sacred temples', 'Pristine beaches', 'Backpacker destination'],
        images: [],
        category: 'religious'
      },
      {
        id: 'bandipur-national-park',
        name: 'Bandipur National Park',
        description: 'Tiger reserve with diverse wildlife and forest landscapes.',
        history: 'Established in 1974, part of Nilgiri Biosphere Reserve.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Drive from Bangalore (220 km) or Mysore (80 km)',
        nearbyAttractions: ['Mudumalai National Park', 'Ooty', 'Wayanad'],
        specialFeatures: ['Tiger sightings', 'Elephant herds', 'Safari experiences'],
        entryFee: '₹300 for Indians, ₹1200 for foreigners',
        timings: '6:00 AM to 9:00 AM, 3:30 PM to 6:00 PM',
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    famousFor: 'Backwaters, Ayurveda, Spices',
    culturalEssence: 'God\'s Own Country with unique backwater ecosystem, ancient Ayurvedic traditions, and high literacy rates. Known for classical arts like Kathakali and Mohiniyattam.',
    dish: {
      name: 'Kerala Sadhya',
      description: 'Traditional vegetarian feast served on banana leaf with over 20 dishes, representing Kerala\'s culinary diversity and Ayurvedic principles.'
    },
    language: {
      phrase: 'Namaskaram',
      meaning: 'Respectful greeting with joined palms',
      language: 'Malayalam'
    },
    stereotype: {
      myth: 'Only backwaters and coconuts, communist state with no development',
      reality: 'Highest literacy rate, excellent healthcare, diverse landscapes, rich cultural heritage, and progressive social indicators alongside natural beauty.'
    },
    festivals: {
      spring: 'Vishu',
      summer: 'Thrissur Pooram',
      monsoon: 'Onam',
      winter: 'Christmas'
    },
    dayInLife: {
      urban: 'IT professionals work in Technopark, families enjoy fish curry meals, students excel in education, and evenings feature classical performances.',
      rural: 'Fishermen cast nets in backwaters, spice farmers tend cardamom plantations, families practice Ayurvedic traditions, and communities celebrate boat races.'
    },
    touristPlaces: [
      {
        id: 'alleppey-backwaters',
        name: 'Alleppey Backwaters',
        description: 'Venice of the East with network of canals, lakes, and lagoons.',
        history: 'Ancient port city, backwater tourism developed in recent decades.',
        bestTimeToVisit: 'November to February',
        howToReach: 'Train to Alappuzha station or drive from Kochi (53 km)',
        nearbyAttractions: ['Kumarakom', 'Vembanad Lake', 'Pathiramanal Island'],
        specialFeatures: ['Houseboat cruises', 'Coir industry', 'Snake boat races'],
        images: [],
        category: 'nature'
      },
      {
        id: 'munnar',
        name: 'Munnar',
        description: 'Hill station famous for tea plantations and scenic beauty.',
        history: 'Developed by British as tea plantation area in 1870s.',
        bestTimeToVisit: 'September to March',
        howToReach: 'Drive from Kochi (130 km) or fly to Kochi airport',
        nearbyAttractions: ['Tea Museum', 'Eravikulam National Park', 'Mattupetty Dam'],
        specialFeatures: ['Tea plantations', 'Nilgiri Tahr sanctuary', 'Cool climate'],
        images: [],
        category: 'nature'
      },
      {
        id: 'kochi-fort',
        name: 'Fort Kochi',
        description: 'Historic port city with colonial architecture and cultural diversity.',
        history: 'Portuguese, Dutch, and British colonial influences over 500 years.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Kochi airport or train to Ernakulam station',
        nearbyAttractions: ['Chinese Fishing Nets', 'St. Francis Church', 'Mattancherry Palace'],
        specialFeatures: ['Colonial architecture', 'Art galleries', 'Spice markets'],
        images: [],
        category: 'heritage'
      },
      {
        id: 'thekkady-periyar',
        name: 'Thekkady (Periyar)',
        description: 'Wildlife sanctuary famous for elephant sightings and spice plantations.',
        history: 'Established in 1950, one of India\'s first wildlife reserves.',
        bestTimeToVisit: 'October to June',
        howToReach: 'Drive from Kochi (190 km) or Madurai (140 km)',
        nearbyAttractions: ['Periyar Lake', 'Spice plantations', 'Bamboo rafting'],
        specialFeatures: ['Elephant sightings', 'Boat safaris', 'Spice tours'],
        entryFee: '₹25 for Indians, ₹300 for foreigners',
        timings: '6:00 AM to 6:00 PM',
        images: [],
        category: 'nature'
      },
      {
        id: 'kovalam-beach',
        name: 'Kovalam Beach',
        description: 'Famous beach destination with lighthouse and Ayurvedic resorts.',
        history: 'Fishing village transformed into international beach destination.',
        bestTimeToVisit: 'November to March',
        howToReach: 'Drive from Thiruvananthapuram (16 km)',
        nearbyAttractions: ['Lighthouse Beach', 'Hawah Beach', 'Samudra Beach'],
        specialFeatures: ['Lighthouse views', 'Ayurvedic treatments', 'Beach activities'],
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-green-600 to-blue-600'
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    famousFor: 'Tiger Reserves, Khajuraho Temples, Tribal Culture',
    culturalEssence: 'Heart of India with maximum tiger reserves, UNESCO World Heritage temples, and rich tribal heritage. Known for classical music and traditional handicrafts.',
    dish: {
      name: 'Dal Bafla',
      description: 'Wheat dumplings served with spicy dal and ghee, similar to Rajasthani dal baati but with unique Madhya Pradesh preparation and flavors.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Traditional greeting',
      language: 'Hindi'
    },
    stereotype: {
      myth: 'Only forests and tigers, no urban development',
      reality: 'Rich cultural heritage, magnificent temples, growing cities, diverse landscapes, and perfect balance of wildlife conservation with development.'
    },
    festivals: {
      spring: 'Holi',
      summer: 'Teej',
      monsoon: 'Hariyali Teej',
      winter: 'Diwali'
    },
    dayInLife: {
      urban: 'Government employees work in state capital, families enjoy street food, students attend universities, and evenings feature cultural programs.',
      rural: 'Tribal communities practice traditional farming, women create handicrafts, forest guards protect wildlife, and villages celebrate with folk dances.'
    },
    touristPlaces: [
      {
        id: 'khajuraho-temples',
        name: 'Khajuraho Temples',
        description: 'UNESCO World Heritage site famous for erotic sculptures and architecture.',
        history: 'Built by Chandela dynasty between 950-1050 CE, 85 temples originally.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Khajuraho airport or train to Khajuraho station',
        nearbyAttractions: ['Western Group of Temples', 'Eastern Group', 'Archaeological Museum'],
        specialFeatures: ['Erotic sculptures', 'Architectural marvel', 'Light and sound show'],
        entryFee: '₹40 for Indians, ₹600 for foreigners',
        timings: '6:00 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'bandhavgarh-national-park',
        name: 'Bandhavgarh National Park',
        description: 'Famous tiger reserve with highest density of tigers in India.',
        history: 'Former hunting ground of Maharaja of Rewa, national park since 1968.',
        bestTimeToVisit: 'October to June',
        howToReach: 'Fly to Jabalpur, then drive 200 km',
        nearbyAttractions: ['Bandhavgarh Fort', 'Baghel Museum', 'Shesh Shaiya'],
        specialFeatures: ['Highest tiger density', 'Ancient fort', 'White tiger history'],
        entryFee: '₹200 for Indians, ₹2000 for foreigners',
        timings: '6:00 AM to 11:00 AM, 2:30 PM to 6:00 PM',
        images: [],
        category: 'nature'
      },
      {
        id: 'sanchi-stupa',
        name: 'Sanchi Stupa',
        description: 'UNESCO World Heritage Buddhist monument built by Emperor Ashoka.',
        history: 'Built in 3rd century BCE by Ashoka, expanded over centuries.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Bhopal, then drive 46 km',
        nearbyAttractions: ['Archaeological Museum', 'Udayagiri Caves', 'Vidisha'],
        specialFeatures: ['Great Stupa', 'Buddhist sculptures', 'Ashoka\'s edicts'],
        entryFee: '₹30 for Indians, ₹500 for foreigners',
        timings: '9:00 AM to 5:30 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'pachmarhi',
        name: 'Pachmarhi',
        description: 'Only hill station in Madhya Pradesh, queen of Satpura.',
        history: 'Discovered by British in 1857, developed as hill station.',
        bestTimeToVisit: 'October to June',
        howToReach: 'Train to Pipariya, then drive 47 km',
        nearbyAttractions: ['Bee Falls', 'Jata Shankar', 'Dhoopgarh'],
        specialFeatures: ['Hill station', 'Cave temples', 'Sunset point'],
        images: [],
        category: 'nature'
      },
      {
        id: 'gwalior-fort',
        name: 'Gwalior Fort',
        description: 'Magnificent hilltop fort called "Gibraltar of India".',
        history: 'Built in 8th century, ruled by various dynasties over centuries.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Gwalior station or drive from Delhi (320 km)',
        nearbyAttractions: ['Man Mandir Palace', 'Saas Bahu Temple', 'Teli Ka Mandir'],
        specialFeatures: ['Hilltop fort', 'Architectural marvel', 'Sound and light show'],
        entryFee: '₹75 for Indians, ₹250 for foreigners',
        timings: '6:00 AM to 5:30 PM',
        images: [],
        category: 'heritage'
      }
    ],
    color: 'from-orange-600 to-red-600'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    famousFor: 'Bollywood, Business Capital, Ajanta Ellora Caves',
    culturalEssence: 'Financial capital of India, birthplace of Bollywood, and home to ancient cave temples. Rich Marathi culture with strong traditions of literature and arts.',
    dish: {
      name: 'Vada Pav',
      description: 'Mumbai\'s iconic street food - spiced potato fritter in a bun with chutneys, representing the city\'s fast-paced life and democratic food culture.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Respectful greeting',
      language: 'Marathi'
    },
    stereotype: {
      myth: 'Only Mumbai and business, no traditional culture',
      reality: 'Rich Marathi heritage, ancient cave temples, diverse landscapes, strong cultural traditions, and perfect blend of modernity with deep-rooted values.'
    },
    festivals: {
      spring: 'Gudi Padwa',
      summer: 'Ashadhi Ekadashi',
      monsoon: 'Ganesh Chaturthi',
      winter: 'Diwali'
    },
    dayInLife: {
      urban: 'Commuters travel in local trains, office workers enjoy vada pav, film industry creates dreams, and families celebrate festivals with enthusiasm.',
      rural: 'Farmers grow sugarcane and cotton, women participate in self-help groups, youth migrate to cities, and communities maintain strong cultural traditions.'
    },
    touristPlaces: [
      {
        id: 'ajanta-ellora-caves',
        name: 'Ajanta & Ellora Caves',
        description: 'UNESCO World Heritage rock-cut cave temples and monasteries.',
        history: 'Ajanta (2nd century BCE-6th CE), Ellora (6th-10th century CE), Buddhist, Hindu, Jain.',
        bestTimeToVisit: 'November to March',
        howToReach: 'Fly to Aurangabad, then drive to caves',
        nearbyAttractions: ['Daulatabad Fort', 'Bibi Ka Maqbara', 'Grishneshwar Temple'],
        specialFeatures: ['Rock-cut architecture', 'Ancient paintings', 'Religious diversity'],
        entryFee: '₹40 for Indians, ₹600 for foreigners',
        timings: '9:00 AM to 5:30 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'mumbai-gateway-of-india',
        name: 'Gateway of India, Mumbai',
        description: 'Iconic monument and symbol of Mumbai, built during British era.',
        history: 'Built in 1924 to commemorate visit of King George V and Queen Mary.',
        bestTimeToVisit: 'November to February',
        howToReach: 'Located in South Mumbai, accessible by all transport modes',
        nearbyAttractions: ['Taj Hotel', 'Elephanta Caves', 'Marine Drive'],
        specialFeatures: ['Iconic architecture', 'Boat rides to Elephanta', 'Historical significance'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'heritage'
      },
      {
        id: 'lonavala-khandala',
        name: 'Lonavala & Khandala',
        description: 'Popular hill stations near Mumbai and Pune with scenic beauty.',
        history: 'Developed during British era, popular weekend getaway.',
        bestTimeToVisit: 'June to September, December to February',
        howToReach: 'Train to Lonavala station or drive from Mumbai (83 km)',
        nearbyAttractions: ['Karla Caves', 'Bhaja Caves', 'Tiger\'s Leap'],
        specialFeatures: ['Monsoon destination', 'Ancient caves', 'Chikki (sweet)'],
        images: [],
        category: 'nature'
      },
      {
        id: 'mahabaleshwar',
        name: 'Mahabaleshwar',
        description: 'Hill station famous for strawberries and scenic viewpoints.',
        history: 'Former summer capital of Bombay Presidency during British rule.',
        bestTimeToVisit: 'October to June',
        howToReach: 'Drive from Mumbai (263 km) or Pune (120 km)',
        nearbyAttractions: ['Arthur\'s Seat', 'Elephant\'s Head Point', 'Pratapgad Fort'],
        specialFeatures: ['Strawberry farms', 'Scenic viewpoints', 'Pleasant climate'],
        images: [],
        category: 'nature'
      },
      {
        id: 'shirdi',
        name: 'Shirdi',
        description: 'Sacred pilgrimage town, home of Sai Baba.',
        history: 'Sai Baba lived here from 1858-1918, became major pilgrimage center.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Sainagar Shirdi station or drive from Mumbai (296 km)',
        nearbyAttractions: ['Sai Baba Temple', 'Dwarkamai', 'Chavadi'],
        specialFeatures: ['Sai Baba shrine', 'Spiritual atmosphere', 'Devotee services'],
        entryFee: 'Free',
        timings: '4:00 AM to 11:15 PM',
        images: [],
        category: 'religious'
      }
    ],
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 'manipur',
    name: 'Manipur',
    capital: 'Imphal',
    famousFor: 'Classical Dance, Polo, Loktak Lake',
    culturalEssence: 'Jewel of India known for Manipuri classical dance, birthplace of modern polo, and unique floating islands. Rich in martial arts and handloom traditions.',
    dish: {
      name: 'Eromba',
      description: 'Traditional Manipuri dish of boiled vegetables mashed with fermented fish and chilies, representing the state\'s love for healthy, flavorful cuisine.'
    },
    language: {
      phrase: 'Khurumjari',
      meaning: 'How are you?',
      language: 'Manipuri (Meiteilon)'
    },
    stereotype: {
      myth: 'Remote state with only violence and insurgency',
      reality: 'Rich cultural heritage, classical dance traditions, sports excellence, beautiful landscapes, and peaceful communities with strong artistic traditions.'
    },
    festivals: {
      spring: 'Yaoshang (Holi)',
      summer: 'Kang (Ratha Yatra)',
      monsoon: 'Heikru Hidongba',
      winter: 'Ningol Chakouba'
    },
    dayInLife: {
      urban: 'Government employees work in Imphal, students practice classical dance, families enjoy local markets, and evenings feature cultural performances.',
      rural: 'Farmers cultivate rice in valleys, women weave traditional textiles, youth practice martial arts, and communities gather for folk festivals.'
    },
    touristPlaces: [
      {
        id: 'loktak-lake',
        name: 'Loktak Lake',
        description: 'Largest freshwater lake in Northeast India with floating islands.',
        history: 'Ancient lake, lifeline of Manipur, unique phumdis (floating islands).',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Imphal (48 km)',
        nearbyAttractions: ['Keibul Lamjao National Park', 'Sendra Island', 'INA Memorial'],
        specialFeatures: ['Floating islands', 'Sangai deer habitat', 'Fishing communities'],
        images: [],
        category: 'nature'
      },
      {
        id: 'kangla-fort',
        name: 'Kangla Fort',
        description: 'Ancient seat of Manipur rulers with historical and religious significance.',
        history: 'Capital of Manipur kingdom for over 2000 years until 1891.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Imphal city center',
        nearbyAttractions: ['Manipur State Museum', 'Polo Ground', 'Ima Keithel'],
        specialFeatures: ['Ancient palace ruins', 'Sacred groves', 'Historical significance'],
        entryFee: '₹10 for Indians',
        timings: '10:00 AM to 4:30 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'ima-keithel',
        name: 'Ima Keithel (Mother\'s Market)',
        description: 'Unique market run entirely by women, largest of its kind in Asia.',
        history: 'Traditional market system, women-only vendors for centuries.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Imphal city center',
        nearbyAttractions: ['Kangla Fort', 'Manipur State Museum', 'Polo Ground'],
        specialFeatures: ['Women-only vendors', 'Traditional products', 'Cultural significance'],
        images: [],
        category: 'cultural'
      },
      {
        id: 'shirui-kashong-peak',
        name: 'Shirui Kashong Peak',
        description: 'Home to rare Shirui lily, state flower of Manipur.',
        history: 'Sacred peak, home to endemic Shirui lily found nowhere else.',
        bestTimeToVisit: 'May to June (lily blooming season)',
        howToReach: 'Drive from Imphal to Ukhrul (84 km), then trek',
        nearbyAttractions: ['Ukhrul town', 'Khangkhui Cave', 'Khayang Peak'],
        specialFeatures: ['Endemic Shirui lily', 'Trekking trails', 'Panoramic views'],
        images: [],
        category: 'nature'
      },
      {
        id: 'moirang',
        name: 'Moirang',
        description: 'Historic town associated with INA and Khamba-Thoibi legend.',
        history: 'Ancient town, INA headquarters, legendary love story setting.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Imphal (45 km)',
        nearbyAttractions: ['INA Memorial', 'Loktak Lake', 'Thanga Island'],
        specialFeatures: ['INA history', 'Cultural legends', 'Lake proximity'],
        images: [],
        category: 'heritage'
      }
    ],
    color: 'from-pink-600 to-purple-600'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    capital: 'Shillong',
    famousFor: 'Living Root Bridges, Wettest Place on Earth, Matrilineal Society',
    culturalEssence: 'Abode of Clouds with unique matrilineal society, living root bridges, and highest rainfall. Known for its music culture and indigenous traditions.',
    dish: {
      name: 'Jadoh',
      description: 'Traditional Khasi rice dish cooked with pork and aromatic herbs, representing Meghalaya\'s tribal culinary heritage and love for meat.'
    },
    language: {
      phrase: 'Kumno?',
      meaning: 'How are you?',
      language: 'Khasi'
    },
    stereotype: {
      myth: 'Only rain and difficult terrain, no development',
      reality: 'Unique matrilineal society, rich musical heritage, sustainable living practices, beautiful landscapes, and strong community traditions.'
    },
    festivals: {
      spring: 'Shad Suk Mynsiem',
      summer: 'Behdienkhlam',
      monsoon: 'Wangala',
      winter: 'Christmas'
    },
    dayInLife: {
      urban: 'Musicians practice in Shillong cafes, students attend prestigious schools, families enjoy tribal cuisine, and evenings feature live music.',
      rural: 'Tribal communities practice jhum cultivation, women lead households, youth learn traditional crafts, and villages celebrate with community dances.'
    },
    touristPlaces: [
      {
        id: 'cherrapunji-mawsynram',
        name: 'Cherrapunji & Mawsynram',
        description: 'Wettest places on Earth with spectacular waterfalls and living root bridges.',
        history: 'Traditional Khasi settlements, world records for highest rainfall.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Drive from Shillong (54 km to Cherrapunji)',
        nearbyAttractions: ['Nohkalikai Falls', 'Seven Sisters Falls', 'Mawsmai Cave'],
        specialFeatures: ['Highest rainfall', 'Living root bridges', 'Spectacular waterfalls'],
        images: [],
        category: 'nature'
      },
      {
        id: 'living-root-bridges',
        name: 'Living Root Bridges',
        description: 'Unique bridges grown from rubber tree roots by Khasi tribes.',
        history: 'Traditional Khasi engineering, some bridges over 500 years old.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Trek from various villages in East Khasi Hills',
        nearbyAttractions: ['Double Decker Bridge', 'Rainbow Falls', 'Nongriat Village'],
        specialFeatures: ['Bio-engineering marvel', 'Sustainable construction', 'Trekking adventure'],
        images: [],
        category: 'nature'
      },
      {
        id: 'shillong',
        name: 'Shillong',
        description: 'Scotland of the East, hill station with vibrant music culture.',
        history: 'Former capital of Assam, developed during British era.',
        bestTimeToVisit: 'March to June, September to November',
        howToReach: 'Fly to Shillong airport or drive from Guwahati (100 km)',
        nearbyAttractions: ['Ward\'s Lake', 'Elephant Falls', 'Shillong Peak'],
        specialFeatures: ['Music capital', 'Pleasant climate', 'Educational hub'],
        images: [],
        category: 'nature'
      },
      {
        id: 'dawki-umngot-river',
        name: 'Dawki & Umngot River',
        description: 'Crystal clear river on India-Bangladesh border.',
        history: 'Traditional border trade point, pristine river ecosystem.',
        bestTimeToVisit: 'November to May',
        howToReach: 'Drive from Shillong (96 km)',
        nearbyAttractions: ['Shnongpdeng', 'Mawlynnong Village', 'Bangladesh border'],
        specialFeatures: ['Crystal clear water', 'Boating', 'Border tourism'],
        images: [],
        category: 'nature'
      },
      {
        id: 'mawlynnong-village',
        name: 'Mawlynnong Village',
        description: 'Asia\'s cleanest village with community-based tourism.',
        history: 'Traditional Khasi village, awarded cleanest village in Asia.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Drive from Shillong (90 km)',
        nearbyAttractions: ['Living root bridge', 'Sky Walk', 'Bangladesh viewpoint'],
        specialFeatures: ['Cleanest village', 'Community tourism', 'Sustainable living'],
        images: [],
        category: 'cultural'
      }
    ],
    color: 'from-green-600 to-blue-600'
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    capital: 'Aizawl',
    famousFor: 'Bamboo Dance, Peaceful Society, Literacy',
    culturalEssence: 'Land of the hill people with highest literacy rate in Northeast, peaceful society, and rich bamboo culture. Known for traditional dances and community harmony.',
    dish: {
      name: 'Bai',
      description: 'Traditional Mizo stew made with pork, bamboo shoots, and local herbs, representing the state\'s tribal culinary traditions and forest-based ingredients.'
    },
    language: {
      phrase: 'I dam em?',
      meaning: 'How are you?',
      language: 'Mizo'
    },
    stereotype: {
      myth: 'Remote tribal state with no modern development',
      reality: 'Highest literacy in Northeast, peaceful society, strong community values, rich cultural traditions, and excellent governance with minimal crime.'
    },
    festivals: {
      spring: 'Chapchar Kut',
      summer: 'Mim Kut',
      monsoon: 'Pawl Kut',
      winter: 'Christmas'
    },
    dayInLife: {
      urban: 'Government employees work in Aizawl, students excel in education, families attend church services, and communities practice traditional dances.',
      rural: 'Farmers practice jhum cultivation, women weave traditional textiles, youth participate in community service, and villages maintain strong social bonds.'
    },
    touristPlaces: [
      {
        id: 'aizawl',
        name: 'Aizawl',
        description: 'Capital city built on ridges with panoramic valley views.',
        history: 'Established as British administrative center, became state capital.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Lengpui Airport or drive from Silchar (180 km)',
        nearbyAttractions: ['Mizoram State Museum', 'Solomon\'s Temple', 'Durtlang Hills'],
        specialFeatures: ['Ridge-top city', 'Peaceful atmosphere', 'Cultural center'],
        images: [],
        category: 'cultural'
      },
      {
        id: 'champhai',
        name: 'Champhai',
        description: 'Border town known as "Rice Bowl of Mizoram".',
        history: 'Traditional Mizo settlement, important border trade center.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Aizawl (192 km)',
        nearbyAttractions: ['Rih Dil Lake', 'Thasiama Seno Neihna', 'Myanmar border'],
        specialFeatures: ['Rice cultivation', 'Border views', 'Scenic landscapes'],
        images: [],
        category: 'nature'
      },
      {
        id: 'phawngpui-blue-mountain',
        name: 'Phawngpui (Blue Mountain)',
        description: 'Highest peak in Mizoram with rich biodiversity.',
        history: 'Sacred mountain for Mizos, national park since 1992.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Aizawl (300 km) via Saiha',
        nearbyAttractions: ['Phawngpui National Park', 'Palak Lake', 'Saiha town'],
        specialFeatures: ['Highest peak', 'Endemic species', 'Trekking trails'],
        images: [],
        category: 'nature'
      },
      {
        id: 'tam-dil',
        name: 'Tam Dil',
        description: 'Natural lake surrounded by hills and forests.',
        history: 'Natural formation, important water source and tourist spot.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Aizawl (85 km)',
        nearbyAttractions: ['Saitual', 'Vantawng Falls', 'Thenzawl'],
        specialFeatures: ['Natural lake', 'Boating', 'Scenic beauty'],
        images: [],
        category: 'nature'
      },
      {
        id: 'vantawng-falls',
        name: 'Vantawng Falls',
        description: 'Highest waterfall in Mizoram with spectacular views.',
        history: 'Natural waterfall, popular tourist destination.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Aizawl (137 km)',
        nearbyAttractions: ['Thenzawl', 'Tam Dil', 'Handloom centers'],
        specialFeatures: ['Highest waterfall', 'Swimming pools', 'Photography spot'],
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    capital: 'Kohima',
    famousFor: 'Hornbill Festival, Tribal Culture, WWII History',
    culturalEssence: 'Land of festivals with 16 major tribes, each with unique traditions. Known for vibrant Hornbill Festival and rich oral traditions.',
    dish: {
      name: 'Smoked Pork with Bamboo Shoot',
      description: 'Traditional Naga delicacy of smoked pork cooked with fermented bamboo shoots and ghost peppers, representing the state\'s bold flavors.'
    },
    language: {
      phrase: 'Kaise ase?',
      meaning: 'How are you?',
      language: 'Nagamese'
    },
    stereotype: {
      myth: 'Headhunting tribes with no modern civilization',
      reality: 'Rich cultural diversity, peaceful communities, strong educational values, vibrant festivals, and successful integration of tradition with modernity.'
    },
    festivals: {
      spring: 'Moatsu',
      summer: 'Sekrenyi',
      monsoon: 'Tuluni',
      winter: 'Hornbill Festival'
    },
    dayInLife: {
      urban: 'Government employees work in Kohima, students attend colleges, families practice Christianity, and communities prepare for festivals.',
      rural: 'Tribal farmers practice terrace cultivation, women weave traditional shawls, elders share oral histories, and villages maintain customary laws.'
    },
    touristPlaces: [
      {
        id: 'hornbill-festival-kisama',
        name: 'Hornbill Festival, Kisama',
        description: 'Festival of Festivals showcasing all Naga tribes\' culture.',
        history: 'Started in 2000 to preserve and promote Naga heritage.',
        bestTimeToVisit: 'December 1-10 (festival time)',
        howToReach: 'Fly to Dimapur, then drive to Kisama (74 km)',
        nearbyAttractions: ['Kohima War Cemetery', 'Kohima Museum', 'Catholic Cathedral'],
        specialFeatures: ['16 tribes showcase', 'Traditional competitions', 'Cultural performances'],
        images: [],
        category: 'cultural'
      },
      {
        id: 'kohima-war-cemetery',
        name: 'Kohima War Cemetery',
        description: 'WWII memorial for Battle of Kohima, turning point against Japanese.',
        history: 'Battle of Kohima (1944), decisive victory against Japanese invasion.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Kohima city center',
        nearbyAttractions: ['Kohima Museum', 'Catholic Cathedral', 'Local markets'],
        specialFeatures: ['WWII history', 'War memorial', 'Historical significance'],
        entryFee: 'Free',
        timings: '6:00 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'dzukou-valley',
        name: 'Dzukou Valley',
        description: 'Valley of flowers with seasonal blooms and trekking trails.',
        history: 'Sacred valley for Nagas, pristine ecosystem preserved by communities.',
        bestTimeToVisit: 'June to September (flower season)',
        howToReach: 'Trek from Viswema village (2-3 hours)',
        nearbyAttractions: ['Japfu Peak', 'Viswema village', 'Rhododendron sanctuary'],
        specialFeatures: ['Seasonal flowers', 'Trekking destination', 'Pristine nature'],
        images: [],
        category: 'nature'
      },
      {
        id: 'mon-district',
        name: 'Mon District',
        description: 'Home to Konyak tribe, known for traditional tattoos and crafts.',
        history: 'Former headhunting tribe, rich cultural traditions preserved.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Dimapur (250 km)',
        nearbyAttractions: ['Longwa village', 'Shangnyu village', 'Traditional villages'],
        specialFeatures: ['Konyak tribe culture', 'Traditional tattoos', 'Handicrafts'],
        images: [],
        category: 'cultural'
      },
      {
        id: 'mokokchung',
        name: 'Mokokchung',
        description: 'Cultural center of Ao tribe with educational institutions.',
        history: 'Traditional Ao Naga territory, center of education and culture.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Dimapur (143 km)',
        nearbyAttractions: ['Longkhum village', 'Ungma village', 'Ao tribal villages'],
        specialFeatures: ['Ao tribe culture', 'Educational hub', 'Traditional villages'],
        images: [],
        category: 'cultural'
      }
    ],
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 'odisha',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    famousFor: 'Jagannath Temple, Classical Dance, Ancient Temples',
    culturalEssence: 'Land of Lord Jagannath with magnificent temple architecture, classical Odissi dance, and rich maritime heritage. Known for traditional arts and crafts.',
    dish: {
      name: 'Dalma',
      description: 'Traditional Odia dish of lentils cooked with vegetables and spices, often served as prasad in temples, representing the state\'s vegetarian temple cuisine.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Respectful greeting',
      language: 'Odia'
    },
    stereotype: {
      myth: 'Only temples and cyclones, economically backward',
      reality: 'Rich cultural heritage, growing industrial sector, beautiful beaches, classical arts, and strong community traditions with modern development.'
    },
    festivals: {
      spring: 'Dola Purnima',
      summer: 'Rath Yatra',
      monsoon: 'Raja',
      winter: 'Kali Puja'
    },
    dayInLife: {
      urban: 'IT professionals work in Bhubaneswar, families visit temples, students learn classical dance, and evenings feature cultural programs.',
      rural: 'Farmers cultivate rice, artisans create traditional crafts, fishermen work along coasts, and communities celebrate with folk performances.'
    },
    touristPlaces: [
      {
        id: 'jagannath-temple-puri',
        name: 'Jagannath Temple, Puri',
        description: 'Sacred Char Dham temple famous for annual Rath Yatra.',
        history: 'Built in 12th century, one of four Char Dham pilgrimage sites.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Puri station or drive from Bhubaneswar (60 km)',
        nearbyAttractions: ['Puri Beach', 'Gundicha Temple', 'Raghurajpur village'],
        specialFeatures: ['Char Dham pilgrimage', 'Rath Yatra festival', 'Sacred prasad'],
        entryFee: 'Free (Non-Hindus not allowed inside)',
        timings: '5:00 AM to 12:00 PM, 3:00 PM to 10:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'konark-sun-temple',
        name: 'Konark Sun Temple',
        description: 'UNESCO World Heritage temple designed as chariot of Sun God.',
        history: 'Built in 13th century by King Narasimhadeva I of Eastern Ganga dynasty.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Bhubaneswar (65 km) or Puri (35 km)',
        nearbyAttractions: ['Chandrabhaga Beach', 'ASI Museum', 'Ramchandi Temple'],
        specialFeatures: ['UNESCO World Heritage', 'Architectural marvel', 'Erotic sculptures'],
        entryFee: '₹40 for Indians, ₹600 for foreigners',
        timings: '6:00 AM to 8:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'bhubaneswar-temples',
        name: 'Bhubaneswar Temple City',
        description: 'Temple city with over 500 ancient temples.',
        history: 'Ancient Kalinga capital, temples built from 6th-13th centuries.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Bhubaneswar airport or train to Bhubaneswar station',
        nearbyAttractions: ['Lingaraj Temple', 'Mukteshwar Temple', 'Udayagiri Caves'],
        specialFeatures: ['Ancient temple architecture', 'Kalinga style', 'Living heritage'],
        entryFee: 'Free (some temples charge nominal fee)',
        timings: 'Varies by temple',
        images: [],
        category: 'heritage'
      },
      {
        id: 'chilika-lake',
        name: 'Chilika Lake',
        description: 'Largest brackish water lagoon in India, bird sanctuary.',
        history: 'Natural lagoon, important ecosystem and fishing ground.',
        bestTimeToVisit: 'November to February',
        howToReach: 'Drive from Bhubaneswar (100 km) to various entry points',
        nearbyAttractions: ['Nalabana Island', 'Kalijai Temple', 'Dolphin spotting'],
        specialFeatures: ['Migratory birds', 'Irrawaddy dolphins', 'Boat cruises'],
        images: [],
        category: 'nature'
      },
      {
        id: 'simlipal-national-park',
        name: 'Simlipal National Park',
        description: 'Tiger reserve with waterfalls and tribal villages.',
        history: 'Established in 1980, UNESCO Biosphere Reserve since 2009.',
        bestTimeToVisit: 'November to June',
        howToReach: 'Drive from Bhubaneswar (270 km) via Baripada',
        nearbyAttractions: ['Joranda Falls', 'Barehipani Falls', 'Tribal villages'],
        specialFeatures: ['Tiger reserve', 'Waterfalls', 'Tribal culture'],
        entryFee: '₹50 for Indians, ₹500 for foreigners',
        timings: '6:00 AM to 6:00 PM',
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-yellow-600 to-orange-600'
  },
  {
    id: 'punjab',
    name: 'Punjab',
    capital: 'Chandigarh',
    famousFor: 'Golden Temple, Agriculture, Bhangra',
    culturalEssence: 'Land of five rivers, birthplace of Sikhism, and India\'s granary. Known for vibrant Bhangra dance, warm hospitality, and agricultural prosperity.',
    dish: {
      name: 'Makki di Roti & Sarson da Saag',
      description: 'Cornbread served with mustard greens curry and white butter, representing Punjab\'s agricultural abundance and winter harvest celebrations.'
    },
    language: {
      phrase: 'Sat Sri Akal',
      meaning: 'God is truth (Sikh greeting)',
      language: 'Punjabi'
    },
    stereotype: {
      myth: 'Only farming and loud people, no sophistication',
      reality: 'Rich cultural heritage, progressive society, excellent educational institutions, vibrant arts scene, and strong community values beyond agriculture.'
    },
    festivals: {
      spring: 'Baisakhi',
      summer: 'Teej',
      monsoon: 'Karva Chauth',
      winter: 'Lohri'
    },
    dayInLife: {
      urban: 'Business owners start with prayers, families enjoy parathas, students attend coaching classes, and evenings feature bhangra performances.',
      rural: 'Farmers work in wheat fields, women participate in cooperatives, youth practice sports, and communities gather for gurdwara langar.'
    },
    touristPlaces: [
      {
        id: 'golden-temple-amritsar',
        name: 'Golden Temple, Amritsar',
        description: 'Holiest Sikh shrine with golden dome and community kitchen.',
        history: 'Built by Guru Arjan Dev in 1604, gold plating added by Maharaja Ranjit Singh.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Amritsar airport or train to Amritsar station',
        nearbyAttractions: ['Jallianwala Bagh', 'Wagah Border', 'Partition Museum'],
        specialFeatures: ['Golden dome', 'World\'s largest kitchen', '24/7 open'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'religious'
      },
      {
        id: 'jallianwala-bagh',
        name: 'Jallianwala Bagh',
        description: 'Memorial of 1919 massacre, symbol of India\'s freedom struggle.',
        history: 'Site of British massacre on April 13, 1919, turning point in independence movement.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Walking distance from Golden Temple in Amritsar',
        nearbyAttractions: ['Golden Temple', 'Partition Museum', 'Ram Bagh'],
        specialFeatures: ['Freedom struggle memorial', 'Bullet marks preserved', 'Martyrs\' well'],
        entryFee: 'Free',
        timings: '6:30 AM to 7:30 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'wagah-border',
        name: 'Wagah Border',
        description: 'India-Pakistan border famous for daily flag ceremony.',
        history: 'International border since 1947 partition, ceremony started in 1959.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Amritsar (28 km)',
        nearbyAttractions: ['Amritsar city', 'Golden Temple', 'Local markets'],
        specialFeatures: ['Flag lowering ceremony', 'Patriotic atmosphere', 'Border experience'],
        entryFee: 'Free',
        timings: 'Ceremony at sunset (timing varies by season)',
        images: [],
        category: 'heritage'
      },
      {
        id: 'anandpur-sahib',
        name: 'Anandpur Sahib',
        description: 'Holy city where Khalsa was founded by Guru Gobind Singh.',
        history: 'Founded by Guru Tegh Bahadur in 1665, Khalsa established here in 1699.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Chandigarh (80 km) or train to Anandpur Sahib',
        nearbyAttractions: ['Takht Sri Keshgarh Sahib', 'Virasat-e-Khalsa', 'Bhakra Dam'],
        specialFeatures: ['Khalsa birthplace', 'Hola Mohalla festival', 'Sikh heritage'],
        entryFee: 'Free',
        timings: '4:00 AM to 10:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'patiala',
        name: 'Patiala',
        description: 'Royal city famous for Patiala peg, palace, and cultural heritage.',
        history: 'Founded by Baba Ala Singh in 1763, former princely state.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Patiala station or drive from Chandigarh (65 km)',
        nearbyAttractions: ['Qila Mubarak', 'Sheesh Mahal', 'Baradari Gardens'],
        specialFeatures: ['Royal heritage', 'Patiala salwar', 'Cultural center'],
        images: [],
        category: 'heritage'
      }
    ],
    color: 'from-yellow-600 to-orange-600'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    famousFor: 'Palaces, Desert, Royal Heritage',
    culturalEssence: 'Land of Kings with magnificent palaces, desert landscapes, and vibrant folk culture. Known for hospitality, colorful festivals, and traditional arts.',
    dish: {
      name: 'Dal Baati Churma',
      description: 'Hard wheat balls served with spicy lentils and sweet crushed wheat, representing Rajasthan\'s desert cuisine and royal hospitality.'
    },
    language: {
      phrase: 'Khamma Ghani',
      meaning: 'Respectful Rajasthani greeting',
      language: 'Hindi/Rajasthani'
    },
    stereotype: {
      myth: 'Only desert and camels, backward society',
      reality: 'Rich cultural heritage, magnificent architecture, growing industries, vibrant arts scene, and progressive initiatives while preserving traditions.'
    },
    festivals: {
      spring: 'Holi',
      summer: 'Teej',
      monsoon: 'Gangaur',
      winter: 'Desert Festival'
    },
    dayInLife: {
      urban: 'Hotel managers welcome tourists, artisans create handicrafts, students attend heritage schools, and evenings feature folk performances.',
      rural: 'Camel herders cross desert paths, women fetch water from wells, farmers practice desert agriculture, and communities gather for folk music.'
    },
    touristPlaces: [
      {
        id: 'jaipur-city-palace',
        name: 'Jaipur City Palace',
        description: 'Magnificent palace complex showcasing Rajput and Mughal architecture.',
        history: 'Built by Maharaja Sawai Jai Singh II in 1729, still royal residence.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Jaipur city center, accessible by all transport',
        nearbyAttractions: ['Hawa Mahal', 'Jantar Mantar', 'Amber Fort'],
        specialFeatures: ['Royal architecture', 'Museum collections', 'Living palace'],
        entryFee: '₹200 for Indians, ₹500 for foreigners',
        timings: '9:30 AM to 5:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'udaipur-lake-palace',
        name: 'Udaipur Lake Palace',
        description: 'Floating palace on Lake Pichola, epitome of romance.',
        history: 'Built by Maharana Jagat Singh II in 1746 as summer palace.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Udaipur airport, then boat to palace',
        nearbyAttractions: ['City Palace', 'Jag Mandir', 'Saheliyon ki Bari'],
        specialFeatures: ['Floating palace', 'Luxury hotel', 'Romantic setting'],
        images: [],
        category: 'heritage'
      },
      {
        id: 'jaisalmer-fort',
        name: 'Jaisalmer Fort',
        description: 'Living fort in Thar Desert, golden sandstone architecture.',
        history: 'Built in 1156 by Rawal Jaisal, one of few living forts in world.',
        bestTimeToVisit: 'November to February',
        howToReach: 'Train to Jaisalmer station or drive from Jodhpur (285 km)',
        nearbyAttractions: ['Sam Sand Dunes', 'Patwon ki Haveli', 'Gadisar Lake'],
        specialFeatures: ['Living fort', 'Desert architecture', 'Camel safaris'],
        entryFee: '₹30 for Indians, ₹70 for foreigners',
        timings: '9:00 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'pushkar',
        name: 'Pushkar',
        description: 'Sacred town with Brahma temple and holy lake.',
        history: 'Ancient pilgrimage site, one of few Brahma temples in world.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Jaipur (145 km) or Ajmer (15 km)',
        nearbyAttractions: ['Brahma Temple', 'Pushkar Lake', 'Savitri Temple'],
        specialFeatures: ['Sacred lake', 'Camel fair', 'Spiritual atmosphere'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'religious'
      },
      {
        id: 'ranthambore-national-park',
        name: 'Ranthambore National Park',
        description: 'Famous tiger reserve with historic fort ruins.',
        history: 'Former hunting ground of Maharajas, national park since 1980.',
        bestTimeToVisit: 'October to June',
        howToReach: 'Train to Sawai Madhopur, then drive 10 km',
        nearbyAttractions: ['Ranthambore Fort', 'Trinetra Ganesh Temple', 'Surwal Lake'],
        specialFeatures: ['Tiger sightings', 'Historic fort', 'Wildlife photography'],
        entryFee: '₹200 for Indians, ₹1500 for foreigners',
        timings: '6:00 AM to 10:00 AM, 2:00 PM to 6:00 PM',
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-orange-600 to-red-600'
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    capital: 'Gangtok',
    famousFor: 'Kanchenjunga, Organic State, Buddhist Culture',
    culturalEssence: 'First organic state of India with stunning Himalayan views, Buddhist monasteries, and diverse ethnic communities. Known for eco-tourism and peaceful coexistence.',
    dish: {
      name: 'Momos',
      description: 'Steamed dumplings filled with vegetables or meat, served with spicy chutney, representing Sikkim\'s Tibetan culinary influence and mountain culture.'
    },
    language: {
      phrase: 'Tashi Delek',
      meaning: 'Auspicious greetings (Tibetan)',
      language: 'Nepali/Tibetan'
    },
    stereotype: {
      myth: 'Only mountains and monasteries, no modern facilities',
      reality: 'Progressive state with excellent governance, eco-friendly policies, diverse culture, modern amenities, and successful sustainable development model.'
    },
    festivals: {
      spring: 'Losar',
      summer: 'Saga Dawa',
      monsoon: 'Teej',
      winter: 'Dashain'
    },
    dayInLife: {
      urban: 'Government employees work in Gangtok, students attend quality schools, families enjoy mountain views, and evenings feature cultural programs.',
      rural: 'Farmers practice organic cultivation, monks conduct prayers, families run homestays, and communities maintain traditional festivals.'
    },
    touristPlaces: [
      {
        id: 'gangtok',
        name: 'Gangtok',
        description: 'Capital city with stunning mountain views and Buddhist culture.',
        history: 'Former capital of Kingdom of Sikkim, modern hill station.',
        bestTimeToVisit: 'March to June, September to December',
        howToReach: 'Fly to Bagdogra, then drive 124 km',
        nearbyAttractions: ['Rumtek Monastery', 'Tsomgo Lake', 'Nathu La Pass'],
        specialFeatures: ['Mountain views', 'Clean city', 'Buddhist culture'],
        images: [],
        category: 'nature'
      },
      {
        id: 'tsomgo-lake',
        name: 'Tsomgo Lake',
        description: 'Sacred glacial lake at 12,400 feet altitude.',
        history: 'Sacred to local people, changes color with seasons.',
        bestTimeToVisit: 'May to October',
        howToReach: 'Drive from Gangtok (38 km) with permits',
        nearbyAttractions: ['Nathu La Pass', 'Baba Mandir', 'Kyongnosla Alpine Sanctuary'],
        specialFeatures: ['High altitude lake', 'Color changing water', 'Sacred significance'],
        images: [],
        category: 'nature'
      },
      {
        id: 'rumtek-monastery',
        name: 'Rumtek Monastery',
        description: 'Largest monastery in Sikkim, seat of Karmapa.',
        history: 'Built in 1960s, replica of Tsurphu Monastery in Tibet.',
        bestTimeToVisit: 'March to June, September to December',
        howToReach: 'Drive from Gangtok (24 km)',
        nearbyAttractions: ['Old Rumtek Monastery', 'Lingdum Monastery', 'Ranka Monastery'],
        specialFeatures: ['Tibetan architecture', 'Buddhist teachings', 'Peaceful atmosphere'],
        entryFee: 'Free',
        timings: '6:00 AM to 6:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'pelling',
        name: 'Pelling',
        description: 'Hill station with views of Kanchenjunga and ancient monasteries.',
        history: 'Developed as tourist destination, gateway to West Sikkim.',
        bestTimeToVisit: 'March to June, September to December',
        howToReach: 'Drive from Gangtok (115 km)',
        nearbyAttractions: ['Pemayangtse Monastery', 'Rabdentse Ruins', 'Khecheopalri Lake'],
        specialFeatures: ['Kanchenjunga views', 'Ancient monasteries', 'Trekking base'],
        images: [],
        category: 'nature'
      },
      {
        id: 'yumthang-valley',
        name: 'Yumthang Valley',
        description: 'Valley of Flowers with hot springs and rhododendrons.',
        history: 'Sacred valley for local communities, pristine ecosystem.',
        bestTimeToVisit: 'April to June (flower season)',
        howToReach: 'Drive from Gangtok via Lachung (150 km)',
        nearbyAttractions: ['Lachung village', 'Zero Point', 'Shingba Rhododendron Sanctuary'],
        specialFeatures: ['Rhododendron blooms', 'Hot springs', 'Alpine meadows'],
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    famousFor: 'Temples, Classical Arts, Tamil Culture',
    culturalEssence: 'Land of ancient Tamil civilization with magnificent Dravidian temples, classical Bharatanatyam dance, and rich literary heritage. Known for strong cultural identity.',
    dish: {
      name: 'Sambar Rice',
      description: 'Rice served with spicy lentil curry made with tamarind and vegetables, representing Tamil Nadu\'s comfort food and temple cuisine traditions.'
    },
    language: {
      phrase: 'Vanakkam',
      meaning: 'Respectful Tamil greeting',
      language: 'Tamil'
    },
    stereotype: {
      myth: 'Only temples and conservative society, anti-Hindi',
      reality: 'Progressive state with strong industries, excellent education, rich cultural heritage, and proud preservation of Tamil identity alongside modern development.'
    },
    festivals: {
      spring: 'Tamil New Year',
      summer: 'Aadi Perukku',
      monsoon: 'Navarathri',
      winter: 'Pongal'
    },
    dayInLife: {
      urban: 'IT professionals work in Chennai, families visit temples, students learn classical arts, and evenings feature cultural performances.',
      rural: 'Farmers cultivate rice, artisans create bronze sculptures, families maintain temple traditions, and communities celebrate with folk dances.'
    },
    touristPlaces: [
      {
        id: 'meenakshi-temple-madurai',
        name: 'Meenakshi Temple, Madurai',
        description: 'Magnificent Dravidian temple with colorful gopurams.',
        history: 'Built in 6th century, current structure from 12th-18th centuries.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Madurai airport or train to Madurai Junction',
        nearbyAttractions: ['Thirumalai Nayakkar Palace', 'Gandhi Memorial Museum', 'Alagar Hills'],
        specialFeatures: ['Colorful gopurams', 'Thousand pillar hall', 'Living temple'],
        entryFee: 'Free',
        timings: '5:00 AM to 12:30 PM, 4:00 PM to 10:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'mahabalipuram',
        name: 'Mahabalipuram',
        description: 'UNESCO World Heritage site with rock-cut temples and sculptures.',
        history: 'Ancient port city of Pallava dynasty, 7th-8th century monuments.',
        bestTimeToVisit: 'November to February',
        howToReach: 'Drive from Chennai (58 km)',
        nearbyAttractions: ['Shore Temple', 'Five Rathas', 'Arjuna\'s Penance'],
        specialFeatures: ['Rock-cut architecture', 'UNESCO World Heritage', 'Ancient sculptures'],
        entryFee: '₹40 for Indians, ₹600 for foreigners',
        timings: '6:00 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'ooty',
        name: 'Ooty (Udhagamandalam)',
        description: 'Queen of hill stations with tea gardens and colonial charm.',
        history: 'Developed by British as summer retreat, hill station since 1819.',
        bestTimeToVisit: 'April to June, September to November',
        howToReach: 'Toy train from Mettupalayam or drive from Coimbatore (86 km)',
        nearbyAttractions: ['Botanical Gardens', 'Doddabetta Peak', 'Pykara Falls'],
        specialFeatures: ['Toy train', 'Tea gardens', 'Pleasant climate'],
        images: [],
        category: 'nature'
      },
      {
        id: 'kanyakumari',
        name: 'Kanyakumari',
        description: 'Southernmost tip of India where three seas meet.',
        history: 'Ancient pilgrimage site, mentioned in Ramayana and Mahabharata.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Kanyakumari station or drive from Trivandrum (87 km)',
        nearbyAttractions: ['Vivekananda Rock Memorial', 'Thiruvalluvar Statue', 'Sunset Point'],
        specialFeatures: ['Three seas confluence', 'Sunrise and sunset', 'Spiritual significance'],
        entryFee: 'Free (ferry charges for memorial)',
        timings: 'Open 24 hours',
        images: [],
        category: 'nature'
      },
      {
        id: 'thanjavur-temple',
        name: 'Thanjavur Brihadeeswarar Temple',
        description: 'UNESCO World Heritage Chola temple, architectural marvel.',
        history: 'Built by Raja Raja Chola I in 1010 CE, masterpiece of Chola architecture.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Thanjavur station or drive from Chennai (350 km)',
        nearbyAttractions: ['Thanjavur Palace', 'Saraswathi Mahal Library', 'Art Gallery'],
        specialFeatures: ['Chola architecture', 'UNESCO World Heritage', 'Ancient frescoes'],
        entryFee: '₹30 for Indians, ₹500 for foreigners',
        timings: '6:00 AM to 12:30 PM, 4:00 PM to 8:30 PM',
        images: [],
        category: 'heritage'
      }
    ],
    color: 'from-red-600 to-pink-600'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    capital: 'Hyderabad',
    famousFor: 'IT Hub, Nizami Culture, Biryani',
    culturalEssence: 'Youngest state of India with rich Nizami heritage, modern IT industry, and famous Hyderabadi cuisine. Known for pearls, palaces, and progressive governance.',
    dish: {
      name: 'Hyderabadi Biryani',
      description: 'Aromatic rice dish with marinated meat, saffron, and fried onions, cooked in dum style, representing the royal Nizami culinary heritage.'
    },
    language: {
      phrase: 'Adaab',
      meaning: 'Respectful Urdu greeting',
      language: 'Telugu/Urdu'
    },
    stereotype: {
      myth: 'Only IT and biryani, no distinct culture from Andhra Pradesh',
      reality: 'Unique Nizami heritage, distinct Telangana culture, growing industries, rich history, and strong regional identity with modern development.'
    },
    festivals: {
      spring: 'Ugadi',
      summer: 'Bonalu',
      monsoon: 'Bathukamma',
      winter: 'Sankranti'
    },
    dayInLife: {
      urban: 'Tech professionals work in HITEC City, families enjoy biryani, students attend premier institutions, and evenings feature cultural events.',
      rural: 'Farmers benefit from irrigation projects, women participate in self-help groups, youth migrate to cities, and communities celebrate Bathukamma.'
    },
    touristPlaces: [
      {
        id: 'charminar-hyderabad',
        name: 'Charminar, Hyderabad',
        description: 'Iconic monument and symbol of Hyderabad with bustling bazaars.',
        history: 'Built in 1591 by Sultan Muhammad Quli Qutb Shah.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Old City Hyderabad, accessible by metro and bus',
        nearbyAttractions: ['Laad Bazaar', 'Mecca Masjid', 'Salar Jung Museum'],
        specialFeatures: ['Iconic architecture', 'Pearl and bangle markets', 'Historical significance'],
        entryFee: 'Free',
        timings: '9:00 AM to 5:30 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'ramoji-film-city',
        name: 'Ramoji Film City',
        description: 'World\'s largest film studio complex with entertainment attractions.',
        history: 'Established in 1996 by Ramoji Rao, Guinness World Record holder.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Hyderabad (30 km)',
        nearbyAttractions: ['Film sets', 'Adventure sports', 'Gardens'],
        specialFeatures: ['Largest film city', 'Entertainment shows', 'Film tourism'],
        entryFee: '₹1150 for day package',
        timings: '9:00 AM to 5:30 PM',
        images: [],
        category: 'modern'
      },
      {
        id: 'warangal-fort',
        name: 'Warangal Fort',
        description: 'Ruins of Kakatiya dynasty capital with unique architecture.',
        history: 'Built by Kakatiya rulers in 13th century, former capital.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Warangal station or drive from Hyderabad (150 km)',
        nearbyAttractions: ['Thousand Pillar Temple', 'Bhadrakali Temple', 'Kakatiya Rock Garden'],
        specialFeatures: ['Kakatiya architecture', 'Stone gateways', 'Historical ruins'],
        entryFee: '₹25 for Indians, ₹300 for foreigners',
        timings: '9:00 AM to 5:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'nagarjuna-sagar',
        name: 'Nagarjuna Sagar',
        description: 'Large dam with Buddhist heritage site on island.',
        history: 'Dam completed in 1969, ancient Buddhist site submerged and relocated.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Hyderabad (165 km)',
        nearbyAttractions: ['Nagarjunakonda Island', 'Buddhist Museum', 'Ethipothala Falls'],
        specialFeatures: ['Large reservoir', 'Buddhist heritage', 'Boat rides'],
        images: [],
        category: 'heritage'
      },
      {
        id: 'bhadrachalam',
        name: 'Bhadrachalam',
        description: 'Sacred temple town dedicated to Lord Rama on Godavari banks.',
        history: 'Ancient temple, renovated by Kancharla Gopanna (Bhakta Ramadasu).',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Hyderabad (312 km) or train to Bhadrachalam Road',
        nearbyAttractions: ['Parnasala', 'Papikondalu', 'Godavari boat rides'],
        specialFeatures: ['Rama temple', 'Godavari river', 'Spiritual significance'],
        entryFee: 'Free',
        timings: '4:00 AM to 1:00 PM, 3:00 PM to 10:00 PM',
        images: [],
        category: 'religious'
      }
    ],
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 'tripura',
    name: 'Tripura',
    capital: 'Agartala',
    famousFor: 'Tribal Culture, Bamboo Crafts, Ujjayanta Palace',
    culturalEssence: 'Land of diverse tribal communities with rich bamboo craft traditions, ancient temples, and unique cultural synthesis. Known for handloom and handicrafts.',
    dish: {
      name: 'Mui Borok',
      description: 'Traditional Tripuri fish curry cooked with local herbs and vegetables, representing the state\'s tribal culinary heritage and river-based cuisine.'
    },
    language: {
      phrase: 'Kham',
      meaning: 'How are you?',
      language: 'Kokborok'
    },
    stereotype: {
      myth: 'Small tribal state with no development or culture',
      reality: 'Rich tribal heritage, growing literacy rates, beautiful palaces, vibrant handicrafts, and peaceful coexistence of diverse communities.'
    },
    festivals: {
      spring: 'Poila Boishakh',
      summer: 'Kharchi Puja',
      monsoon: 'Garia Puja',
      winter: 'Durga Puja'
    },
    dayInLife: {
      urban: 'Government employees work in Agartala, students attend universities, families visit temples, and artisans create bamboo crafts.',
      rural: 'Tribal farmers practice jhum cultivation, women weave traditional textiles, communities maintain oral traditions, and villages celebrate with folk dances.'
    },
    touristPlaces: [
      {
        id: 'ujjayanta-palace',
        name: 'Ujjayanta Palace',
        description: 'Former royal palace, now state museum with Indo-Saracenic architecture.',
        history: 'Built by Maharaja Radha Kishore Manikya in 1901.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Agartala city center',
        nearbyAttractions: ['Jagannath Temple', 'Heritage Park', 'Fourteen Goddess Temple'],
        specialFeatures: ['Royal architecture', 'Museum collections', 'Beautiful gardens'],
        entryFee: '₹10 for Indians, ₹100 for foreigners',
        timings: '10:00 AM to 5:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'neermahal',
        name: 'Neermahal',
        description: 'Water palace in middle of Rudrasagar Lake.',
        history: 'Built by Maharaja Bir Bikram Kishore Manikya in 1930.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Agartala (53 km) to Melaghar',
        nearbyAttractions: ['Rudrasagar Lake', 'Sepahijala Wildlife Sanctuary', 'Kamalasagar'],
        specialFeatures: ['Water palace', 'Boat rides', 'Light and sound show'],
        entryFee: '₹10 for Indians, ₹100 for foreigners',
        timings: '9:00 AM to 5:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'unakoti',
        name: 'Unakoti',
        description: 'Ancient rock-cut sculptures and carvings in forest setting.',
        history: 'Rock carvings from 7th-9th centuries, Shaivite pilgrimage site.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Agartala (178 km) to Kailashahar',
        nearbyAttractions: ['Chabimura', 'Pilak', 'Jampui Hills'],
        specialFeatures: ['Rock-cut sculptures', 'Ancient carvings', 'Pilgrimage site'],
        entryFee: '₹5 for Indians',
        timings: '9:00 AM to 5:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'jampui-hills',
        name: 'Jampui Hills',
        description: 'Hill station famous for orange cultivation and scenic beauty.',
        history: 'Traditional Mizo settlement area, developed for tourism.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Agartala (200 km)',
        nearbyAttractions: ['Orange gardens', 'Vanghmun village', 'Betlingchhip'],
        specialFeatures: ['Orange cultivation', 'Hill station', 'Mizo culture'],
        images: [],
        category: 'nature'
      },
      {
        id: 'sepahijala-wildlife-sanctuary',
        name: 'Sepahijala Wildlife Sanctuary',
        description: 'Wildlife sanctuary with zoo and botanical garden.',
        history: 'Established in 1972, important biodiversity conservation area.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Agartala (25 km)',
        nearbyAttractions: ['Clouded Leopard National Park', 'Neermahal', 'Kamalasagar'],
        specialFeatures: ['Spectacled langur', 'Clouded leopard', 'Botanical garden'],
        entryFee: '₹20 for Indians, ₹200 for foreigners',
        timings: '8:00 AM to 5:00 PM',
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-green-600 to-teal-600'
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    famousFor: 'Taj Mahal, Spiritual Centers, Mughal Heritage',
    culturalEssence: 'Heartland of India with maximum UNESCO World Heritage sites, birthplace of major religions, and rich Mughal-Awadhi culture. Known for classical music and cuisine.',
    dish: {
      name: 'Lucknowi Biryani',
      description: 'Aromatic rice dish with tender meat cooked in Awadhi style with saffron and spices, representing the royal cuisine of Nawabs of Lucknow.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Respectful greeting',
      language: 'Hindi/Urdu'
    },
    stereotype: {
      myth: 'Only poverty and crime, backward state',
      reality: 'Rich cultural heritage, maximum historical monuments, spiritual significance, growing economy, and diverse landscapes from plains to hills.'
    },
    festivals: {
      spring: 'Holi',
      summer: 'Teej',
      monsoon: 'Janmashtami',
      winter: 'Diwali'
    },
    dayInLife: {
      urban: 'Government employees work in state capital, families visit historical sites, students attend prestigious universities, and evenings feature cultural programs.',
      rural: 'Farmers cultivate wheat and sugarcane, artisans create traditional crafts, pilgrims visit religious sites, and communities celebrate with folk performances.'
    },
    touristPlaces: [
      {
        id: 'taj-mahal-agra',
        name: 'Taj Mahal, Agra',
        description: 'UNESCO World Heritage monument, symbol of eternal love.',
        history: 'Built by Shah Jahan in memory of Mumtaz Mahal (1632-1653).',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Agra Cantt or drive from Delhi (230 km)',
        nearbyAttractions: ['Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh'],
        specialFeatures: ['Wonder of the World', 'Marble architecture', 'Changing colors'],
        entryFee: '₹50 for Indians, ₹1100 for foreigners',
        timings: '6:00 AM to 6:30 PM (closed on Fridays)',
        images: [],
        category: 'heritage'
      },
      {
        id: 'varanasi-ghats',
        name: 'Varanasi Ghats',
        description: 'Oldest living city, spiritual capital of India with sacred Ganges ghats.',
        history: 'One of world\'s oldest cities, continuous habitation for 3000 years.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Varanasi airport or train to Varanasi Junction',
        nearbyAttractions: ['Kashi Vishwanath Temple', 'Sarnath', 'Ramnagar Fort'],
        specialFeatures: ['Sacred ghats', 'Ganga Aarti', 'Spiritual significance'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'religious'
      },
      {
        id: 'fatehpur-sikri',
        name: 'Fatehpur Sikri',
        description: 'UNESCO World Heritage Mughal city, architectural marvel.',
        history: 'Built by Akbar in 1571, abandoned after 14 years due to water scarcity.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Agra (40 km)',
        nearbyAttractions: ['Buland Darwaza', 'Jama Masjid', 'Panch Mahal'],
        specialFeatures: ['Mughal architecture', 'Ghost city', 'UNESCO World Heritage'],
        entryFee: '₹50 for Indians, ₹610 for foreigners',
        timings: '6:00 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'ayodhya',
        name: 'Ayodhya',
        description: 'Birthplace of Lord Rama, sacred pilgrimage city.',
        history: 'Ancient city mentioned in Ramayana, birthplace of Lord Rama.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Ayodhya station or drive from Lucknow (135 km)',
        nearbyAttractions: ['Ram Janmabhoomi', 'Hanuman Garhi', 'Kanak Bhawan'],
        specialFeatures: ['Ram Janmabhoomi', 'Religious significance', 'Ancient temples'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'religious'
      },
      {
        id: 'mathura-vrindavan',
        name: 'Mathura & Vrindavan',
        description: 'Birthplace and childhood home of Lord Krishna.',
        history: 'Ancient cities associated with Krishna\'s life and legends.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Mathura Junction or drive from Delhi (150 km)',
        nearbyAttractions: ['Krishna Janmabhoomi', 'Banke Bihari Temple', 'ISKCON Temple'],
        specialFeatures: ['Krishna birthplace', 'Holi celebrations', 'Spiritual atmosphere'],
        entryFee: 'Free',
        timings: 'Varies by temple',
        images: [],
        category: 'religious'
      }
    ],
    color: 'from-yellow-600 to-orange-600'
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    capital: 'Dehradun',
    famousFor: 'Char Dham, Adventure Sports, Yoga Capital',
    culturalEssence: 'Dev Bhoomi (Land of Gods) with sacred Char Dham pilgrimage, adventure tourism, and yoga traditions. Known for pristine Himalayan landscapes and spiritual heritage.',
    dish: {
      name: 'Aloo ke Gutke',
      description: 'Spiced potatoes cooked with local herbs and spices, a simple yet flavorful dish representing Uttarakhand\'s mountain cuisine and local ingredients.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Respectful greeting',
      language: 'Hindi/Garhwali/Kumaoni'
    },
    stereotype: {
      myth: 'Only pilgrimage and mountains, no modern development',
      reality: 'Perfect blend of spirituality and adventure, growing education sector, eco-tourism, modern infrastructure, and successful mountain economy.'
    },
    festivals: {
      spring: 'Phool Dei',
      summer: 'Nanda Devi Raj Jat',
      monsoon: 'Harela',
      winter: 'Makar Sankranti'
    },
    dayInLife: {
      urban: 'Students attend prestigious schools, yoga practitioners meditate, families visit temples, and adventure enthusiasts plan treks.',
      rural: 'Mountain farmers tend terraced fields, women collect forest produce, pilgrims visit sacred sites, and communities maintain traditional festivals.'
    },
    touristPlaces: [
      {
        id: 'rishikesh',
        name: 'Rishikesh',
        description: 'Yoga capital of the world and gateway to Char Dham.',
        history: 'Ancient pilgrimage site, gained fame as yoga destination in 1960s.',
        bestTimeToVisit: 'February to June, September to November',
        howToReach: 'Train to Rishikesh station or drive from Delhi (240 km)',
        nearbyAttractions: ['Laxman Jhula', 'Ram Jhula', 'Beatles Ashram'],
        specialFeatures: ['Yoga capital', 'Adventure sports', 'Spiritual atmosphere'],
        images: [],
        category: 'religious'
      },
      {
        id: 'haridwar',
        name: 'Haridwar',
        description: 'Gateway to gods, sacred city where Ganges enters plains.',
        history: 'Ancient pilgrimage site, one of seven holiest cities in Hinduism.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Haridwar station or drive from Delhi (220 km)',
        nearbyAttractions: ['Har Ki Pauri', 'Mansa Devi Temple', 'Chandi Devi Temple'],
        specialFeatures: ['Ganga Aarti', 'Kumbh Mela', 'Sacred ghats'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'religious'
      },
      {
        id: 'jim-corbett-national-park',
        name: 'Jim Corbett National Park',
        description: 'India\'s first national park, famous for tigers and wildlife.',
        history: 'Established in 1936, first national park in India.',
        bestTimeToVisit: 'November to June',
        howToReach: 'Drive from Delhi (245 km) to various entry gates',
        nearbyAttractions: ['Corbett Museum', 'Garjiya Devi Temple', 'Kosi River'],
        specialFeatures: ['First national park', 'Tiger reserve', 'Wildlife safaris'],
        entryFee: '₹200 for Indians, ₹1500 for foreigners',
        timings: '6:00 AM to 9:00 AM, 2:00 PM to 5:00 PM',
        images: [],
        category: 'nature'
      },
      {
        id: 'mussoorie',
        name: 'Mussoorie',
        description: 'Queen of Hills, popular hill station with colonial charm.',
        history: 'Developed by British in 1823, popular hill station since colonial era.',
        bestTimeToVisit: 'April to June, September to November',
        howToReach: 'Drive from Dehradun (35 km)',
        nearbyAttractions: ['Kempty Falls', 'Gun Hill', 'Camel\'s Back Road'],
        specialFeatures: ['Hill station', 'Colonial architecture', 'Scenic views'],
        images: [],
        category: 'nature'
      },
      {
        id: 'badrinath-kedarnath',
        name: 'Badrinath & Kedarnath',
        description: 'Sacred Char Dham temples in Himalayas.',
        history: 'Ancient temples, part of Char Dham pilgrimage circuit.',
        bestTimeToVisit: 'May to October',
        howToReach: 'Drive from Rishikesh (Badrinath 295 km, Kedarnath via Gaurikund)',
        nearbyAttractions: ['Valley of Flowers', 'Hemkund Sahib', 'Mana Village'],
        specialFeatures: ['Char Dham pilgrimage', 'High altitude temples', 'Spiritual significance'],
        entryFee: 'Free',
        timings: 'Varies by season and temple',
        images: [],
        category: 'religious'
      }
    ],
    color: 'from-blue-600 to-green-600'
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    famousFor: 'Cultural Capital, Durga Puja, Intellectual Heritage',
    culturalEssence: 'Cultural capital of India with rich literary traditions, vibrant festivals, and intellectual heritage. Known for Durga Puja, sweets, and artistic excellence.',
    dish: {
      name: 'Machher Jhol',
      description: 'Light fish curry with turmeric and ginger, served with rice, representing Bengali home cooking and the state\'s love for fish and rice.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Respectful Bengali greeting',
      language: 'Bengali'
    },
    stereotype: {
      myth: 'Only intellectuals and fish-rice, economically declining',
      reality: 'Rich cultural heritage, growing industries, diverse landscapes, strong educational institutions, and vibrant arts scene with modern development.'
    },
    festivals: {
      spring: 'Poila Boishakh',
      summer: 'Rath Yatra',
      monsoon: 'Durga Puja',
      winter: 'Kali Puja'
    },
    dayInLife: {
      urban: 'Office workers discuss politics over tea, families enjoy fish curry, students attend cultural programs, and intellectuals gather for adda sessions.',
      rural: 'Farmers cultivate rice, artisans create traditional crafts, families celebrate festivals, and communities maintain strong cultural traditions.'
    },
    touristPlaces: [
      {
        id: 'kolkata-victoria-memorial',
        name: 'Victoria Memorial, Kolkata',
        description: 'Magnificent marble monument dedicated to Queen Victoria.',
        history: 'Built between 1906-1921 by Lord Curzon in memory of Queen Victoria.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Kolkata city center, accessible by metro and bus',
        nearbyAttractions: ['Indian Museum', 'St. Paul\'s Cathedral', 'Maidan'],
        specialFeatures: ['Colonial architecture', 'Museum collections', 'Beautiful gardens'],
        entryFee: '₹30 for Indians, ₹500 for foreigners',
        timings: '10:00 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'darjeeling',
        name: 'Darjeeling',
        description: 'Queen of Hills famous for tea gardens and Himalayan views.',
        history: 'Developed by British as hill station in 1850s, tea cultivation started.',
        bestTimeToVisit: 'March to May, October to December',
        howToReach: 'Toy train from New Jalpaiguri or drive (88 km)',
        nearbyAttractions: ['Tiger Hill', 'Batasia Loop', 'Himalayan Mountaineering Institute'],
        specialFeatures: ['Darjeeling tea', 'Toy train', 'Kanchenjunga views'],
        images: [],
        category: 'nature'
      },
      {
        id: 'sundarbans',
        name: 'Sundarbans',
        description: 'UNESCO World Heritage mangrove forest, home to Royal Bengal Tigers.',
        history: 'Natural mangrove ecosystem, UNESCO site since 1987.',
        bestTimeToVisit: 'November to February',
        howToReach: 'Drive from Kolkata to Godkhali (110 km), then boat',
        nearbyAttractions: ['Sajnekhali Wildlife Sanctuary', 'Dobanki Watch Tower', 'Sudhanyakhali'],
        specialFeatures: ['Royal Bengal Tigers', 'Mangrove ecosystem', 'Boat safaris'],
        entryFee: '₹100 for Indians, ₹1000 for foreigners',
        timings: '6:00 AM to 5:00 PM',
        images: [],
        category: 'nature'
      },
      {
        id: 'kalimpong',
        name: 'Kalimpong',
        description: 'Hill station famous for orchids, monasteries, and handicrafts.',
        history: 'Former trading post between Tibet and India, developed during British era.',
        bestTimeToVisit: 'March to June, September to December',
        howToReach: 'Drive from Siliguri (50 km)',
        nearbyAttractions: ['Deolo Hill', 'Durpin Monastery', 'Flower nurseries'],
        specialFeatures: ['Orchid cultivation', 'Buddhist monasteries', 'Handicrafts'],
        images: [],
        category: 'nature'
      },
      {
        id: 'shantiniketan',
        name: 'Shantiniketan',
        description: 'University town founded by Rabindranath Tagore.',
        history: 'Founded by Tagore in 1901, became Visva-Bharati University.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Train to Bolpur station, then drive 3 km',
        nearbyAttractions: ['Tagore\'s Ashram', 'Kala Bhavana', 'Uttarayan Complex'],
        specialFeatures: ['Tagore\'s university', 'Cultural heritage', 'Art and literature'],
        entryFee: 'Free',
        timings: '10:00 AM to 5:00 PM',
        images: [],
        category: 'cultural'
      }
    ],
    color: 'from-yellow-600 to-red-600'
  },

  // Union Territories
  {
    id: 'andaman-nicobar',
    name: 'Andaman & Nicobar Islands',
    capital: 'Port Blair',
    famousFor: 'Pristine Beaches, Marine Life, Cellular Jail',
    culturalEssence: 'Tropical paradise with pristine beaches, rich marine biodiversity, and historical significance. Known for water sports, tribal culture, and colonial history.',
    dish: {
      name: 'Fish Curry',
      description: 'Fresh seafood curry with coconut and local spices, representing the islands\' abundant marine resources and coastal cuisine traditions.'
    },
    language: {
      phrase: 'Namaste',
      meaning: 'General greeting',
      language: 'Hindi/English'
    },
    stereotype: {
      myth: 'Only remote islands with no facilities',
      reality: 'Well-developed tourism infrastructure, rich marine biodiversity, historical significance, and growing eco-tourism with modern amenities.'
    },
    festivals: {
      spring: 'Island Tourism Festival',
      summer: 'Beach Festival',
      monsoon: 'Monsoon Festival',
      winter: 'New Year Celebrations'
    },
    dayInLife: {
      urban: 'Tourism officials welcome visitors, locals work in hospitality, families enjoy seafood, and evenings feature beach activities.',
      rural: 'Fishermen cast nets at dawn, tribal communities maintain traditions, families collect coconuts, and islanders practice sustainable living.'
    },
    touristPlaces: [
      {
        id: 'cellular-jail',
        name: 'Cellular Jail',
        description: 'Historic prison where freedom fighters were imprisoned.',
        history: 'Built by British in 1906, housed political prisoners during independence struggle.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Located in Port Blair, accessible by all transport modes',
        nearbyAttractions: ['Corbyn\'s Cove Beach', 'Anthropological Museum', 'Chatham Saw Mill'],
        specialFeatures: ['Freedom struggle history', 'Light and sound show', 'National memorial'],
        entryFee: '₹30 for Indians, ₹100 for foreigners',
        timings: '9:00 AM to 12:30 PM, 1:30 PM to 4:45 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'radhanagar-beach',
        name: 'Radhanagar Beach',
        description: 'Asia\'s best beach with pristine white sand and clear waters.',
        history: 'Natural beach, awarded Asia\'s best beach by Time Magazine.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Ferry to Havelock Island, then drive 12 km',
        nearbyAttractions: ['Elephant Beach', 'Kalapathar Beach', 'Scuba diving centers'],
        specialFeatures: ['White sand beach', 'Crystal clear water', 'Sunset views'],
        images: [],
        category: 'nature'
      },
      {
        id: 'neil-island',
        name: 'Neil Island',
        description: 'Peaceful island with coral reefs and natural rock formations.',
        history: 'Named after British administrator James Neil, known for agriculture.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Ferry from Port Blair (37 km)',
        nearbyAttractions: ['Natural Bridge', 'Bharatpur Beach', 'Laxmanpur Beach'],
        specialFeatures: ['Coral reefs', 'Natural bridge', 'Peaceful atmosphere'],
        images: [],
        category: 'nature'
      },
      {
        id: 'ross-island',
        name: 'Ross Island',
        description: 'Former British administrative headquarters, now ruins.',
        history: 'British administrative center from 1858-1941, abandoned after earthquake.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Boat from Port Blair (3 km)',
        nearbyAttractions: ['North Bay Island', 'Viper Island', 'Port Blair'],
        specialFeatures: ['Colonial ruins', 'Peacocks and deer', 'Historical significance'],
        entryFee: '₹30 for Indians, ₹100 for foreigners',
        timings: '8:30 AM to 3:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'baratang-island',
        name: 'Baratang Island',
        description: 'Island famous for limestone caves and mud volcanoes.',
        history: 'Natural geological formations, home to Jarawa tribe.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Drive from Port Blair (100 km) with convoy',
        nearbyAttractions: ['Limestone Caves', 'Mud Volcanoes', 'Mangrove Creek'],
        specialFeatures: ['Limestone caves', 'Mud volcanoes', 'Tribal area'],
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    capital: 'Chandigarh',
    famousFor: 'Planned City, Rock Garden, Modern Architecture',
    culturalEssence: 'India\'s first planned city designed by Le Corbusier, known for modern architecture, urban planning, and high quality of life. Symbol of modern India.',
    dish: {
      name: 'Chole Bhature',
      description: 'Spicy chickpea curry served with deep-fried bread, popular North Indian dish representing the city\'s Punjabi culinary influence.'
    },
    language: {
      phrase: 'Sat Sri Akal',
      meaning: 'Sikh greeting meaning God is truth',
      language: 'Hindi/Punjabi'
    },
    stereotype: {
      myth: 'Only government city with no culture',
      reality: 'Well-planned modern city with high quality of life, excellent infrastructure, cultural attractions, and perfect blend of urban planning with green spaces.'
    },
    festivals: {
      spring: 'Baisakhi',
      summer: 'Teej',
      monsoon: 'Karva Chauth',
      winter: 'Lohri'
    },
    dayInLife: {
      urban: 'Government employees cycle to work, families enjoy parks, students attend quality schools, and evenings feature cultural activities in well-planned sectors.',
      rural: 'Surrounding villages supply fresh produce, farmers benefit from urban markets, families visit city amenities, and communities maintain traditional festivals.'
    },
    touristPlaces: [
      {
        id: 'rock-garden',
        name: 'Rock Garden',
        description: 'Unique sculpture garden made from industrial and urban waste.',
        history: 'Created by Nek Chand from 1957, opened to public in 1976.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Sector 1, accessible by bus and auto-rickshaw',
        nearbyAttractions: ['Sukhna Lake', 'Rose Garden', 'Capitol Complex'],
        specialFeatures: ['Waste art sculptures', 'Unique creativity', 'Environmental message'],
        entryFee: '₹30 for Indians, ₹100 for foreigners',
        timings: '9:00 AM to 7:00 PM',
        images: [],
        category: 'modern'
      },
      {
        id: 'sukhna-lake',
        name: 'Sukhna Lake',
        description: 'Artificial lake created by Le Corbusier for recreation.',
        history: 'Created in 1958 by damming Sukhna Choe, part of city planning.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Sector 1, accessible by all transport modes',
        nearbyAttractions: ['Rock Garden', 'Rose Garden', 'Shanti Kunj Park'],
        specialFeatures: ['Boating', 'Morning walks', 'Bird watching'],
        entryFee: 'Free',
        timings: '5:00 AM to 10:00 PM',
        images: [],
        category: 'nature'
      },
      {
        id: 'capitol-complex',
        name: 'Capitol Complex',
        description: 'UNESCO World Heritage site designed by Le Corbusier.',
        history: 'Built 1951-1965, seat of Punjab and Haryana governments.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Sector 1, guided tours available',
        nearbyAttractions: ['High Court', 'Secretariat', 'Assembly'],
        specialFeatures: ['Le Corbusier architecture', 'UNESCO World Heritage', 'Modern design'],
        entryFee: '₹100 for guided tours',
        timings: '10:00 AM to 5:00 PM (weekdays)',
        images: [],
        category: 'heritage'
      },
      {
        id: 'rose-garden',
        name: 'Zakir Hussain Rose Garden',
        description: 'Largest rose garden in Asia with thousands of varieties.',
        history: 'Established in 1967, spread over 30 acres.',
        bestTimeToVisit: 'February to March (rose season)',
        howToReach: 'Located in Sector 16, accessible by bus',
        nearbyAttractions: ['Sukhna Lake', 'Rock Garden', 'Leisure Valley'],
        specialFeatures: ['1600 rose varieties', 'Annual rose festival', 'Medicinal plants'],
        entryFee: '₹10 for Indians',
        timings: '6:00 AM to 10:00 PM',
        images: [],
        category: 'nature'
      },
      {
        id: 'leisure-valley',
        name: 'Leisure Valley',
        description: 'Green belt connecting various parks and gardens.',
        history: 'Part of original city planning, continuous green corridor.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Extends through multiple sectors, accessible everywhere',
        nearbyAttractions: ['Various sector parks', 'Cycling tracks', 'Walking paths'],
        specialFeatures: ['Green corridor', 'Cycling tracks', 'Urban planning'],
        entryFee: 'Free',
        timings: '24 hours',
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-green-600 to-blue-600'
  },
  {
    id: 'dadra-nagar-haveli-daman-diu',
    name: 'Dadra & Nagar Haveli and Daman & Diu',
    capital: 'Daman',
    famousFor: 'Portuguese Heritage, Beaches, Tribal Culture',
    culturalEssence: 'Former Portuguese territories with unique Indo-Portuguese culture, beautiful beaches, and tribal heritage. Known for tax-free shopping and coastal tourism.',
    dish: {
      name: 'Bebinca',
      description: 'Traditional Portuguese-influenced layered dessert made with coconut milk and eggs, representing the region\'s unique culinary fusion.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Traditional greeting',
      language: 'Hindi/Gujarati'
    },
    stereotype: {
      myth: 'Only tax-free shopping destination',
      reality: 'Rich Portuguese heritage, beautiful beaches, tribal culture, unique architecture, and growing tourism beyond just shopping benefits.'
    },
    festivals: {
      spring: 'Holi',
      summer: 'Feast of St. John',
      monsoon: 'Nariyal Purnima',
      winter: 'Christmas'
    },
    dayInLife: {
      urban: 'Shopkeepers welcome tourists, families enjoy Portuguese cuisine, students attend local schools, and evenings feature beach activities.',
      rural: 'Tribal communities practice traditional crafts, farmers cultivate rice, fishermen work coastal waters, and villages maintain cultural festivals.'
    },
    touristPlaces: [
      {
        id: 'diu-fort',
        name: 'Diu Fort',
        description: 'Portuguese fort with stunning sea views and historical significance.',
        history: 'Built by Portuguese in 1535-1541, strategic coastal defense.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Fly to Diu airport or drive from Ahmedabad (350 km)',
        nearbyAttractions: ['Diu Museum', 'St. Paul\'s Church', 'Nagoa Beach'],
        specialFeatures: ['Portuguese architecture', 'Sea views', 'Historical cannons'],
        entryFee: '₹25 for Indians, ₹300 for foreigners',
        timings: '9:00 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'nagoa-beach',
        name: 'Nagoa Beach',
        description: 'Pristine beach with golden sand and palm trees.',
        history: 'Natural beach, developed for tourism in recent decades.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Diu town (7 km)',
        nearbyAttractions: ['Diu Fort', 'Ghoghla Beach', 'Sunset Point'],
        specialFeatures: ['Golden sand', 'Water sports', 'Beach resorts'],
        images: [],
        category: 'nature'
      },
      {
        id: 'silvassa-tribal-museum',
        name: 'Silvassa Tribal Museum',
        description: 'Museum showcasing tribal culture and heritage.',
        history: 'Established to preserve and display tribal artifacts and culture.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Silvassa, accessible by road from Mumbai (180 km)',
        nearbyAttractions: ['Vanganga Lake', 'Deer Park', 'Tribal villages'],
        specialFeatures: ['Tribal artifacts', 'Cultural displays', 'Traditional crafts'],
        entryFee: '₹10 for Indians',
        timings: '10:00 AM to 6:00 PM',
        images: [],
        category: 'cultural'
      },
      {
        id: 'vanganga-lake',
        name: 'Vanganga Lake',
        description: 'Artificial lake with boating and recreational facilities.',
        history: 'Created for water supply and recreation, popular tourist spot.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Silvassa town center',
        nearbyAttractions: ['Tribal Museum', 'Deer Park', 'Island Garden'],
        specialFeatures: ['Boating', 'Island garden', 'Recreational activities'],
        images: [],
        category: 'nature'
      },
      {
        id: 'church-of-bom-jesus',
        name: 'Church of Bom Jesus, Daman',
        description: 'Historic Portuguese church with beautiful architecture.',
        history: 'Built by Portuguese in 16th century, important religious site.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Daman town, accessible by road',
        nearbyAttractions: ['Daman Fort', 'Jampore Beach', 'Light House'],
        specialFeatures: ['Portuguese architecture', 'Religious significance', 'Historical value'],
        entryFee: 'Free',
        timings: '6:00 AM to 7:00 PM',
        images: [],
        category: 'heritage'
      }
    ],
    color: 'from-blue-600 to-green-600'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    capital: 'New Delhi',
    famousFor: 'National Capital, Historical Monuments, Street Food',
    culturalEssence: 'Capital of India with layers of history from multiple dynasties, vibrant street food culture, and political significance. Blend of ancient heritage and modern governance.',
    dish: {
      name: 'Paranthe Wali Gali',
      description: 'Variety of stuffed parathas from the famous lane in Old Delhi, representing the city\'s rich street food culture and culinary diversity.'
    },
    language: {
      phrase: 'Namaskar',
      meaning: 'Respectful greeting',
      language: 'Hindi/Urdu'
    },
    stereotype: {
      myth: 'Only pollution and politics, unsafe for tourists',
      reality: 'Rich historical heritage, vibrant culture, excellent connectivity, diverse cuisine, growing green initiatives, and major tourist attractions.'
    },
    festivals: {
      spring: 'Holi',
      summer: 'Teej',
      monsoon: 'Independence Day',
      winter: 'Diwali'
    },
    dayInLife: {
      urban: 'Government employees commute by metro, families explore historical sites, students attend prestigious universities, and food lovers enjoy street food.',
      rural: 'Surrounding villages supply fresh produce, farmers benefit from urban markets, families visit city amenities, and communities maintain traditional festivals.'
    },
    touristPlaces: [
      {
        id: 'red-fort',
        name: 'Red Fort',
        description: 'UNESCO World Heritage Mughal fort, symbol of India\'s independence.',
        history: 'Built by Shah Jahan in 1648, seat of Mughal power for 200 years.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Metro to Lal Qila station or bus to Red Fort',
        nearbyAttractions: ['Jama Masjid', 'Chandni Chowk', 'Raj Ghat'],
        specialFeatures: ['Mughal architecture', 'Independence Day venue', 'Light and sound show'],
        entryFee: '₹35 for Indians, ₹500 for foreigners',
        timings: '9:30 AM to 4:30 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'india-gate',
        name: 'India Gate',
        description: 'War memorial dedicated to Indian soldiers of World War I.',
        history: 'Built in 1931, designed by Edwin Lutyens, war memorial.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Metro to Central Secretariat, then walk or take bus',
        nearbyAttractions: ['Rashtrapati Bhavan', 'Parliament House', 'National Museum'],
        specialFeatures: ['War memorial', 'Amar Jawan Jyoti', 'Evening illumination'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'heritage'
      },
      {
        id: 'qutub-minar',
        name: 'Qutub Minar',
        description: 'UNESCO World Heritage tallest brick minaret in the world.',
        history: 'Built by Qutub-ud-din Aibak in 1193, completed by successors.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Metro to Qutub Minar station',
        nearbyAttractions: ['Iron Pillar', 'Quwwat-ul-Islam Mosque', 'Mehrauli Archaeological Park'],
        specialFeatures: ['Tallest brick minaret', 'Indo-Islamic architecture', 'UNESCO World Heritage'],
        entryFee: '₹35 for Indians, ₹500 for foreigners',
        timings: '7:00 AM to 5:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'lotus-temple',
        name: 'Lotus Temple',
        description: 'Bahai House of Worship shaped like a lotus flower.',
        history: 'Completed in 1986, designed by Fariborz Sahba.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Metro to Kalkaji Mandir station',
        nearbyAttractions: ['ISKCON Temple', 'Kalkaji Temple', 'Nehru Place'],
        specialFeatures: ['Lotus-shaped architecture', 'Meditation hall', 'Modern religious architecture'],
        entryFee: 'Free',
        timings: '9:00 AM to 7:00 PM (closed Mondays)',
        images: [],
        category: 'modern'
      },
      {
        id: 'humayuns-tomb',
        name: 'Humayun\'s Tomb',
        description: 'UNESCO World Heritage Mughal tomb, precursor to Taj Mahal.',
        history: 'Built in 1570 by Hamida Banu Begum for Emperor Humayun.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Metro to JLN Stadium, then auto-rickshaw',
        nearbyAttractions: ['Purana Qila', 'National Zoo', 'Khan-i-Khanan Tomb'],
        specialFeatures: ['Mughal architecture', 'Garden tomb', 'UNESCO World Heritage'],
        entryFee: '₹35 for Indians, ₹500 for foreigners',
        timings: '6:00 AM to 6:00 PM',
        images: [],
        category: 'heritage'
      }
    ],
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 'jammu-kashmir',
    name: 'Jammu and Kashmir',
    capital: 'Srinagar (Summer), Jammu (Winter)',
    famousFor: 'Paradise on Earth, Houseboats, Saffron',
    culturalEssence: 'Paradise on Earth with stunning landscapes, unique houseboat culture, and rich Kashmiri traditions. Known for handicrafts, saffron cultivation, and spiritual heritage.',
    dish: {
      name: 'Rogan Josh',
      description: 'Aromatic lamb curry with Kashmiri spices and yogurt, representing the region\'s Persian-influenced cuisine and royal culinary traditions.'
    },
    language: {
      phrase: 'Adaab',
      meaning: 'Respectful Urdu greeting',
      language: 'Kashmiri/Urdu/Hindi'
    },
    stereotype: {
      myth: 'Only conflict and security issues',
      reality: 'Breathtaking natural beauty, rich cultural heritage, warm hospitality, unique handicrafts, and growing tourism with improved connectivity.'
    },
    festivals: {
      spring: 'Navroz',
      summer: 'Amarnath Yatra',
      monsoon: 'Teej',
      winter: 'Shivratri'
    },
    dayInLife: {
      urban: 'Houseboat owners welcome tourists, artisans create handicrafts, students attend schools, and families enjoy traditional Kashmiri cuisine.',
      rural: 'Saffron farmers tend precious crops, shepherds graze cattle in meadows, women weave carpets, and communities maintain traditional festivals.'
    },
    touristPlaces: [
      {
        id: 'dal-lake',
        name: 'Dal Lake',
        description: 'Iconic lake with houseboats, shikaras, and floating gardens.',
        history: 'Natural lake, houseboat culture developed during British era.',
        bestTimeToVisit: 'April to October',
        howToReach: 'Fly to Srinagar airport, then taxi to lake',
        nearbyAttractions: ['Mughal Gardens', 'Shankaracharya Temple', 'Hazratbal Shrine'],
        specialFeatures: ['Houseboat stays', 'Shikara rides', 'Floating gardens'],
        images: [],
        category: 'nature'
      },
      {
        id: 'gulmarg',
        name: 'Gulmarg',
        description: 'Meadow of flowers, premier skiing destination and golf course.',
        history: 'Discovered by British, developed as hill station and ski resort.',
        bestTimeToVisit: 'December to March (skiing), April to June (flowers)',
        howToReach: 'Drive from Srinagar (50 km)',
        nearbyAttractions: ['Gondola ride', 'Apharwat Peak', 'Golf course'],
        specialFeatures: ['Skiing', 'Gondola cable car', 'Alpine meadows'],
        images: [],
        category: 'nature'
      },
      {
        id: 'pahalgam',
        name: 'Pahalgam',
        description: 'Valley of shepherds, base for Amarnath pilgrimage.',
        history: 'Traditional shepherd settlement, developed as tourist destination.',
        bestTimeToVisit: 'April to October',
        howToReach: 'Drive from Srinagar (95 km)',
        nearbyAttractions: ['Betaab Valley', 'Aru Valley', 'Chandanwari'],
        specialFeatures: ['Amarnath base camp', 'River rafting', 'Trekking trails'],
        images: [],
        category: 'nature'
      },
      {
        id: 'sonamarg',
        name: 'Sonamarg',
        description: 'Meadow of gold with glaciers and alpine lakes.',
        history: 'Traditional route to Ladakh, important trading post.',
        bestTimeToVisit: 'May to October',
        howToReach: 'Drive from Srinagar (80 km)',
        nearbyAttractions: ['Thajiwas Glacier', 'Zoji La Pass', 'Baltal'],
        specialFeatures: ['Glacier views', 'Pony rides', 'Alpine scenery'],
        images: [],
        category: 'nature'
      },
      {
        id: 'vaishno-devi',
        name: 'Vaishno Devi',
        description: 'Sacred cave shrine, one of most visited pilgrimage sites.',
        history: 'Ancient pilgrimage site, mentioned in Puranas.',
        bestTimeToVisit: 'March to October',
        howToReach: 'Train to Jammu, then drive to Katra (50 km), trek 13 km',
        nearbyAttractions: ['Bhairon Temple', 'Ardhkuwari', 'Banganga'],
        specialFeatures: ['Cave shrine', 'Pilgrimage trek', 'Spiritual significance'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'religious'
      }
    ],
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    capital: 'Leh',
    famousFor: 'High Altitude Desert, Monasteries, Adventure Tourism',
    culturalEssence: 'Land of high passes with Tibetan Buddhist culture, stunning landscapes, and adventure tourism. Known for monasteries, festivals, and unique high-altitude ecosystem.',
    dish: {
      name: 'Thukpa',
      description: 'Hearty noodle soup with vegetables and meat, perfect for high altitude climate, representing Ladakh\'s Tibetan culinary influence.'
    },
    language: {
      phrase: 'Julley',
      meaning: 'Hello/goodbye in Ladakhi',
      language: 'Ladakhi'
    },
    stereotype: {
      myth: 'Only barren mountains and difficult access',
      reality: 'Rich Buddhist culture, stunning landscapes, growing adventure tourism, unique ecosystem, and spiritual significance with improving connectivity.'
    },
    festivals: {
      spring: 'Losar',
      summer: 'Hemis Festival',
      monsoon: 'Ladakh Festival',
      winter: 'Dosmoche'
    },
    dayInLife: {
      urban: 'Tourism operators welcome trekkers, monks conduct prayers, families run guesthouses, and adventure enthusiasts plan expeditions.',
      rural: 'Farmers practice high-altitude agriculture, nomads graze yaks, families maintain traditional lifestyle, and communities preserve Buddhist culture.'
    },
    touristPlaces: [
      {
        id: 'leh-palace',
        name: 'Leh Palace',
        description: 'Former royal palace with panoramic views of Leh valley.',
        history: 'Built in 17th century by King Sengge Namgyal.',
        bestTimeToVisit: 'May to September',
        howToReach: 'Located in Leh town, walking distance from market',
        nearbyAttractions: ['Shanti Stupa', 'Leh Market', 'Namgyal Tsemo Monastery'],
        specialFeatures: ['Tibetan architecture', 'Valley views', 'Royal heritage'],
        entryFee: '₹15 for Indians, ₹100 for foreigners',
        timings: '7:00 AM to 4:00 PM',
        images: [],
        category: 'heritage'
      },
      {
        id: 'pangong-lake',
        name: 'Pangong Lake',
        description: 'High altitude lake extending from India to China.',
        history: 'Natural high-altitude lake, gained fame from Bollywood movies.',
        bestTimeToVisit: 'May to September',
        howToReach: 'Drive from Leh (160 km) via Chang La pass',
        nearbyAttractions: ['Chang La Pass', 'Tangtse village', 'Spangmik'],
        specialFeatures: ['Color-changing lake', 'High altitude', 'Scenic beauty'],
        images: [],
        category: 'nature'
      },
      {
        id: 'nubra-valley',
        name: 'Nubra Valley',
        description: 'Cold desert valley with sand dunes and double-humped camels.',
        history: 'Ancient trade route to Central Asia via Karakoram Pass.',
        bestTimeToVisit: 'May to September',
        howToReach: 'Drive from Leh (120 km) via Khardung La pass',
        nearbyAttractions: ['Khardung La Pass', 'Diskit Monastery', 'Hunder Sand Dunes'],
        specialFeatures: ['Cold desert', 'Bactrian camels', 'Sand dunes'],
        images: [],
        category: 'nature'
      },
      {
        id: 'hemis-monastery',
        name: 'Hemis Monastery',
        description: 'Largest and wealthiest monastery in Ladakh.',
        history: 'Founded in 1630, belongs to Drukpa lineage of Buddhism.',
        bestTimeToVisit: 'May to September',
        howToReach: 'Drive from Leh (45 km)',
        nearbyAttractions: ['Thiksey Monastery', 'Shey Palace', 'Stakna Monastery'],
        specialFeatures: ['Hemis Festival', 'Ancient artifacts', 'Buddhist art'],
        entryFee: '₹30 for Indians',
        timings: '8:00 AM to 1:00 PM, 2:00 PM to 6:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'tso-moriri',
        name: 'Tso Moriri',
        description: 'High altitude lake in Changthang plateau.',
        history: 'Sacred lake for local nomads, pristine ecosystem.',
        bestTimeToVisit: 'May to September',
        howToReach: 'Drive from Leh (240 km) via Upshi',
        nearbyAttractions: ['Korzok village', 'Changthang Wildlife Sanctuary', 'Nomad settlements'],
        specialFeatures: ['High altitude lake', 'Wildlife sanctuary', 'Nomadic culture'],
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    capital: 'Kavaratti',
    famousFor: 'Coral Islands, Marine Life, Water Sports',
    culturalEssence: 'Smallest union territory with pristine coral islands, rich marine biodiversity, and unique Malayali-Muslim culture. Known for sustainable tourism and coconut cultivation.',
    dish: {
      name: 'Tuna Curry',
      description: 'Fresh tuna cooked in coconut milk with local spices, representing the islands\' abundant marine resources and coconut-based cuisine.'
    },
    language: {
      phrase: 'Assalamu Alaikum',
      meaning: 'Peace be upon you (Islamic greeting)',
      language: 'Malayalam'
    },
    stereotype: {
      myth: 'Only expensive resort destination, difficult to reach',
      reality: 'Pristine coral ecosystem, sustainable tourism model, rich marine biodiversity, unique culture, and growing eco-tourism with improved connectivity.'
    },
    festivals: {
      spring: 'Eid ul-Fitr',
      summer: 'Coconut Festival',
      monsoon: 'Muharram',
      winter: 'Eid ul-Adha'
    },
    dayInLife: {
      urban: 'Tourism officials manage eco-tourism, locals work in hospitality, families practice traditional fishing, and communities maintain coral conservation.',
      rural: 'Fishermen use traditional boats, families harvest coconuts, women weave coir products, and islanders practice sustainable living.'
    },
    touristPlaces: [
      {
        id: 'agatti-island',
        name: 'Agatti Island',
        description: 'Gateway island with airport and beautiful lagoon.',
        history: 'Traditional fishing community, developed as entry point for tourism.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Fly to Agatti Airport from Kochi',
        nearbyAttractions: ['Lagoon', 'Coral reefs', 'Traditional villages'],
        specialFeatures: ['Airport connectivity', 'Water sports', 'Coral diving'],
        images: [],
        category: 'nature'
      },
      {
        id: 'bangaram-island',
        name: 'Bangaram Island',
        description: 'Uninhabited island with pristine beaches and coral reefs.',
        history: 'Uninhabited island, developed for eco-tourism.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Boat from Agatti Island',
        nearbyAttractions: ['Coral reefs', 'Pristine beaches', 'Marine life'],
        specialFeatures: ['Uninhabited island', 'Eco-resort', 'Pristine nature'],
        images: [],
        category: 'nature'
      },
      {
        id: 'kavaratti-island',
        name: 'Kavaratti Island',
        description: 'Capital island with administrative center and beautiful lagoon.',
        history: 'Administrative center, traditional seat of local governance.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Ship from Kochi or helicopter from Agatti',
        nearbyAttractions: ['Marine Aquarium', 'Ujra Mosque', 'Lagoon'],
        specialFeatures: ['Administrative center', 'Marine aquarium', 'Cultural sites'],
        images: [],
        category: 'cultural'
      },
      {
        id: 'minicoy-island',
        name: 'Minicoy Island',
        description: 'Southernmost island with lighthouse and unique culture.',
        history: 'Traditional Maldivian influence, important navigation point.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Ship from Kochi',
        nearbyAttractions: ['Lighthouse', 'Traditional villages', 'Tuna canning factory'],
        specialFeatures: ['Lighthouse', 'Maldivian culture', 'Tuna fishing'],
        images: [],
        category: 'cultural'
      },
      {
        id: 'kadmat-island',
        name: 'Kadmat Island',
        description: 'Island known for water sports and marine life.',
        history: 'Traditional fishing community, developed for water sports tourism.',
        bestTimeToVisit: 'October to May',
        howToReach: 'Ship from Kochi',
        nearbyAttractions: ['Water sports center', 'Coral reefs', 'Marine life'],
        specialFeatures: ['Water sports', 'Scuba diving', 'Marine conservation'],
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    capital: 'Puducherry',
    famousFor: 'French Heritage, Auroville, Beaches',
    culturalEssence: 'Former French colony with unique Indo-French culture, spiritual center Auroville, and beautiful beaches. Known for colonial architecture and experimental living.',
    dish: {
      name: 'Bouillabaisse',
      description: 'French fish stew adapted with local spices and seafood, representing Puducherry\'s unique Indo-French culinary fusion.'
    },
    language: {
      phrase: 'Bonjour',
      meaning: 'Good day (French greeting)',
      language: 'Tamil/French'
    },
    stereotype: {
      myth: 'Only French Quarter and Auroville, small tourist spot',
      reality: 'Rich Indo-French heritage, spiritual significance, beautiful beaches, unique architecture, and growing cultural tourism with diverse attractions.'
    },
    festivals: {
      spring: 'French Festival',
      summer: 'Bastille Day',
      monsoon: 'Assumption of Mary',
      winter: 'Christmas'
    },
    dayInLife: {
      urban: 'Cafe owners serve French cuisine, tourists explore heritage buildings, students attend Auroville, and families enjoy beach promenades.',
      rural: 'Farmers cultivate rice, fishermen work coastal waters, artisans create handicrafts, and communities maintain Tamil traditions.'
    },
    touristPlaces: [
      {
        id: 'french-quarter',
        name: 'French Quarter',
        description: 'Historic area with French colonial architecture and cafes.',
        history: 'French colonial settlement from 1674-1954, preserved heritage area.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Puducherry city center, walkable area',
        nearbyAttractions: ['Promenade Beach', 'French Consulate', 'Notre Dame Cathedral'],
        specialFeatures: ['Colonial architecture', 'French cafes', 'Heritage walks'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'heritage'
      },
      {
        id: 'auroville',
        name: 'Auroville',
        description: 'Experimental township promoting human unity and spiritual growth.',
        history: 'Founded in 1968 by Mirra Alfassa (The Mother), UNESCO endorsed.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Drive from Puducherry (12 km)',
        nearbyAttractions: ['Matrimandir', 'Visitor Center', 'Auroville Beach'],
        specialFeatures: ['Experimental community', 'Matrimandir meditation', 'Sustainable living'],
        entryFee: 'Free (Matrimandir viewing ₹50)',
        timings: '9:00 AM to 5:30 PM',
        images: [],
        category: 'cultural'
      },
      {
        id: 'promenade-beach',
        name: 'Promenade Beach',
        description: 'Popular beach with French colonial backdrop and evening walks.',
        history: 'Natural beach, developed during French colonial period.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located along French Quarter, walking distance',
        nearbyAttractions: ['French Quarter', 'Gandhi Statue', 'War Memorial'],
        specialFeatures: ['Colonial backdrop', 'Evening promenade', 'Beach activities'],
        entryFee: 'Free',
        timings: 'Open 24 hours',
        images: [],
        category: 'nature'
      },
      {
        id: 'sri-aurobindo-ashram',
        name: 'Sri Aurobindo Ashram',
        description: 'Spiritual center founded by Sri Aurobindo and The Mother.',
        history: 'Founded in 1926, center for integral yoga and spiritual practice.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Located in Puducherry city center',
        nearbyAttractions: ['French Quarter', 'Bharathi Park', 'Pondicherry Museum'],
        specialFeatures: ['Spiritual center', 'Meditation hall', 'Samadhi shrine'],
        entryFee: 'Free',
        timings: '8:00 AM to 12:00 PM, 2:00 PM to 6:00 PM',
        images: [],
        category: 'religious'
      },
      {
        id: 'paradise-beach',
        name: 'Paradise Beach',
        description: 'Pristine beach accessible by boat with golden sand.',
        history: 'Natural beach, developed for eco-tourism.',
        bestTimeToVisit: 'October to March',
        howToReach: 'Boat from Chunnambar backwaters',
        nearbyAttractions: ['Chunnambar Backwaters', 'Mangrove forests', 'Water sports'],
        specialFeatures: ['Boat access', 'Pristine beach', 'Water activities'],
        images: [],
        category: 'nature'
      }
    ],
    color: 'from-yellow-600 to-orange-600'
  }
];