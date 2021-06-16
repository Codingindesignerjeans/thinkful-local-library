function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last > b.name.last ? 1:-1);
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => accountId === borrow.id && total++));
  return total;                                 
}

// want to loop through every book and count number of times a book was borrowed

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books
    .filter((book)=>book.borrows[0].id === account.id && book.borrows[0].returned === false)
    .map((book) =>{
      const author = authors.find((auth) =>auth.id === book.authorId);
      return {...book, author};
    })
  return borrowedBooks;
} 

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
