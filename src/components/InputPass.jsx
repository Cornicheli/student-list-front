import "../assets/login.css";

export const InputPass = (props) => {
  // const { password } = props;

  return (
    <>
      <div className="mb-4 w-100">
        <label key="exampleInputPassword1" className="form-label text-light">
          {props.password}
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
    </>
  );
};
