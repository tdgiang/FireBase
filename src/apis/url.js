import {NetworkSetting} from '../config/Setting';


const root="http://api.dcvinvest.com/"
export default {
  urllogin:root+"api/auth/login",
  urllogout:root+"api/auth/logout",
  urlListCustomer:root+'/api/v1/customers',
  urlDetailCustomer:root+'/api/v1/customers/detail',
  urlListWithdraw:root+'/api/v1/customers/get-list-request-withdraw',
  urlGetListNotification:root+'api/v1/notifications',
  urlListDeposit:root+'api/v1/customers/get-list-deposit',
  urlDetailDeposit:root+'api/v1/customers/deposit-detail',
  urlDetailWithdraw:root+'api/v1/customers/withdraw-detail',
  urlReadNoti:root+'api/v1/notifications/update-read',
  urlCountNoti:root+'api/v1/notifications/get-counter',

  urlSummaryToDo:root+'api/v1/statistics/get-todo-summary',
};
