
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, Name: 'Tevvin', cohort_id: '1' },
        { id: 2, Name: 'Ira', cohort_id: '2' },
        { id: 3, Name: 'Sara', cohort_id: '3' },
        { id: 4, Name: 'Caleb', cohort_id: '4' },
        { id: 5, Name: 'Ashley', cohort_id: '5' },
        { id: 6, Name: 'Paul', cohort_id: '6' },
        { id: 7, Name: 'Jamie', cohort_id: '7' }
      ]);
    });
};
