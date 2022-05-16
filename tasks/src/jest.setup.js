global.System = {
  import: jest.fn(mockImport),
};

function mockImport(importName) {
  if (importName === "@react-mf/people") {
    return Promise.resolve(peopleApplication);
  } else {
    console.warn("No mock module found");
    return Promise.resolve({});
  }
}
