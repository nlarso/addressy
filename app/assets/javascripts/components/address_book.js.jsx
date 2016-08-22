const propTypes = {
  contacts: React.PropTypes.array
};

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.onContactClick = this.onContactClick.bind(this)
    this.onEditContactClick = this.onEditContactClick.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
    this.dismissModal = this.dismissModal.bind(this)
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

  onEditContactClick() {
    this.setState({contact: _.clone(this.state.displayedContact)});
    $('#contact-form-modal').modal('show')
  }

  deleteContact(contact) {
    $.ajax({
      type: 'DELETE',
      url: `/contacts/${contact.id}.json`  ,
      data: {},
      success: (data) => {
        let contacts = _.clone(this.state.contacts);
        _.remove(contacts, _.find(contacts, {'id':contact.id}));
        this.setState({contacts, displayedContact: {}});
      },
      error: (data) => {
        console.log(data)
      }
    });
  }

  dismissModal() {
    this.setState({contact: { name: null }});
    $('#contact-form-modal').modal('hide')
  }

  onFormSubmit(contact) {
    this.setState({errors: null});
    const method = contact.id ? 'PUT' : 'POST';
    const url = contact.id ? `/contacts/${contact.id}.json` : '/contacts.json';
    $.ajax({
      type: method,
      url: url,
      data: {
        contact: _.mapKeys(contact, (value, key) => { return _.snakeCase(key)})
      },
      success: (data) => {
        let contacts = _.clone(this.state.contacts);
        let index = contacts.indexOf(_.find(contacts, {'id':contact.id}));
        if (index >= 0) {
          contacts[index] = data;
        } else {
          contacts.unshift(data);
        }
        this.setState({contacts, displayedContact: data});
        this.dismissModal()
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
                <button className="btn btn-primary btn-sm"
                  data-target="#contact-form-modal"
                  data-toggle="modal"
                >
                  <i className="fa fa-plus" />
                  New Contact
                </button>
              </div>
              <div className="list-group list-group-flush">
                <ContactsList
                  activeContact={this.state.displayedContact}
                  onContactClick={this.onContactClick}
                  contacts={this.state.contacts}
                />
              </div>
            </div>
          </div>
          <div className="col-xs-7">
            <ContactCard
              onEditContactClick={this.onEditContactClick}
              onDeleteContactClick={this.deleteContact}
              contact={this.state.displayedContact}
            />
          </div>
        </div>
        <ContactFormModal
          contact={this.state.contact}
          errors={this.state.errors}
          onFormSubmit={this.onFormSubmit}
          onDismissModal={this.dismissModal}
        />
      </div>
    );
  }
}

AddressBook.propTypes = propTypes;
