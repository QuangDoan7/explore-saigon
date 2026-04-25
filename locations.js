const locations = [
    {
        "NAME": "Saigon Opera House",
        "ADDRESS": "7 Lam Son Square, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Prominent Places",
        "WEBSITE": "https://ticket-stations.com/a-o-show",
        "LAT": 10.776619710510223,
        "LNG": 106.70315806411243,
        "IMAGE": "img/saigon_opera_house.jpg"
    },
    {
        "NAME": "Ben Thanh Market",
        "ADDRESS": "Le Loi Street, Ben Thanh Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Prominent Places",
        "WEBSITE": "",
        "LAT": 10.77252167063246,
        "LNG": 106.6980060407988,
        "IMAGE": "img/ben_thanh_market.jpg"
    },
    {
        "NAME": "Notre Dame Cathedral of Saigon",
        "ADDRESS": "01 Cong Truong Cong Xa Paris, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Prominent Places",
        "WEBSITE": "",
        "LAT": 10.779792757145083,
        "LNG": 106.69905755981264,
        "IMAGE": "img/notre_dame_cathedral.jpg"
    },
    {
        "NAME": "Independence Palace",
        "ADDRESS": "135 Nam Ky Khoi Nghia Street, Ben Thanh Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Prominent Places",
        "WEBSITE": "https://www.dinhdoclap.gov.vn/",
        "LAT": 10.776987648861258,
        "LNG": 106.69530929348018,
        "IMAGE": "img/independence_palace.jpg"
    },
    {
        "NAME": "War Remnants Museum",
        "ADDRESS": "28 Vo Van Tan Street, Xuan Hoa Ward, District 3,Ho Chi Minh City, Vietnam",
        "CATEGORY": "Prominent Places",
        "WEBSITE": "https://baotangchungtichchientranh.vn/",
        "LAT": 10.779485349436898,
        "LNG": 106.69209354106533,
        "IMAGE": "img/war_remnants_museum.jpg"
    },
    {
        "NAME": "Vincom Center Dong Khoi",
        "ADDRESS": "72A Le Thanh Ton Street, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Entertainment",
        "WEBSITE": "https://vincom.com.vn/vincom-center-dong-khoi",
        "LAT": 10.777780480004877,
        "LNG": 106.70166901442796,
        "IMAGE": "img/vincom_center.jpg"
    },
    {
        "NAME": "Saigon Skydeck",
        "ADDRESS": "36 Ho Tung Mau Street, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Entertainment",
        "WEBSITE": "https://ticket-stations.com/saigon-skydeck-bitexco",
        "LAT": 10.771572606610198,
        "LNG": 106.70425578129188,
        "IMAGE": "img/saigon_skydeck.jpg"
    },
    {
        "NAME": "Diamond Plaza",
        "ADDRESS": "34 Le Duan Street, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Entertainment",
        "WEBSITE": "http://www.diamondplaza.com.vn/",
        "LAT": 10.780568956681382,
        "LNG": 106.69844702314406,
        "IMAGE": "img/diamond_plaza.jpg"
    },
    {
        "NAME": "Takashimaya",
        "ADDRESS": "92 94 Nam Ky Khoi Nghia Street, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Entertainment",
        "WEBSITE": "https://online.takashimaya-vn.com/",
        "LAT": 10.772978597590779,
        "LNG": 106.70065501164883,
        "IMAGE": "img/takashimaya.jpg"
    },
    {
        "NAME": "Katinat - Bach Dang Warf",
        "ADDRESS": "10B Ton Duc Thang Street, Sai Gon Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Coffee Shops",
        "WEBSITE": "",
        "LAT": 10.775070539760447,
        "LNG": 106.70712874297548,
        "IMAGE": "img/katinat.jpg"
    },
    {
        "NAME": "Phuc Long Coffee & Tea",
        "ADDRESS": "26 Huynh Thuc Khang Street, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Coffee Shops",
        "WEBSITE": "http://www.phuclong.com.vn/",
        "LAT": 10.773064995723349,
        "LNG": 106.70259776103555,
        "IMAGE": "img/phuc_long.jpg"
    },
    {
        "NAME": "Highlands Coffee",
        "ADDRESS": "66 Nguyen Hue Street, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Coffee Shops",
        "WEBSITE": "https://www.highlandscoffee.com.vn/",
        "LAT": 10.774471218210401,
        "LNG": 106.70367166472387,
        "IMAGE": "img/highlands_coffee.jpg"
    },
    {
        "NAME": "Cheese Coffee",
        "ADDRESS": "9 Cong Truong Lam Son Street, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Coffee Shops",
        "WEBSITE": "https://facebook.com/cheesecoffee.vn/",
        "LAT": 10.776988956526544,
        "LNG": 106.70391181931954,
        "IMAGE": "img/cheese_coffee.jpg"
    },
    {
        "NAME": "Phe La Coffee",
        "ADDRESS": "125 Ho Tung Mau Street, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Coffee Shops",
        "WEBSITE": "https://phela.vn/",
        "LAT": 10.773546337078537,
        "LNG": 106.70284590951674,
        "IMAGE": "img/phe_la_coffee.jpg"
    },
    {
        "NAME": "Ngon Restaurant",
        "ADDRESS": "160 Pasteur Street, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Restaurants",
        "WEBSITE": "",
        "LAT": 10.777247123328587,
        "LNG": 106.69955871135107,
        "IMAGE": "img/ngon_restaurant.jpg"
    },
    {
        "NAME": "A Taste Of Saigon - Old Market",
        "ADDRESS": "42/6B Ton That Thiep Street, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
        "CATEGORY": "Restaurants",
        "WEBSITE": "https://www.atasteofsaigon.vn/",
        "LAT": 10.773847638811366,
        "LNG": 106.7021977696351,
        "IMAGE": "img/a_taste_of_saigon.jpg"
    }
];