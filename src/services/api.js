import axios from 'axios';

const API_BASE_URL = 'http://localhost:5181/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Expense API calls
export const expenseService = {
  // Get all expenses
  getAllExpenses: async () => {
    try {
      const response = await apiClient.get('/expenses');
      return response.data;
    } catch (error) {
      console.error('Error fetching expenses:', error);
      throw error;
    }
  },

  // Create new expense
  createExpense: async (expenseData) => {
    try {
      const response = await apiClient.post('/expenses', expenseData);
      return response.data;
    } catch (error) {
      console.error('Error creating expense:', error);
      throw error;
    }
  },

  // Update expense
  updateExpense: async (id, expenseData) => {
    try {
      const response = await apiClient.put(`/expenses/${id}`, expenseData);
      return response.data;
    } catch (error) {
      console.error('Error updating expense:', error);
      throw error;
    }
  },

  // Delete expense
  deleteExpense: async (id) => {
    try {
      const response = await apiClient.delete(`/expenses/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting expense:', error);
      throw error;
    }
  },
};

// Category API calls 
export const categoryService = {
  getAllCategories: async () => {
    try {
      const response = await apiClient.get('/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },
};