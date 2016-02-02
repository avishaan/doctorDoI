if (Doctors.find().count() === 0) {
  const doctors = [
    {
      name: 'Jamison Feramisco',
      background: 'Cardiac Surgeon for 10 years',
      image: '1.png'
    }, {
      name: 'Kristy Swanson',
      background: 'Pediatric Surgeon for 3 years',
      image: '2.png'
    }, {
      name: 'Bruce French',
      background: 'Orthopedic Surgeon for 5 years',
      image: '3.png'
    }, {
      name: 'Neil Phillip',
      background: 'Radiology Surgeon for 7 years',
      image: '4.png'
    }, {
      name: 'Ervin Mathis',
      background: 'Emergency Medicine for 2 years',
      image: '5.png'
    }
  ];

  for (let i = 0; i < doctors.length; i++) {
    Doctors.insert(doctors[i]);
  }
}
if (Players.find().count() === 0) {
  const names = [
    'Ada Lovelace',
    'Grace Hopper',
    'Marie Curie',
    'Carl Friedrich Gauss',
    'Nikola Tesla',
    'Claude Shannon'
  ];

  for (let i = 0; i < names.length; i++) {
    Players.insert({name: names[i], score: Math.floor(Math.random() * 10) * 5});
  }
}
