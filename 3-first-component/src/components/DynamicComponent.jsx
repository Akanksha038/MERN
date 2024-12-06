const DynamicComponent = () => {

  const marks = [23, 85, 96, 45, 89];

  const calPercentage = () => {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;

  }
  const studentName = 'Shyam';
  return <p> {studentName} scored {calPercentage()}% in this exam.</p>;

}

export default DynamicComponent;