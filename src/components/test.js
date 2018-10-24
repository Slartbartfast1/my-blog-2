var $sql=require('../API/sql.js');
let select = "select title from article where top=1";
function push(res){
    console.log(res)
}
$sql.mySelect(select,push);