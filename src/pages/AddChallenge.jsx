import Button from "../elements/Button";

const AddChallenge = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
      <h1 className="text-xl">Add Challenge</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-96 flex flex-col gap-8"
      >
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default AddChallenge;
