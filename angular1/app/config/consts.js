angular.module('primeiraApp').constant('consts', {
  appName: 'Ey Money',
  version: '1.0',
  owner: 'Ey Money',
  year: '2017',
  site: 'http://eymoney.com.br',
  apiUrl: 'http://localhost:3003/api',
  oapiUrl:'http://localhost:3003/oapi',
  userKey: '_ey_pag_user'
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
