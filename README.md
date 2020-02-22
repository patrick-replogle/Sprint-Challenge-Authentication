# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add your _Team Lead_ as collaborator on Github.
- [ ] Clone your forked version of the Repository.
- [ ] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [ ] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the purpose of using _sessions_?

Sessions allow us to persist state information between pages and requests. The session id would normally be sent in the form of a cookie and the id is used to retrieve existing session data.

- [ ] What does bcrypt do to help us store passwords in a secure manner.

Bcryptjs uses an algorithm that hashes and salts a user’s password on the way in so that sensitive information isn’t stored in plain text on the backend. It ends up being a random looking assortment of characters, letters, and numbers with a algorithm/hash count at the beginning.

- [ ] What does bcrypt do to slow down attackers?

Bcrypt allows developers to exponentially increase and control the number of times a password is hashed. This slows down hackers using rainbow tables or brute force attacks to try and decrypt a users information and gain access to the database. These added passes thru the algorithm will slow the response time from the server to a user’s register￼￼ request, but in turn will also slow down hackers to a point where it’s not worth trying to crack a user’s password.

- [ ] What are the three parts of the JSON Web Token?

Header- this contains the type of token and the algorithm used to generate it

Payload -this is where the actual data that pertains to the user is stored

Signature- this is the sum of the encoded header, payload and algorithm. The signature is used to verify that the sender is who it says it is and that the information within hasn’t changed since since the token was issued.

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [ ] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
