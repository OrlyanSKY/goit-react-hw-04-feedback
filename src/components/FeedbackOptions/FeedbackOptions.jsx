export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button key={index} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        );
      })}
    </>
  );
};
