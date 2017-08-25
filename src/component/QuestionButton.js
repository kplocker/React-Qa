import React, { Component } from 'react';

class QuestionForm extends Component {
    render() {
        return(<button id="add-question" className="btn btn-success" onClick={this.props.onToggleFrom}>添加问题</button>);
    }
}

export default QuestionForm;