import React, { Component } from 'react';

class QuestionItem extends Component {
    constructor(props) {
        super(props);
        this.VoteUp = () => {
            let newCount = parseInt(this.props.voteCount, 10) + 1;
            this.props.onVote(this.props.questionKey, newCount);
        }
        this.VoteDown = () => {
            let newCount = parseInt(this.props.voteCount, 10) - 1;
            if(newCount < 0) newCount = 0;
            this.props.onVote(this.props.questionKey, newCount);
        }
    }
    render() {
        return(
            <li className="container">
                <div className="media">
                    <div className="media-left qLeft">
                        <button id="btn-qUp" className="btn btn-default" onClick={this.VoteUp}>
                            <span className="glyphicon glyphicon-chevron-up"></span>
                            <span className="vote-count">{this.props.voteCount}</span>
                        </button>
                        <button id="btn-qDown" className="btn btn-default" onClick={this.VoteDown}>
                            <span className="glyphicon glyphicon-chevron-down"></span>
                        </button>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.title}</h4>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </li>);
    }
}

export default QuestionItem;