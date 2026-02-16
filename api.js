import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const fetchIncidents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/incidents`);
    return response.data;
  } catch (error) {
    console.error('Error fetching incidents:', error);
    throw error;
  }
};

export const fetchStats = async () => {
  try {
    const [incidentsRes, citizensRes, sheltersRes] = await Promise.all([
      axios.get(`${BASE_URL}/incidents`),
      axios.get(`${BASE_URL}/citizens`),
      axios.get(`${BASE_URL}/shelters`)
    ]);

    return {
      totalIncidents: incidentsRes.data.length,
      safeCitizens: citizensRes.data.filter(c => c.status === 'safe').length,
      openShelters: sheltersRes.data.filter(s => s.status === 'open').length
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};

export const postIncident = async (incidentData) => {
  try {
    const response = await axios.post(`${BASE_URL}/incidents`, incidentData);
    return response.data;
  } catch (error) {
    console.error('Error posting incident:', error);
    throw error;
  }
};

export const updateIncidentStatus = async (id, status) => {
  try {
    const response = await axios.patch(`${BASE_URL}/incidents/${id}`, { status });
    return response.data;
  } catch (error) {
    console.error('Error updating incident status:', error);
    throw error;
  }
};

export const setCitizenSafe = async (citizenId, location) => {
  try {
    const response = await axios.patch(`${BASE_URL}/citizens/${citizenId}`, {
      status: 'safe',
      location
    });
    return response.data;
  } catch (error) {
    console.error('Error setting citizen safe:', error);
    throw error;
  }
};
