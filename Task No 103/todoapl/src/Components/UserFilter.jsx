import React from "react";

function UserFilter({ userFilter, setUserFilter, uniqueUsers }) {
  return (
    <div className="filter-container">
      <select
        className="filter-select"
        value={userFilter}
        onChange={(e) => setUserFilter(e.target.value)}
      >
        <option value="all">Select UserId</option>
        {uniqueUsers.map((id) => (
          <option key={id} value={id}>
            User Id {id}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserFilter;