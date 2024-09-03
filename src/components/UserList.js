function UserList({ users, onRemove, onToggle }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <span
            onClick={() => onToggle(user.id)}
            style={{ ...(user.active && { color: "lightseagreen" }) }}>
            {user.username}
          </span>
          <span>({user.email})</span>
          <button type="button" onClick={() => onRemove(user.id)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
