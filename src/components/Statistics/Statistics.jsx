import PropTypes from 'prop-types';
import { StatsSection, Feedback } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsSection>
      <Feedback>Good: {good}</Feedback>
      <Feedback>Neutral: {neutral}</Feedback>
      <Feedback>Bad: {bad}</Feedback>
      <Feedback>Total: {total} </Feedback>
      <Feedback>Positive feedback: {positivePercentage}%</Feedback>
    </StatsSection>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
