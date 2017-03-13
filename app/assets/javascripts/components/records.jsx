Records = React.createClass({
    getInitialState() {
      return {records: this.props.data};
    },
    getDefaultProps() {
      return {records: []};
    },
   render() {
        return React.DOM.div(
          {className: 'records'},
          React.DOM.h2(
            {className: 'title'},
            'Records'),
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
