import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {connect} from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
serviceWorker.register();





//TYPE's
const quote = "quote";



//ACTION CREATORS
const newQuote = () =>{
	return {
		type: quote
	}
}



//initialState's
const initialColors = [
'#32a852','#98a832',
'#a85532','#a8328b',
'#3e32a8'
];


    const randomNum = Math.floor(Math.random() * Math.floor(10));


//REDUCERS
const randomReducer = (state = randomNum, action) =>{
switch(action.type){
	case quote:
		state = Math.floor(Math.random() * Math.floor(10))
		return state;
	default:
		return state ;
}
}





//STORE
const store = createStore(randomReducer);

class RandomQuote extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			//COLORS
		colors : [ '#32a852','#98a832','#a85532','#a8328b','#3e32a8','#c20606','#a69c98','#add609','#09d687','#b01c5a'],
			//QUOTES AND AURORS
		quotes: [
		{
		text:'Without music, life would be a mistake.',
		autor:' Friedrich Nietzsche'
		},
		{
		text:"To go wrong in one's own way is better than to go right in someone else's.",
		autor:' Fyodor Dostoevsky'	
		},
		{
		text:"Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
		autor:' Bernard M. Baruch'	
		},
		{
		text:"Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.",
		autor:' Steve Jobs'	
		},
		{
		text:"We must not allow other people’s limited perceptions to define us.",
		autor:' Virginia Satir'	
		},
		{
			text:"Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
			autor:' Bill Gates'	
		},
		{
			text:"Tact is the art of making a point without making an enemy.",
			autor:' Isaac Newton'	
		},
		{
			text:"I don't care that they stole my idea . . I care that they don't have any of their own",
			autor:' Nikola Tesla'	
		},
		{
			text:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
			autor:' Mahatma Gandhi'	
		},
		{
			text:"There are no philosophical problems, there is only a suite of interconnected linguistic cul de sacs created by language's inability to reflect the truth.",
			autor:' Victor Pelevin'	
		}
		]
	};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.props.submitNewQuote();


	}
	render(){
		return(
			<div id="quote-box-wrapper" style={{backgroundColor:this.state.colors[this.props.randomNumber]}}>
  			<div id="quote-box" style={{backgroundColor:'white', maxWidth: '50vw'}}>
			<h1 id="text" style={{color:this.state.colors[this.props.randomNumber]}}>"{this.state.quotes[this.props.randomNumber].text}</h1>
			<h3 id="author" style={{color:this.state.colors[this.props.randomNumber]}}>-{this.state.quotes[this.props.randomNumber].autor}</h3>
			  <div id="button-wrapper">
				<a style={{color:this.state.colors[this.props.randomNumber]}} href={`https://twitter.com/intent/tweet?text=${this.state.quotes[this.props.randomNumber].text + this.state.quotes[this.props.randomNumber].autor}`} id="tweet-quote"><i className="fab fa-twitter fa-3x"></i></a>
				<button  id='new-quote' onClick={this.handleClick} style={{backgroundColor:this.state.colors[this.props.randomNumber]}}>NEW QUOTE</button>
			</div>
			</div>
			</div>
			)
	}
}



//MAP's
const mapStateToProps = (state) =>{
return {
		randomNumber: state
}
}

const mapDispatchToProps = (dispatch) =>{
return {
		submitNewQuote: () => {
			dispatch(newQuote());
		}
	}
}




//connect
const WrappedMainComponent = connect(mapStateToProps,mapDispatchToProps)(RandomQuote);



//RENDER
ReactDOM.render(
	<Provider store={store}>
	<WrappedMainComponent/>
	</Provider>, 
	document.getElementById("root"))
