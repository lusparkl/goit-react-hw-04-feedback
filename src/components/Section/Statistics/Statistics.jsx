import { Notification } from "../Notification/Notification"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
      <>
          <h2>Statistics</h2>
          {total ? (
              <ul>
                  <li>Good: {good}</li>
                  <li>Neutral: {neutral}</li>
                  <li>Bad: {bad}</li>
                  <li>Total: {total}</li>
                  <li>Positive feedback: {positivePercentage}%</li>
              </ul>
          ) : (
              <Notification msg={"There is no feedback"} />
          )}
      </>
  )
}
