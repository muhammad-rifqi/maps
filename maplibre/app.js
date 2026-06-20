const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [117.0, -2.5],
    zoom: 4
});

// Tambahkan tombol zoom + dan -
map.addControl(
    new maplibregl.NavigationControl(),
    'top-right' // posisi: top-right, top-left, bottom-right, bottom-left
);

const cities = [
    { name: "Jakarta", lng: 106.8456, lat: -6.2088 },
    { name: "Bandung", lng: 107.6191, lat: -6.9175 },
    { name: "Surabaya", lng: 112.7521, lat: -7.2575 },
    { name: "Yogyakarta", lng: 110.3695, lat: -7.7956 },
    { name: "Semarang", lng: 110.4203, lat: -6.9932 },
    { name: "Medan", lng: 98.6722, lat: 3.5952 }
];

cities.forEach(city => {
    const markerEl = document.createElement('div');
    markerEl.className = 'city-marker';

    markerEl.innerHTML = `
        <div class="dot"></div>
        <div class="label">${city.name}</div>
    `;

    new maplibregl.Marker({
        element: markerEl
    })
    .setLngLat([city.lng, city.lat])
    .addTo(map);
});