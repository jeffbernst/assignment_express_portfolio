class Project {
  constructor(name, technology, codepen, image) {
    this.name = name
    this.domains = domains
  }
}

const projects = [
  new Project("Calculator", "HTML, CSS, JavaScript, jQuery", "https://codepen.io/jeffbernst/full/vZvXjy/", "calculator.png"),
  new Project("Simon", "HTML, CSS, JavaScript, jQuery", "https://codepen.io/jeffbernst/full/JJxeyO/", "simon.png"),
]

module.exports = {
  Project,
  projects
}