function registration(existingReg) {

    var regNum = existingReg || []

    var regEx = /^[A-Z]{2} [0-9]{3}-[0-9]{3}$/i;

    function addRegNum(enterName) {

        if (!regNum.includes(enterName.toUpperCase()) && regEx.test(enterName.toUpperCase())) {
            regNum.push(enterName.toUpperCase())
        } else return sameReg()
    }
    function returnReg() {
        return regNum
    }
    function validReg(enterName) {
        if (!regEx.test(enterName)) {
            return "Please enter a valid registration number"
        }
    }
    function sameReg() {
        return "Registration number already exists"

    }

    function towns(checkedRadioBtn) {
        var cptArr = regNum.filter((reg) => reg.startsWith("CA"))
        var paarlArr = regNum.filter((reg) => reg.startsWith("CJ"))
        var belArr = regNum.filter((reg) => reg.startsWith("CY"))

        if (checkedRadioBtn === "cpt") {
            return cptArr
        } else if (checkedRadioBtn === "paarl") {
            return paarlArr
        } else if (checkedRadioBtn === "bellville") {
            return belArr
        } else if (checkedRadioBtn === "all") {
            return regNum
        } else if (cptArr.length === 0 || paarlArr.length === 0 || belArr.length === 0 || regNum.length === 0) {
            return noTownFound()
        }


    }

    function noTownFound() {
        return ("No registration numbers found")
    }



    function noTowns(RadioBtn) {

        if (!RadioBtn) {
            return "Please select a town"
        } else return ""

    }

    return {
        addRegNum,
        sameReg,
        validReg,
        towns,
        noTowns,
        returnReg,
        noTownFound
    }
}
