import React, { Component } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { connect } from "react-redux";

import phonebookOperations from "../../redux/phonebook/phonebookOperations";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";

import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";
import Logo from "../Logo";

class Phonebook extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    return (
      <>
        <Logo text={"Phonebook"} />
        <ContactForm />
        <Filter />
        {this.props.isLoadingContact && <PulseLoader />}
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContact: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: phonebookOperations.fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
