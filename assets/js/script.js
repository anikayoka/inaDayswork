// open planner to current day displayed at the top of calendar
var todaysDate = moment().format(' dddd MMMM D, YYYY');
$("#currentDay").html(todaysDate);


//each time block is color coded indicatiing past present or future
//can enter an event when time block is clicked
//text is saved in local storage when save button is clicked
//saved events persist when page is refreshed

let HTMLCode = ""
// scroll down & presented with time block for standard business hours
for(let i=9 ;i<18 ;i++){
  var storedTasks = localStorage.getItem(i) || ""
  HTMLCode += `<div class="row m-3 p-3">
  <h3 class="hour">${i}</h3>
  <textarea id="${i}" row="2" cols="80" value = ${storedTasks} placeholder=${storedTasks}></textarea>
  <button class="saveBtn btn btn-success">Save</button>
</div>`
}

$("#blocks").html(HTMLCode)

// save events for each hour of the day

$(".saveBtn").on("click",function(){
  var task = $(this).siblings("textarea").val()
  var time = $(this).siblings("textarea").attr("id")
    console.log(`testing, ${task}, ${time}`)
    localStorage.setItem(time, task)
})