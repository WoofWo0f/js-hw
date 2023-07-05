const getGrade = (experience, isDifficultProjects, isEnglish, isTeamManagement) => {
  let grade = null;
  switch (true) {
    case experience > 2 && experience <= 5 && isEnglish:
      grade = "middle";
      break;
    case experience > 5 && isEnglish && isDifficultProjects:
      grade = "senior";
      break;
    case experience >= 10 && isEnglish && isDifficultProjects && isTeamManagement:
      grade = "principal";
      break;
    default:
      grade = "junior";
  }
  return grade;
};

const getSalary = (grade) => {
  let salary = null;
  switch (grade) {
    case "middle":
      salary = "от 1500$ до 2700$";
      break;
    case "senior":
      salary = "от 3000$";
      break;
    case "principal":
      salary = "от 7000$";
      break;
    default:
      salary = "от 300$ до 1500$";
  }
  return salary;
};

const getChance = (isDifficultProjects, isEnglish, isAlgorithms) => {
  let chance = null;
  switch (true) {
    case !isEnglish || !isAlgorithms:
      chance = "Шансов нет";
      break;
    case !isDifficultProjects:
      chance = "Шансов мало";
      break;
    default:
      chance = "Шансы есть";
  }
  return chance;
};

const displayResult = (fullName, experience, grade, salary, chance) => {
  alert(`
  Ваше Имя: ${fullName}
  Ваш опыт в годах: ${experience}
  Градация: ${grade}
  Примерная зп: ${salary}
  Шансы попасть на работу в корпорацию: ${chance}
`);
};

const init = () => {
  const name = prompt("Введите имя");
  const surname = prompt("Введите фамилию");
  const experience = +prompt("Введите опыт работы в годах");
  const isDifficultProjects = confirm("Ваши проекты были сложные?");
  const isEnglish = confirm("Вы свободно говорите на английском?");
  const isAlgorithms = confirm("Ты знаешь Алгоритмы?");
  const isTeamManagement = confirm("Тебе нравится управлять командой?");
  const fullName = `${name} ${surname}`;

  const grade = getGrade(experience, isDifficultProjects, isEnglish, isTeamManagement);
  const salary = getSalary(grade);
  const chance = getChance(isDifficultProjects, isEnglish, isAlgorithms);

  displayResult(fullName, experience, grade, salary, chance);
};
init();
