var y=0
const findTheOldest = function(people) {
    let max_age=0;
    var date = new Date();
    for (let i=0;i<people.length;i++)
    {
        if(!people[i].yearOfDeath)
        {
            people[i].yearOfDeath=date.getFullYear();
        }
        const age = people[i].yearOfDeath - people[i].yearOfBirth;
        if(age>max_age){
            max_age=age;
            y = i;
        }
    }
    return people[y];
};
const x = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];



console.log(findTheOldest(x));
// Do not edit below this line
module.exports = findTheOldest;
