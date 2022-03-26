// Current day displayed at the top of calendar

var todaysDate = moment().format(' dddd MMMM D, YYYY');
$("#currentDay").html(todaysDate);

var currentTime = moment().format()

let newHtml = ""

let HTMLCode = ""

var timeSlot = ["8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"]

var hoursFormat = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

var className = ["past", "present", "future"]

// Time blocks

for (let i = 0; i < 10; i++) {
  var storedTasks = localStorage.getItem(i) || ""

  HTMLCode += `<div class="row time-block">
  <h3 class="hour">${timeSlot[i]}</h3>
  <textarea id="${i}" class="col-md-10 description" value = ${storedTasks} placeholder=${storedTasks}></textarea>
  <button class="saveBtn btn btn-success col-md-1"><i class="fas fa-save"></i></button></div>`

  var dateTime = `${moment().format("YYYY-MM-DD")}T${hoursFormat[i]}`

  var dateTrack = moment(currentTime).isAfter(dateTime)

  var endDateTime = `${moment().format("YYYY-MM-DD")}T${hoursFormat[i + 1]}`
  
// Present data

  if (moment(currentTime).isBetween(dateTime, endDateTime)) {
    newHtml += `<div class="row time-block">
    <h3 class="hour">${timeSlot[i]}</h3>
  <textarea id="${i}" class="col-md-10 description ${className[1]}" value = ${storedTasks} placeholder=${storedTasks}></textarea>
  <button class="saveBtn btn btn-success col-md-1"><i class="fas fa-save"></i></button></div>`

  //Past data

  } else if (dateTrack) {
    newHtml += `<div class="row time-block">
    <h3 class="hour">${timeSlot[i]}</h3>
  <textarea id="${i}" class="col-md-10 description ${className[0]}" value = ${storedTasks} placeholder=${storedTasks}></textarea>
  <button class="saveBtn btn btn-success col-md-1"><i class="fas fa-save"></i></button></div>`

  //Future data

  } else {
    newHtml += `<div class="row time-block">
    <h3 class="hour">${timeSlot[i]}</h3>
  <textarea id="${i}" class="col-md-10 description ${className[2]}" value = ${storedTasks} placeholder=${storedTasks}></textarea>
  <button class="saveBtn btn btn-success col-md-1"><i class="fas fa-save"></i></button></div>`
  }

}
$("#blocks").html(HTMLCode)

$("#blocks").html(newHtml)


// Save data that persist

$(".saveBtn").on("click", function () {
  var task = $(this).siblings("textarea").val()
  var time = $(this).siblings("textarea").attr("id")
  console.log(`testing, ${task}, ${time}`)
  localStorage.setItem(time, task)
})

