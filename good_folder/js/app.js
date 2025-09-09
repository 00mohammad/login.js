const username = prompt("Please Enter The Username ... ");
const users = ["amin", "amir", "ali"];

let isLogin = false;

users.forEach(function (users) {
  if (users === username) {
    isLogin = true;
  }
});
if (isLogin) {
  alert("باموفغیت لاگین شدین");
} else {
  alert("لاگین باشکست مواجب شد؟");
}
