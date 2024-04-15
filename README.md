# Tax_Calculator
A webapp to calculate overall income after tax deduction based on various tax slab according to age group.

### Run the app locally: 
    To run the app locally open the project in VS Code and run live server or open the idex.html page on a browser.

### Assumptions: 
    I considered Gross income, Extra income and deductions as positive floating point numbers.
    
    Put validation for negetive numbers.

### Flow of the app:
- Landing page : 
    Open the index.html on a browser, a ui will appear : [Landing Page](./images/main_page.png) 

- Valid run: 
    Put all valid inputs : [as shown here](./images/correct_value.png). 
    Click `Submit` and the result will appear in a modal : [as shown here](./images/calculated_result_on_currect_value.png)

- Invalid submit : 
    On submitting empty form shows validation error : [as shown here](./images/validation_on_submit.png)

- Input field validation :
    On invalid input focusout shows validation error and tooltip
        [example1](./images/validation_on_invalid_value.png),
        [example2](./images/validation_on_negative_value.png)

- Tooltip on input label:
    What each input field mean shows on a tooltip, on hovering the `?` icon a tooltip will appear with the details. [as shown here](./images/tooltip_on_each_itme.png)
