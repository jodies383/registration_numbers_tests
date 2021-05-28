describe('The Registration Numbers Function', function () {
    describe('Add registration numbers', function () {
        it('should return CA 123-456, CJ 123-456, CY 123-456,', function () {
            let reg = registration();
            reg.addRegNum('CA 123-456')
            reg.addRegNum('CJ 123-456')
            reg.addRegNum('CY 123-456')
            assert.deepEqual(reg.returnReg(['CA 123-456', 'CJ 123-456', 'CY 123-456']), ['CA 123-456', 'CJ 123-456', 'CY 123-456']);
        });
        it('should return CA 123-456, CJ 123-456, CY 123-456,', function () {
            let reg = registration();
            reg.addRegNum('CJ 196-916')
            reg.addRegNum('CJ 321-321')
            reg.addRegNum('CY 124-746')
            assert.deepEqual(reg.returnReg(['CJ 196-916', 'CJ 321-321', 'CY 124-746']), ['CJ 196-916', 'CJ 321-321', 'CY 124-746']);
        });
        it('should return CJ 286-016, CJ 639-341, CY 687-213, CA 000-000', function () {
            let reg = registration();
            reg.addRegNum('CJ 286-016')
            reg.addRegNum('CJ 639-341')
            reg.addRegNum('CY 687-213')
            reg.addRegNum('CA 000-000')
            assert.deepEqual(reg.returnReg(['CJ 286-016', 'CJ 639-341', 'CY 687-213, CA 000-000']), ['CJ 286-016', 'CJ 639-341', 'CY 687-213', 'CA 000-000']);
        });
        describe('Show registration number from a town', function () {
            it('should return CA 123-456 and CA 456-456 since Cape Town has been entered', function () {
                let reg = registration();
                reg.addRegNum('CA 123-456')
                reg.addRegNum('CA 456-456')
                reg.addRegNum('CJ 123-456')
                reg.addRegNum('CY 123-456')
                reg.towns('cpt')
                assert.deepEqual(reg.towns('cpt'), ['CA 123-456', 'CA 456-456']);
            });
            it('should return CY 123-456 and CY 456-456 since Bellville has been entered', function () {
                let reg = registration();
                reg.addRegNum('CA 123-456')
                reg.addRegNum('CY 456-456')
                reg.addRegNum('CJ 123-456')
                reg.addRegNum('CY 123-456')
                reg.towns('bellville')
                assert.deepEqual(reg.towns('bellville'), ['CY 456-456', 'CY 123-456']);
            });
            it('should return CJ 123-456 since Paarl has been entered', function () {
                let reg = registration();
                reg.addRegNum('CA 123-456')
                reg.addRegNum('CY 456-456')
                reg.addRegNum('CJ 123-456')
                reg.addRegNum('CY 123-456')
                reg.towns('bellville')
                assert.deepEqual(reg.towns('paarl'), ['CJ 123-456']);
            });
        });
    });
    describe('Display Errors', function () {
        it('should return "Please enter a valid registration number"', function () {
            let reg = registration();
            reg.addRegNum('Jodie')
            assert.equal(reg.validReg(["Please enter a valid registration number"]), ["Please enter a valid registration number"]);
        });
        it('should return "Registration number already exists"', function () {
            let reg = registration();
            reg.addRegNum('CA 123-456')
            assert.equal(reg.sameReg('CA 123-456'), ["Registration number already exists"]);
        });
        it('should return "No registration numbers found"', function () {
            let reg = registration();
            reg.addRegNum('CA 123-456')
            assert.equal(reg.towns('Paarl'), ["No registration numbers found"]);
        });
        it('should return "Please select a town"', function () {
            let reg = registration();
            reg.addRegNum('CA 123-456')
            assert.equal(reg.noTowns(), ["Please select a town"]);
        });
    });
});