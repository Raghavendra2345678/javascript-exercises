const getTheTitles = function(book) {
    const titles=[];
    for(let i=0; i< book.length; i++)
    {
        titles[i]=book[i].title;
    }
    return titles;
};
const books = [
    {
        title: 'Book One',
        author: 'Author One'
    },
    {
        title: 'Book Two',
        author: 'Author Two'
    }
];

console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
