const data = [
    {
        location: 'London',
        latitude: 51.5073219,
        longitude:-0.1276474
    },
    {
        location: 'Dhaka',
        latitude: 23.804093,
        longitude:90.415238
    },
    {
        location: 'Sylhet',
        latitude: 24.9048,
        longitude:91.8600
    },
    {
        location: 'Chattogram',
        latitude: 22.3752,
        longitude:91.8349
    },
    {
        location: 'Sydney',
        latitude: -33.8688,
        longitude:151.2093
    }
]

const getLocation = () => {
    return data
}

const getLocationByName = (location) => {
    if (!location) return null
    
    const filtered = data.filter(item => item.location.toLowerCase() === location)
    
    if (filtered.length > 0) {
        return filtered[0]
    } else {
        return {
            location: '',
            latitude: 0,
            longitude:0
        }
    }
}

export { getLocation, getLocationByName }

