export default function HandleDropDown(id, dropDown, setFunction) {
  document.addEventListener("click", (event) => {
    const menuButton = document.getElementById(id);
    const dropdown = document.getElementById(dropDown);
    if (
      !menuButton.contains(event.target) &&
      !dropdown.contains(event.target)
    ) {
      setFunction(true);
    }
  });
}
