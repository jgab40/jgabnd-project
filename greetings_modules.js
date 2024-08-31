const greetings = () => {
  let text = "";
  const d = new Date();
  const time = d.getHours();
  if (time < 10) {
    text = `Good Morning!`;
  } else if (time < 18) {
    text = `Good Day!`;
  } else {
    text = `Good Evening!`;
  }
  return text;
};

export { greetings };
