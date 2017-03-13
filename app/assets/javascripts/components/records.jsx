Records = React.createClass({
    getInitialState() {
      return {records: this.props.data};
    },
    getDefaultProps() {
      return {records: []};
    },

    deposits() {
      let deposits = this.state.records.filter(val => val.amount >= 0);
      return deposits.reduce(((prev, curr) => prev + parseFloat(curr.amount)), 0);
    },

    withdrawals() {
      let withdrawals = this.state.records.filter(val => val.amount < 0);
      return withdrawals.reduce(((prev, curr) => prev + parseFloat(curr.amount)), 0);
    },

    balance() {
      return this.withdrawals() + this.deposits();
    },

    addRecord(record) {
      let records = this.state.records.slice();
      records.push(record);
      // setState will just update the one key of the state object
      return this.setState({records});
    },

    deleteRecord(record) {
      // copies current component's records state
      let records = this.state.records.slice();
      // searches through the index to find record
      let index = records.indexOf(record);
      // splics it (and only it) from the array
      records.splice(index, 1);
      // finally, updates the component's state
      return this.replaceState({records});
    },

  render() {
    return React.DOM.div(
      {className: 'records'},
      React.DOM.h2(
        {className: 'title'},
        'Records'),
        React.DOM.div(
        {className: 'row'},
        React.createElement(AmountBox, {type: 'success', amount: this.deposits(), text: 'Deposits'}),
        React.createElement(AmountBox, {type: 'danger', amount: this.withdrawals(), text: 'Withdrawals'}),
        React.createElement(AmountBox, {type: 'info', amount: this.balance(), text: 'Balance'})),
      React.createElement(RecordForm, {handleNewRecord: this.addRecord}),
      React.DOM.hr(null),
      React.DOM.table(
        {className: 'table table-bordered'},
        React.DOM.thead(null,
          React.DOM.tr(null,
            React.DOM.th(null, 'Date'),
            React.DOM.th(null, 'Title'),
            React.DOM.th(null, 'Amount'),
            React.DOM.th(null, 'Actions'))
        ),
        React.DOM.tbody(null,
          Array.from(this.state.records).map((record) =>
            React.createElement(Record, {key: record.id, record, handleDeleteRecord: this.deleteRecord}))
        )
      )
    );
  }
});
