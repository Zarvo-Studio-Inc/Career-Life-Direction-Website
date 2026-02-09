import type { NextApiRequest, NextApiResponse } from 'next'

// You should store this in an environment variable for security
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY
const HUBSPOT_API_URL = 'https://api.hubapi.com/crm/v3/objects/contacts'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { fullName, email, phone, cityCountry, userType, guidanceAreas, message } = req.body

  // Split fullName into firstname and lastname
  let firstname = fullName;
  let lastname = '';
  if (fullName) {
    const nameParts = fullName.trim().split(' ');
    firstname = nameParts[0];
    lastname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
  }

  if (!email || !fullName) {
    return res.status(400).json({ message: 'Name and email are required' })
  }

  try {
    const hubspotRes = await fetch(HUBSPOT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify({
          properties: {
            email,
            firstname,
            lastname,
            phone,
            full_address: cityCountry,
            profession: userType,
            message,
            guidance_area: Array.isArray(guidanceAreas) ? guidanceAreas.join(';') : guidanceAreas,
          },
        }),
    })

    if (!hubspotRes.ok) {
      const error = await hubspotRes.json()
      return res.status(500).json({ message: 'HubSpot error', error })
    }

    return res.status(200).json({ message: 'Lead submitted to HubSpot' })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error })
  }
}
