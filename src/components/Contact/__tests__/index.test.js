import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ContactForm from "..";

afterEach(cleanup);

describe('ContactForm components', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('matches Snapshot', () => {
        const { asFragment } = render(<ContactForm
        />);
        expect(asFragment()).toMatchSnapshot();
    })
})