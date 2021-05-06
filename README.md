Appalachian Trail Photo App

This application was built so that I could share my favorite photos from my 2019 AT thru-hike attempt. There are three months & over 1200 miles of trail accounted for in these pictures!

The UI for this app is built with React. It consumes JSON payloads consisting of an image key, and
the like count of the image. All image assets are stored in an S3 bucket, and piped directly to the UI. The user's like status of an image is stored locally on the their device, as I didn't feel it was necessary to add any further method of authentication to prevent misuse of likes. If a user dislikes an image the like status is removed from local storage. "Infinite" (infinity is reached relatively quickly here) scroll is used to help minimize the initial load time of the app.
