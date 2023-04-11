// Create a class of `Job` with the following properties
// name
// industry
// requiresDegree
// field
// avgSalary

class job {
  constructor(name, industry, requiresDegree, field, avgSalary) {
    this.name = name;
    this.industry = industry;
    this.requiresDegree = requiresDegree;
    this.field = field;
    this.avgSalary = avgSalary;
  }
  getName() {
    return this.name;
  }
  getFieldAndIndustry() {
    return this.field;
  }
  getSalary() {
    return this.avgSalary;
  }
}
