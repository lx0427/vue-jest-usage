import { beforeEach } from '@/router';
import mockModule from '@/router/bust-cache.js';

jest.mock('@/router/bust-cache.js', () => ({ bustCache: jest.fn() }));

describe('beforeEach', () => {
    afterEach(() => {
        mockModule.bustCache.mockClear();
    });

    it('busts the cache when going to /user', () => {
        const to = {
            matched: [{ meta: { shouldBustCache: true } }],
        };
        const next = jest.fn();

        beforeEach(to, undefined, next);

        expect(mockModule.bustCache).toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
    });

    it('does not bust the cache when going to /user', () => {
        const to = {
            matched: [{ meta: { shouldBustCache: false } }],
        };
        const next = jest.fn();

        beforeEach(to, undefined, next);

        expect(mockModule.bustCache).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
    });
});
