(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
})();

var today = new Date();
var ww = today.getDayName()
var dd = today.getDate();
var mm = today.getMonthName(); //January is 0!
var yyyy = today.getFullYear();

today = ww+ ', ' +dd+' '+mm+' '+yyyy;
document.getElementById('today').innerHTML = today;