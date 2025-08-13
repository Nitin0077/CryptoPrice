const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());



// API Keys
const LIVECOINWATCH_API_KEY = '317e8d4a-5896-4dca-8827-04bf4b2937af';
const IndianApiKey = 'sk-live-vQBs0CresVtZGTBYTb0zFJA7nzFyk9kLwRZWmHSo';

/**
 * 🚀 Route 1: Get cryptocurrency list
 */
app.post('/api/crypto', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.livecoinwatch.com/coins/list',
      {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: 0,
        limit: 500,
        meta: true
      },
      {
        headers: {
          'content-type': 'application/json',
          'x-api-key': LIVECOINWATCH_API_KEY
        }
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error('LiveCoinWatch API error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch data from LiveCoinWatch' });
  }
});

/**
 * 🚀 Route 2: Get global market overview and coin-info
 */
app.post('/api/overview', async (req, res) => {
  const {endpoint,payload} =req.body;
  try {
    const response = await axios.post(
      `https://api.livecoinwatch.com/${endpoint}`,
      payload,
      {
        headers: {
          'x-api-key': LIVECOINWATCH_API_KEY
        }
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error('LiveCoinWatch Overview API error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch overview data from LiveCoinWatch coin-info' });
  }
});

/**
 * 🚀 Route 3: Get Indian IPO data
 */
app.get('/api/indian/ipo', async (req, res) => {
  try {
    const {endpoint} =req.query;
    const response = await axios.get(`https://stock.indianapi.in${endpoint}`, {
      headers: {
        'content-type': 'application/json',
        'x-api-key': IndianApiKey
      }
    });

    res.json(response.data);
  } catch (err) {
    console.error('Indian IPO API error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch IPO data from Indian API' });
  }
});

/**
 * 🚀 Route 4: Get Indian trending stocks
 */
app.get('/api/indian/trending', async (req, res) => {
  try {
    const response = await axios.get('https://stock.indianapi.in/trending', {
      headers: {
        'content-type': 'application/json',
        'x-api-key': IndianApiKey
      }
    });

    res.json(response.data);
  } catch (err) {
    console.error('Indian Trending API error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch trending data from Indian API' });
  }
});

/**
 * Start server
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
