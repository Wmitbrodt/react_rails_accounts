Records = React.createClass({
    getInitialState() {
      return {records: this.props.data};
    },
    getDefaultProps() {
      return {records: []};
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
