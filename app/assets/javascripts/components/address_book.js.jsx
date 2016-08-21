const propTypes = {
  contacts: React.PropTypes.array
};

class AddressBook extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-xs-5">
          <div className="card">
            <div className="list-group list-group-flush">
              <ContactsList { ... this.props } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddressBook.propTypes = propTypes;
