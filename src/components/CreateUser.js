function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={onChange}
        placeholder="계정명"
      />
      <input
        id="email"
        name="email"
        type="text"
        value={email}
        onChange={onChange}
        placeholder="이메일"
      />
      <button type="button" onClick={onCreate}>
        등록
      </button>
    </div>
  );
}

export default CreateUser;
