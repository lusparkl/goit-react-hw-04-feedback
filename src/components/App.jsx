import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './Section/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Section/Statistics/Statistics';

const options = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = recall => {
    switch (recall) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => (
    (good / countTotalFeedback()) * 100
  );

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
          <Statistics good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />
        </Section>
      </>
    ) 
}
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   onLeaveFeedback = recall => {
//     this.setState(prevState => ({
//       [recall]: prevState[recall] += 1
//     }))
//   };

//   countTotalFeedback = () => {
//     let total = 0;
//     for (const key in this.state) {
//       total += this.state[key]
//     }
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => (
//     (this.state.good / this.countTotalFeedback()) * 100
//   );

//   render() {
//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={options} />
//           <Statistics good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()} />
//         </Section>
//       </>
//     )
//   }
// }

