const propTypes = {
  contacts: React.PropTypes.array
};

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.onContactClick = this.onContactClick.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

    this.state = {
      contact: { name: null },
      contacts: this.props.contacts,
      displayedContact: {},
      errors: {},
    }
  }

  onContactClick(contact) {
    this.setState({displayedContact: contact});
  }

  onFormSubmit(contact) {
    this.setState({errors: null});
    const params = {
      contact: _.mapKeys(contact, (value, key) => { return _.snakeCase(key)})
    }
    $.ajax({
      type: 'POST',
      url: '/contacts.json',
      data: params,
      success: (contact) => {
        const contacts = _.clone(this.state.contacts);
        contacts.unshift(contact);
        this.setState({contacts, displayedContact: contact, contact: { name: null }});
        $('#contact-form-modal').modal('hide')
      },
      error: (data) => {
        if (data.status == 422) {
          const errors = data.responseJSON.errors
          this.setState({errors});
        }
      }
    });
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-5">
            <div className="card">
              <div className="card-header text-xs-right">
                <button className="btn btn-primary btn-sm" data-target="#contact-form-modal" data-toggle="modal">
                  <i className="fa fa-plus" />
                  New Contact
                </button>
              </div>
              <div className="list-group list-group-flush">
                <ContactsList
                  onContactClick={this.onContactClick}
                  contacts={this.state.contacts}
                />
              </div>
            </div>
          </div>
          <div className="col-xs-7">
            <ContactCard contact={this.state.displayedContact} />
          </div>
        </div>
        <ContactFormModal
          contact={this.state.contact}
          errors={this.state.errors}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}

AddressBook.propTypes = propTypes;
