// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandArray = command.split(' ');
    var commandBody = commandArray[0];

    if (commandBody === 'ADD') {
        var name = commandArray[1];
        var phones = commandArray[2].split(',');
        return addContacts(name, phones);

    }

    if (commandBody === 'REMOVE_PHONE') {
        var phones = commandArray[1].split(',');
        return removeContacts(phones)
    }

    if (commandBody === 'SHOW') {
        return showContacts();
    }
 };


 function addContacts(name, phones) {
    if (!phoneBook.hasOwnProperty(name)) {
        phoneBook[name]=phones;
    }
    else {
        newPhones = phoneBook[name].concat(phones);
        phoneBook[name]=newPhones;
    }
        
 }


 function removeContacts(phone) {  
    for(var name in phoneBook) {
        var phoneArray=phoneBook[name];
        for (var i=0; i<phoneArray.length; i++) {
            if (phone==phoneArray[i]) {

                if (phoneArray.length == 1) {
                    delete(phoneBook[name]);
                    return true;
                } 
                if (phoneArray.length>1) {
                    phoneArray.splice(i, 1);
                    return true;
                }
            }
        }   
    }
    return false;    
 }


 function showContacts() {
    
    var orderedPhoneBook = {};
    Object.keys(phoneBook).sort().forEach(function(key) {
        orderedPhoneBook[key] = phoneBook[key];
    });

    var outputArray = [];

    for(var name in orderedPhoneBook) {
        var phoneString = name+": "+orderedPhoneBook[name].join(", ");
        outputArray.push(phoneString);
    }
    return outputArray;
}