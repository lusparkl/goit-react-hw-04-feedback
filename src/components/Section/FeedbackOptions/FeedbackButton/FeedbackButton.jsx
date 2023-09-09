export const FeedbackButton = ({ option, onClick }) => {
  return (
      <button onClick={() => onClick(option)}>{option}</button>
  )
}
