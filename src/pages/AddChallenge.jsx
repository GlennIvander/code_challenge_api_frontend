import { useState } from "react";
import Button from "../elements/Button";
import Datepicker from "react-tailwindcss-datepicker";

const AddChallenge = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
      <h1 className="text-xl">Add Challenge</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-96 flex flex-col gap-8"
      >
        <input
          type="title"
          name="title"
          value={title}
          onChange={handTitleChange}
          className="py-2 w-full border border-gray-600 rounded px-3"
          placeholder="Challenge Title"
        />
        <Datepicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          showShortcuts={true}
        />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default AddChallenge;
