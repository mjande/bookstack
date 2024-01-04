export async function getAll() {
  return await fetch("http://localhost:3000/api/books");
}
