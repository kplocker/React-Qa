import React, { Component } from 'react';
import QuestionForm from './QuestionForm.js';
import QuestionButton from './QuestionButton.js';
import QuestionList from './QuestionList.js';

class AddQuestion extends Component {
    constructor(props) {

        super(props);
        const questions = [{
                key: 1,
                title: '产品经理与程序员矛盾的本质是什么？',
                description: '理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
                voteCount: 10,
                index: 0
            },
            {
                key: 2,
                title: '热爱编程是一种怎样的体验？',
                description: '别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
                voteCount: 8,
                index: 1
            },
        ];

        this.state = {
            questions: questions,
            formsDisplay: false
        }
        this.onToggleFrom = () => {
            this.setState({
                formsDisplay: !this.state.formsDisplay
            });
        }
        this.onNewQuestion = (newQuestion) => {
            newQuestion.key = this.state.questions.length + 1;
            const newQuestions = this.state.questions.concat(newQuestion);
            this.setState({
                questions: newQuestions
            });

        }
        this.sortVote = (questions) => {
            questions.sort(function(a, b) {
                return(b.voteCount - a.voteCount);
            });

            return questions;
        }
        this.onVote = (key, newCount) => {
            let questions = [...this.state.questions];
            let index = 0;
            // 获取索引值（经典）
            for(let i in questions) {

                if(questions[i].key === key) {

                    index = i;
                }
            }
            questions[index].voteCount = newCount;
            this.sortVote(questions);
            this.setState({
                questions: questions
            });
        }
    }
    render() {
        return(

            <div id="app">
                <div className="jumbotron text-center">
                    <div id="header" className="container">
                        <h1>React 问答</h1>
                        <QuestionButton onToggleFrom={this.onToggleFrom}/>
                    </div>
                </div>
                <QuestionForm 
                    formsDisplay={this.state.formsDisplay} 
                    onNewQuestion={this.onNewQuestion}
                    onToggleFrom={this.onToggleFrom}/>
                <QuestionList questions={this.state.questions} onVote={this.onVote}/>
            </div>
        )
    }
}

export default AddQuestion;