🐞 Identified Issues / Known Bugs

Below are the key issues identified during testing of the application:

1. Multiple Modals Accept the Same Credentials

There are three separate modals, and all of them allow login using the same email and password. This indicates a lack of proper validation and session handling between modals.

2. Incorrect Date Display After Login

After a successful login, the system displays an incorrect date, which does not match the actual current date.

3. No Visual Confirmation of Successful Login

Once the user logs in, there is no clear indication (such as username, profile icon, or message) to confirm that the user is currently logged in. This creates confusion in user experience.

4. Login Accepts Email With Leading or Trailing Spaces

The system allows login even when the email field contains extra spaces.

✅ Expected behavior: The system should trim input or show a validation error, but currently no error is displayed.

5. Newsletter Selection Changes Randomly

The Daily Newsletter and Weekly Newsletter options change randomly without user interaction, which indicates a state management or UI synchronization issue.
