# Cowsay

## Objectives

- execute a node package
- install a node package as a dependency
- edit a package.json
- explore arguments on the command line
- predict the output of a script

## Welcome to Cowsay Part One

This coursework assumes you have [Node](https://nodejs.org/en/download/), a text editor, and a terminal or command line. Choose 'Preview Markdown' to read this project more easily in VSCode.

You might enjoy doing this project together in a study group.

Cowsay is a fun script that prints an [ASCII](https://simple.wikipedia.org/wiki/ASCII) cow with your words in a speech bubble. It works like this: there is a library of pictures of cows made out of ASCII characters. You call the script in your terminal and you pass in arguments. There are lots of options, but one argument is required: a text string for the cow to say.

```
 ________
< Mooooo >
 --------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```

Cowsay was originally written in [Perl](https://simple.wikipedia.org/wiki/Perl), but has been written in many other programming languages too. In this coursework, we will run it with Node. How would we go about this? What things would be helpful? I think we could use:

- A node package that contains the cowsay library. I'll start you off by letting you know there is one, and it is called `cowsay`
- A way to execute the script.

Before we start, what's the fastest way you could get the cow to talk? Make a prediction.

You can execute some packages directly [in the command line with npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner).

```
npx cowsay Moooo
```

We did it! But let's explore some more. How would you install cowsay as a [dependency](https://nodejs.dev/learn/npm-dependencies-and-devdependencies)? Make a new folder inside this one. Initialise a new package in this folder

```
mkdir cowsaying
cd cowsaying
npm init -y
```

Then do

```
npm install cowsay
```

### npm run

Let's find out how to execute cowsay from our package.json. Open the `cowsaying` directory you made earlier in your IDE and look at the [package.json](https://nodejs.dev/learn/the-package-json-guide).

Add cowsay to the scripts object.

```js
"scripts": {
    "cowsay": "cowsay Mooooo"
  },
```

Now cowsay is listed as a script, and it has an argument. In your terminal, run cowsay.

```
npm run cowsay
```

What are the downsides of this approach? Make a prediction.

I would say one is that we want to be able to pass in arguments, not just always say moo. How could we make the cow say Baaaa?

Remove the hardcoded "Mooooo". Can you pass a different string in the command line?

### node

Now let's execute cowsay in a different way. Open /index.js in your text editor. Import the cowsay package with require.

```js
const cowsay = require("cowsay");
```

And log a cow to the console that says "I require a package". Look, I have set values for the eyes and tongue. How have I done that? Make a prediction.

```js
console.log(
  cowsay.say({
    text: "I require a package",
    e: "oO",
    T: "U ",
  })
);
```

Now run this with node:

```js
node index.js
```

## Going deeper, your stretch goal

How is this cow being made and what else can we make? Open your node modules and look inside cowsay. There's a README file that tells you all about the package and a library of other animals you can make. Read it.

You don't have to understand _all_ the code to get an idea of what is going on.

How would you extend this library to add a new animal? What about [a duck](https://www.asciiart.eu/animals/birds-water)? Look at how the existing `.cows` are imported and try adapting this for your own .cow. There are no solutions provided for this challenge. Dig around for yourself.
