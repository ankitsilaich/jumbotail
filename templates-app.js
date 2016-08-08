angular.module('templates-app', ['login/login.tpl.html', 'orders/orders.tpl.html']);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"login-wrapper\">\n" +
    "  <div class=\"form login\" ng-controller=\"loginCtrl\">\n" +
    "    <ul class=\"tab-group\">\n" +
    "      <li class=\"tab\" ng-class=\"{active : activeForm === 'login-form'}\" ng-click=\"changeForms('login-form')\"><a href=\"#login\">Login</a></li>\n" +
    "\n" +
    "      <li class=\"tab\" ng-class=\"{active : activeForm === 'signup-form'}\" ng-click=\"changeForms('signup-form')\"><a href=\"#signup\">Sign Up</a></li>\n" +
    "    </ul>\n" +
    "    <div class=\"tab-content\">\n" +
    "      <div id=\"signup\" ng-show=\"activeForm == 'signup-form'\">\n" +
    "        <h1>Sign Up for Free</h1>\n" +
    "\n" +
    "        <form action=\"/\" method=\"post\">\n" +
    "\n" +
    "        <div class=\"top-row\">\n" +
    "          <div class=\"field-wrap\">\n" +
    "            <input type=\"text\" required autocomplete=\"off\" placeholder=\"First Name\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"field-wrap\">\n" +
    "            <input type=\"text\"required autocomplete=\"off\" placeholder=\"Last Name\"/>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"field-wrap\">\n" +
    "          <input type=\"email\"required autocomplete=\"off\" placeholder=\"Email Address\"/>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"field-wrap\">\n" +
    "          <input type=\"password\"required autocomplete=\"off\" placeholder=\"Set a Password\"/>\n" +
    "        </div>\n" +
    "\n" +
    "        <button type=\"submit\" class=\"button button-block\"/>Register</button>\n" +
    "\n" +
    "        </form>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      <div id=\"login\" ng-show=\"activeForm == 'login-form'\">\n" +
    "        <h1>Welcome Back!</h1>\n" +
    "        <p ng-if=\"loginFailed\" class=\"error-login\"> Please prove correct credentials</p>\n" +
    "        <form method=\"post\">\n" +
    "\n" +
    "        <div class=\"field-wrap\">\n" +
    "          <input type=\"email\"  placeholder=\"Email\" ng-model=\"userName\"/>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"field-wrap\">\n" +
    "          <input type=\"password\" autocomplete=\"off\" ng-model=\"password\" placeholder=\"Password\"/>\n" +
    "        </div>\n" +
    "\n" +
    "        <p class=\"forgot\"><a href=\"#\">Forgot Password?</a></p>\n" +
    "\n" +
    "        <button class=\"button button-block\" ng-click=\"login()\"/>Login</button>\n" +
    "\n" +
    "        </form>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "    </div><!-- tab-content -->\n" +
    "\n" +
    "  </div> <!-- /form -->\n" +
    "</div>\n" +
    "");
}]);

