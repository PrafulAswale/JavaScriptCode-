export function add(a, b) {
  return a + b;
}
function personInfo() {
  console.log(this.username, this.email);
}
export let person = {
  username: "praful",
  email: "prafulcode@gmail.com",
  personInfo: personInfo,
};
