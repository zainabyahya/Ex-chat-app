## Description 🗒️:

This chat app serves as a practical exercise to familiarize oneself with backend development concepts. It focuses on understanding the workings of backend systems, including the creation of routes and endpoints (APIs) using HTTP methods such as GET, POST, PUT, and DELETE. Participants will learn how to handle requests and responses, utilize parameters in requests, and manage data manipulation within a server environment.

## Instructions 📝:

1. Fork and clone the provided repository to your local machine.
2. Navigate to the folder location using your terminal or Git Bash.
3. Initialize your package manager by running `npm init -y`.
4. Install Express, require it, and create an instance of it within your project.
5. Utilize the `listen` method to run the server on a specific port.
6. Inside the `app.js` or `index.js` file, import the necessary data from its source file.
7. Implement the following functionalities using the main API methods (GET, POST, PUT, DELETE):
   - **GET**: Retrieve all available chats.
   - **GET**: Retrieve a specific chat based on the chat creator's username.
   - **POST**: Allow users to create a chat with fields for text and username.
   - **PUT**: Enable users to update the text field and return the updated chat.
   - **DELETE**: Allow users to delete a chat based on its ID.

### Additional Considerations ➕:

- Utilize the try-catch statement to handle potential errors.
- Use the appropriate status methods to convey the success or failure of requests.
- Implement error handling mechanisms throughout your codebase.

### Bonus Tasks 😎:

- Create a route to handle requests to paths that are not defined in the app, returning a message like "Oops, the page you're looking for doesn't exist." Consider utilizing middleware for this purpose.
- Implement a route for searching chats based on text characters that match entered queries.
- Add another field to differentiate between the sender and the receiver of each chat.

### Submission Guidelines ☑️:

- Thoroughly test all aspects of your code to ensure functionality.
- Stage, commit, and push your changes to the repository.
- Don't forget to add the repo link to your notion page.

## Frontend Integration 🎨:

- Create a new React app.
- Begin by implementing the necessary components to display chats in a visually appealing manner on the screen.

## HAPPY HACKING 😉.
