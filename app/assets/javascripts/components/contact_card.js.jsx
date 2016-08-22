const propTypes = {
  contact: React.PropTypes.object,
};

class ContactCard extends React.Component {
  render () {
    const { contact } = this.props;

    if (_.isEmpty(contact)) {
      return (
        <div>
          <h1>Select a Contact</h1>
        </div>
      );
    }

    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{contact.name}</h3>
          <h6 className="card-subtitle text-muted">{contact.title}</h6>
        </div>
        <div className="list-group list-group-flush">
          <div className="list-group-item">
            <h5 className="list-group-item-heading">Email</h5>
            <div className="list-group-item-text">{contact.email}</div>
          </div>
          <div className="list-group-item">
            <h5 className="list-group-item-heading">Phone</h5>
            <div className="list-group-item-text">{contact.phone}</div>
          </div>
          <div className="list-group-item">
            <h5 className="list-group-item-heading">Address</h5>
            <div className="list-group-item-text">
              <address>
                {contact.address}
                <br />
                {_.compact([contact.city, contact.state]).join(', ')} {contact.postalCode}
              </address>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

ContactCard.propTypes = propTypes;