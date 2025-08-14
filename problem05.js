function resultReport(marks) {
    if (Array.isArray(marks) === false) {
        return 'Invalid'
    }

    let totalMarks = 0;
    let pass = 0;
    let fail = 0;

    for (const mark of marks) {
        totalMarks += mark;
        if (mark >= 40) {
            pass++;
        } else {
            fail++;
        }
    }
    
    let finalScore = Math.round(totalMarks / marks.length);
    
    return {
        finalScore: finalScore,
        pass: pass,
        fail: fail,
    };
}

// const marks = 33;
const marks = [98, 87, 67, 91, 92, 33, 87];
console.log(resultReport(marks));