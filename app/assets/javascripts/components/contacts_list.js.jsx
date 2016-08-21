const propTypes = {
  contacts: React.PropTypes.array
};

class ContactsList extends React.Component {
  render () {
    return (
      <div>
        {_.map(this.props.contacts, contact => {
          return (
            <div className="list-group-item">
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
