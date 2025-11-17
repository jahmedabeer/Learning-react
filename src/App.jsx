import Form from "./components/Form";

const statuses = ['empty', 'typing', 'submitting', 'success', 'error'] // Storybooks: Displaying many visual states at once

export default function List() {

  return (
    <>
      {statuses.map(status => (
        <Form key={status} status={status} />
      ))}
    </>
  );
}
