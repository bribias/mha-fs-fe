import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import listData from '../../fixtures/listData.json';
import detailData from '../../fixtures/detailData.json';
import HeroDetail from '../heroes/HeroDetail';

const server = setupServer(
    rest.get('http://localhost:7890/api/v1/heroes', (req, res, ctx) => {
        return res(ctx.json(listData));
    })
);

describe('MHA App', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it.skip('displays a list of hey arnold characters', async () => {
        const { container } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        screen.getAllByAltText('loading spinner');

        const ul = await screen.findByRole('list', { name: 'hero-list' });
        expect(ul).not.toBeEmptyDOMElement();
        expect(container).toMatchSnapshot();
    });
});

const serverDetail = setupServer(
    rest.get('http://localhost:7890/api/v1/heroes/:id', (req, res, ctx) => {
        return res(ctx.json(detailData));
    })
);

describe('MHA Detail', () => {
    beforeAll(() => serverDetail.listen());
    afterAll(() => serverDetail.close());

    it.skip('displays a single character', async () => {
        const { container } = render(
            <MemoryRouter initialentries={['/Camie_Utsushimi']}>
                <HeroDetail />
            </MemoryRouter>
        );

        screen.getByAltText('loading spinner');

        const ul = await screen.findByRole('list', { name: 'single-character' });
        expect(ul).not.toBeEmptyDOMElement();
        expect(container).toMatchSnapshot();
    });
});