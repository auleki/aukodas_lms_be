# Documentation guide

As development occurs I would like to keep track of my thoughts for current and future implementations.

## Models

Anything regarding the Database Models

### Model Interactions

- After a task is created, it can be assigned to a cohort, with the "Assign Task to Cohort" button. After which a reference of that task is added within the tasks field for Cohort.
-- We get to view those tasks by populating the tasks field on the "/cohort/tasks/" endpoint

## MVP

For the most viable product approach, the minimum requirements which we will be working towards are:

- Mentee can register, login, and reset password if forgotten.
- Only Mentor can create a cohort, task, quiz or resource
- Mentee can join a cohort, after which they can access tasks, resources, quiz

## Future Adds

- [Mentee] can view list of mentors on the cohort
- [Mentor] should be able to select multiple tasks, resources for Cohort assignment
- [Mentee] include badges for completing various feats
