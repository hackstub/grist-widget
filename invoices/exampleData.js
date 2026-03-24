const exampleData = {
  Number: 1312,
  Issued: Date.parse('2026-11-12') / 1000,
  Due: Date.parse('2026-12-13') / 1000,

  Invoicer: {
    Name: 'La cabaterie',
    Street1: '42 rue du bon de commande',
    Street2: null,
    City: 'Phalsbourg',
    State: 'FR',
    Zip: '13120',
    Email: 'tlm@niklabac.com',
    Phone: '+33 3 13 12 13 12',
    Website: 'niklabac.com',
  },

  Client: {
    Name: 'La Pomme Rouge',
    Street1: "161 rue d'Andlau",
    City: 'Strasbourg',
    State: 'FR',
    Zip: '67000',
  },

  Items: [
    {
      Description: 'Destitution d'Emmanuel Macron',
      Price: 35000,
      Quantity: 1,
      Total: 35000,
    },
    {
      Description: 'Mise à bas d'entreprise capitaliste',
      Price: 30000,
      Quantity: 3,
      Total: 90000,
    },
  ],

  Subtotal: 125000,
  Deduction: null,
  Taxes: null,
  Total: 125000,
  Paid: true,
};
