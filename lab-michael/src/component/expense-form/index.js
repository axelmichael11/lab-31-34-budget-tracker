import React from 'react'


class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.expenses ? {...props.expenses}:{title:''}
    this.state = props.category ? {...props.category}:{expense:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.expense)
    this.setState(props.expense)
  }


  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
    console.log('this.propsssss',this.props.expense);
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('this.props on handleSubmit!',this.state);
    console.log(this.props);
    this.props.onComplete({...this.state})
    // if(!this.props.expense)
    //   this.setState({title:''})
  }

  render(){
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
      <input
      name='title'
      type='text'
      placeholder='title'
      value={this.state.title}
      onChange={this.handleChange}
      />

      <input
      name='expense'
      type='number'
      placeholder='expense'
      value={this.state.expense}
      onChange={this.handleChange}
      />

      <button type='submit'>{this.props.buttonText} </button>
      </form>
    )
  }
}

export default ExpenseForm
