// data/mock-properties.js
export const mockProperties = [
	{
		id: '1',
		externalID: 'mock-1',
		title: 'Luxury 2-Bed Apartment in Dubai Marina',
		price: 12000,
		rentFrequency: 'monthly',
		rooms: 2,
		baths: 2,
		area: 1200,
		coverPhoto: {
			url: '/images/house.jpg',
		},
		agency: {
			logo: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
			},
		},
		isVerified: true,
		purpose: 'for-rent',
	},
	{
		id: '2',
		externalID: 'mock-2',
		title: 'Penthouse with Burj Khalifa View',
		price: 2500000,
		rentFrequency: null,
		rooms: 4,
		baths: 5,
		area: 3500,
		coverPhoto: {
			url: '/images/buy.jpg',
		},
		agency: {
			logo: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
			},
		},
		isVerified: true,
		purpose: 'for-sale',
	},
	{
		id: '3',
		externalID: 'mock-3',
		title: 'Cozy Studio near Downtown',
		price: 5500,
		rentFrequency: 'monthly',
		rooms: 1,
		baths: 1,
		area: 650,
		coverPhoto: {
			url: '/images/rent.jpg',
		},
		agency: {
			logo: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
			},
		},
		isVerified: false,
		purpose: 'for-rent',
	},
	{
		id: '4',
		externalID: 'mock-4',
		title: 'Villa in Emirates Hills',
		price: 15000000,
		rentFrequency: null,
		rooms: 6,
		baths: 7,
		area: 8000,
		coverPhoto: {
			url: '/images/house.jpg',
		},
		agency: {
			logo: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
			},
		},
		isVerified: true,
		purpose: 'for-sale',
	},
];

export const getPropertyById = (id) => {
	return mockProperties.find((p) => p.externalID === id);
};
