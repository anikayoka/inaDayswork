// open planner to current day displayed at the top of calendar
var todaysDate = moment().format(' dddd MMMM D, YYYY');
$("#currentDay").html(todaysDate);

var currentTime = moment().format("h a");

let newHtml = ""

let HTMLCode = ""

var timeSlot = ["8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"]

var className = ["past", "present", "future"]

for (let i = 0; i < 10; i++) {
  var storedTasks = localStorage.getItem(i) || ""

  HTMLCode += `<div class="row time-block">
  <h3 class="hour">${timeSlot[i]}</h3>
  <textarea id="${i}" class="col-md-10 description" value = ${storedTasks} placeholder=${storedTasks}></textarea>
  <button class="saveBtn btn btn-success col-md-1"><i class="fas fa-save"></i></button></div>`


  if (timeSlot[i] < currentTime) {
    newHtml += `<div class="row time-block">
    <h3 class="hour">${timeSlot[i]}</h3>
  <textarea id="${i}" class="col-md-10 description ${className[0]}" value = ${storedTasks} placeholder=${storedTasks}></textarea>
  <button class="saveBtn btn btn-success col-md-1"><i class="fas fa-save"></i></button></div>`

    console.log(currentTime)

  } else if (timeSlot[i] === currentTime) {
    newHtml += `<div class="row time-block">
    <h3 class="hour">${timeSlot[i]}</h3>
  <textarea id="${i}" class="col-md-10 description ${className[1]}" value = ${storedTasks} placeholder=${storedTasks}></textarea>
  <button class="saveBtn btn btn-success col-md-1"><i class="fas fa-save"></i></button></div>`

    console.log(currentTime)

  } else {
    newHtml += `<div class="row time-block">
    <h3 class="hour">${timeSlot[i]}</h3>
  <textarea id="${i}" class="col-md-10 description ${className[2]}" value = ${storedTasks} placeholder=${storedTasks}></textarea>
  <button class="saveBtn btn btn-success col-md-1"><i class="fas fa-save"></i></button></div>`
  }

  console.log(currentTime)

}
$("#blocks").html(HTMLCode)

$("#blocks").html(newHtml)


// save events for each hour of the day

$(".saveBtn").on("click", function () {
  var task = $(this).siblings("textarea").val()
  var time = $(this).siblings("textarea").attr("id")
  console.log(`testing, ${task}, ${time}`)
  localStorage.setItem(time, task)
})

// row="2" cols="100"

