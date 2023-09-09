import { FeedbackButton } from "./FeedbackButton/FeedbackButton"

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
      <>
      {options.map(option => <FeedbackButton onClick={onLeaveFeedback} option={option} key={option} />)}
      </>
  )
}
