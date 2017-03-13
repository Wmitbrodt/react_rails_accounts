Records = React.createClass({
    getInitialState() {
      return {records: this.props.data};
    },
    getDefaultProps() {
      return {records: []};
    },

    credits() {
      let credits = this.state.records.filter(val => val.amount >= 0);
      return credits.reduce(((prev, curr) => prev + parseFloat(curr.amount)), 0);
    },

    debits() {
      let debits = this.state.records.filter(val => val.amount < 0);
      return debits.reduce(((prev, curr) => prev + parseFloat(curr.amount)), 0);
    },

    balance() {
      return this.debits() + this.credits();
    },

    addRecord(record) {
      let records = this.state.records.slice();
      records.push(record);
      return this.setState({records});
    },

  render() {
    return React.DOM.div(
      {className: 'records'},
      React.DOM.h2(
        {className: 'title'},
        'Records'),
        React.DOM.div(
        {className: 'row'},
        React.createElement(AmountBox, {type: 'success', amount: this.credits(), text: 'Credit'}),
        React.createElement(AmountBox, {type: 'danger', amount: this.debits(), text: 'Debit'}),
        React.createElement(AmountBox, {type: 'info', amount: this.balance(), text: 'Balance'})),
      React.createElement(RecordForm, {handleNewRecord: this.addRecord}),
      React.DOM.hr(null),
      React.DOM.table(
        {className: 'table table-bordered'},
        React.DOM.thead(null,
          React.DOM.tr(null,
            React.DOM.th(null, 'Date'),
            React.DOM.th(null, 'Title'),
            React.DOM.th(null, 'Amount'))
        ),
        React.DOM.tbody(null,
          Array.from(this.state.records).map((record) =>
            React.createElement(Record, {key: record.id, record}))
        )
      )
    );
  }
});
