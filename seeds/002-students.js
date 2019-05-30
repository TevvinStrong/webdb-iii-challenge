
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, Name: 'Tevvin', cohort_id: '' },
        { id: 2, Name: 'Ira', cohort_id: '' },
        { id: 3, Name: 'Sara', cohort_id: '' },
        { id: 4, Name: 'Caleb', cohort_id: '' },
        { id: 5, Name: 'Ashley', cohort_id: '' },
        { id: 6, Name: 'Paul', cohort_id: '' },
        { id: 7, Name: 'Jamie', cohort_id: '' }
      ]);
    });
};
