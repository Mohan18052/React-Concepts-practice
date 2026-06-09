import photo1 from "../assests/photo1.png";
import photo2 from "../assests/photo2.png";
import photo3 from "../assests/photo3.png";
import photo4 from "../assests/photo4.png";

import EmployeeCard from "../components/EmployeeCard";

function PersonalInfo() {

  const people = [
    {
      image: photo1,
      name: "Mohan Prakash",
      age: 22,
      mobile: "9876543210",
      role: "Software Engineer Intern",
      company: "karomi Technologies",
      address: "Chennai, Tamil Nadu"
    },
    {
      image: photo2,
      name: "Arun Kumar",
      age: 24,
      mobile: "9876543211",
      role: "Frontend Developer",
      company: "XYZ Solutions",
      address: "Bangalore, Karnataka"
    },
    {
      image: photo3,
      name: "Rahul Sharma",
      age: 26,
      mobile: "9876543212",
      role: "Backend Developer",
      company: "Tech Corp",
      address: "Hyderabad, Telangana"
    },
    {
      image: photo4,
      name: "Vijay Kumar",
      age: 25,
      mobile: "9876543213",
      role: "Full Stack Developer",
      company: "Innovate Labs",
      address: "Pune, Maharashtra"
    }
  ];

  return (
    <div>
      {people.map((person, index) => (
        <EmployeeCard
          key={index}
          image={person.image}
          name={person.name}
          age={person.age}
          mobile={person.mobile}
          role={person.role}
          company={person.company}
          address={person.address}
        />
      ))}
    </div>
  );
}

export default PersonalInfo;