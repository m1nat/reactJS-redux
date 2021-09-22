import React from "react";

const MySelect = ({ option, defaultValue, onChange, value }) => {
  return (
    <div>
      <select
      value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option value="value" disabled={true}>{defaultValue}</option>
        {option.map(option => <option key={ option.value } value={ option.value }> { option.name } </option>)}
      </select>
    </div>
  )
}

export default MySelect;