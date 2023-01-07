/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Contact_Us_PO from "../page_objects/Contact_Us_PO";

const contactus_Page = new Contact_Us_PO();

When('I type a first name', () => {
    contactus_Page.type_FirstName('Joe');
});

When('I type a last name', () => {
    contactus_Page.type_LastName('Blogs');
});

When('I enter an email address', () => {
    contactus_Page.type_EmailAddress('joe_blogs123@mail.com');
});

When('I type a comment', () => {
    contactus_Page.type_Comment('Hello world!')
});

When('I click on the submit button', () => {
    contactus_Page.clickOn_Submit_Button();
});

Then('I should be presented with a succesful contact us submission message', () => {
    contactus_Page.validate_Submission_Header('Thank You for your Message!');
});

Then('I should be presented with a unsuccesful contact us submission message', () => {
    contactus_Page.validate_Submission_Header('Error: Invalid email address');
});

When('I type a specific first name {string}', firstName => {
    contactus_Page.type_FirstName(firstName);
});

When('I type a specific last name {string}', lastName => {
    contactus_Page.type_LastName(lastName);
});

When('I type a specific email address {string}', email => {
    contactus_Page.type_EmailAddress(email);
});

When('I type a specific word {string} and number {int} within the comment input field', (word, number) => {
    contactus_Page.type_Comment(word + number);
});

When('I type a first name {string} and a last name {string}', (firstName, lastName) => {
    contactus_Page.type_FirstName(firstName);
    contactus_Page.type_LastName(lastName);
});

When('I type a {string} and a comment {string}', (email, comment) => {
    contactus_Page.type_EmailAddress(email);
    contactus_Page.type_Comment(comment);
});

Then('I should be presented with header text {string}', message => {
    contactus_Page.validate_Submission_Header(message);
});