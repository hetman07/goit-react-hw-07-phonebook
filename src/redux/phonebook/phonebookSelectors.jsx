import { createSelector } from "@reduxjs/toolkit";

const getLoading = state => state.contacts.loading;

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

//сложный селектор - это селектор к-рый исп. простой селектор+возвращает производные данные
// const getVisibleContacts = state => {
//   const items = getItems(state);
//   const filter = getFilter(state).toLowerCase();

//   return items.filter(contact => contact.name.toLowerCase().includes(filter));
// };

//сложный селектор с исп мемоизации с reduxjs/toolkit
const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
export default { getLoading, getItems, getFilter, getVisibleContacts };
