import { useState } from 'react';
import { nanoid } from 'nanoid';
import './contactForm.css';

export const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    //const { name, number } = newContact;

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert('A contact with the same name already exists!');
    } else {
      const id = nanoid();
      addContact(name, number, id);
      setName('');
      setNumber('');
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        Name:
        <input
          className="input input-name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="label">
        Number:
        <input
          className="input input-number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit" className="add-contact-button">
        Add Contact
      </button>
    </form>
  );
};

/*export class ClassContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const existingContact = this.props.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert('A contact with the same name already exists!');
    } else {
      const id = nanoid();
      this.props.addContact(name, number, id);
      this.setState({ name: '', number: '' });
    }
  };
  render() {
    const { name, number } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="label">
          Name:
          <input
            className="input input-name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
            onChange={this.handleNameChange}
          />
        </label>
        <label className="label">
          Number:
          <input
            className="input input-number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleNumberChange}
          />
        </label>
        <button type="submit" className="add-contact-button">
          Add Contact
        </button>
      </form>
    );
  }
}*/
