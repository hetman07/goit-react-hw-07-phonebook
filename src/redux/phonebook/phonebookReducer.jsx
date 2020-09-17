import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./phonebookActions";

const handleAddContact = (state, action) => [...state, action.payload];

const handleDeleteContact = (state, action) =>
  state.filter(contactId => contactId.id !== action.payload);

const itemsReducer = createReducer([], {
  [phonebookActions.fetchContactSuccess]: (state, action) => action.payload,
  [phonebookActions.addContactSuccess]: handleAddContact,
  [phonebookActions.deleteContactSuccess]: handleDeleteContact,
});

const filterReducer = createReducer("", {
  [phonebookActions.changeFilter]: (state, action) => action.payload,
});

//для отображения спинера созд редусер изменения состояния
const loading = createReducer(false, {
  //при 1-м маунте страницы отобр спинер при загрузке контактов из базы
  [phonebookActions.fetchContactsRequest]: (state, action) => true,
  [phonebookActions.fetchContactSuccess]: (state, action) => false,
  [phonebookActions.fetchContactsError]: (state, action) => false,
  //отобр спинера при добавлении нового контакта
  [phonebookActions.addContactRequest]: (state, action) => true,
  [phonebookActions.addContactSuccess]: (state, action) => false,
  [phonebookActions.addContactError]: (state, action) => false,
  //отобр спинера  при удалении контакта из списка
  [phonebookActions.deleteContactsRequest]: (state, action) => true,
  [phonebookActions.deleteContactSuccess]: (state, action) => false,
  [phonebookActions.deleteContactsError]: (state, action) => false,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loading,
});
