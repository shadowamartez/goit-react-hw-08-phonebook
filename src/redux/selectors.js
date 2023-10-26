import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filters.filter;
export const selectAuth = state => state.auth;
export const selectCurrentUser = state => state.auth.currentUser;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isAuthenticated;

export const selectAllNeededContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter.trim()) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter?.toLowerCase())
      );
    } else {
      return contacts;
    }
  }
);
