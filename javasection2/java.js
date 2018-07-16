// var john = {
//     name : 'shariq',
//     dateOfBirth : '1996',
//     job : 'teacher'
// }
// console.log(john);

// var Person = function(name,dateOfBirth,job,salary){
//     this.name = name;
//     this.dateOfBirth = dateOfBirth;
//     this.job = job; 
//     this.salary = salary;
// }
// Person.prototype.calculateAge = function() {
//     console.log( 2018 - this.dateOfBirth);
// }
// Person.prototype.calculateBonus = function(){
//     console.log( 20  + this.salary);
// }
// var john = new Person('john', 1996, 'teacher' , 100);
// john.calculateAge();
// john.calculateBonus();
// var jane = new Person('jane', 1978, 'designer' , 200);
// jane.calculateAge();
// jane.calculateBonus();
// var jack = new Person('jack', 1955, 'webdeveloper', 300);
// jack.calculateAge();
// jack.calculateBonus();


// var perProto = {
//     calculateAge : function(){
//         console.log( 2018 - this.dateOfBirth)
//     }
// }

// var john = Object.create(perProto);
// john.name = 'job';
// john.dateOfBirth = 1996;
// john.job = 'teacher';


// var year = [1996,1998,1997,1995];                   //takes year
// function arrCal(arr, fn){
//         var arrRes = [];
//         for (var i = 0 ; i < year.length ; i++){
//             arrRes.push(fn(arr[i]));
//         }
//         return arrRes;
// }
// function calculateAge(el){
//     return 2016 - el ;
// }
// function fullAges(el){
//     return el <= 18 ;
// } 

// function maxHeartRate(el){
//     return Math.round(206.9 - (0.67 * el));
// }


// var age = arrCal(year, calculateAge);
// var fullAge = arrCal(age, fullAges); 
// var heartRates = arrCal(age, maxHeartRate);
// console.log(heartRates);
// console.log(age);
// console.log(fullAge);

function interviewQuestion(job){
    if( job === 'designer'){
        return function(name){
            console.log(name + ', what is UX design?');
        } 
    }else if( job ==='teacher' ){
            return function(name){
                console.log('what you teach, ' + name);
            }
        }else {
            return function(name){
                console.log('what we can do for you?' + name);
            }
        }
    }
var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('teacher');
designerQuestion('john');
