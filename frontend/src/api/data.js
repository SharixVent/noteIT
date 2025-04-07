const API_BASE_URL = 'http://127.0.0.1:5000';

// User functions
const userApi = {
    addUser: async (username, email) => {
        const response = await fetch(`${API_BASE_URL}/add_user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email }),
        });

        if (!response.ok) {
            throw new Error(`Error adding user: ${response.statusText}`);
        }

        return response.json();
    },

    getUser: async (id) => {
        const response = await fetch(`${API_BASE_URL}/get_user?id=${id}`);

        if (!response.ok) {
            throw new Error(`Error fetching user: ${response.statusText}`);
        }

        return response.json();
    },

    deleteUser: async (id) => {
        const response = await fetch(`${API_BASE_URL}/delete_user?id=${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error deleting user: ${response.statusText}`);
        }

        return response.json();
    },
};

// Note functions
const noteApi = {
    addNote: async (userId, title, description, color, category) => {
        const response = await fetch(`${API_BASE_URL}/add_note`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId, title, description, color, category }),
        });

        if (!response.ok) {
            throw new Error(`Error adding note: ${response.statusText}`);
        }

        return response.json();
    },

    getNote: async (noteId) => {
        const response = await fetch(`${API_BASE_URL}/get_note?note_id=${noteId}`);

        if (!response.ok) {
            throw new Error(`Error fetching note: ${response.statusText}`);
        }

        return response.json();
    },

    deleteNote: async (noteId) => {
        const response = await fetch(`${API_BASE_URL}/delete_note?note_id=${noteId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error deleting note: ${response.statusText}`);
        }

        return response.json();
    },

    updateNote: async (noteId, updates) => {
        const response = await fetch(`${API_BASE_URL}/update_note?note_id=${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates),
        });

        if (!response.ok) {
            throw new Error(`Error updating note: ${response.statusText}`);
        }

        return response.json();
    },

    getUserNotes: async (userId, category) => {
        if(category == "All") category = "";
        const response = await fetch(`${API_BASE_URL}/get_user_notes?user_id=${userId}&category=${category}`);

        if (!response.ok) {
            throw new Error(`Error fetching user notes: ${response.statusText}`);
        }

        return response.json();
    },
};

// Export the API functions
const api = {
    user: userApi,
    note: noteApi,
};

export default api;