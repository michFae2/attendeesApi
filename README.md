# AttendeesApi

Attendees Api is an API for Grace Hopper Conference Attendees.

Supported queries:
```graphql
getAttendeeById(…): Attendee
getAttendees: [Attendee!]
```

Supported entities:
```graphql
type Attendee @key(fields: "attendeeId")
```

## Installation (Required only if you are implementing the attendeesAPI)


0) If you haven't already done so, clone <GAtEWAY REPO HERE> (ADD CLONE LINE HERE). Make sure you have run `npm install` at the top level of the directory, as per the instructions in the repository readme.

1) Fork this (attendeesAPI) repository (click the `FORK` button on the top right of github).
    ![](https://i.imgur.com/oJWUOVh.png)

    then, clone your **forked** repo after navigating into the _graceHopperApi_ directory that you clones in step 0:
    
    e.g. On a terminal, write out:
    ```bash
    cd graceHopperApi
    git clone https://github.com/YOUR-GIT-USERNAME/attendeesApi.git
    ```

2) Using the terminal, navigate to the _attendeesApi_ directory in the _services_ folder and run `npm install`:

    ```bash
    cd services/attendeesApi
    npm install # needed if you want to test this service independently from other services
    ```

3) Begin looking through the code in the attendeesApi subdirectory. You will need to change the files in the _schema_ and the _resolver_ folders only. It will be helpful to read through the other files in the subdirectory.
    
4) After you've filled in the missing code, you can test out your individual service using `npm run start` when you are inside the _attendees_api_ subdirectory. You should see a message which looks like this:

    ```
    🎀 Attendees server ready at http://localhost:5001/ 👩‍💻🧑‍💻
    ```

    Go to `http://localhost:5001/` in your browser. If promted, click `Query your server`. 
    ![](https://i.imgur.com/JOiWRsP.png)

    Write out a query to test your service. For example, running [this](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A5001%2F&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAIq6EAUAJAIYorJgIICSY6RLAIgIQCURYAB0kRIgHMEKAIL1GzAEIE2FOgyRNW7IrTkbmbAcNFiia%2BVpGmiSGoiumUBAA4IHYmpIcBfB5Jl6mgDOgu42dm4mHl4mvkjeIAA0IABuNHgAljQARgA2CEEYIMZiQiDm%2BpYYRGXSAMxlIg4iCd5AA) should work.

5) After you are sure your Attendees API works, checkout the <GAtEWAY REPO HERE> section on ___ for how to integrate with other APIs.
    
6) Push your _attendeesApi__ graph to your branch so that other API teams can use it.
    ```bash
    git add .
    git commit -m "implement attendeesAPI"
    git push origin main # main or your branch name (if you created     one)
    ```

    Copy the github clone link of **your fork** with the working    code (e.g. https://github.com/YOUR-GIT-USERNAME/attendeesApi.git) and add it to [this spreadsheet](https://docs.google.com/spreadsheets/d/1dvTavqVvkwyG3IbhhRciA376hHxVKvFfnhXGbZZLX7k/edit#gid=0)
    
    ![](https://i.imgur.com/dR8Fttd.png)

    
## Usage

To use this API, follow the **Running the entire api section from  <GAtEWAY REPO HERE>

## License

[MIT](https://choosealicense.com/licenses/mit/)