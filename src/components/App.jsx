import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handelFormSubmit = data => {
    // if (data === data.contacts) {
    //   return alert('вже э');
    // }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
  };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  handleDelete = toDelete => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== toDelete),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handelFormSubmit} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />
        <ContactList
          contacts={filterContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
