function changeColorMode() {
  const body = document.body;
  const bodyClasses = document.body.classList;
  if (bodyClasses.contains("dark")) {
    bodyClasses.remove("dark");
  } else {
    bodyClasses.add("dark");
  }

  console.log("Colour scheme changed!");
  return;
}