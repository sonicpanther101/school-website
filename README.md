# Maunga Club Chalet Booking Website

To visit, go to: [maunga-club.vercel.app](https://maunga-club.vercel.app)

To request features, suggestions or bugs, please use the [GitHub issues](https://github.com/sonicpanther101/nextjs-website/issues)

## Achieved Criteria

### Purpose of the outcome

The purpose of this website is to make a booking system for Maunga Club chalets that allows users to book chalets in a functional, aesthetically pleasing and user-friendly way.

### Requirements of end users

The end users of this website are ultimately Maunga Club members or people looking to join. Because of this, I need to make it easy to use and aesthetically pleasing for new users and for existing users I need it to be consistent and convenient.

### Explanation of implications relevant to this website

Because of the requirements of this website, the relevant implications for this website are:

- The website should be aesthetically pleasing to draw in new users.
- The website should be user-friendly and easy to use so that users do not have to spend too much time on the website to find what they need and not be frustrated with the website.
- The website should be consistent and convenient so that users do not have to spend much time on the website to find what they need if they already know what they need.

Because of general requirements for all websites in the industry, other relevant implications for this website are:

- Intellectual property needs to be taken into account when designing the website to avoid infringing on any of the rights of third parties.
- When making the website, I need to make sure that it does not infringe on any legal rights.
- When making the website, I need to take into account privacy and confidentiality.
- The website should be sustainable and future-proof so that it can be easily maintained in the future.

### Demonstration of using tools, techniques and conventions that are appropriate for the purpose and end users of the website

I have demonstrated use of tools appropriate for the purpose of the website by using the following tools:

- [Next.js](https://nextjs.org), used to build the website.
- [React](https://reactjs.org), used to build the website.
- [Vercel](https://vercel.com/), used to deploy the website.
- [Tailwind CSS](https://tailwindcss.com), used to style the website in an efficient way.
- [Tailwind Variants](https://tailwind-variants.org), used to have multiple style schemes in the website, including dark mode.
- [Framer Motion](https://framer.com/motion), used to animate the website.
- [Eslint](https://eslint.org), used to lint (Code linting is the process of analysing source code for potential errors, warnings, and best practice violations to improve code quality and readability.) the code.
- [Prettier](https://prettier.io), used to format the code.
- [TypeScript](https://typescriptlang.org), a type safe version of JavaScript, used to write the code.
- [NextUI](https://nextui.org), used to style the website with pre-built components.
- [Embla Carousel](https://embla-carousel.com), used to create a carousel with pre-built components.

I have demonstrated use of techniques appropriate for the purpose of the website by using flex boxes to align elements in an aesthetic way.
Also by using media queries to make the website responsive by using md: before styles that should only apply to the website when on a landscape view. More info about md: [here](https://tailwindcss.com/docs/responsive-design).

I have demonstrated use of conventions appropriate for the purpose of the website by using the following conventions:

- The use of CSS flexbox to align elements in an aesthetic way.
- Because it is a website to be used for a company, it should use the industry standard software such as using Next.js, React and Vercel to build and deploy the website in an efficient way.
- The use of footer, header and navbar to follow the HTML semantics conventions.

## Merit Criteria

### Demonstrations of using conventions to improve the quality of the website include:

- Search for all uses of flex in the project<br>![search for all uses of flex in the project](image.png)
- Search for all uses of responsive media techniques in the project<br>![search for all uses of responsive media techniques in the project](image-1.png)
- Proof of the use of Vercel to deploy the website<br>![proof of the use of Vercel to deploy the website](image-2.png)
- Proof of the use of Tailwind CSS to style the website (Tailwind CSS is the CSS-like classes each element has)<br>![proof of the use of Tailwind CSS to style the website](image-3.png)
- Proof of the use of HTML semantics in the website<br>![Header](image-4.png)![Footer](image-5.png)
- Evidence of getting feedback from end-users and using this feedback to improve the website design <br>[Github - Issues](https://github.com/sonicpanther101/school-website/issues?q=is%3Aissue+is%3Aclosed)
- Using the popular [Catppuccin theme](https://github.com/catppuccin/catppuccin) to style the website<br>![Using the Catppuccin theme to style the website](image-6.png)

Design elements include:
Colour
Line
Scale
Hierarchy
Contrast
Composition
Typography
Whites space
Repetition
Images

### Evidence of using information I gathered from TESTING to improve the quality of the website

When testing the website with a screen reader, I found that many images did not have alt text. I then added explanatory alt text to all images.
<br>
![search for all uses of alt text in the project](image-7.png)

When going through my site near the end of the coding process, I found that a few of the buttons did not work as expected. I then added the correct href to all buttons. [Git Commit](https://github.com/sonicpanther101/school-website/commit/b42ecb3776fdacb07fb5f32059b2a5c8c864aff2)
<br>
![git commit where the buttons were fixed](image-8.png)<br>![](image-9.png)

When getting my dad to test the website, he found that the website had terrible contrast in certain areas, so he submitted an [issue report](https://github.com/sonicpanther101/school-website/issues/1)
<br>![issue report](image-12.png)
I then fixed the contrast and closed the issue, using the industry standard github issues system. The part with a problem went from:
![bad contrast](image-10.png)
To:
![good contrast](image-11.png)

When testing responsiveness, I found that the logo was cut off by the other side of the header and the details div had too much margin when viewed on a mobile device. I then reduced the margin of the details div and shrunk the logo a bit for mobile view only. Before:
<br>
![bad responsiveness](image-13.png)

After:
<br>
![good responsiveness](image-14.png)

When testing using the given website ([https://validator.w3.org/](https://validator.w3.org/)), I found that it warns for "Trailing slash on void elements". In other words, it is bad practice to have an element like \<br/\>. So I then removed all trailing slashes. After testing this, I found that the website didn't load. I then added a trailing slash back to all void elements. This is a classic example of the phrase "If it ain't broke, don't fix it". Because it did not give me a detailed error, the only evidence is:
<br/>
![alt text](image-15.png)>

### Evidence of addressing relevant implications

I have addressed the implication of aesthetics by applying a colour scheme specifically designed to be plain, simple and pleasing to the eye.
<br/>
I have addressed the implication of user-friendliness by making sure that the website is easy to use and intuitive to use for both new  and returning users through the use of flexboxes to well space elements and the use of common convention of websites, having intuitive navigation for everyone who has used a website before.
<br/>
I have addressed the implication of consistency and convenience by making the website follow the common layout of websites, allowing for users to easily and quickly find what they need.
<br/>
I have addressed the implication of intellectual property, legal rights by only using third-party content when necessary and by making the most of the images given. The few times I did use third-party content, I got it from [Pixabay](https://pixabay.com/) allowing me to use their images for my purpose because they are royalty free.
<br/>
I have addressed the implication of privacy and confidentiality by not sharing any personal information with third parties, keeping all data locally (in the browser) and not saving/taking any other information.
<br/>
I have addressed the implication of sustainability and future-proof by using an upgradable framework and core component libraries that can be easily used in the future also with new technologies. Because one of the key things in sustainability is that it can be maintained in the future, code readability is key, this is why I have used plugins such as Prettier and Eslint as well as using the component libraries to simplify the code in the main files.

## Excellence Criteria

### Demonstration of using efficient tools and techniques when developing my website

Examples of efficient tools include:
Managing website assets in a logical file structure
Adding meaningful comments to HTML and CSS
Validating HTML and CSS
Optimising images and other media used on the site (Compress images using https://tinypng.com/)

### Evidence of continually improving my website throughout the design, development and testing process

Do this to ensure the website is of a high quality.

Example:
Start with creating the homepage
Get feedback from end-users on look and functionality
Apply feedback
Ask for more feedback
Create more pages
Continue ..

Keep evidence showing how you tested and made improvements. 

## Technologies Used

- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://typescriptlang.org)
- [Framer Motion](https://framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Licence

Licensed under the [MIT licence](https://github.com/nextui-org/next-pages-template/blob/main/LICENSE).