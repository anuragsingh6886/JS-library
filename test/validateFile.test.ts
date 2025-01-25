import { validateFile, FileValidationOptions } from '../src/validators/validateFile';

describe('File Validator', () => {
    // Mock File implementation
    const createMockFile = (name: string, size: number, type: string): File => {
        const buffer = new ArrayBuffer(size);
        const blob = new Blob([buffer], { type });
        return new File([blob], name, { type });
    };

    test('validates basic file', () => {
        const file = createMockFile('test.txt', 1000, 'text/plain');
        expect(validateFile(file)).toBe(true);
    });

    test('validates file size', () => {
        const smallFile = createMockFile('small.txt', 500, 'text/plain');
        const largeFile = createMockFile('large.txt', 2000, 'text/plain');
        const options: FileValidationOptions = { maxSize: 1000 };

        expect(validateFile(smallFile, options)).toBe(true);
        expect(validateFile(largeFile, options)).toBe(false);
    });

    test('validates file type', () => {
        const pdfFile = createMockFile('doc.pdf', 1000, 'application/pdf');
        const txtFile = createMockFile('doc.txt', 1000, 'text/plain');
        const options: FileValidationOptions = {
            allowedTypes: ['application/pdf']
        };

        expect(validateFile(pdfFile, options)).toBe(true);
        expect(validateFile(txtFile, options)).toBe(false);
    });

    test('validates both size and type', () => {
        const file = createMockFile('doc.pdf', 500, 'application/pdf');
        const options: FileValidationOptions = {
            maxSize: 1000,
            allowedTypes: ['application/pdf']
        };

        expect(validateFile(file, options)).toBe(true);
    });

    test('rejects invalid input', () => {
        // @ts-ignore - testing invalid input
        expect(validateFile(null)).toBe(false);
        // @ts-ignore - testing invalid input
        expect(validateFile(undefined)).toBe(false);
        // @ts-ignore - testing invalid input
        expect(validateFile('not a file')).toBe(false);
    });
});