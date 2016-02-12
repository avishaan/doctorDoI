let chance = new Chance();

if (Doctors.find().count() === 0) {
  console.log("seeding doctors");
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

if (Outcomes.find().count() === 0) {
  console.log("seeding outcomes");
  let doctors = Doctors.find().fetch();
  const outcomes = [
    {
      doctor: {
        _id: doctors[0]._id,
        name: doctors[0].name,
        background: doctors[0].background,
        image: doctors[0].image
      },
      confidence: chance.integer({min: 10, max: 90}),
      description: chance.paragraph({sentences: 2}),
      image: '1.png',
      numResponses: 1
    }, {
      doctor: {
        _id: doctors[1]._id,
        name: doctors[1].name,
        background: doctors[1].background,
        image: doctors[1].image
      },
      confidence: chance.integer({min: 10, max: 90}),
      description: chance.paragraph({sentences: 2}),
      image: '2.png',
      numResponses: 1
    }, {
      doctor: {
        _id: doctors[2]._id,
        name: doctors[2].name,
        background: doctors[2].background,
        image: doctors[2].image
      },
      confidence: chance.integer({min: 10, max: 90}),
      description: chance.paragraph({sentences: 2}),
      image: '3.png',
      numResponses: 0
    }, {
      doctor: {
        _id: doctors[3]._id,
        name: doctors[3].name,
        background: doctors[3].background,
        image: doctors[3].image
      },
      confidence: chance.integer({min: 10, max: 90}),
      description: chance.paragraph({sentences: 2}),
      image: '4.png',
      numResponses: 0
    }
  ];
  for (let i = 0; i < outcomes.length; i++) {
    Outcomes.insert(outcomes[i]);

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
