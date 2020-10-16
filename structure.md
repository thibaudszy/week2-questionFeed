Question feed for the class

component tree:

App -
Feed
States (questions { id, name, description, category, upvotes, resolved})
-Question component
State (comments = [{name, content, upvotes? }]})
-name tag
-description
-comment
-upvotes - Question form

    -Form ( updates the questions array of the feed)
