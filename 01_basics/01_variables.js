const accountId = 1234543
let accountEmail = "okasd@mail.com"
var accountPassword = "1234"
accountCity = "Karachi"
let accountState;

//accountId = 2 // not allowed

//const cant be changed
//var doesn't support scope so it's useless
//let does support scope so it will be used to declare variables
//variables can also be decalred directly but wrong way like accountCity
//statment terminator is not important in Javascript
//the value of accountState is undefined

//changing values of variables
accountEmail = "dsds.pk"
accountPassword = "changed34"
accountCity = "Lahore"

//ways of printing
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountState,accountCity])
