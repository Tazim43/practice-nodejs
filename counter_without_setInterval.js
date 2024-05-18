let cnt = 0;
function fun(){
  setTimeout(()=>{
    console.log(cnt);
    cnt++;
    fun()
  }, 1000)
}

fun()
