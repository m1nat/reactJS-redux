import React from "react";

const MySelect = ({option, defaultValue,  onChange}) => {
  return (
    <div>
      <select 
        onChange={event => onChange(event.target.value)}
      >
        <option value="value" disabled={true}>{defaultValue}</option>
        {option.map( option => <option key={option.value} value={option.value}> {option.name} </option> )}
      </select>
    </div>
  )
}

export default MySelect;