var imageURI = "data:image/png;base64,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";

let chance = new Chance();

if (Doctors.find().count() === 0) {
  console.log("seeding doctors");
  const doctors = [
    {
      name: 'Jamison Feramisco',
      background: 'Cardiac Surgeon for 10 years',
      image: '/imgs/1.png'
    }, {
      name: 'Kristy Swanson',
      background: 'Pediatric Surgeon for 3 years',
      image: '/imgs/2.png'
    }, {
      name: 'Bruce French',
      background: 'Orthopedic Surgeon for 5 years',
      image: '/imgs/3.png'
    }, {
      name: 'Neil Phillip',
      background: 'Radiology Surgeon for 7 years',
      image: '/imgs/4.png'
    }, {
      name: 'Ervin Mathis',
      background: 'Emergency Medicine for 2 years',
      image: '/imgs/5.png'
    }
  ];

  for (let i = 0; i < doctors.length; i++) {
    Doctors.insert(doctors[i]);
  }
}

if (CaseFiles.find().count() === 0) {
  console.log("seeding caseFiles");
  let doctors = Doctors.find().fetch();
  const caseFiles = [
    {
      doctor: {
        _id: doctors[0]._id,
        name: doctors[0].name,
        background: doctors[0].background,
        image: doctors[0].image
      },
      confidence: chance.integer({min: 10, max: 90}),
      description: chance.paragraph({sentences: 2}),
      image: '/imgs/1.png',
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
      image: '/imgs/2.png',
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
      image: '/imgs/3.png',
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
      image: imageURI, // the imageURI is at the bottom hiding
      numResponses: 0
    }
  ];
  for (let i = 0; i < caseFiles.length; i++) {
    CaseFiles.insert(caseFiles[i]);

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

