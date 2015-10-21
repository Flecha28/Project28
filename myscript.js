/**
 * Created by david on 6/17/2015.
 */

<script>
    var yourName = prompt("what is your name");
    if (yurName != null){
        document.getElementById("sayHello").innerHTML = "Hello" + yourName;
    } else {
        alert("pleae enter a name next time ");
    }
</script>

