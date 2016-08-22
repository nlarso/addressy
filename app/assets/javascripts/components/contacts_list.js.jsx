const propTypes = {
  contacts: React.PropTypes.array,
  activeContact: React.PropTypes.object,
  onContactClick: React.PropTypes.func
};

class ContactsList extends React.Component {
  render () {
    return (
      <div>
        {_.map(this.props.contacts, contact => {
          const active = contact.id == this.props.activeContact.id;
          return (
            <div key={contact.id}
              className={`list-group-item ${active && 'active'}`}
              onClick={() => {this.props.onContactClick(contact)}}
            >
              <h5 className="list-group-item-heading">{contact.name}</h5>
              <div className="list-group-item-text">{contact.title}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

ContactsList.propTypes = propTypes;
