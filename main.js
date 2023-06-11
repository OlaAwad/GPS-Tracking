const users = [
    { name: 'User 1', latitude: null, longitude: null },
    { name: 'User 2', latitude: null, longitude: null },
    { name: 'User 3', latitude: null, longitude: null },
    { name: 'User 4', latitude: null, longitude: null },
    { name: 'User 5', latitude: null, longitude: null }
  ]

  const details = document.getElementById('details')
  const maps = [
    document.getElementById('map1'),
    document.getElementById('map2'),
    document.getElementById('map3'),
    document.getElementById('map4'),
    document.getElementById('map5')
  ]

  users.forEach((user, index) => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords
      users[index].latitude = latitude
      users[index].longitude = longitude
      displayUserLocations()
    })
  })

  function displayUserLocations() {
    let html = ''
    users.forEach((user, index) => {
      if (user.latitude && user.longitude) {
        let mapUrl = `https://maps.google.com/maps?q=${user.latitude},${user.longitude}&output=embed`
        html += `<br>${user.name}: Latitude=${user.latitude}, Longitude=${user.longitude}<br><iframe width="700" height="300" src=${mapUrl}></iframe> <br>`
      } else {
        html += `<br>${user.name}: Latitude and longitude not available<br>`
      }
    })
    details.innerHTML = html
  }


// Stop watching position:

// function buttonClickHandler() {
//   // Cancel the updates when the user clicks a button.
//   navigator.geolocation.clearWatch(watchId)
// }
