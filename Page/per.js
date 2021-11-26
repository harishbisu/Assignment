function person(fname,lname,offadd ) {
	this.firstName=fname;
	this.lastName=lname;
	this.officeAddress=offadd;
}
var first=new person("Harish","Bisu","H-15 VaishaliNagar,Jaipur(Rajasthan)");
var second=new person("Hitesh","Bhasker","G-15 VaishaliNagar,Jaipur(Rajasthan)");
var third=new person("Hari","Ram","H-15 vashantvihar,Jaipur(Rajasthan)");
console.log(first);
console.log(second);
console.log(third);