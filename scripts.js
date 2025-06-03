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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.setAttribute('tabindex', '0');
    else entry.target.setAttribute('tabindex', '-1');
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.link').forEach(link => {
  observer.observe(link);
});