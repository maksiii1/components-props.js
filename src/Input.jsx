function Input() {
  return (
    <>
      <label for="name" class="form-label">
        Name:
      </label>
      <br />
      <input type="text" class="form-control" id="name" placeholder="Simon" />
      <br />
      <label for="password" class="form-label">
        Name:
      </label>
      <br />
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="123456789"
      />
      <br />
      <hr />
    </>
  );
}

export default Input;
