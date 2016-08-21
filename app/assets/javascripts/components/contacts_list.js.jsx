const propTypes = {
  contacts: React.PropTypes.array,
  onContactClick: React.PropTypes.func
};

class ContactsList extends React.Component {
  render () {
    return (
      <div>
        {_.map(this.props.contacts, contact => {
          return (
            <div key={contact.id}
              className="list-group-item"
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
