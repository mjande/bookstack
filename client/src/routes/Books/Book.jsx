import Card from "../../components/Card/Card.jsx";

function Book({ data }) {
  const title = data.title;
  const author = data.author;
  const published_year = new Date(data.published_date).getFullYear();

  return (
    <Card
      header={title}
      details={author + (published_year ? ` (${published_year})` : "")}
    />
  );
}

export default Book;
