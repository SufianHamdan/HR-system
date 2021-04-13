'use strict';

let allEmployees = [];

let tableHeader = ['Name', 'Email', 'Department', 'Salary'];

let total = 0;

//Calling the div and creating a global table
let container = document.getElementById('employeeInfo');
let table = document.createElement('table');
container.appendChild(table);
table.id = 'table';
displayTableHeader();


//Constructor
function Employee(eName, eEmail, eDepart){
  this.eName = eName;
  this.eEmail = eEmail;
  this.eDepart = eDepart;
  this.salary = getRandomInt(100, 500);
  this.total = 0;

  allEmployees.push(this);
  localStorage.setItem('Employee', JSON.stringify(allEmployees));
  this.render();

}

//Calling form and adding event listener
let form = document.getElementById('form');
form.addEventListener('submit', displayEmployeeData);
function displayEmployeeData(e){
  e.preventDefault();

  new Employee (e.target.name.value, e.target.email.value, e.target.department.value);
}


Employee.prototype.render = function(){

  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);

  let tableData = document.createElement('th');
  tableRow.appendChild(tableData);
  tableData.textContent = this.eName;


  let tableData1 = document.createElement('th');
  tableRow.appendChild(tableData1);
  tableData1.textContent = this.eEmail;


  let tableData2 = document.createElement('th');
  tableRow.appendChild(tableData2);
  tableData2.textContent = this.eDepart;


  let tableData3 = document.createElement('th');
  tableRow.appendChild(tableData3);
  tableData3.textContent = this.salary;


  total = total + this.salary;
  p.textContent = 'Total: '+total;
};


function displayTableHeader(){
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);

  for (let i = 0; i < tableHeader.length; i++) {
    let tableHead = document.createElement('th');
    tableRow.appendChild(tableHead);
    tableHead.textContent = tableHeader[i];
  }
}


//Total Salary
let p = document.createElement('p');
container.appendChild(p);
p.id = 'total';
p.textContent = 'Total: '+total;


//Getting from Local
if(localStorage.getItem('Employee')){
  let normalObj = JSON.parse(localStorage.getItem('Employee'));
  for (let i = 0; i < normalObj.length; i++) {
    new Employee (normalObj[i].eName, normalObj[i].eEmail, normalObj[i].eDepart); 
  }
}

//Random Number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
