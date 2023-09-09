import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './Section/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Section/Statistics/Statistics';

const options = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = recall => {
    this.setState(prevState => ({
      [recall]: prevState[recall] += 1
    }))
  };

  countTotalFeedback = () => {
    let total = 0;
    for (const key in this.state) {
      total += this.state[key]
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => (
    (this.state.good / this.countTotalFeedback()) * 100
  );

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={options} />
          <Statistics good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
      </>
    )
  }
}

