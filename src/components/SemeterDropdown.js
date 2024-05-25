import React, { useState } from "react";

export default function SemesterDropdown({ onSelect }) {
  const [selectedSemester, setSelectedSemester] = useState("");

  const handleChange = (event) => {
    setSelectedSemester(event.target.value);
    if (onSelect) {
      onSelect(event.target.value); // Pass the selected value to the parent
    }
  };

  return (
    <form className="mx-auto max-w-48">
      <select
        id="countries"
        className="block w-full cursor-pointer rounded-lg border border-bgDark bg-bgDark p-2.5 text-base text-white placeholder-gray-400 focus:border-accent focus:ring-accent"
        value={selectedSemester} // Controlled component using state
        onChange={handleChange}
      >
        <option value="1" defaultValue={true}>
          1st Semester
        </option>
        <option value="2">2nd Semester</option>
      </select>
    </form>
  );
}
