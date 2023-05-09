import "../assets/login.css";

export const InputEmail = (props) => {
  const { mail } = props;
  return (
    <>
      <div className="mb-4 w-100">
        <label key="exampleInputEmail1" className="form-label text-light">
          {mail}
        </label>
        <input
          type="email"
          z
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
    </>
  );
};
