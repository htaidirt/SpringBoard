# Spring Board

A lightweight static blog generator for Node.js

## What?

SpringBoard is a Node.js app that converts .md files to a complete HTML files, ready to be pushed on the server.

It was first intended to create static files for blogging, but can also be available to just convert .md files to .html files.

## How?

Start the application `npm start`

Just create and write .md files in the `articles/` folder, then .html files will be created automatically (when saving the .md files, it triggers the compiler).

All your articles are store in the `articles/` folder and the generated HTML files will be grouped in the `blog/` folder, with the same name (except the .md that is replaced with .html).

To publish on web, just synchronize the `blog/` folder with your online blog.

## Contribution

You're welcome :)

## License

MIT

## One more thing

Follow me on twitter [@htaidirt](twitter.com/htaidirt)
