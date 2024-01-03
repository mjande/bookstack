export async function getAll() {
  return fetch("http://localhost:3000/api/books");
}
