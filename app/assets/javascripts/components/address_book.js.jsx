const propTypes = {
  contacts: React.PropTypes.array
};

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.onContactClick = this.onContactClick.bind(this)

    this.state = {
      activeContact: {}
    }
  }

  onContactClick(contact) {
    this.setState({activeContact: contact});
  }

  render () {
    return (
      <div className="row">
        <div className="col-xs-5">
          <div className="card">
            <div className="list-group list-group-flush">
              <ContactsList
                onContactClick={this.onContactClick}
                { ... this.props }
              />
            </div>
          </div>
        </div>
        <div className="col-xs-7">
          <ContactCard contact={this.state.activeContact} />
        </div>
      </div>
    );
  }
}

AddressBook.propTypes = propTypes;
