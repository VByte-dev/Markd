let StateMessage = (props) => {
  let { title, description } = props;

  return (
    <>
      <div className="bg-light p-4 rounded-xl border-2 border-mid">
        <p className="font-[coolvetica] text-deep text-center">{title}</p>
        <p className="font-[coolvetica] text-deep text-center opacity-70 mt-1">
          {description}
        </p>
      </div>
    </>
  );
};

export default StateMessage;
