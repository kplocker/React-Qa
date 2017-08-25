import React, { Component } from 'react';
import QuestionItem from './QuestionItem.js';

class QuestionList extends Component {
    render() {
        const questions = this.props.questions;

        const questionItem = questions.map((item) => {
            return <QuestionItem key={item.key} 
            questionKey = {item.key}
            title={item.title} 
            description={item.description} 
            voteCount={item.voteCount}
            onVote={this.props.onVote}
            />
        });

        return(<ul id="questions">
					{questionItem}
        		</ul>);
    }
}
export default QuestionList;