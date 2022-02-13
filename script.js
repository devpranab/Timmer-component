// Define element
const day = document.querySelector(".day");
const hourse = document.querySelector(".hourse");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Define function
function countDown(){
    let eventTime = new Date("1 December 2021 09:10:00");
    let currentTime = new Date();
    console.log(currentTime);
    let totalTime = eventTime - currentTime;
    console.log(totalTime);
    let totalSecond = Math.floor(totalTime / 1000);
    let totalMinute = Math.floor(totalSecond / 60);
    let totalHourse = Math.floor(totalMinute / 60);
    console.log(totalHourse);
    let totalDay = Math.floor(totalHourse / 24);
    console.log(totalDay);
    let hourseRemain = totalHourse%24;
    let minuteRemain = totalMinute%60;
    let secondRemain = totalSecond%60;

    console.log(totalDay, hourseRemain, minuteRemain, secondRemain);


day.innerHTML = totalDay;
hourse.innerHTML = hourseRemain;
minute.innerHTML = minuteRemain;
second.innerHTML = secondRemain;
}
countDown();
setInterval(countDown,1000)



