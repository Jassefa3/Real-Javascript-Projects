function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = "is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String
        break;
        case "Green":
            Color_Output = "Green" + Color_String
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above"
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Class_name() {
    X = 5;
    document.write(5);
    var X = 10;
    document.getElementById("class").innerHTML = Class_name;
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(50, 0, 200, 500);
my_gradient.addColorStop(0, "white");
my_gradient.addColorStop(1, "black");
ctx.fillStyle = my_gradient;
ctx.fillRect(80, 80, 500, 200);
