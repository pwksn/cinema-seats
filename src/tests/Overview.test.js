import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Overview from '../Views/Overview';

test("renders component", async () => {
    const { getByText } = render(<Overview />);
    expect(getByText('Twoja rezerwacja przebiegła pomyślnie!')).toBeInTheDocument();
})