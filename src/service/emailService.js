import axios from 'axios';
import BackendServer from '../config/config';

// Create an Axios instance with default settings
const API = axios.create({
  baseURL: `${BackendServer}/api/emails`,
  withCredentials: true, // Ensures cookies are sent & received
});

// Send admin invite
export const sendContactEmail = async (data) => {
    try {
        console.log('In contact me email service:- ', data);
        const response = await API.post('/portfolio-contact-me', data);
        console.log('Response in contact me email service:- ', response);
        return response.data;
    } catch (error) {
        console.error(
            'Error sending email:',
            error.response?.data || error.message
        );
        throw error;
    }
};
  