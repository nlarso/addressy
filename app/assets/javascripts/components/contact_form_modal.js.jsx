const propTypes = {
  contact: React.PropTypes.object,
  errors: React.PropTypes.array,
  onDismissModal: React.PropTypes.func,
  onFormSubmit: React.PropTypes.func
};

class ContactFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      contact: { name: null }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contact } = this.props;
    if (contact && contact != prevProps.contact) {
      this.setState({contact});
    }
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state.contact);
  }

  onInputChange(event) {
    const { name, value } = event.target;
    let { contact } = this.state;
    contact[name] = value;
    this.setState({contact});
  }

  renderErrorMessages(name) {
    const { errors } = this.props;

    if (_.has(errors, name)) {
      return (
        <small className="form-control-feedback">{name} {errors[name]}</small>
      );
    }

  }

  render () {
    const { contact } = this.state;
    const { errors } = this.props;
    return (
      <div
        aria-hidden="true"
        className="modal fade"
        data-backdrop="static"
        id="contact-form-modal"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-md-11">
                <h4 className="modal-title">
                  {contact.id ? 'Edit' : 'New'} Contact
                </h4>
              </div>
              <div className="col-md-1">
                <button className="close" onClick={() => {this.props.onDismissModal()}}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className={`form-group ${_.has(errors, 'name') && 'has-danger'}`}>
                <label>Name</label>
                <input
                  name="name"
                  className="form-control"
                  value={contact.name || ''}
                  onChange={this.onInputChange}
                  placeholder="John Doe"
                />
                {this.renderErrorMessages('name')}
              </div>

              <div className="form-group">
                <label>Title</label>
                <input
                  name="title"
                  className="form-control"
                  value={contact.title || ''}
                  onChange={this.onInputChange}
                  placeholder="Senior Vice President"
                />
              </div>

              <div className="form-group">
                <label>Phone #</label>
                <input
                  name="phone"
                  className="form-control"
                  value={contact.phone || ''}
                  onChange={this.onInputChange}
                  placeholder="(435)-443-2233"
                />
              </div>

              <div className={`form-group ${_.has(errors, 'email') && 'has-danger'}`}>
                <label>Email</label>
                <input
                  name="email"
                  className="form-control"
                  value={contact.email || ''}
                  onChange={this.onInputChange}
                  placeholder="test@example.com"
                />
                {this.renderErrorMessages('email')}
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  name="address"
                  className="form-control"
                  value={contact.address || ''}
                  onChange={this.onInputChange}
                  placeholder="300 East Main"
                />
              </div>

              <div className="form-group row">
                <div className="col-xs-6">
                  <label>City</label>
                  <input
                    name="city"
                    className="form-control"
                    value={contact.city || ''}
                    onChange={this.onInputChange}
                    placeholder="St. George"
                  />
                </div>
                <div className="col-xs-3">
                  <label>State</label>
                  <input
                    name="state"
                    className="form-control"
                    value={contact.state || ''}
                    onChange={this.onInputChange}
                    placeholder="Utah"
                  />
                </div>
                <div className="col-xs-3">
                  <label>Postal Code</label>
                  <input
                    name="postalCode"
                    className="form-control"
                    value={contact.postalCode || ''}
                    onChange={this.onInputChange}
                    placeholder="84770"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary btn-sm" onClick={this.onFormSubmit}>
                {contact.id ? 'Update' : 'Add' }
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => {this.props.onDismissModal()}}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