angular.module("orders/orders.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("orders/orders.tpl.html",
    "<div ng-contrller=\"AboutCtrl\" ><navbar>\n" +
    "  <a class=\"website-logo\"><img src =\"http://jumbotail.com/wp-content/uploads/2015/08/logo-white.png\"></a>\n" +
    "  <div class=\"website-search\">\n" +
    "			<form action=\"#0\">\n" +
    "        <!-- <div class=\"search-icon fa fa-search\"></div> -->\n" +
    "				<!-- <input type=\"search\" placeholder=\"Search...\"> -->\n" +
    "			</form>\n" +
    "	</div>\n" +
    "  <nav class=\"mobile-nav\" ng-click=\"logout()\">\n" +
    "    <i class=\"icon-logout icons\"></i>\n" +
    "  </nav>\n" +
    "  <nav class=\"website-nav\">\n" +
    "		<ul class=\"website-top-nav\">\n" +
    "				<li><a>Orders</a></li>\n" +
    "				<li><a >Reports</a></li>\n" +
    "				<li class=\"has-children account\" ng-class=\"{selected : dropdownActive}\" ng-click=\"openDropdown()\">\n" +
    "					<a >\n" +
    "						<img src=\"https://codyhouse.co/demo/responsive-sidebar-navigation/img/cd-avatar.png\" alt=\"avatar\" class=\"avatar-image\">\n" +
    "						Account\n" +
    "            <span class=\"icon icon-arrow-down \" ng-if=\"!dropdownActive\"></span>\n" +
    "            <span class=\"icon icon-arrow-up\" ng-if=\"dropdownActive\"></span>\n" +
    "					</a>\n" +
    "					<ul>\n" +
    "						<li><a >My Account</a></li>\n" +
    "						<li><a >Edit Account</a></li>\n" +
    "						<li><a ng-click=\"logout()\">Logout</a></li>\n" +
    "					</ul>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "  </nav>\n" +
    "</navbar>\n" +
    "<div class=\"filters-container\">\n" +
    "  <div class=\"filter-box\">\n" +
    "    <div class=\"col-3\" ng-init=\"dropdownOpen=false\">\n" +
    "      <div class=\"filter filter-datepicker\" ng-click=\"dropdownOpen=!dropdownOpen\">\n" +
    "        <div class=\"filter-icon\"><i class=\"icon-calendar icons\"></i></div>\n" +
    "        <div class=\"filter-text\">All Orders</div>\n" +
    "        <div class=\"filter-dropdown\"><i class=\"icon-arrow-down icons\"></i></div>\n" +
    "        <div ng-class=\"{'dropdown': true,'open': dropdownOpen}\">\n" +
    "          <ul class=\"dropdown-list\">\n" +
    "            <li class=\"dropdown-item\">item1</li>\n" +
    "            <li class=\"dropdown-item\">item2</li>\n" +
    "            <li class=\"dropdown-item\">item3</li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-6\">\n" +
    "      <div class=\"filter filter-search no-padding\" >\n" +
    "        <input placeholder=\"Search Orders by Name\" ng-model=\"search.name\"></input>\n" +
    "        <div class=\"search-input\"><i class=\"icon-magnifier icons\"></i></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-3\">\n" +
    "      <div class=\"filter filter-all\" ng-click=\"slide=!slide\">\n" +
    "        <div class=\"filter-icon\"><i class=\"fa fa-filter\"></i></div>\n" +
    "        <div class=\"filter-text\">Filters</div>\n" +
    "        <div class=\"filter-dropdown\" ng-show=\"!slide\"><i class=\"icon-arrow-down icons\"></i></div>\n" +
    "        <div class=\"filter-dropdown\" ng-show=\"slide\"><i class=\"icon-arrow-up icons\"></i></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"filters-list animate-slide\" ng-show=\"slide\">\n" +
    "  <div class=\"main-content-filters clearfix\">\n" +
    "    <div class=\"col-3\">\n" +
    "      <div class=\"filter-labels\">\n" +
    "        Order Status\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-3\">\n" +
    "      <div class=\"filter-labels\">\n" +
    "        Delivery Cost\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-6\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"clearfix\"></div>\n" +
    "\n" +
    "  <div class=\"main-content-filters clearfix\">\n" +
    "    <div class=\"col-3\">\n" +
    "      <div class=\"filter filter-datepicker\" ng-click=\"statusdropdownOpen=!statusdropdownOpen\">\n" +
    "        <div class=\"filter-text\">{{currentSelectedStatusValue}}</div>\n" +
    "        <div class=\"filter-dropdown\"><i class=\"icon-arrow-down icons\"></i></div>\n" +
    "        <div ng-class=\"{'dropdown': true,'open': statusdropdownOpen}\">\n" +
    "          <ul class=\"dropdown-list\">\n" +
    "            <li class=\"dropdown-item\" ng-repeat=\"item in orderStatuses\" ><div ng-click=\"changeOrderStatus(item.value, item.name)\">{{item.name}}</div></li>\n" +
    "            <li class=\"dropdown-item\"><div ng-click=\"changeOrderStatus(undefined, 'All Orders')\">All Orders</div></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"filter filter-datepicker\">\n" +
    "        <div class=\"filter-text\">Time</div>\n" +
    "        <div class=\"filter-dropdown\"><i class=\"icon-arrow-down icons\"></i></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-3\">\n" +
    "      <div class=\"col-3\">\n" +
    "        <div class=\"filter-labels search\">\n" +
    "          From\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-9\">\n" +
    "        <div class=\"filter filter-search no-padding clearfix\">\n" +
    "          <input placeholder=\"From Rs. 0\"  ng-model=\"search.minAmount\" ></input>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-3\">\n" +
    "        <div class=\"filter-labels search\" >\n" +
    "          To\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-9\">\n" +
    "        <div class=\"filter filter-search no-padding clearfix\">\n" +
    "          <input placeholder=\"To Rs. 100000\"ng-model=\"search.maxAmount\"></input>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-3 dark-text\">.</div>\n" +
    "    <div class=\"col-3\" style=\"text-align:center\">\n" +
    "      <div class=\"clear-filter\">Clear Filters</div>\n" +
    "      <div><button class=\"button filter-button\" ng-click=\"slide=!slide\">Filter</button></div>\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"clearfix\"></div>\n" +
    "\n" +
    "<div class=\"main-content\">\n" +
    "  <div class=\"result-description-cotainer\">\n" +
    "    <div class=\"result-content col-6\">\n" +
    "      <span>Search Result for : Programs, orders, sellers</span>\n" +
    "    </div>\n" +
    "    <div class=\"result-content col-6 text-right\">\n" +
    "      <span>{{search.filtered.length}}  Results</span>\n" +
    "      <span class=\"grid\" ng-click='isGrid=!isGrid'><i class=\"icon-grid icons\"></i></span>\n" +
    "      <span class=\"list\"  ng-click='isGrid=!isGrid'><i class=\"icon-list icons\"></i></span>\n" +
    "    </div>\n" +
    "    <div class=\"results-list\">\n" +
    "      <div class=\"\" ng-if=\"isGrid\">\n" +
    "        Grid view implementation needed\n" +
    "      </div>\n" +
    "      <table class=\"order-table\" ng-if=\"!isGrid\" id=\"responsive\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>Order Id</th>\n" +
    "            <th>Name</th>\n" +
    "            <th>Address</th>\n" +
    "            <th>Phone</th>\n" +
    "            <th>Price</th>\n" +
    "            <th>Status</th>\n" +
    "            <th>Actions</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "\n" +
    "          <tr class=\"table-row\" ng-repeat=\"order in search.filtered = (pageOrders | filter: {name: search.name}  | filter : matchAmount | filter: {status : currentSelectedStatus} )  | startFrom: pagination.page * pagination.perPage | limitTo: pagination.perPage\">\n" +
    "            <td data-title=\"Order Id\">{{order.orderId}}</td>\n" +
    "            <td data-title=\"Name\" class=\"dark-bold\">{{order.name}}</td>\n" +
    "            <td data-title=\"Address\" >{{order.address}}</td>\n" +
    "            <td data-title=\"Phone\" >{{order.phone}}</td>\n" +
    "            <td data-title=\"Price\" >Rs {{order.price}}</td>\n" +
    "            <td data-title=\"Status\" class=\"order-status\" data-status={{order.status}}>{{statusToString(order.status)}}</td>\n" +
    "            <td data-title=\"Actions\">\n" +
    "              <span class=\"icons icon-note actions\" ng-click=\"changeStatus = !changeStatus\">\n" +
    "                <div ng-class=\"{'dropdown dropdown-status': true,'open': changeStatus}\">\n" +
    "                  <ul class=\"dropdown-list\">\n" +
    "                    <li class=\"dropdown-item\" ng-repeat=\"item in orderStatuses\" ng-click=\"updateStatus(order.orderId,item.value)\">{{item.name}}</li>\n" +
    "                  </ul>\n" +
    "                </div>\n" +
    "              </span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        <tbody>\n" +
    "\n" +
    "      </table>\n" +
    "      <div class=\"table-row\" ng-repeat=\"order in search.filtered = (pageOrders | filter: {name: search.name}  | filter : matchAmount | filter: {status : currentSelectedStatus} ) | startFrom: pagination.page * pagination.perPage | limitTo: pagination.perPage\" style=\"display:none\">\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <ul class=\"paginate pag5 clearfix\">\n" +
    "        <li class=\"single\">Page {{pagination.page + 1}} of {{pagination.numPages}}</li>\n" +
    "        <li ng-repeat=\"n in [] | range: pagination.numPages\" ng-class=\"{current: n == pagination.page}\"><a ng-click=\"pagination.toPageId(n)\">{{n+1}}</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div id=\"modal\" ng-class=\"{active: openTermsAndModal}\">\n" +
    "  <div class=\"modal-content\">\n" +
    "    <div class=\"header\">\n" +
    "      <h2>Terms & Conditions</h2>\n" +
    "    </div>\n" +
    "    <div class=\"copy\">\n" +
    "      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>\n" +
    "      <a ng-click=\"closeModal()\">Accept</a> </div>\n" +
    "  </div>\n" +
    "  <div class=\"overlay\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);
