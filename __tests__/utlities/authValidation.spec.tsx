import { validatePasswordLength, validatePasswordMatch } from '../../utilities/authValidation';

describe('authValidation methods', () => {
    it('validatePasswordLength returns true if password length is greater than 4', () => {
        expect(validatePasswordLength('password')).toBe(true);
    });
    it('validatePasswordLength returns false if password length is less than 4', () => {
        expect(validatePasswordLength('pass')).toBe(false);
    });
    it('validatePasswordMatch returns true if password match', () => {
        expect(validatePasswordMatch('password', 'password')).toBe(true);
    });
    it('validatePasswordMatch returns false if password do not match', () => {
        expect(validatePasswordMatch('password', 'pass')).toBe(false);
    });
})