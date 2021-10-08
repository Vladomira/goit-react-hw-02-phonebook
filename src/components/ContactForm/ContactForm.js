import React, { Component } from "react";
// import "/Phonebook.scss";
const { v4: uuidv4 } = require("uuid");
class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state); // отпарвка данных

    this.reset(); // очищение формы
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              className="input"
              value={name}
              onChange={this.handleChange}
              id={uuidv4()}
              type="text"
              name="name"
              data-action="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number
            <input
              className="input"
              onChange={this.handleChange}
              id={uuidv4()}
              value={number}
              type="tel"
              name="number"
              data-action="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
              required
            />
          </label>
          <button className="addBtn" type="submit" disabled={!number || !name}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
// toSaveContacts = (e) => {
//   const { contacts, name, number } = this.state;

//   this.setState({
//     [contacts]: contacts.push({
//       id: uuidv4(),
//       name: name,
//       number: number,
//       // filter: "",
//     }),
//   });
// };
// +++++
// handleChange = (e) => {
//   const { name, value } = e.currentTarget;
//   this.setState(() => {
//   //   this.state.contacts.map((el) => {
//   //     if (value === el.name) {
//   //       return alert(`${value} is already in contacts`);
//   //     }
//   //   });
//   // });
//   return this.setState({ [name]: value })
// };
