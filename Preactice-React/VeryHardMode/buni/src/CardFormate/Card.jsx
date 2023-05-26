import List from "../listFormating/List";

const Card = ({ children }) => <div>{children}</div>;

function People({ people }) {
  return (
    <Card >
    {people.map((person) => (
      <div key={person.id}>
      <List Message={person.name} amount={person.profession} />
        </div>
      ))}
    </Card>
  );
}

export default People;
