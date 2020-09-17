import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter, lengthContacts }) => {
  return (
    <CSSTransition
      in={lengthContacts > 1 || value !== ""}
      timeout={500}
      classNames={{ ...styles }}
      unmountOnExit
    >
      <div className={styles.TaskEditor}>
        <label className={styles.TaskEditorLabel}>
          Find contacts by name
          <input
            className={styles.TaskEditorInput}
            type="text"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
            data-row="filter"
          />
        </label>
      </div>
    </CSSTransition>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
  lengthContacts: PropTypes.number,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
  lengthContacts: state.contacts.items.length,
});

const mapDispatchToProps = {
  onChangeFilter: phonebookActions.changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
