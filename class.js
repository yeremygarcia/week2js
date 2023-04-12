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
    return `${this.field} and ${this.industry}`;
  }
  getSalary() {
    return this.avgSalary;
  }
}

const job1 = new Job("Accountant", "Finance", true, "Accounting", "$99,999");

console.log(job1.getName());
console.log(job1.getFieldAndIndustry());

const job2 = new Job("Teacher", "Education", true, "CS", "$69,999");

console.log(job2.getName());
console.log(job2.getSalary());

const job3 = new Job("MD", "Healthcare", true, "HCP", "$199,999");

console.log(job3.getName());
console.log(job3.getInformation());

class Career extends Job {
  constructor(
    name,
    industry,
    requiresDegree,
    field,
    avgSalary,
    yearsOfExperience,
    jobDescription
  ) {
    super(name, industry, requiresDegree, field, avgSalary);
    this.yearsOfExperience = yearsOfExperience;
    this.jobDescription = jobDescription;
  }

  getYearsOfExperience() {
    return this.yearsOfExperience;
  }

  getJobDescription() {
    return this.jobDescription;
  }
}
let career1 = new Career(
  "Software Engineer",
  "Computer Science",
  true,
  "Technology",
  "$299,999",
  ".5",
  "coder"
);
console.log(career1.getYearsOfExperience());
console.log(career1.getJobDescription());
