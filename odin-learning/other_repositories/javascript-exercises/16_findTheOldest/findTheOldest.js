const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person)=>{
        let personAge, oldestPersonAge;
        const currentYear = new Date().getFullYear();
        if ("yearOfDeath" in person) {
            personAge=person.yearOfDeath-person.yearOfBirth;
        } else{
            personAge=currentYear-person.yearOfBirth;
        }
        if ("yearOfDeath" in oldestPerson) {
            oldestPersonAge=oldestPerson.yearOfDeath-oldestPerson.yearOfBirth;
        } else{
            oldestPersonAge=currentYear-oldestPerson.yearOfBirth;
        }
        return oldestPersonAge>personAge?oldestPerson:person;
    }, people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
