Record = React.createClass({
    handleDelete(e) {
      e.preventDefault();
      
      return $.ajax({
        method: 'DELETE',
        url: `/records/${ this.props.record.id }`,
        dataType: 'JSON',
        success: () => {
          return this.props.handleDeleteRecord(this.props.record);
        }
      });
    },
    render() {
    return React.DOM.tr(null,
      React.DOM.td(null, this.props.record.date),
      React.DOM.td(null, this.props.record.title),
      React.DOM.td(null, amountFormat(this.props.record.amount)),
      React.DOM.td(null,
        React.DOM.a({
          className: 'btn btn-danger',
          onClick: this.handleDelete
        },
          'Delete')
      )
    );
  }
});
