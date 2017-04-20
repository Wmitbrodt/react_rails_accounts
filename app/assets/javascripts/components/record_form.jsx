RecordForm = React.createClass({
  getInitialState() {
    return {
      title: '',
      date: '',
      amount: ''
    };
  },

  valid() {
    return this.state.title && this.state.date && this.state.amount;
  },

  handleChange(e) {
    let { name } = e.target;
    return this.setState({[name]: e.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    return $.post('', { record: this.state }, data => {
      this.props.handleNewRecord(data);
      return this.setState(this.getInitialState());
    }
    , 'JSON');
  },

  render() {
    return React.DOM.form({
      className: 'form-group',
      onSubmit: this.handleSubmit
    },
      React.DOM.div(
        {className: 'form-group'},
        React.DOM.input({
          type: 'text',
          className: 'form-control',
          placeholder: 'Date',
          name: 'date',
          value: this.state.date,
          onChange: this.handleChange
        })
      ),
      React.DOM.div(
        {className: 'form-group'},
        React.DOM.input({
          type: 'text',
          className: 'form-control',
          placeholder: 'Title',
          name: 'title',
          value: this.state.title,
          onChange: this.handleChange
        })
      ),
      React.DOM.div(
        {className: 'form-group'},
        React.DOM.input({
          type: 'number',
          className: 'form-control',
          placeholder: 'Amount',
          name: 'amount',
          value: this.state.amount,
          onChange: this.handleChange
        })
      ),
      React.DOM.button({
        type: 'submit',
        className: 'btn btn-primary',
        disabled: !this.valid()
      },
        'Create record')
    );
  }
});
