// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    var bestCustomer = 'not bob';
    window.bestCustomer = bestCustomer;
}

function overwriteBestCustomer(newBest){
    bestCustomer = newBest;
}

const leastFavoriteCustomer = 'some customer';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'another customer';
}