const TestSuite = (assertionsList = []) => {
  console.log(assertionsList)
  let totalCount = 0
  let passedCount = 0;
  let errorCount = 0
  let errorTexts = [];
  for (let i = 0; i < assertionsList.length; i++) {
    const assertionItem = assertionsList[i] 
    for(let j = 0; j < assertionItem.length; j++){
      const ra = assertionItem[j]();
      if (ra.result === ra.expected) {
        passedCount++
      } else {
        errorCount++
        errorTexts.push(ra.describe + ' Returned: ' + ra.result);
      }
      totalCount++;
    }
  }
  console.clear();
  console.log('Test Suite')
  console.log('Total: ' + totalCount);
  console.log('Passed: ' + passedCount)
  console.log('Error: '+ errorCount)
  for(let i = 0; i < errorTexts.length; i++) {
    console.log(i+1 + ' - ' + errorTexts[i])
  }
  console.log(errorCount > 0 ? "Faild": "Passed")
}

/// Solution

const defaultSolution = (param) => {
  return param === 'param'
}

/// Test Suite

/// Mock
const mockedParam = 'param'
const mockedWrongParam = 'paran'

/// Tests
const test_defaultSolution = [
  () => ({
    describe: 'Should return true for "param" param',
    result: defaultSolution(mockedParam),
    expected: true,
  }),
  () => ({
    describe: 'Should return false for "paran" param',
    result: defaultSolution(mockedWrongParam),
    expected: true,
  }),
]

/// Run Test Suite
TestSuite([
  test_defaultSolution,
]);