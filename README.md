# HW4 Part 1

## Contact
Name: Julian Tran
Email: Julian_Tran@student.uml.edu
COMP 4610 GUI I

https://jtran2025.github.io/HW4-Part-1/multtable.html
https://github.com/JTran2025/HW4-Part-1

## Description
This project uses the jQuery Validation plugin in order to tell the user precisely what error occurred, where, and why. Incorrect values will prevent the user from submitting.

## Features
In the HTML file, I used CDN for the jQuery libraries.

In the CSS file, I changed the error messages of the jQuery Validation rules to be red. I spaced the textboxes and their description titles to be further apart from each other in order to better have the error messages appear under the exact textbox of the error.

In the JavaScript file, I made each textbox have the rule to be a required input, be a number, have a minimum value of -50, and have a maximum value of 50. I created two validator methods in order to check if the current input is greater than or less than the minimum or maximum values, respectively. Each rule has a message for the appropriate error.

## Issues
I believe I made everything function correctly. However, when inputting either of the minimum values first before the maximum values, the error message stays even when choosing a greater value. The page will continue to work, but in order to get rid of the message, the textbox needs to be clicked on again or the submit button needs to be pressed.

## Acknowledgements
Dr. Wenjin Zhou
Zuriel Pagan
