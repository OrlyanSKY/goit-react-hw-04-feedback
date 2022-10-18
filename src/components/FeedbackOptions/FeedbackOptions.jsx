import PropTypes from 'prop-types';
import { Button, ButtonsList } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
          </li>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
