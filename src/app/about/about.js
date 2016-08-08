angular.module( 'ngBoilerplate.about', [
  'ui.router',
  'ui.bootstrap',
  'simplePagination'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    resolve: {
        auth: function ($q, authenticationSvc , $location) {
            var userInfo = authenticationSvc.getUserInfo();
            if (userInfo) {
                return $q.when(userInfo);
            } else {
                return $location.path("/login");
            }
        }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope ,authenticationSvc, $location, auth, $timeout, Pagination) {
  $scope.dropdownActive = false;
  $scope.search = {};
  $scope.search.minAmount = 0;
  $scope.search.filtered = [];
  $scope.search.name = '';
  $scope.search.maxAmount = 90000000;
  $scope.pageOrders = [
	{
		"orderId": 1,
		"name": "Ali Holman",
		"address": "Gibsons",
		"status": 6,
		"phone": "044-883-2512",
		"price": 2191803
	},
	{
		"orderId": 2,
		"name": "Hamilton Kelley",
		"address": "Polpenazze del Garda",
		"status": 2,
		"phone": "091-876-7641",
		"price": 3969949
	},
	{
		"orderId": 3,
		"name": "Alfonso Wood",
		"address": "Chiguayante",
		"status": 1,
		"phone": "044-996-4301",
		"price": 1392589
	},
	{
		"orderId": 4,
		"name": "Yoshio Maxwell",
		"address": "Selva di Cadore",
		"status": 2,
		"phone": "039-860-1615",
		"price": 12070225
	},
	{
		"orderId": 5,
		"name": "Gannon Mendoza",
		"address": "Victoria",
		"status": 3,
		"phone": "014-022-4579",
		"price": 8590815
	},
	{
		"orderId": 6,
		"name": "Ronan Wall",
		"address": "North Barrackpur",
		"status": 4,
		"phone": "031-251-0240",
		"price": 11666204
	},
	{
		"orderId": 7,
		"name": "Francis Santos",
		"address": "Purulia",
		"status": 2,
		"phone": "052-756-7738",
		"price": 10380602
	},
	{
		"orderId": 8,
		"name": "Burton Cherry",
		"address": "Rimbey",
		"status": 3,
		"phone": "028-810-1716",
		"price": 3999685
	},
	{
		"orderId": 9,
		"name": "Fritz Salas",
		"address": "Futaleufú",
		"status": 5,
		"phone": "026-687-7460",
		"price": 9608405
	},
	{
		"orderId": 10,
		"name": "Hunter Cooper",
		"address": "Baschi",
		"status": 2,
		"phone": "043-987-9899",
		"price": 10889919
	},
	{
		"orderId": 11,
		"name": "Sawyer Stevenson",
		"address": "Moe",
		"status": 7,
		"phone": "063-412-0223",
		"price": 2535514
	},
	{
		"orderId": 12,
		"name": "Palmer Whitney",
		"address": "Panguipulli",
		"status": 7,
		"phone": "039-872-5308",
		"price": 9276689
	},
	{
		"orderId": 13,
		"name": "Jasper Davenport",
		"address": "Viesville",
		"status": 5,
		"phone": "033-163-4199",
		"price": 4715297
	},
	{
		"orderId": 14,
		"name": "Kenyon Mccullough",
		"address": "Gibbons",
		"status": 1,
		"phone": "019-617-9337",
		"price": 2415636
	},
	{
		"orderId": 15,
		"name": "Ivor Meadows",
		"address": "Mariquina",
		"status": 6,
		"phone": "074-159-6335",
		"price": 9688007
	},
	{
		"orderId": 16,
		"name": "Patrick Hicks",
		"address": "Berbroek",
		"status": 7,
		"phone": "008-279-4609",
		"price": 11163652
	},
	{
		"orderId": 17,
		"name": "Raja Wynn",
		"address": "Portland",
		"status": 4,
		"phone": "086-412-8552",
		"price": 7724449
	},
	{
		"orderId": 18,
		"name": "Tanek Rowe",
		"address": "Estevan",
		"status": 3,
		"phone": "080-634-0127",
		"price": 2875828
	},
	{
		"orderId": 19,
		"name": "Oscar Hartman",
		"address": "Independence",
		"status": 0,
		"phone": "052-691-2309",
		"price": 4650991
	},
	{
		"orderId": 20,
		"name": "Deacon Hewitt",
		"address": "Lutterworth",
		"status": 3,
		"phone": "003-540-2310",
		"price": 494159
	},
	{
		"orderId": 21,
		"name": "Aidan Hines",
		"address": "Malbaie",
		"status": 2,
		"phone": "061-595-9215",
		"price": 1985671
	},
	{
		"orderId": 22,
		"name": "Paul Baxter",
		"address": "Le Mans",
		"status": 1,
		"phone": "063-726-3706",
		"price": 3040506
	},
	{
		"orderId": 23,
		"name": "Michael Brady",
		"address": "Estevan",
		"status": 3,
		"phone": "065-665-8784",
		"price": 9023528
	},
	{
		"orderId": 24,
		"name": "Knox Hurley",
		"address": "Torchiarolo",
		"status": 7,
		"phone": "005-899-0130",
		"price": 464900
	},
	{
		"orderId": 25,
		"name": "Colton Moss",
		"address": "Chapadinha",
		"status": 6,
		"phone": "043-115-3941",
		"price": 3305403
	},
	{
		"orderId": 26,
		"name": "Raymond Higgins",
		"address": "Sint-Lambrechts-Herk",
		"status": 5,
		"phone": "096-901-8578",
		"price": 8523819
	},
	{
		"orderId": 27,
		"name": "Wesley Brock",
		"address": "Belgrade",
		"status": 5,
		"phone": "033-364-1410",
		"price": 10998173
	},
	{
		"orderId": 28,
		"name": "Mannix Marquez",
		"address": "Ried im Innkreis",
		"status": 3,
		"phone": "072-428-7007",
		"price": 3115555
	},
	{
		"orderId": 29,
		"name": "Sebastian Bird",
		"address": "Napoli",
		"status": 6,
		"phone": "013-400-3218",
		"price": 9783375
	},
	{
		"orderId": 30,
		"name": "Noah Charles",
		"address": "Vandoeuvre-lès-Nancy",
		"status": 4,
		"phone": "048-209-1592",
		"price": 753822
	},
	{
		"orderId": 31,
		"name": "William Gay",
		"address": "Gravataí",
		"status": 1,
		"phone": "069-289-7641",
		"price": 11734400
	},
	{
		"orderId": 32,
		"name": "Melvin Ewing",
		"address": "Fatehpur",
		"status": 5,
		"phone": "058-312-9780",
		"price": 8971471
	},
	{
		"orderId": 33,
		"name": "Lance Waller",
		"address": "Laken",
		"status": 5,
		"phone": "027-545-1125",
		"price": 12185777
	},
	{
		"orderId": 34,
		"name": "Jackson Lloyd",
		"address": "Cuceglio",
		"status": 7,
		"phone": "046-849-1398",
		"price": 4964337
	},
	{
		"orderId": 35,
		"name": "Zeph Harmon",
		"address": "Heppignies",
		"status": 5,
		"phone": "053-277-3068",
		"price": 10525853
	},
	{
		"orderId": 36,
		"name": "Sebastian Carr",
		"address": "Bari",
		"status": 4,
		"phone": "019-753-6151",
		"price": 3657250
	},
	{
		"orderId": 37,
		"name": "Donovan Meyers",
		"address": "Filot",
		"status": 4,
		"phone": "055-736-9156",
		"price": 10921788
	},
	{
		"orderId": 38,
		"name": "Ethan Brown",
		"address": "Ramskapelle",
		"status": 0,
		"phone": "011-643-9446",
		"price": 8099817
	},
	{
		"orderId": 39,
		"name": "Amal Wright",
		"address": "Remscheid",
		"status": 1,
		"phone": "050-092-5448",
		"price": 9961115
	},
	{
		"orderId": 40,
		"name": "Steel Cohen",
		"address": "ThimŽon",
		"status": 1,
		"phone": "011-205-9461",
		"price": 5317241
	},
	{
		"orderId": 41,
		"name": "Kibo Dale",
		"address": "Rhemes-Notre-Dame",
		"status": 2,
		"phone": "074-990-2403",
		"price": 389315
	},
	{
		"orderId": 42,
		"name": "Buckminster Stanley",
		"address": "Lakeshore",
		"status": 0,
		"phone": "062-221-0059",
		"price": 10848738
	},
	{
		"orderId": 43,
		"name": "Duncan Marshall",
		"address": "Camerino",
		"status": 4,
		"phone": "068-507-4713",
		"price": 8844597
	},
	{
		"orderId": 44,
		"name": "Dolan Caldwell",
		"address": "Dongelberg",
		"status": 2,
		"phone": "039-333-6836",
		"price": 9347314
	},
	{
		"orderId": 45,
		"name": "Otto Hensley",
		"address": "Shawville",
		"status": 6,
		"phone": "013-781-1518",
		"price": 2279747
	},
	{
		"orderId": 46,
		"name": "Warren Reynolds",
		"address": "Guardia Sanframondi",
		"status": 2,
		"phone": "073-941-5715",
		"price": 2587608
	},
	{
		"orderId": 47,
		"name": "Ezekiel Patterson",
		"address": "Leicester",
		"status": 0,
		"phone": "050-932-6865",
		"price": 9127674
	},
	{
		"orderId": 48,
		"name": "Howard English",
		"address": "Boulogne-sur-Mer",
		"status": 3,
		"phone": "083-313-3948",
		"price": 6306304
	},
	{
		"orderId": 49,
		"name": "Dane Joseph",
		"address": "Thorembais-les-BŽguines",
		"status": 7,
		"phone": "044-816-9321",
		"price": 3426495
	},
	{
		"orderId": 50,
		"name": "Macaulay Daugherty",
		"address": "Montacuto",
		"status": 3,
		"phone": "092-530-0787",
		"price": 9912323
	},
	{
		"orderId": 51,
		"name": "Timothy Singleton",
		"address": "Camaçari",
		"status": 6,
		"phone": "062-268-1817",
		"price": 493423
	},
	{
		"orderId": 52,
		"name": "Hiram Valenzuela",
		"address": "Blevio",
		"status": 1,
		"phone": "044-198-1531",
		"price": 10359959
	},
	{
		"orderId": 53,
		"name": "Prescott Leon",
		"address": "Jaén",
		"status": 0,
		"phone": "096-736-1084",
		"price": 5752393
	},
	{
		"orderId": 54,
		"name": "Simon Bright",
		"address": "Vancouver",
		"status": 4,
		"phone": "004-623-6879",
		"price": 6531842
	},
	{
		"orderId": 55,
		"name": "Samson Green",
		"address": "Gressoney-Saint-Jean",
		"status": 1,
		"phone": "039-579-9687",
		"price": 11828273
	},
	{
		"orderId": 56,
		"name": "Kennan Ortega",
		"address": "Hasselt",
		"status": 4,
		"phone": "021-181-0263",
		"price": 1719103
	},
	{
		"orderId": 57,
		"name": "Sawyer Owens",
		"address": "Helmsdale",
		"status": 5,
		"phone": "016-842-1467",
		"price": 2982844
	},
	{
		"orderId": 58,
		"name": "Hunter Wilkinson",
		"address": "Santa Bárbara",
		"status": 0,
		"phone": "050-673-9956",
		"price": 8966694
	},
	{
		"orderId": 59,
		"name": "Graiden Rollins",
		"address": "Pozantı",
		"status": 4,
		"phone": "026-324-1247",
		"price": 8377390
	},
	{
		"orderId": 60,
		"name": "Jamal Dunn",
		"address": "Mulhouse",
		"status": 2,
		"phone": "095-601-3876",
		"price": 5253915
	},
	{
		"orderId": 61,
		"name": "Vance Griffith",
		"address": "Vilna",
		"status": 1,
		"phone": "014-000-0658",
		"price": 687701
	},
	{
		"orderId": 62,
		"name": "Wing Kelley",
		"address": "Zierikzee",
		"status": 5,
		"phone": "050-171-9059",
		"price": 7776833
	},
	{
		"orderId": 63,
		"name": "Jesse Shaffer",
		"address": "Wandre",
		"status": 0,
		"phone": "058-295-9448",
		"price": 2907462
	},
	{
		"orderId": 64,
		"name": "Quinn Fisher",
		"address": "San Rafael",
		"status": 2,
		"phone": "038-634-4133",
		"price": 2174581
	},
	{
		"orderId": 65,
		"name": "Branden Martinez",
		"address": "Brecon",
		"status": 1,
		"phone": "028-021-1140",
		"price": 11334374
	},
	{
		"orderId": 66,
		"name": "Blaze Atkins",
		"address": "Parramatta",
		"status": 6,
		"phone": "035-811-7335",
		"price": 3550458
	},
	{
		"orderId": 67,
		"name": "Xenos Roberson",
		"address": "Oostkerk",
		"status": 3,
		"phone": "050-669-4627",
		"price": 11103031
	},
	{
		"orderId": 68,
		"name": "Harlan Mcpherson",
		"address": "Valladolid",
		"status": 0,
		"phone": "087-595-2017",
		"price": 11714323
	},
	{
		"orderId": 69,
		"name": "Beck Dejesus",
		"address": "Shreveport",
		"status": 4,
		"phone": "047-213-8089",
		"price": 8144653
	},
	{
		"orderId": 70,
		"name": "Brady Slater",
		"address": "Bellevue",
		"status": 6,
		"phone": "086-248-1560",
		"price": 7458011
	},
	{
		"orderId": 71,
		"name": "Benjamin Cantu",
		"address": "Parndorf",
		"status": 7,
		"phone": "029-451-3363",
		"price": 8154927
	},
	{
		"orderId": 72,
		"name": "Evan Joyner",
		"address": "Zwettl-Niederösterreich",
		"status": 2,
		"phone": "088-839-0991",
		"price": 5597240
	},
	{
		"orderId": 73,
		"name": "Lucian Bauer",
		"address": "Legal",
		"status": 7,
		"phone": "088-912-1425",
		"price": 6968551
	},
	{
		"orderId": 74,
		"name": "Bradley Schneider",
		"address": "Nederhasselt",
		"status": 1,
		"phone": "016-681-4665",
		"price": 11009219
	},
	{
		"orderId": 75,
		"name": "Abdul Benson",
		"address": "Campolieto",
		"status": 7,
		"phone": "014-221-8308",
		"price": 9743218
	},
	{
		"orderId": 76,
		"name": "Graiden Ferguson",
		"address": "Kamarhati",
		"status": 7,
		"phone": "048-198-9292",
		"price": 7085372
	},
	{
		"orderId": 77,
		"name": "Howard Mccormick",
		"address": "Lodelinsart",
		"status": 2,
		"phone": "089-461-9627",
		"price": 630951
	},
	{
		"orderId": 78,
		"name": "Donovan Hendricks",
		"address": "Scorrano",
		"status": 5,
		"phone": "096-363-1719",
		"price": 11906114
	},
	{
		"orderId": 79,
		"name": "Knox Lyons",
		"address": "Drayton Valley",
		"status": 5,
		"phone": "094-888-3079",
		"price": 11065817
	},
	{
		"orderId": 80,
		"name": "Martin Phillips",
		"address": "Esslingen",
		"status": 6,
		"phone": "006-081-2551",
		"price": 8140447
	},
	{
		"orderId": 81,
		"name": "Wang Mooney",
		"address": "Dehri",
		"status": 4,
		"phone": "081-353-7627",
		"price": 7157720
	},
	{
		"orderId": 82,
		"name": "Eric Johnston",
		"address": "Windsor",
		"status": 2,
		"phone": "076-836-6661",
		"price": 10503194
	},
	{
		"orderId": 83,
		"name": "Tanner Rodriquez",
		"address": "Titagarh",
		"status": 6,
		"phone": "068-581-5307",
		"price": 5940687
	},
	{
		"orderId": 84,
		"name": "Addison Garner",
		"address": "Gurgaon",
		"status": 4,
		"phone": "035-506-7691",
		"price": 10013700
	},
	{
		"orderId": 85,
		"name": "Harding Cole",
		"address": "Montleban",
		"status": 5,
		"phone": "095-033-4896",
		"price": 486633
	},
	{
		"orderId": 86,
		"name": "Phillip Mcdonald",
		"address": "Tulita",
		"status": 2,
		"phone": "017-561-8622",
		"price": 4055517
	},
	{
		"orderId": 87,
		"name": "Sylvester Wolfe",
		"address": "Swan",
		"status": 4,
		"phone": "082-493-0019",
		"price": 9317147
	},
	{
		"orderId": 88,
		"name": "Charles Pratt",
		"address": "Destelbergen",
		"status": 0,
		"phone": "095-545-3774",
		"price": 8565815
	},
	{
		"orderId": 89,
		"name": "Preston West",
		"address": "Ferlach",
		"status": 3,
		"phone": "081-492-9141",
		"price": 3277569
	},
	{
		"orderId": 90,
		"name": "Channing Michael",
		"address": "Pelago",
		"status": 2,
		"phone": "013-085-4425",
		"price": 8722835
	},
	{
		"orderId": 91,
		"name": "Reese Underwood",
		"address": "Overmere",
		"status": 3,
		"phone": "030-222-5215",
		"price": 4139986
	},
	{
		"orderId": 92,
		"name": "Seth Mendoza",
		"address": "Champlain",
		"status": 2,
		"phone": "006-524-7857",
		"price": 11694722
	},
	{
		"orderId": 93,
		"name": "Stone Moore",
		"address": "Traun",
		"status": 1,
		"phone": "084-764-7137",
		"price": 5717492
	},
	{
		"orderId": 94,
		"name": "Blaze Hopper",
		"address": "Rugby",
		"status": 2,
		"phone": "086-513-9367",
		"price": 1190415
	},
	{
		"orderId": 95,
		"name": "Edward Mclaughlin",
		"address": "Ettelgem",
		"status": 5,
		"phone": "057-839-5062",
		"price": 2247276
	},
	{
		"orderId": 96,
		"name": "Peter Weeks",
		"address": "Corvino San Quirico",
		"status": 0,
		"phone": "004-976-0672",
		"price": 11443638
	},
	{
		"orderId": 97,
		"name": "Ashton Rowland",
		"address": "Rüsselsheim",
		"status": 1,
		"phone": "023-481-4588",
		"price": 4678658
	},
	{
		"orderId": 98,
		"name": "Adrian Thomas",
		"address": "Vorselaar",
		"status": 4,
		"phone": "085-287-4831",
		"price": 5513843
	},
	{
		"orderId": 99,
		"name": "Tyler Ochoa",
		"address": "Falisolle",
		"status": 0,
		"phone": "030-777-5839",
		"price": 1429843
	},
	{
		"orderId": 100,
		"name": "Barry Francis",
		"address": "Jasper",
		"status": 2,
		"phone": "068-311-4254",
		"price": 8224109
	}
];
  console.log($scope.orders);
  $scope.logout = function () {
      var loggedOut = authenticationSvc.logout();
      console.log(authenticationSvc);
      $scope.userInfo = null;
      $location.path("/login");

  };

  $scope.openDropdown = function () {
    $scope.dropdownActive = !  $scope.dropdownActive;
  };

  $scope.slide = false;

  $scope.statusToString = function(status){
    var string = '';
    switch (status) {
      case 0:
        string = 'created';
        break;
      case 1:
        string = 'Out for Delivery';
        break;
      case 2:
        string = 'Delivered';
        break;
      case 3:
        string = 'Cancelled';
        break;
      case 4:
        string = 'Pending';
        break;
      case 5:
        string = 'In Transit';
        break;
      case 6:
        string = 'Returned';
        break;
      case 7:
        string = 'Lost';
        break;
      default:
    }
    return string;
  };

  $scope.isGrid = false;

  $scope.matchAmount = function(order){
    return order.price >= $scope.search.minAmount && order.price <= $scope.search.maxAmount;
  };

  $scope.openTermsAndModal = false;
  $scope.openModal = function(){
    if(auth.isFirst){
      var html = document.documentElement;
      html.className += ' overflow-hidden';
      $scope.openTermsAndModal = true;
    }
  };
  $scope.closeModal = function(){
      var html = document.documentElement;
      html.classList.remove('overflow-hidden');
      $scope.openTermsAndModal = false;
  };
  $timeout($scope.openModal, 2000);

  $scope.orderStatuses = [{
    name : 'Pending',
    value: 4
  },{
    name : 'Delivered',
    value: 2
  },{
    name : 'Returned',
    value: 6
  },
  {
    name : 'Cancelled',
    value: 3
  }];
  $scope.currentSelectedStatusValue = 'All Orders';
  $scope.changeOrderStatus = function(value,name) {
    $scope.currentSelectedStatus = value;
    $scope.currentSelectedStatusValue = name;
  };

  $scope.pagination = Pagination.getNew(20);
  $scope.search.filtered = $scope.pageOrders;
  $scope.$watch('search.filtered.length', function() {
    $scope.pagination.numPages = Math.ceil($scope.search.filtered.length/$scope.pagination.perPage);
  });

})

;
