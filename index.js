setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + 0.5*mtime;
    mrotation = 6*mtime;
    srotation = 6*stime;  
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

document.write("<center><font size=+5 style='color: green;'>");
var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 12) {
    document.write("Good Morning!");
} else if (hr == 12) {
    document.write("Good Noon!");
} else if (hr >= 12 && hr <= 17) {
    document.write("Good Afternoon!");
} else {
    document.write("Good Evening!");
}
document.write("</font></center>");
