import Button from './Button';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';

describe('Button', () => {
    test("should render", async () => {
        const { getByText } = render(<Button variant='primary'>Button</Button>);
        await getByText('Button');
    })
})