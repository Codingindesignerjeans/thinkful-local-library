function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const result = books.reduce((total, book) => 
  total + (book.borrows[0].returned === false), 0)
  return result;
}

//helper function for the last 3 function
function topFive(array){
  array.sort((countA, countB) => 
      countA.count > countB.count ?-1:1)
  return array.slice(0,5)
}

function getMostCommonGenres(books) {
  const bookList = books.reduce((total, book)=> {
   if(total[book.genre] == null){
     total[book.genre]=1
   }
    else {
      total[book.genre]++}
    return total},{
  })
  const newList = [];
  for (let name in bookList){
    newList.push({"name":name, "count":bookList[name]})
  }
  return topFive(newList);
}


function getMostPopularBooks(books) {
  const popBooks = books.map(book => {
      return {"name":book.title, "count":book.borrows.length}   
  })
  return topFive(popBooks);
}

function getMostPopularAuthors(books, authors) {
  const popAuthors = books.map(book => {
    const {name: {first,last}} = authors.find(author => {
      return author.id === book.authorId});
    return {name:first +" "+last, count:book.borrows.length}
  })
  return topFive(popAuthors);
  }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
