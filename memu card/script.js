document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { name: 'Margherita Pizza', price: '$12' },
        { name: 'Pasta Carbonara', price: '$15' },
        { name: 'Caesar Salad', price: '$10' },
    ];

    const events = [
        { title: 'Wine Tasting Night', date: 'April 5, 2025' },
        { title: 'Live Jazz Evening', date: 'April 20, 2025' },
    ];

    const menuContainer = document.querySelector('.menu-items');
    const eventContainer = document.querySelector('.event-list');

    menuItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
        menuContainer.appendChild(div);
    });

    events.forEach(event => {
        const div = document.createElement('div');
        div.className = 'event-item';
        div.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p>`;
        eventContainer.appendChild(div);
    });

    document.getElementById('reservation-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Reservation booked!');
    });
});