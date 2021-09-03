import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const button = screen.getByRole('button');

    userEvent.type(firstName, 'Me');
    userEvent.type(lastName, 'McGee');
    userEvent.type(address, 'Wonka Factory');
    userEvent.type(city, 'SomePlace');
    userEvent.type(state, 'SomeWhere');
    userEvent.type(zip, '00001');
    userEvent.click(button);

    const Success = screen.getByTestId(/successMessage/i);
    expect(Success).toBeInTheDocument();
});
