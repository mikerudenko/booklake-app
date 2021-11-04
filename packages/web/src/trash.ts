export const order = [
  {
    created: 'utc string',
    date: 'utc string',
    places: [
      {
        id: 'id',
        options: ['optionId'],
      },
    ],
    dayTimeType: 'dayTimeTypeId',
    status: 'pending/payed/approved',
    buyer: {
      userId: 'some id / or null',
      email: 'someemail@asod.com',
      fullName: 'some string',
      phone: 'some phone',
    },
  },
];

//collection orders
//collection archive

export const user = {
  photoUrl: 'some photo url',
  favorites: ['lakeId', 'lakeId'],
};

export const availableDates = [
  {
    date: 'some date',
    allDay: ['id1', 'id2'],
    morning: ['id1', 'id2'],
    night: ['id1', 'id2'],
    evening: ['id1', 'id2'],
  },
];

// TODO try this one
// TabNine::sem

// copy last place
// 1 - user go lake page of selection placesCount
// 2 get available dates item
