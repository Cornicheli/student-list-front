export const Button = (props) => {
  return (
    <>
      <button type="submit" className="btn btn-primary mb-3">
        {props.text}
      </button>
    </>
  );
};
